import React from "react";
// import image

class ImageAlbum extends React.Component {
  render() {
    const { imageSrc } = this.props;
    return (
      <div>
        <img src={imageSrc} alt="user" />
      </div>
    );
  }
}

export default ImageAlbum;
