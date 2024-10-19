import { useState } from "react";

function ImageUpload() {
  const [images, setImages] = useState([]);

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, imageUrl]);
    }
  }

  return (
    <div>
      <Header />
      <UploadingImage handleImageUpload={handleImageUpload} />
      <ImageGallery images={images} />
    </div>
  );
}

function Header() {
  return (
    <h1 style={{ display: "flex", justifyContent: "center" }}>Image Upload </h1>
  );
}

function UploadingImage({ handleImageUpload }) {
  return (
    <form>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </form>
  );
}

function ImageGallery({ images }) {
  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`uploaded-${index}`}
          style={{ width: "100px", margin: "10px" }}
        />
      ))}
    </div>
  );
}

export default ImageUpload;
