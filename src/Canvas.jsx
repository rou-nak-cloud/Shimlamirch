import React, { useEffect, useRef } from "react";
import CanvasImages from './CanvasImages'
import { useState } from "react";
import { useGSAP } from "@gsap/react"
import gsap from "gsap";

function  Canvas ({details}) {  // This canvas images show only for #1Canvas
  const { startIndex, numImages, duration, size, top, left, zIndex} = details; 

  const [index, setIndex] = useState( {value: startIndex} )
  const canvasRef = useRef(null)

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex( {value: Math.round(index.value)} );
      }
    })
    gsap.from(canvasRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
    });
  })

  useEffect(() => {
    const canvasElement = canvasRef.current;
    const context = canvasElement.getContext("2d");
    const image = new Image();
    image.src = CanvasImages[index.value]; // Assuming canvasImages is an array of image URLs
    image.onload = () => {
      canvasElement.width = image.width;
      canvasElement.height = image.height;
      context.drawImage(image, 0, 0);
      // context.drawImage(image, 0, 0, canvasElement.width, canvasElement.height); -> It will set only canvas width and height but we want only the image with and height..
    };
  }, [index]); // Empty dependency array to run only once on mount but not now it will change for every change in index.

  return (
     <canvas ref={canvasRef} id="canvas"
     data-scroll
     data-scroll-speed={Math.random().toFixed(1)}
     className="absolute" 
     style={{
    width: `${size}px`,
    height: `${size}px`,
    top: `${top}%`,
    left: `${left}%`,
    zIndex: `${zIndex}`,
    }}
  ></canvas>  // #1canvas
);
};

export default Canvas;
