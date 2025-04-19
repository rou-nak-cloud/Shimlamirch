import data from './data';
import Canvas from './Canvas';
import './index.css'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Footer from './Components/Footer';

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null)
  const growingSpan = useRef(null);

  const scrollRef = useRef(null);
  const scrollContainerRef = useRef(null);  //To explicitly point to scroll container div

  useEffect(() => {
    if (!scrollContainerRef.current) return;
  
    scrollRef.current = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
    });
  
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }
    };
  }, []);
  useEffect(() => {
    // Only run if scroll instance is ready
    if (scrollRef.current && typeof scrollRef.current.update === "function") {
      scrollRef.current.update();
    }
  }, [showCanvas]);


  
  useEffect(() => {
      const handleClick = (e) => {
        setShowCanvas((prevShowCanvas) => {
          if (!prevShowCanvas) {
            gsap.set(growingSpan.current, {
              top: e.clientY,
              left: e.clientX,
            });
  
            gsap.to("body", {
              color: "#000",
              backgroundColor: "#890301",
              duration: 1.2,
              ease: "power2.inOut",
            });
  
            gsap.to(growingSpan.current, {
              scale: 1000,
              duration: 1.7,
              ease: "power2.inOut",
              onComplete: () => {
                gsap.set(growingSpan.current, {
                  scale: 0,
                  clearProps: "all",
                });
              },
            });
          } else {
            gsap.to("body", {
              color: "#fff",
              backgroundColor: "#000",
              duration: 1.2,
              ease: "power2.inOut",
            });
          }
  
          return !prevShowCanvas;
        });
    }

     const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

       // Clean up event listener on unmount
       return () => headingElement.removeEventListener("click", handleClick); 
  }, [])

  
  return (
  <>
     <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>

       {/* Add data-scroll-container HERE */}
      <div ref={scrollContainerRef} data-scroll-container className="w-full min-h-screen relative">

      <div className='w-full min-h-screen relative  '>
        {showCanvas && 
        data[0].map((canvasDets, index) => (
        <Canvas key={index} details={canvasDets} />
        ))}
        <div className='w-full h-screen relative z-[1]'>
        <nav className="w-full p-8 flex justify-between z-50">
            <div className="brand text-2xl font-md">Shimlamirch <span className='font-extralight text-emerald-500'>Capsicum annuum</span></div>
            <div className="links flex gap-10 text-emerald-500">
              {[
                "Bell pepper",
                "Sweet pepper",
                "Capsicum",
                "Indian Cooking",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer mt-5 w-full px-[20%]">
            <div className="text w-[60%]">
              <h3 className="text-4xl font-semibold leading-[1.2]">
              <span className='text-emerald-600'>Green</span> shimlamirch is actually just the unripe version of <span className='text-red-500'>red</span> , <span className='text-yellow-400'>yellow</span> or <span className='text-orange-500'>orange</span>  ones. As it ripens, it becomes sweeter and changes color.
              </h3>
              <p className="text-sm w-[80%] mt-10 font-bold">
              Despite the name Shimla-mirch, it’s not originally from Shimla or anywhere in India.
              The plant is native to Central and South America. It was brought to the rest of the world after the Columbian Exchange (post-15th century) when explorers like Columbus introduced new crops to Europe and Asia.
              </p>
              <p className="text-md mt-10 uppercase">sabzi</p>
            </div>
            <div className="w-full absolute bottom-[-75px] left-0">
            <h1
              ref={headingref}
              className="text-[18rem] font-normal tracking-tight leading-none pl-5"
            >
              Shimla<span className='text-red-600'>mirch</span>
            </h1>
          </div>
          </div>
        </div>



        <div className="w-full relative h-screen  mt-62 px-10">
        {
        showCanvas  &&
        data[8].map((canvasDets, index) => (
          <Canvas key={index} details={canvasDets} />
          ))}
          <div className='flex justify-center items-center'>
        <div className='w-[60%] flex justify-around items-top'>
        <h1 className="text-4xl w-full tracking-tighter mt-9 pl-5"><span className='bg-white w-10 h-1'>.</span> <span className='text-orange-400'>A colorful journey</span></h1>
        <p className="text-2xl leading-[1.1] w-[100%] mt-10 font-sans ">
        The green variety became the most common in India due to its affordability and ease of cultivation. But slowly, red, yellow, and orange bell peppers entered the markets—bringing not only color but sweetness. Now they’re loved in salads, stir-fries, pastas, and even sandwiches.
        </p>
        </div>
        </div>
        <div className='w-[50%] absolute right-0'>
        <p className="text-xxl leading-[1.19] w-[60%] mt-40 font-medium ">
        Initially considered exotic, shimlamirch was slowly adopted into Indian cooking. It wasn’t spicy like traditional chilies, so it was treated more like a vegetable than a spice. Indian cooks began experimenting: <br /> <br />
        In Punjab, it became popular in dishes like bharwan shimlamirch (stuffed peppers) with spiced potatoes or paneer. <br /> <br />
        In Indo-Chinese cuisine, it shines in chilli paneer, capsicum fried rice, and manchurian gravies.
          </p>
          </div>
      </div>



      <div className='w-full min-h-screen relative '>
        {showCanvas &&
        data[1].map((canvasDets, index) => (
        <Canvas key={index} details={canvasDets} />
        ))}
        <h1 className="text-4xl w-[50%] absolute left-[20%] tracking-tighter mt-9 pl-5"><span className='bg-white w-10 h-1'>.</span> <span className='text-yellow-600'>Cultural quirk</span></h1>
        <p className="text-2xl leading-[1.1] w-[62%] mt-20 font-normal absolute top-[13%] left-[20%] ">
        Unlike traditional “mirch” (chili), shimlamirch is not hot—but the name “mirch” still stuck. It's a bit of an irony, like calling a sweet dish "chilli"—but language has its quirks!
        </p>
        </div>

        <div className='w-full min-h-screen relative mt-[-220px] '>
        {showCanvas &&
        data[6].map((canvasDets, index) => (
        <Canvas key={index} details={canvasDets} />
        ))}
        <h1 className="text-4xl w-[50%] absolute left-[40%] tracking-tighter mt-9 pl-5 font-mono"><span className='bg-white w-10 h-1'>.</span> The Tale of <span className='text-emerald-500'>Shimli</span> – The Gentle <span className='text-red-500'>Mirch</span></h1>
        <p className="text-2xl leading-[1.1] w-[72%] mt-20 font-mono absolute top-[13%] left-[20%] ">
        Long ago, in a vibrant vegetable kingdom called SabziLok, every veggie had its own strength. <br /><br />

            There was Baingan the Bold, Lal Mirch the Fiery, and Aloo the Friendly—but among them lived a quiet, shy green bell pepper named Shimli. <br /><br />

            Shimli wasn’t spicy like the chilies, nor starchy like potatoes. She had a smooth skin, a mild taste, and no one could quite figure out where she fit in. <br /><br />

            “You’re not even spicy! What kind of mirch are you?” mocked Lal Mirch, flicking her fiery red tail. <br /><br />

            Shimli would smile softly, "Not all mirchs need to burn to be useful." <br /><br />

            Days passed, and SabziLok was invited to the Great Kitchen Festival, where the Royal Chef would choose the next Sabzi Star—a vegetable so delightful, it would earn a place in the King's platter. <br /><br />

            Everyone brought their boldest flavors. <br /><br /> <br /><br />

            Lal Mirch burned too hot. <br /><br />

            Baingan was dramatic and demanded too much oil. <br /><br />

            Aloo was nice but too plain on his own. <br /><br />

            When it was Shimli’s turn, she quietly paired up with paneer, onions, and a little masala. The dish—Shimlamirch Paneer—was a burst of color, texture, and balance. <br /><br />

            The Royal Chef took one bite and exclaimed, “This… this is perfect! A mirch that doesn’t shout, but sings softly!” <br /><br />

            From that day on, Shimli was crowned the "Queen of Balance", loved in kitchens far and wide. Even Lal Mirch had to admit, "You’re not fiery, Shimli, but you’re full of flavor." <br /><br />

            And Shimli? She just smiled. Because sometimes, quiet strength is the most delicious kind. <br /><br />
        </p>
        </div>

        <div className='border border-gray-800 mt-[670px]'></div>

        <div className='w-full min-h-screen relative '>
        {showCanvas &&
        data[7].map((canvasDets, index) => (
        <Canvas key={index} details={canvasDets} />
        ))}
         <h1 className="text-4xl w-[25%] absolute top-[34%] left-[15%] tracking-tighter pl-5"><span className='bg-white w-10 h-1'>.</span> <span className='text-red-400'>Pssst. Looking for something spicy?</span></h1>
        <p className="text-2xl leading-[1.1] w-[32%] mt-20 font-normal absolute top-[52%] left-[16%] ">
        Find the floating adjuma pepper or click the big red button below to unlock our fiery alter ego. Technically a fruit, not a vegetable (because it contains seeds).The seeds are edible but often removed for texture.Red bell peppers have 11 times more beta-carotene than green ones. <br /> <br />In some parts of India, it’s also called “Capsicum” or just “Simla” in casual speech.Be warned, it’s hot in there! Don’t forget to drink water.
        </p>
        <button className='absolute top-[116%] left-[22%] tracking-tight text-2xl underline rounded-3xl bg-red-600 text-black px-10 py-2 uppercase cursor-pointer'>Bring the Water!</button>
        </div>

          <div className='w-full min-h-screen relative '>
        {showCanvas &&
        data[4].map((canvasDets, index) => (
        <Canvas key={index} details={canvasDets} />
        ))}
         <Footer />
        </div>

       
      </div>

      </div>  {/* End of scroll-container */}
  </>
  )

}

export default App;