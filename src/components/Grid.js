import { useState, useEffect } from "react";

const Grid = ({ current, setCurrent }) => {
  const images = [
    "artwork",
    "artwork",
    "artwork",
    "artwork",
    "artwork",
    "artwork",
    "artwork",
    "artwork",
    "artwork",
    "artwork",
    "artwork",
    "artwork",
  ];
  return (
    <>
      {current ? (
        <div className="activeContainer">
          <div className="activeArtWork">
            <img
              className="active"
              src={require(`../assets/${images[current]}.jpg`).default}
              alt="test"
            />
          </div>
          <div className="activeDescription">
            <p>Art work Title</p>
            <p>Art work Description</p>
            <p>Art work Material</p>
            <p>Art work Year</p>
          </div>
          <div className="activeButtons">
            <button>Visit Art Section</button>
            <button>Visit Art Piece</button>
            <button onClick={() => setCurrent(null)}>back</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>TEMIMA GEZARI</h1>
          <div className="artContainer">
            {images.map((item, i) => (
              <div className="artWork">
                <img
                  id={i}
                  className="artPiece"
                  src={require(`../assets/${item}.jpg`).default}
                  alt="test"
                  onClick={() => setCurrent(i)}
                />
              </div>
            ))}
          </div>
          )
        </div>
      )}
    </>
  );
};
export default Grid;
