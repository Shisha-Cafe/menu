import React, { useState } from "react";
import "./App.css";
import Menu from "./components/menu.js";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [hideWelcome, setHideWelcome] = useState(false);

  const handleClick = () => {
    setHideWelcome(true); // İlk ekranı gizle
    setTimeout(() => {
      setShowMenu(true); // Biraz gecikmeyle menüyü göster
    }, 300);
  };

  const disableContextMenu = (e) => {
    e.preventDefault(); // Sağ tıklamayı devre dışı bırak
  };

  return (
    <div className="App">
      {!showMenu ? (
        <div
          className={`welcome-screen ${hideWelcome ? "hide" : ""}`}
          onClick={handleClick}
        >
          <img
            src="/images/click.webp" // Simgeyi buraya ekleyebilirsin
            alt="Tap Icon"
            className="tap-icon"
            onContextMenu={disableContextMenu} // Sağ tıklamayı engelle
          />
          <p className="welcome-text">Menüyü görmek için tıklayınız</p>
        </div>
      ) : (
        <div className="menu-container show">
          <Menu />
        </div>
      )}
    </div>
  );
}

export default App;
