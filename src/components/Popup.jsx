import "./Popup.css";
const Popup = ({
  isHidden,
  Text,
  top,
  left,
  isClicked,
  list,
  onMouseEnter,
  onMouseLeave,
  itemClick,
}) => {
  if (!isClicked) {
    return (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        hidden={isHidden}
        className="popup "
        style={{
          top: top,
          left: left,
          position: "absolute",
          filter: "drop-shadow(0px 0px 5px black)",
        }}
      >
        {Text}
      </div>
    );
  } else {
    return (
      <div
        hidden={isHidden}
        className="popup pixel-corners"
        style={{
          top: parseFloat(top.replace("px", "")) - 10,
          left: parseFloat(left.replace("px", "")) - 40,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "15px",
          position: "absolute",
        }}
      >
        {list.map((item, index) => {
          return (
            <img
              key={index}
              onClick={() => {
                itemClick(index);
              }}
              className="itemImage"
              src={item.imgUrl}
              style={{
                height: item.smaller ? "30px" : "30px",
                margin: "5px",
              }}
            />
          );
        })}
      </div>
    );
  }
};
export default Popup;
