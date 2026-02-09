const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.image} alt={image.title} />
      <div className="overlay">
        <h3>{image.title}</h3>
        <p>{image.description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
