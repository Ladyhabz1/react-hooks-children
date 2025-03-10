import React from "react";

function ChildComponent() {
  return (
    <>
      <p>Hey, I am a child</p>
      <p>My name is ChildComponent</p>
    </>
  );
}

function Container({
  header,
  children,
  textPosition = "", // possible values: left, right, center
  direction = "horizontal", // possible values: vertical, horizontal
  contentPosition = "center", // possible values: left, right, center
}) {
  return (
    <div className={`container ${textPosition}`}>
      {header ? <h2>{header}</h2> : null}

      <div className={`container-children ${direction} ${contentPosition}`}>
        {children}
      </div>
    </div>
  );
}

export { ChildComponent };
export default Container;
