import React from "react";

const images = [
  `${process.env.PUBLIC_URL}/images/1.webp`,
  `${process.env.PUBLIC_URL}/images/2.webp`,
  `${process.env.PUBLIC_URL}/images/3.webp`,
  `${process.env.PUBLIC_URL}/images/4.webp`,
  `${process.env.PUBLIC_URL}/images/5.webp`,
  `${process.env.PUBLIC_URL}/images/6.webp`,
  `${process.env.PUBLIC_URL}/images/7.webp`,
  `${process.env.PUBLIC_URL}/images/8.webp`,
  `${process.env.PUBLIC_URL}/images/9.webp`,
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
