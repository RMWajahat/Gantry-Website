import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

export const Type = (props) => {
  // const lines =
  //   " Andrew: 11 am - 3 pm <br /> Joanne: 12 pm - 2 pm, 3:30 pm - 5 pm <br /> Hannah: 12 pm - 12:30 pm, 4 pm - 6 pm <br /> <br />Common availability for a 30-minute meeting: 12 pm - 12:30 pm";
  const { lines } = props;
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typingBackgroundColor, setTypingBackgroundColor] = useState("#CCCCCC");

  const onCompleteHandler = () => {
    if (currentLineIndex < lines.length - 1) {
      setCurrentLineIndex((prevIndex) => prevIndex + 1);
    }
  };

  const getDelay = (index) => {
    // You can adjust the initial delay and speed increase factor based on your preference
    const speedIncreaseFactor = 0.015;

    return 30 * Math.pow(speedIncreaseFactor, index);
  };

  useEffect(() => {
    // Set the background color while typing
    document.querySelector(".Typewriter__wrapper").style.backgroundColor =
      typingBackgroundColor;
  }, [typingBackgroundColor]);

  return (
    <>
      <Typewriter
        options={{
          strings: lines,
          autoStart: true,
          loop: false,
          delay: getDelay(currentLineIndex),
          onComplete: onCompleteHandler,
          html: true,
        }}
        onInit={(typewriter) => {
          typewriter.start();
        }}
      />
    </>
  );
};
