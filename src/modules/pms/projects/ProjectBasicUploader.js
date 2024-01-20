import React, { Component } from 'react';
import CropEasy from './CropEasy';

export default class ProjectBasicUploader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.upload = this.upload.bind(this)
    }
    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }
    upload(e) {
        e.preventDefault()
        console.log(this.state.file , "000")
    }
    render() {
        let imgPreview;
        if (this.state.file) {
            imgPreview = <CropEasy photoURL={this.state.file} />;
        }
        return (
                <div className='project-upload-file'>
                                <input type="file" onChange={this.uploadSingleFile} />
                                <div className='upload-icon-container'>
                                <img src="/icons/backup.png" alt="upload" />
                                <div className='upload_discription'>Drop file or Choose a File</div>
                                </div>
                                <div className="form-group preview">{imgPreview}</div>                    
                </div>
        )
    }
}