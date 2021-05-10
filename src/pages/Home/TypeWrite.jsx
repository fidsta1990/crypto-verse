import React from "react";
import Typewriter from "typewriter-effect";

const TypeWrite = () => {
  // const heroText = "<h3>The whole crypto market brought to you.</h3>";
  const heroText = "<strong>The crypto market brought to you.</strong>";

  // const heroSubText = "<h3>Explore your favourite coins right here</h3>";
  const heroSubText =
    "<strong>Explore your favourite coins right here</strong>";
  return (
    <Typewriter
      options={{
        strings: [heroText, heroSubText],
        autoStart: true,
        loop: true,
        delay: 30,
        deleteAll: 15,
      }}
    />
  );
};

export default TypeWrite;
