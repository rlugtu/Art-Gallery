import { useState, useEffect } from "react";

const Grid = ({ current, setCurrent }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const images = [
    "Abstraction.jpg",
    // "AmericanEagleCrucifixion",
    "ATimeToDance.jpg",
    "Carousel.jpg",
    "GossipOnTheSubway.jpg",
    // "LeapingLenaRight",
    "Lighthouse.jpg",
    "VerticalAndHorizontal2.jpg",
    // "ThreeWomaninOldCity",
    // "TravelingToRockyPoint",
    // "VerticalAndHorizontal2",
    // "WashDayKibbutz"
    // "artwork",
    // "artwork",
    // "artwork",
    // "artwork",
    // "artwork",
    // "artwork",
    // "artwork",
    // "artwork",
    // "artwork",
    // "artwork",
  ];

  const changeState = (item) => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrent(item);
    }, 1000);
  };

  return (
    <>
      <h1 className="header">TEMIMA GEZARI</h1>
      {current ? (
        <div className="activeContainer">
          <div className="activePiece">
            <img
              id="active"
              className="active"
              src={require(`../artwork/${current}`).default}
              alt="test"
              onClick={() => {
                setCurrent(false);
                setFadeOut(false);
              }}
            />
          </div>
          <div className="activeButtons">
            <a>
              <button>Go to this piece</button>
            </a>
            <a>
              <button>Go To Sculptures</button>
            </a>
            <button
              onClick={() => {
                setCurrent(false);
                setFadeOut(false);
              }}
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        <div className="artContainer">
          {/* {images.map((item, i) => (
              <div className="artWork">
                <img
                  id={i}
                  className="artPiece"
                  src={require(`../artwork/${item}.jpg`).default}
                  alt="test"
                  onClick={() => setCurrent(i)}
                />
              </div>
            ))} */}
          <div className="artWork">
            <img
              id="Abstraction"
              className={fadeOut ? "inactive" : "artPiece"}
              src={require(`../artwork/Abstraction.jpg`).default}
              alt="test"
              onClick={() => changeState("Abstraction.jpg")}
            />
          </div>

          <div className="artWork">
            <img
              id="Carousel"
              className={fadeOut ? "inactive" : "artPiece"}
              src={require(`../artwork/Carousel.jpg`).default}
              alt="test"
              onClick={() => changeState("Carousel.jpg")}
            />
          </div>
          <div className="artWork">
            <img
              id="ATimeToDance"
              className={fadeOut ? "inactive" : "artPiece"}
              src={require(`../artwork/ATimeToDance.jpg`).default}
              alt="test"
              onClick={() => changeState("ATimeToDance.jpg")}
            />
          </div>
          <div className="artWork">
            <img
              id="GossipOnTheSubway"
              className={fadeOut ? "inactive" : "artPiece"}
              src={require(`../artwork/GossipOnTheSubway.jpg`).default}
              alt="test"
              onClick={() => changeState("GossipOnTheSubway.jpg")}
            />
          </div>

          <div className="artWork">
            <img
              id="Lighthouse"
              className={fadeOut ? "inactive" : "artPiece"}
              src={require(`../artwork/Lighthouse.jpg`).default}
              alt="test"
              onClick={() => changeState("Lighthouse.jpg")}
            />
          </div>
          <div className="artWork">
            <img
              id="LeapingLena"
              className={fadeOut ? "inactive" : "artPiece"}
              src={require(`../artwork/LeapingLena.png`).default}
              alt="test"
              onClick={() => changeState("LeapingLena.png")}
            />
          </div>
          <div className="artWork">
            <img
              id="VerticalAndHorizontal2"
              className={fadeOut ? "inactive" : "artPiece"}
              src={require(`../artwork/VerticalAndHorizontal2.jpg`).default}
              alt="test"
              onClick={() => changeState("VerticalAndHorizontal2.jpg")}
            />
          </div>
          <div className="artWork">
            <img
              id="Conversation"
              className={fadeOut ? "inactive" : "artPiece"}
              src={require(`../artwork/Conversation.png`).default}
              alt="test"
              onClick={() => changeState("Conversation.png")}
            />
          </div>
        </div>
      )}
      )
    </>
  );
};
export default Grid;
