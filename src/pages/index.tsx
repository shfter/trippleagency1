import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { Analytics } from '@vercel/analytics/next';

const FALLBACK = '40°43′N 74°01′W';

function toDMS(value: number, isLat: boolean) {
  const direction = isLat
    ? value >= 0 ? 'N' : 'S'
    : value >= 0 ? 'E' : 'W';

  const abs = Math.abs(value);
  const degrees = Math.floor(abs);
  const minutes = Math.floor((abs - degrees) * 60);

  return `${degrees}°${minutes}′${direction}`;
}

export function ViewportHeightFix() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  return null;
}

export default function Home() {
  const [coords, setCoords] = useState<string>(FALLBACK);
     useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        if (latitude == null || longitude == null) return;

        const lat = toDMS(latitude, true);
        const lon = toDMS(longitude, false);

        setCoords(`${lat} ${lon}`);
      },
      () => {
        // Permission denied or error → keep fallback
        setCoords(FALLBACK);
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
      }
    );
  }, []);


  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
     <div className="gray1 whitespace-pre-wrap absolute flex flex-col top-[19.5vh] left-[23vw] azeret-mono-l text-[0.9vw] opacity-[24%]">
  <ReactTyped
    strings={[
      `--- execution: founder_first\n--- non_delegated.thinking\n--- scalable.architecture\n--- outcomes: prioritized`,
    ]}
    typeSpeed={25}
    backSpeed={10}
    showCursor={true}
    loop={true}
  />
</div>
      <div className="mb_metaSticky">
  <span className="mb_meta1 absolute azeret-mono-l left-[2.5em] top-[2.5em] text-[1.15vw] z-[20]">
    TRIPLE AGENCY
  </span>

  <span className="mb_meta2 absolute azeret-mono-m right-[2.5em] top-[2.5em] text-[1.15vw] z-[20]">
    {coords}

  </span>
</div>
      <div className="mb_hg1 h-[30vh] w-[100%] flex flex-row justify-center items-center world reds text-[17.8vw] pt-[0.2em] z-[1]">
        WHEN YOU NEED
      </div>
      <div className="mb_row h-[23vh] w-[100%] flex flex-row border-t-[1.2] border-b-[1.2] border-white">
        <div className="mb_reverse_right mb_row_txt mb_bot_br text-[1.6vh] h-[100%] w-[25%] flex flex-col p-[2.3em] justify-between border-r-[1.2] border-white">
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
          <span className="mb_row_txt text-[1.42vw] pt-[1em] roslindale">BD & FUNDRAISE</span>
          </span>
        </div>
        <div className="mb_row_txt mb_bot_br mb_no_br text-[1.6vh] h-[100%] w-[25%] flex flex-col p-[2.3em] justify-between border-r-[1.2] border-white">
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
          <span className="mb_row_txt text-[1.42vw] pt-[1em] roslindale">GTM & ADVISORY</span>
          </span>
        </div>
        <div className="mb_reverse_right mb_row_txt text-[1.6vh] h-[100%] w-[25%] flex flex-col p-[2.3em] justify-between border-r-[1.2] border-white">
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
          <span className="mb_row_txt text-[1.42vw] pt-[1em] roslindale">COMMUNITY & MARKETING</span>
          </span>
        </div>
        <div className="mb_row_txt text-[1.6vh] h-[100%] w-[25%] flex flex-col p-[2.3em] justify-between">
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
          <span className="mb_row_txt text-[1.42vw] pt-[1em] roslindale">DEVELOPMENT</span>
          </span>
        </div>
      </div>
      <div className="row_main h-[44vh] w-[100%] flex flex-row">
      <div className=" mb_flex_start mb_full_w mb_h_auto h-[100%] w-[25%] border-r-[1.2] border-white p-[2em] flex items-end relative mb_hdn">
        <div className="gray1 absolute flex flex-col top-[2.5em] azeret-mono-l text-[1vw] opacity-[24%]">
  <ReactTyped
    strings={[
      `// FUN FACT: MOST WEB3 AGENCIES PERFORM THEIR MARKET RESEARCH BASED ON WEB2 MODELS. AND THEN CHARGE YOU LIKE NASA SCIENTISTS.`,
    ]}
    typeSpeed={40}
    backSpeed={0}
    showCursor={false}
    loop={true}
  />
</div>
        <span className="whitespace-pre-wrap mb_28 text-[1.7vw] pt-[1em] roslindale leading-[1.6] flex flex-col gap-[0.7em] ">
  <ReactTyped
  strings={[`WE BUILT.\nWE HIRED AGENCIES.`]}
  typeSpeed={67}
  startDelay={0}      // no delay
  backSpeed={0}
  showCursor={false}
/>
  <ReactTyped
  strings={[`WE WATCHED BUDGETS BURN.`]}
  typeSpeed={67}
  startDelay={2400}
  backSpeed={0}
  showCursor={false}
/>
</span>
      </div>
      <div className="mb_full_w h-[100%] w-[50%] flex flex-col border-r-[1.2] border-white justify-end">
        <div className="mb_main_h w-[100%] h-[76%] relative text-[2vh]">
          <span className="pointer-events-none mb_pad2 mb_main1 world reds text-[12.7vw] absolute left-1/2 -translate-x-1/2 top-[-0.13em] z-[1]">FOUNDERS</span>
          <span className="pointer-events-none mb_main2 gradient-text shadow-text classicaone text-[4.8em] absolute left-1/2 -translate-x-1/2 whitespace-nowrap bottom-[-0.8em] z-[2]">Not freelancers</span>
        </div>
        <div className="hoverable_contact_us pointer-events-auto mb_bot_br text-[2vh] w-[100%] h-[24%] border-t-[1.2] border-white flex flex-row justify-between items-center pl-[3em] pr-[3em]">
                  <img src="/arrowl.png" alt="arrow-l" className="mb_arrow"/>
                  <span className="mb_arrws_txt text-[1.9vw]  roslindale">CONTACT <span className="ml-[0.5vw]">US</span></span>
                  <img src="/arrowr.png" alt="arrow-r" className="mb_arrow"/>
        </div>
      </div>
       <div className=" mb_h_auto mb_bot_br mb_full_w h-[100%] w-[25%] border-white p-[2em] flex relative mb_hdn">
           <span className="mb_28 text-[1.7vw] roslindale">
  <ReactTyped
    strings={[`SO YOU WON'T HAVE TO...`]}
    typeSpeed={67}
    startDelay={5300}   // starts after previous two lines
    backSpeed={0}
    showCursor={false}
  />
</span>
            <div className="gray3 whitespace-pre-wrap absolute flex flex-row bottom-[2.5em] azeret-mono-l text-[1vw] opacity-[24%] left-[2em]">
              <ReactTyped
  strings={[
    `TRUSTED BY: \n  /// GGSOL >>> /// FRIENDO.CASH >>>\n    /// SAFEBLOCK >>> /// HACKEN >>>\n      /// SKALE >>> /// ~ { YOU? }`,
  ]}
  typeSpeed={40}
  startDelay={7500}
  showCursor={true}
/>
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
      <span>PRODUCT STRATEGY</span>
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
<ViewportHeightFix/>
    </main>
  );
}
