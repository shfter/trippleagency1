import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <div className="absolute flex flex-col top-[17.5vh] left-[27vw] azeret-mono-l text-[0.8vw] opacity-[24%]">
        <span className="">--- YOU SHOULD PUT LONG ASS TEXT HERE</span>
        <span className="">--- BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BAL</span>
        <span className="">--- YOU CAN PUT ANYTHING HERE</span>
      </div>
      <span className="absolute azeret-mono-l left-[2.5em] top-[2.5em] text-[1.15vw]">TRIPPLE AGENCY</span>
      <span className="absolute azeret-mono-m right-[2.5em] top-[2.5em] text-[1.15vw]">{'40°43′N 74°01′W'}</span>
      <div className="h-[30vh] w-[100%] flex flex-row justify-center items-center world reds text-[17.8vw] pt-[0.2em]">
        WHEN YOU NEED
      </div>
      <div className="h-[23vh] w-[100%] flex flex-row border-t-[1.2] border-b-[1.2] border-white">
        <div className="text-[1.6vh] h-[100%] w-[25%] flex flex-col p-[2.3em] justify-between border-r-[1.2] border-white">
           <motion.img
      src="/item1.png"
      alt="icon 1"
      className="w-[6em] h-[7em]"
      animate={{ rotate: [-90, 90] }}        // left to right
      transition={{
        duration: 2,          // total time for left → right (in seconds)
        repeat: Infinity,     // infinite loop
        repeatType: "reverse" // go right → left, left → right smoothly
      }}
    />
          <span className="flex justify-between items-center world">
          <span className=" text-[1.42em] pt-[1em] roslindale">BD & FUNDRAISE</span>
          </span>
        </div>
        <div className="text-[1.6vh] h-[100%] w-[25%] flex flex-col p-[2.3em] justify-between border-r-[1.2] border-white">
               <motion.img
      src="/item2.png"
      alt="icon 1"
      className="w-[6em] h-[7em]"
      animate={{
        rotate: [0, 60, 120, 180, 0],
      }}
      transition={{
        duration: 1.8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1.2, // pause between wiggles
      }}
    />
          <span className="flex justify-between items-center world">
          <span className=" text-[1.42em] pt-[1em] roslindale">GTM & ADVISORY</span>
          </span>
        </div>
        <div className="text-[1.6vh] h-[100%] w-[25%] flex flex-col p-[2.3em] justify-between border-r-[1.2] border-white">
          <motion.img
  src="/item3.png"
  alt="icon 3"
  className="w-[6em] h-[7em]"
  animate={{
    y: [0, -10, 0],
    rotate: [0, 360],
  }}
  transition={{
    y: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
    rotate: {
      duration: 20,
      repeat: Infinity,
      ease: "linear", // constant speed
    },
  }}
/>
          <span className="flex justify-between items-center world">
          <span className=" text-[1.42em] pt-[1em] roslindale">COMMUNITY & MARKETING</span>
          </span>
        </div>
        <div className="text-[1.6vh] h-[100%] w-[25%] flex flex-col p-[2.3em] justify-between">
<motion.img
  src="/item4.png"
  alt="icon 1"
  className="w-[6em] h-[7em]"
  animate={{
    rotate: [0, 180, 180, 360], // Rotate to 180, pause, then continue to 360
  }}
  transition={{
    duration: 3,       // time for each full 180° cycle
    repeat: Infinity,  // loop infinitely
    repeatDelay: 1,  // shorter pause after each 180° cycle (0.2s)
    ease: "easeInOut", // smooth transition
  }}
/>
          <span className="flex justify-between items-center world">
          <span className=" text-[1.42em] pt-[1em] roslindale">DEVELOPMENT</span>
          </span>
        </div>
      </div>
      <div className="h-[44vh] w-[100%] flex flex-row">
      <div className="h-[100%] w-[25%] border-r-[1.2] border-white p-[2em] flex items-end relative">
        <div className="absolute flex flex-col top-[2.5em] azeret-mono-l text-[0.8vw] opacity-[24%]">
              <span>{'THIS IS CUSTOM TEXT --->'}</span>
              <span className="ml-[2em]">/// YOU CAN PUT ANYTHING HERE</span>
              <span className="ml-[4em]">/// CLIENT WON'T NOTICE ANYWAYS</span>
        </div>
        <span className="text-[3.1vh] pt-[1em] roslindale">WE BUILT AND WORKED WITH MANY AGENCIES</span>
      </div>
      <div className="h-[100%] w-[50%] flex flex-col border-r-[1.2] border-white justify-end">
        <div className="w-[100%] h-[76%] relative text-[2vh]">
          <span className="world reds text-[10.7em] absolute left-1/2 -translate-x-1/2 top-[-0.13em] z-[1]">FOUNDERS</span>
          <span className="gradient-text shadow-text classicaone text-[4.7em] absolute left-1/2 -translate-x-1/2 whitespace-nowrap bottom-[-0.8em] z-[2]">Not freelancers</span>
        </div>
        <div className="text-[2vh] w-[100%] h-[24%] border-t-[1.2] border-white flex flex-row justify-between items-center pl-[3em] pr-[3em]">
                  <img src="/arrowl.png" alt="arrow-l" className=""/>
                  <span className="text-[3.1vh]  roslindale">CONTACT US</span>
                  <img src="/arrowr.png" alt="arrow-r" className=""/>
        </div>
      </div>
       <div className="h-[100%] w-[25%] border-white p-[2em] flex relative">
           <span className="text-[3.1vh] roslindale">PAID 5 FIGURES TO PROGREV GOEV</span>
            <div className="absolute flex flex-row bottom-[2.5em] azeret-mono-l text-[0.8vw] opacity-[24%] left-[0]">
              <span className="ml-[2em]">{">BUY $ORNG - EMBRACE THE CHANGE"}</span>
          </div>
       </div>
      </div>
      
     <div className="ticker-wrapper">
  <div className="ticker-track">
    {/* 1st copy */}
    <div className="ticker-item">
      <span>WEB 3 CONSULTANCY</span>
      <span className="dot"></span>
      <span>PRODUCT STRATEGY</span>
      <span className="dot"></span>
      <span>AI - POWERED OUTREACH</span>
      <span className="dot"></span>
      <span>TOKENOMICS</span>
      <span className="dot"></span>
      <span>GTM FOR FOUNDERS</span>
      <span>{">>>"}</span>
      <span>WEB 3 CONSULTANCY</span>
      <span className="dot"></span>
      <span>PRODUCT STRATEGY</span>
      <span className="dot"></span>
      <span>AI - POWERED OUTREACH</span>
      <span className="dot"></span>
      <span>TOKENOMICS</span>
      <span className="dot"></span>
      <span>GTM FOR FOUNDERS</span>
      <span className="dot"></span>
    </div>

    {/* 2nd copy */}
    <div className="ticker-item">
      <span>WEB 3 CONSULTANCY</span>
      <span className="dot"></span>
      <span>PRODUCT STRATEGY</span>
      <span className="dot"></span>
      <span>AI - POWERED OUTREACH</span>
      <span className="dot"></span>
      <span>TOKENOMICS</span>
      <span className="dot"></span>
      <span>GTM FOR FOUNDERS</span>
      <span>{">>>"}</span>
      <span>WEB 3 CONSULTANCY</span>
      <span className="dot"></span>
      <span>PRODUCT STRATEGY</span>
      <span className="dot"></span>
      <span>AI - POWERED OUTREACH</span>
      <span className="dot"></span>
      <span>TOKENOMICS</span>
      <span className="dot"></span>
      <span>GTM FOR FOUNDERS</span>
            <span className="dot"></span>
    </div>

    {/* 3rd copy */}
    <div className="ticker-item">
      <span>WEB 3 CONSULTANCY</span>
      <span className="dot"></span>
      <span>PRODUCT STRATEGY</span>
      <span className="dot"></span>
      <span>AI - POWERED OUTREACH</span>
      <span className="dot"></span>
      <span>TOKENOMICS</span>
      <span className="dot"></span>
      <span>GTM FOR FOUNDERS</span>
      <span>{">>>"}</span>
      <span>WEB 3 CONSULTANCY</span>
      <span className="dot"></span>
      <span>PRODUCT STRATEGY</span>
      <span className="dot"></span>
      <span>AI - POWERED OUTREACH</span>
      <span className="dot"></span>
      <span>TOKENOMICS</span>
      <span className="dot"></span>
      <span>GTM FOR FOUNDERS</span>
            <span className="dot"></span>
    </div>

    {/* 4th copy */}
    <div className="ticker-item">
      <span>WEB 3 CONSULTANCY</span>
      <span className="dot"></span>
      <span>PRODUCT STRATEGY</span>
      <span className="dot"></span>
      <span>AI - POWERED OUTREACH</span>
      <span className="dot"></span>
      <span>TOKENOMICS</span>
      <span className="dot"></span>
      <span>GTM FOR FOUNDERS</span>
      <span>{">>>"}</span>
      <span>WEB 3 CONSULTANCY</span>
      <span className="dot"></span>
      <span>PRODUCT STRATEGY</span>
      <span className="dot"></span>
      <span>AI - POWERED OUTREACH</span>
      <span className="dot"></span>
      <span>TOKENOMICS</span>
      <span className="dot"></span>
      <span>GTM FOR FOUNDERS</span>
            <span className="dot"></span>
    </div>
  </div>
</div>
    </main>
  );
}
