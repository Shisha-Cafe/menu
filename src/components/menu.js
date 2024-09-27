import React from "react";

const images = [
  `${process.env.PUBLIC_URL}/images/menu_page-0001.webp`,
  `${process.env.PUBLIC_URL}/images/menu_page-0002.webp`,
  `${process.env.PUBLIC_URL}/images/menu_page-0003.webp`,
  `${process.env.PUBLIC_URL}/images/menu_page-0004.webp`,
  `${process.env.PUBLIC_URL}/images/menu_page-0005.webp`,
  `${process.env.PUBLIC_URL}/images/menu_page-0006.webp`,
  `${process.env.PUBLIC_URL}/images/menu_page-0007.webp`,
  `${process.env.PUBLIC_URL}/images/menu_page-0008.webp`
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
