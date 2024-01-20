import React, { useState } from "react";
import Dropzone from "./Dropzone";
import "./KycDetails.css";
import {
  useCSVReader,
  lightenDarkenColor,
  formatFileSize,
} from 'react-papaparse';

const BeforeCVSUpload = () => {
  // const { CSVReader } = useCSVReader();
  const [CSVIsupload, setCSVIsUpload] = useState(true);

  const UploadClick = () => {
    setCSVIsUpload(false);
  };

  const backButton = () => {
    setCSVIsUpload(true);
  };

  return (
    <div>
      <div className="kyc-buttonContainer">
        {CSVIsupload ? (
          <>
            <Dropzone />
            <button className="upload-file" onClick={UploadClick}>
              Upload File
            </button>
          </>
        ) : (
          <div className="upload-success">
            <p>FileName.cvs</p>

          </div>
          
        )}
      </div>
    </div>
  );
};

export default BeforeCVSUpload;
