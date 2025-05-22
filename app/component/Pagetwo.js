'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import smslide1 from './image/mobiledap.png';
import backgrundtexxt from './image/backgrundtexxt.png';


gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "Earn",
    spantitle: '59%',
    description: "of the token supply is allocated towards long-term staking and liquidity provisioning, as per Semler's distribution strategy.",
    svgPath: <svg  className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[80px]' viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="40" cy="40.365" r="40" fill="url(#paint0_linear_356_848)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.6458 35.378C31.9387 34.8585 32.4888 34.537 33.0853 34.537H46.8615C47.4579 34.537 48.0081 34.8585 48.301 35.378L53.554 44.6975C57.1961 51.1589 52.2972 58.994 44.6151 58.994H35.3316C27.6495 58.994 22.7506 51.1589 26.3927 44.6975L31.6458 35.378Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M43.3823 23.527C45.4213 22.5075 47.7408 24.2791 47.2938 26.5145L46.4923 30.5217C46.2197 31.885 45.0226 32.8663 43.6323 32.8663H36.2999C34.9616 32.8663 33.7949 31.9555 33.4703 30.6571L33.0021 28.7843C32.3734 26.2692 34.6515 23.9911 37.1666 24.6199C38.9002 25.0533 40.7318 24.8522 42.3302 24.053L43.3823 23.527Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_356_848" x1="11" y1="15.365" x2="77.0018" y2="21.9003" gradientUnits="userSpaceOnUse">
<stop stop-color="#ED8B34"/>
<stop offset="1" stop-color="#D84124"/>
</linearGradient>
</defs>
</svg>

,
  },
  {
    title: "Play",
    spantitle: 'COREx',
    description: "provides a range of features enhancing trading outcomes for investors, accessible to $COREX token holders.",
    svgPath: <svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[80px]' viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="40" cy="40.365" r="40" fill="url(#paint0_linear_356_869)"/>
<path d="M48.333 28.282C48.7851 28.282 49.2797 28.2993 49.7803 28.3855C54.828 29.0309 57.917 33.0714 57.917 38.3982V38.4705C57.6346 38.3498 57.3294 38.282 57.0098 38.282H51.1279C48.8944 38.282 47.083 40.3337 47.083 42.865C47.083 45.3963 48.8944 47.448 51.1279 47.448H57.0098C57.3295 47.448 57.6345 47.3793 57.917 47.2585V47.3318C57.917 50.2396 57.011 52.7707 55.3125 54.5916C53.6016 56.4258 51.1678 57.448 48.333 57.448H31.667C28.8322 57.448 26.3984 56.4258 24.6875 54.5916C23.5451 53.3668 22.7638 51.8202 22.373 50.0544L24.1709 51.9431C26.0288 53.8939 29.1031 53.8939 30.9609 51.9431L37.2461 45.3445C38.357 44.178 38.312 42.3314 37.1455 41.2205C35.979 40.1095 34.1324 40.1546 33.0215 41.321L27.5664 47.0496L25.4453 44.823C24.554 43.8871 23.1901 43.6743 22.083 44.2V38.3982C22.083 33.1081 25.12 29.0853 30.1211 28.4031C30.6234 28.3214 31.1395 28.282 31.667 28.282H48.333ZM57.0098 40.782C57.2127 40.782 57.3778 40.968 57.3779 41.198V44.532C57.3778 44.762 57.2127 44.948 57.0098 44.948H51.1279C50.1127 44.948 49.2891 44.0156 49.2891 42.865C49.2891 41.7144 50.1127 40.782 51.1279 40.782H57.0098Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.9956 42.4274C36.4955 42.9035 36.5148 43.6948 36.0387 44.1947L29.7537 50.7939C28.5527 52.055 26.579 52.055 25.3779 50.7939L22.4278 47.6964C21.9517 47.1965 21.971 46.4052 22.4709 45.9291C22.9709 45.453 23.7621 45.4723 24.2382 45.9722L27.1883 49.0698C27.4041 49.2964 27.7276 49.2964 27.9434 49.0698L34.2284 42.4705C34.7045 41.9706 35.4957 41.9513 35.9956 42.4274Z" fill="white"/>
<path d="M24.3124 29.8996C25.6935 28.2062 27.6719 27.0706 30.1216 26.7365C30.6239 26.6548 31.1394 26.6149 31.6669 26.6149H48.3335C48.7856 26.6149 49.2796 26.6324 49.7802 26.7186C51.1427 26.8928 52.3624 27.3143 53.4172 27.9417L53.3414 27.2579C52.9452 23.6813 49.8628 20.9558 46.3186 21.3485L29.9111 23.1663C26.556 23.538 24.2164 26.5456 24.3124 29.8996Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_356_869" x1="11" y1="15.365" x2="77.0018" y2="21.9003" gradientUnits="userSpaceOnUse">
<stop stop-color="#ED8B34"/>
<stop offset="1" stop-color="#D84124"/>
</linearGradient>
</defs>
</svg>


,
  },
  {
    title: "Deep Book",
    spantitle: "Deepbook's",
    description: "concentrated liquidity lets providers set fund price ranges, akin to an order book, for targeted buying and selling.",
    svgPath: <svg  className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[80px]' viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="40" cy="40.365" r="40" fill="url(#paint0_linear_356_872)"/>
<path d="M22.25 49.0532C22.5598 49.2373 22.8833 49.4079 23.2148 49.5639C25.4518 50.6166 28.4379 51.227 31.6533 51.227C33.577 51.227 35.4182 51.0069 37.0664 50.6059V52.7397C37.0665 54.1144 37.562 55.267 38.2871 56.2046C36.5953 56.9198 34.2724 57.3881 31.6533 57.3882C28.8388 57.3882 26.3652 56.8485 24.6504 56.0415C22.8742 55.2055 22.25 54.2721 22.25 53.5737V49.0532ZM22.25 40.2436C22.5598 40.4277 22.8833 40.5983 23.2148 40.7544C25.4517 41.807 28.4379 42.4174 31.6533 42.4174C33.577 42.4174 35.4182 42.1973 37.0664 41.7964V47.8325C35.5457 48.2942 33.6891 48.5786 31.6533 48.5786C28.8388 48.5786 26.3652 48.0389 24.6504 47.2319C22.8747 46.3962 22.2504 45.4625 22.25 44.7641V40.2436ZM41.0566 31.7788C41.0433 31.7859 41.0299 31.7931 41.0166 31.8003C39.14 32.8108 37.0666 34.6957 37.0664 37.5092V39.0229C35.5457 39.4846 33.6891 39.769 31.6533 39.769C28.8388 39.769 26.3652 39.2294 24.6504 38.4223C22.8749 37.5867 22.2506 36.6529 22.25 35.9546V31.435C22.5598 31.6191 22.8833 31.7898 23.2148 31.9458C25.4517 32.9984 28.4379 33.6089 31.6533 33.6089C34.8688 33.6088 37.8549 32.9984 40.0918 31.9458C40.4233 31.7897 40.7468 31.6191 41.0566 31.435V31.7788ZM31.6533 23.3315C34.4676 23.3315 36.9405 23.8713 38.6553 24.6782C40.4316 25.5142 41.0565 26.4475 41.0566 27.146C41.0566 27.8444 40.4318 28.7777 38.6553 29.6137C36.9405 30.4207 34.4677 30.9604 31.6533 30.9604C28.8388 30.9604 26.3652 30.4208 24.6504 29.6137C22.8742 28.7777 22.25 27.8434 22.25 27.145C22.2507 26.4467 22.8751 25.5138 24.6504 24.6782C26.3652 23.8711 28.8388 23.3315 31.6533 23.3315Z" fill="white"/>
<path d="M57.7399 45.8042V41.2851C57.4301 41.4692 57.1067 41.6395 56.7751 41.7956C54.5382 42.8484 51.5519 43.4589 48.3363 43.4589C45.1207 43.4589 42.1344 42.8484 39.8974 41.7956C39.5658 41.6395 39.2425 41.4692 38.9326 41.2851V45.8042C38.933 46.5026 39.5579 47.4361 41.3339 48.272C43.0487 49.079 45.5217 49.6188 48.3363 49.6188C51.1508 49.6188 53.6239 49.079 55.3387 48.272C57.1146 47.4361 57.7396 46.5026 57.7399 45.8042Z" fill="white"/>
<path d="M57.7399 54.6145V50.0938C57.4301 50.2779 57.1067 50.4482 56.7751 50.6043C54.5382 51.6571 51.5519 52.2676 48.3363 52.2676C45.1207 52.2676 42.1344 51.6571 39.8974 50.6043C39.5658 50.4482 39.2425 50.2779 38.9326 50.0938V54.614C38.933 55.3124 39.5579 56.2458 41.3339 57.0817C43.0487 57.8887 45.5217 58.4285 48.3363 58.4285C51.1508 58.4285 53.6239 57.8887 55.3387 57.0817C57.1147 56.2458 57.7396 55.313 57.7399 54.6145Z" fill="white"/>
<path d="M38.9326 36.9951C38.9332 36.2968 39.5583 35.3641 41.3339 34.5285C43.0487 33.7214 45.5217 33.1817 48.3363 33.1817C51.1508 33.1817 53.6239 33.7214 55.3387 34.5285C57.1152 35.3645 57.7399 36.2977 57.7399 36.9962C57.7399 37.6947 57.1152 38.6278 55.3387 39.4639C53.6239 40.2709 51.1508 40.8107 48.3363 40.8107C45.5217 40.8107 43.0487 40.2709 41.3339 39.4639C39.5574 38.6278 38.9326 37.6936 38.9326 36.9951Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_356_872" x1="11" y1="15.365" x2="77.0018" y2="21.9003" gradientUnits="userSpaceOnUse">
<stop stop-color="#ED8B34"/>
<stop offset="1" stop-color="#D84124"/>
</linearGradient>
</defs>
</svg>

,
  },
];

const Pagetwo = () => {
  const wrapperRef = useRef(null);
  const gridItem1Ref = useRef(null);
  const gridItem2Ref = useRef(null);
  const gridItem3Ref = useRef(null);
  const titleRef = useRef(null);
  const acquireRef = useRef(null);
  
  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;
  
        // Skip all animations on mobile
        if (isMobile) return;
  
        // Main wrapper animation (desktop only)
        gsap.fromTo(
          wrapperRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 0.8,
            },
          }
        );
  
        // Title animation (desktop only)
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );
  
        // Grid items animation (desktop only)
        [gridItem1Ref, gridItem2Ref, gridItem3Ref].forEach((ref, index) => {
          gsap.fromTo(
            ref.current,
            { y: 50, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: index * 0.25,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 0.8,
              },
            }
          );
        });
  
        // Acquire CRX section animation (desktop only)
        gsap.fromTo(
          acquireRef.current,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: acquireRef.current,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 0.8,
            },
          }
        );
      }
    );
  
    return () => mm.revert(); // Cleanup
  }, []);
  
  const itemRefs = useRef([]);
  
  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isMobile } = context.conditions;
  
        // Skip animations on mobile
        if (isMobile) return;
  
        // Item animations (desktop only)
        itemRefs.current.forEach((el, index) => {
          if (!el) return;
  
          gsap.fromTo(
            el,
            {
              autoAlpha: 0,
              y: 50,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 100%',
                toggleActions: 'play none none none',
              },
              delay: index * 0.1,
            }
          );
        });
      }
    );
  
    return () => mm.revert(); // Cleanup
  }, []);


    
    return (
        <div ref={wrapperRef} id='Devolopers'  className='pt-[60px] md:pt-[90px] lg:pt-[110px] xl:pt-[140px] 2xl:pt-[180px] px-6 sm:px-0 pb-[60px] sm:pb-[80px] md:pb-[100px] lg:pb-[130px] xl:pb-[160px] 2xl:pb-[180px] relative '>
          <Image  src={backgrundtexxt} alt='loading...' className=' mr-[24px] sm:mr-[32px] md:mr-[36px] lg:mr-[40px] xl:mr-[48px] 2xl:mr-[64px] w-[40px] sm:w-[60px] md:w-[90px] lg:w-[118px] xl:w-[164px] 2xl:w-[185px]  absolute right-0  -bottom-[32px] sm:-bottom-[36px] md:-bottom-[40px] lg:-bottom-[48px] xl:-bottom-[64px] 2xl:-bottom-[96px]' />
            <div className='container relative mx-auto px-[15px] sm:px-[16px] md:px-[20px] lg:px-[24px] xl:px-[32px] 2xl:px-[36px]'>
            <Image src={smslide1} alt='loading...' className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[96px] h-[32px] sm:h-[36px] md:h-[40px] lg:h-[48px] xl:h-[64px] 2xl:h-[96px] absolute left-0 top-0 animate-spin-slow' />
            
            
              <h2 className='piconsaisasz text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]'>Main Functions</h2>
              <div className="grid grid-cols-12 gap-y-[32px] sm:gap-y-[36px] md:gap-y-[40px] lg:gap-y-[48px] xl:gap-y-[64px] 2xl:gap-y-[96px] gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[96px] 2xl:pt-[115px]">
              {cardData.map((item, index) => (
                <div
                  key={index}
                  className="col-span-12 sm:col-span-6 lg:col-span-4 relative flex flex-col items-center justify-center sectionraping pb-[16px] sm:pb-[20px] md:pb-[24px] lg:pb-[32px] xl:pb-[36px] 2xl:pb-[40px] px-[20px] sm:px-[24px] md:px-[32px] lg:px-[36px] xl:px-[40px] 2xl:px-[46px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[50px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] 2xl:w-[144px] absolute -top-0 left-1/2 -translate-x-1/2" viewBox="0 0 300 164" fill="none">
                    <g filter="url(#filter0_f_356_859)">
                      <circle cx="150" cy="14.365" r="72" fill="#ED8B34" fill-opacity="0.4"/>
                    </g>
                    <defs>
                      <filter id="filter0_f_356_859" x="0.900002" y="-134.735" width="298.2" height="298.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="38.55" result="effect1_foregroundBlur_356_859"/>
                      </filter>
                    </defs>
                  </svg>
                  <svg
                    className="w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[80px] absolute -top-[16px] sm:-top-[18px] md:-top-[20px] lg:-top-[24px] xl:-top-[32px] 2xl:-top-[51.5px] left-1/2 -translate-x-1/2"
                    viewBox="0 0 103 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {item.svgPath}
                  </svg>
                  <h3 className="hightreac text-[18px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[35px] pb-[10px] sm:pb-[11px] md:pb-[12px]  pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[75px] text-center">
                    {item.title}
                  </h3>
                  <p className="outtrescosn text-[14px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-center pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]">
                    <span className='expersowrks'>{item.spantitle} </span>
                    {item.description}
                  </p>
                  <button className='buttonauditeltss cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center justify-center  py-[5px] sm:py-[7px] lg:py-[10px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px] group gap-[7.50px]'>
                    Read More
                </button>
                </div>
              ))}
            </div>
            <div className='flex itesm-center justify-center pt-[24px] sm:pt-[32px] md:pt-[36px] lg:pt-[40px] xl:pt-[48px] 2xl:pt-[56px]'>
              </div>
           </div>
        </div>
    );
};

export default Pagetwo;