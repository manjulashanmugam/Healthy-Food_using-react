import { useState } from "react";
import images from "../data/data";
import ImageCard from "./ImageCard";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter(img => img.category === activeCategory);

  return (
    <>
      {/* TABS */}
      <div className="tabs">
        <button
          className={activeCategory === "all" ? "active" : ""}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>

        <button
          className={activeCategory === "salad" ? "active" : ""}
          onClick={() => setActiveCategory("salad")}
        >
          🥗 Salad
        </button>

        <button
          className={activeCategory === "snack" ? "active" : ""}
          onClick={() => setActiveCategory("snack")}
        >
          🍪 Snacks
        </button>

        <button
          className={activeCategory === "rice" ? "active" : ""}
          onClick={() => setActiveCategory("rice")}
        >
          🍚 Rice Bowls
        </button>
      </div>

      {/* GALLERY */}
      <div className="gallery">
        {filteredImages.map(img => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </>
  );
};

export default Gallery;
