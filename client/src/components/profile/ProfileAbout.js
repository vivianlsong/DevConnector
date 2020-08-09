import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';
//import Cloudinary from '../cloudinary/Cloudinary';

class ProfileAbout extends Component {
  uploadWidget() {
    //   cloudinary.openUploadWidget(
    //     { cloud_name: "dgv7gw1b7", upload_preset: "kp7pr4xj", tags: ["xmas"] },
    //     function (error, result) {
     //      console.log(result);
      //   });
  }
  
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(' ')[0];
    
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">{firstName}'s Bio</h3>
            <p className="lead">
              {isEmpty(profile.bio) ? (
                <span>{firstName} does not have a bio</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
          </div>
          <hr />
          <div className="main">
            <h1>Image Gallery</h1>
            <div className="upload">
              <button
                onClick={this.uploadWidget.bind(this)}
                className="upload-button"
              >
                Add Image
              </button>
            </div>
            </div>
          </div>
        </div>
     
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;