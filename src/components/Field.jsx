import Popup from "./Popup";
import "./Field.css";
import { useState } from "react";
const Field = ({
  top,
  left,
  popupTop,
  popupLeft,
  closeClick,
  setClick,
  addGold,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [fieldState, setFieldState] = useState(-1);
  const [fieldVisible, setFieldVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const itemArray = [
    {
      name: "Wheat",
      cost: 20,
      imgUrl:
        "https://res.cloudinary.com/dqzxsvpub/image/upload/v1711228843/wheat_vrg4r5.png",
      SP: 100,
      growthTime: 20,
      smaller: false,
      fieldStages: [
        "https://res.cloudinary.com/dqzxsvpub/image/upload/c_crop,w_500,h_250/v1711557543/wheat_grow1_yvhhlk.png",
        "https://res.cloudinary.com/dqzxsvpub/image/upload/c_crop,w_500,h_250/v1711557543/wheat_grow2_l5zjt2.png",
        "https://res.cloudinary.com/dqzxsvpub/image/upload/v1711557543/wheat_grow3_yo1lc9.png",
        "https://res.cloudinary.com/dqzxsvpub/image/upload/v1711559390/wheat_grow4_hmsgtm.png",
      ],
    },
    {
      name: "Potato",
      cost: 50,
      imgUrl:
        "https://res.cloudinary.com/dqzxsvpub/image/upload/v1711228843/potato_etrxyx.png",
      SP: 150,
      growthTime: 30,
      smaller: true,
      fieldStages: [],
    },
    {
      name: "Tomato",
      cost: 100,
      imgUrl:
        "https://res.cloudinary.com/dqzxsvpub/image/upload/v1711299625/tomato_bqnhvt.png",
      SP: 200,
      growthTime: 40,
      smaller: true,
      fieldStages: [],
    },
    {
      name: "Carrot",
      cost: 300,
      imgUrl:
        "https://res.cloudinary.com/dqzxsvpub/image/upload/v1711299163/carrot_s3zksn.png",
      SP: 1000,
      growthTime: 120,
      smaller: false,
      fieldStages: [],
    },
  ];
  const itemClicked = (index) => {
    setFieldState(index);
    setIsClicked(false);
    const interval = setInterval(() => {
      setProgress((e) => {
        if (e >= itemArray[index].growthTime) {
          clearInterval(interval);
          return e;
        }
        return e + 0.01;
      });
    }, 10);
  };

  return (
    <>
      <Popup
        isHidden={!fieldVisible}
        Text={
          fieldState != -1
            ? Math.round((progress / itemArray[fieldState].growthTime) * 100) +
              "%"
            : "Grow Crop"
        }
        top={popupTop}
        left={
          fieldState != -1
            ? parseFloat(popupLeft.replace("px", "")) + 30
            : popupLeft
        }
        isClicked={isClicked && closeClick && fieldState == -1}
        list={itemArray}
        onMouseEnter={() => {
          alert(calculateProgress());
          setFieldVisible(true);
        }}
        onMouseLeave={() => {
          setFieldVisible(false);
          setIsClicked(false);
        }}
        itemClick={itemClicked}
      ></Popup>
      <img
        style={{
          top: top,
          left: left,
        }}
        src={
          fieldState == -1
            ? "https://res.cloudinary.com/dqzxsvpub/image/upload/v1710932955/Field_ckum1m.png"
            : itemArray[fieldState].fieldStages[
                Math.floor((progress / itemArray[fieldState].growthTime) * 3)
              ]
        }
        onMouseEnter={() => {
          setFieldVisible(true);
        }}
        onMouseLeave={() => {
          setFieldVisible(false);
        }}
        onClick={() => {
          setClick();
          setIsClicked(true);
          if (fieldState != -1) {
            addGold(itemArray[fieldState].SP);
            setFieldState(-1);
            setProgress(0);
          }
        }}
        className="field"
      />
    </>
  );
};
export default Field;
