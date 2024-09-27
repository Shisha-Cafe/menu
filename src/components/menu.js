import React from "react";

const images = [
  "/images/menu_page-0001.webp",
  "/images/menu_page-0002.webp",
  "/images/menu_page-0003.webp",
  "/images/menu_page-0004.webp",
  "/images/menu_page-0005.webp",
  "/images/menu_page-0006.webp",
  "/images/menu_page-0007.webp",
  "/images/menu_page-0008.webp",
];

const Menu = () => {
  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Menu page ${index + 1}`}
          style={{ width: "100%", marginBottom: "20px" }}
        />
      ))}
    </div>
  );
};

export default Menu;
