import React from "react";
import StyledDropZone from "./StyledDropzone";

const BannerPhoto = props => (
  <div className="banner-photo-container">
    {props.bannerPhoto === null ? (
      <div>
        <StyledDropZone fileDrop={props.imageDrop} />
        <button onClick={props.submitBannerPhoto}>
          Upload your banner photo!!
        </button>
      </div>
    ) : (
      <img className="artist-show-banner-image" src={props.bannerPhoto} />
    )}
  </div>
);

export default BannerPhoto;
