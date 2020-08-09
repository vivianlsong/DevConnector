import React, { Component } from "react";
import { render } from "react-dom";

class Main extends Component {
  uploadWidget() {
    cloudinary.openUploadWidget(
      { cloud_name: "cloud_name", upload_preset: "preset", tags: ["xmas"] },
      function (error, result) {
        console.log(result);
      }
    );
  }
  render() {
    return (
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
    );
  }
}

render(<Main />, document.getElementById("container"));