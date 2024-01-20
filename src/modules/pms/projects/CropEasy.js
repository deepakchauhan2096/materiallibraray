import styled from 'styled-components';
import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    Slider,
    Typography,
} from '@mui/material';
import React, { useState, Component } from 'react';
import Cropper from 'react-easy-crop';



export const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

export function getRadianAngle(degreeValue) {
  return (degreeValue * Math.PI) / 180
}

/**
 * Returns the new bounding area of a rotated rectangle.
 */
export function rotateSize(width, height, rotation) {
  const rotRad = getRadianAngle(rotation)

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  }
}

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */
export async function GetCroppedImg(
  imageSrc,
  pixelCrop,
  rotation = 0,
  flip = { horizontal: false, vertical: false }
) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    return null
  }

  const rotRad = getRadianAngle(rotation)

  // calculate bounding box of the rotated image
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation
  )

  // set canvas size to match the bounding box
  canvas.width = bBoxWidth
  canvas.height = bBoxHeight

  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2)
  ctx.rotate(rotRad)
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
  ctx.translate(-image.width / 2, -image.height / 2)

  // draw rotated image
  ctx.drawImage(image, 0, 0)

  // croppedAreaPixels values are bounding box relative
  // extract the cropped image using these values
  const data = ctx.getImageData(
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height
  )

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  // paste generated rotate image at the top left corner
  ctx.putImageData(data, 0, 0)

  // As Base64 string
  // return canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob((file) => {
      resolve(URL.createObjectURL(file))
    }, 'image/jpeg')
  })
}


const CropEasy = ({ photoURL, setOpenCrop, setPhotoURL, setFile }) => {
  const { setAlert, setLoading } = useState();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const cropComplete = (croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels);
  };

  const CancelButton = styled(Button)`{
  backgroundColor:'#f46430';
  color:'#ffffff';
  border:'none';
  } 
  `

  const CropButton = styled(Button)`{
      backgroundColor:'#f46430';
      color:'#ffffff';
      border:'none';
      } 
      `


  const cropImage = async () => {
      setLoading(true);
      try {
          const { file, url } = await GetCroppedImg(
              photoURL,
              croppedAreaPixels,
              rotation
          );
          setPhotoURL(url);
          setFile(file);
          setOpenCrop(false);
      } catch (error) {
          setAlert({
              isAlert: true,
              severity: 'error',
              message: error.message,
              timeout: 5000,
              location: 'modal',
          });
          console.log(error);
      }

      setLoading(false);
  };
  return (
      <>
          <DialogContent
              dividers
              sx={{
                  background: '#333',
                  borderRadius: '5px',
                  position: 'relative',
                  height: '326px',
                  width: 'auto',
                  minWidth: { sm: '330px' },
              }}
          >
              <Cropper
                  image={photoURL}
                  crop={crop}
                  zoom={zoom}
                  rotation={rotation}
                  aspect={1}
                  onZoomChange={setZoom}
                  onRotationChange={setRotation}
                  onCropChange={setCrop}
                  onCropComplete={cropComplete}
              />
          </DialogContent>
          <DialogActions sx={{ flexDirection: 'column', mx: 0, my: 4 }}>
              <Box sx={{ width: '100%', mb: 1, px: 0, }}>
                  <Box>
                      <Typography>Zoom: {zoomPercent(zoom)}</Typography>
                      <Slider 
                          valueLabelDisplay="auto"
                          valueLabelFormat={zoomPercent}
                          min={1}
                          max={3}
                          step={0.1}
                          value={zoom}
                          onChange={(e, zoom) => setZoom(zoom)}
                      />
                  </Box>
                  <Box>
                      <Typography>Rotation: {rotation + '°'}</Typography>
                      <Slider
                          valueLabelDisplay="auto"
                          min={0}
                          max={360}
                          value={rotation}
                          onChange={(e, rotation) => setRotation(rotation)}
                      />
                  </Box>
              </Box>
              <Box
                  sx={{
                      display: 'flex',
                      gap: 2,
                      flexWrap: 'wrap',
                  }}
              >
                  <CancelButton
                      sx={{
                          backgroundColor: '#f46430',
                          color: '#ffffff',
                          border: 'none'
                      }}

                      variant="outlined"
                      // startIcon={<Cancel />}
                      onClick={() => setOpenCrop(false)}
                  >
                      Cancel
                  </CancelButton>
                  <CropButton
                      sx={{
                          backgroundColor: '#f46430',
                          color: '#ffffff',
                          border: 'none'
                      }}

                      variant="contained"
                      // startIcon={<CropIcon />}
                      onClick={cropImage}
                  >
                      Crop
                  </CropButton>
              </Box>
          </DialogActions>
      </>
  );
};

export default CropEasy;

const zoomPercent = (value) => {
  return `${Math.round(value * 100)}%`;
};

