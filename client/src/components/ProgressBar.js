const ProgressBar = ({ progress }) => {
  const colors = [
    "rgb(199, 249, 204)",
    "rgb(128, 237, 153)",
    "rgb(87, 204, 153)",
    "rgb(67, 170, 139)",
  ];

  const getColor = (progress) => {
    if (progress <= 25) {
      return colors[0];
    } else if (progress <= 50) {
      return colors[1];
    } else if (progress <= 75) {
      return colors[2];
    } else {
      return colors[3];
    }
  };

  return (
    <div className="outer-bar">
      <div
        className="inner-bar"
        style={{ width: `${progress}%`, backgroundColor: getColor(progress) }}
      ></div>
    </div>
  );
};

export default ProgressBar;
