import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
export const WhisperTypography = (props) => {
  const { lines } = props;
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typingBackgroundColor, setTypingBackgroundColor] = useState("#41AE3D");

  const onCompleteHandler = () => {
    if (currentLineIndex < lines.length - 1) {
      setCurrentLineIndex((prevIndex) => prevIndex + 1);
    }
  };

  const getDelay = (index) => {
    const speedIncreaseFactor = 0.015;
    return 30 * Math.pow(speedIncreaseFactor, index);
  };

  useEffect(() => {
    // Set the initial background color
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
          typewriter
            .callFunction(() => {
              // Add your styling logic here
              document.querySelector(".Typewriter__cursor").style.width =
                "15px"; // Set cursor width
            })
            .start();
        }}
      />
    </>
  );
};
