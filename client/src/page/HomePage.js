import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// setTimeout()

const HomePage = () => {
  // const [tweenHandler, setTweenHandler] = useState(null);
  //   const [angel, setAngel] = useState(360);

  // const playWheel = async () => {
  //   const rotateWheel = gsap.to(".content", {
  //     rotateZ: 360 * 100,
  //     duration: 4 * 10,
  //   });
  //   await timeout(1000);
  //   rotateWheel.kill();
  //   gsap.set(".content", {
  //     rotateZ: 0,
  //   });
  //   gsap.to(".content", {
  //     rotateZ: 2500,
  //     duration: 4,
  //   });
  // };

  const listCount = 4;
  const calcAngel = (index) => {
    const aveAngel = 360 / listCount;
    const half = aveAngel / 2;
    const angel = index * aveAngel + half;

    return angel;
  };

  // console.log(calcAngel(2));

  const rotateHandler = () => {
    // playWheel();
    const angel = calcAngel(0);
    const offset = 90;
    gsap.to(".content", { rotateZ: 360 + offset - angel, duration: 1 });
  };

  return (
    <>
      <h1>This is Home Page!</h1>
      <Link to="/scratch">Got to Scratch</Link>
      <div className="container">
        <div className="arrow">x-</div>
        <div className="content" onClick={rotateHandler}>
          <div className="red">
            <div>red</div>
          </div>
          <div className="blue">
            <div>blue</div>
          </div>
          <div className="orange">
            <div>orange</div>
          </div>
          <div className="green">
            <div>green</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
