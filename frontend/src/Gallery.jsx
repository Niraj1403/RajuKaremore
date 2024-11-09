import React from "react";
import galleryImage from "./assets/image.png"; // Adjust the path as per your folder structure

const Gallery = () => {
  return (
    <div className="gallery-container text-center py-8" style={{ color: "#C6318B" }}>
      <h1 className="text-3xl font-bold mb-6">GALLERY</h1>
      <div className="gallery-image-wrapper mx-auto">
        <img
          src={galleryImage}
          alt="Gallery"
          className="gallery-image rounded-lg shadow-lg"
          style={{
            width: "90%",
            maxWidth: "800px",
            height: "auto",
            margin: "0 auto",
            display: "block",
          }}
        />
      </div>
    </div>
  );
};

export default Gallery;
