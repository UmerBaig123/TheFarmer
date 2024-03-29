import { useState, useEffect } from "react";
import Popup from "./components/Popup";
import Field from "./components/Field";
import "./App.css";

function App() {
  const [isAudioOn, setIsAudioOn] = useState(false);
  //popup visibility states
  const [armyCamp, setArmyCamp] = useState(false);
  //Buildings status states
  const [armyCampReady, setArmyCampReady] = useState(false);
  const [currentlyClicked, setCurrentlyClicked] = useState("");
  const [gold, setGold] = useState(0);
  const startGame = () => {
    document.getElementsByClassName("container")[0].style.width = "0px";
    document.getElementsByClassName("container")[0].style.opacity = "-1";
    setTimeout(() => {
      document.getElementsByClassName("container")[0].style.display = "none";
    }, 1000);
  };
  const addGold = (amount) => {
    setGold((c) => c + amount);
  };
  const toggleAudio = () => {
    var myAudio = new Audio(
      "https://res.cloudinary.com/dqzxsvpub/video/upload/v1711228392/gameMusic_ujqakb.mp3"
    );
    myAudio.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );
    myAudio.play();
    if (isAudioOn) {
      myAudio.pause();
    } else {
      myAudio.play();
    }
    setIsAudioOn((c) => !c);
  };
  const thud = () => {
    var thudAudio = new Audio(
      "https://res.cloudinary.com/dqzxsvpub/video/upload/v1711228390/thud_cqnncv.mp3"
    );
    thudAudio.play();
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className="gameBack">
        <img
          src="https://res.cloudinary.com/dqzxsvpub/image/upload/v1710933131/DaySky_ofwwlv.png"
          className="sky"
          onClick={() => {
            setCurrentlyClicked("");
          }}
        />
        <img
          src="https://res.cloudinary.com/dqzxsvpub/image/upload/v1710933131/GROUND_euqrji.png"
          className="grnd"
          onClick={() => {
            setCurrentlyClicked("");
          }}
        />
        <Field
          top={"250px"}
          left={"92.75px"}
          popupLeft={"195.75px"}
          popupTop={"222px"}
          closeClick={currentlyClicked == "f1"}
          setClick={() => {
            setCurrentlyClicked("f1");
          }}
          addGold={addGold}
        ></Field>
        <Field
          top={"440px"}
          left={"92.75px"}
          popupLeft={"195.75px"}
          popupTop={"411px"}
          closeClick={currentlyClicked == "f2"}
          setClick={() => {
            setCurrentlyClicked("f2");
          }}
          addGold={addGold}
        ></Field>
        <Field
          top={"250px"}
          left={"900px"}
          popupLeft={"1005px"}
          popupTop={"222px"}
          closeClick={currentlyClicked == "f3"}
          setClick={() => {
            setCurrentlyClicked("f3");
          }}
          addGold={addGold}
        ></Field>
        <Field
          top={"440px"}
          left={"900px"}
          popupLeft={"1005.75px"}
          popupTop={"411px"}
          closeClick={currentlyClicked == "f4"}
          setClick={() => {
            setCurrentlyClicked("f4");
          }}
          addGold={addGold}
        ></Field>

        <img
          src="https://res.cloudinary.com/dqzxsvpub/image/upload/v1710933131/HOUSE_glzmu2.png"
          className="house buildings"
        />

        <Popup
          isHidden={!armyCamp}
          Text={armyCampReady ? "Hero Training" : "Train Hero"}
          top={"140.21px"}
          left={"500.25px"}
        ></Popup>
        <img
          onMouseEnter={() => {
            setArmyCamp(true);
          }}
          onMouseLeave={() => {
            setArmyCamp(false);
          }}
          src="https://res.cloudinary.com/dqzxsvpub/image/upload/v1710933130/ARMY_gjrxcv.png"
          className="army buildings"
        />
      </div>
      <div className="bg">
        <div className="container">
          <div className="title textSd">The Farmer</div>
          <div id="sub " className="sub textSd">
            agricultural revolution
          </div>
          <button
            onClick={(e) => {
              thud();
              setTimeout(() => {
                startGame();
                toggleAudio();
              }, 100);
            }}
            className="playButton"
          >
            play
          </button>
          <button
            onClick={() => {
              thud();
            }}
            className="tutorialButton"
          >
            tutorial
          </button>
          <button
            onClick={() => {
              thud();
            }}
            className="aboutmeButton"
          >
            leaderboard
          </button>
          {/* <div className="audioPlay">
            <img
              onClick={() => {
                toggleAudio();
                thud();
              }}
              src={isAudioOn ? "audioOn.png" : "audioOff.png"}
              width={30}
              height={30}
            />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
