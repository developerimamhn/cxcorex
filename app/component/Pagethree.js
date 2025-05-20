'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import slide1 from './image/476.svg';
import slide2 from './image/474.svg';
import slide3 from './image/475.svg';
import slide4 from './image/473.svg';
import slide5 from './image/478.svg';
import slide6 from './image/472.svg';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation, Autoplay } from 'swiper/modules';;



gsap.registerPlugin(ScrollTrigger);





const Pagethree = () => {
  const wrapperRef = useRef(null); // Outer container
  const gridItem1Ref = useRef(null); // First grid item (text content)
  const acquireRef = useRef(null); // Second grid item (image)

  useEffect(() => {
    // Create GSAP context for proper scoping and cleanup
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;

          if (isDesktop) {
            // Create a timeline for better control and sequencing
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: 'top 100%',
                end: 'bottom 100%', // Adjusted for smoother completion
                scrub: 0.8,
              },
            });

            // Main wrapper animation (left to right)
            tl.fromTo(
              wrapperRef.current,
              { x: -100, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 2,
                ease: 'power3.out',
              },
              0 // Start at timeline's beginning
            );

            // First grid item (text content) animation (left to right)
            tl.fromTo(
              gridItem1Ref.current,
              { x: 150, opacity: 0, scale: 0.95 },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 2,
                ease: 'power3.out',
              },
              0.1 // Slight stagger
            );

            // Second grid item (image) animation (faster right to left)
            tl.fromTo(
              acquireRef.current,
              { x: 50, opacity: 0, scale: 0.95 },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 2, // Faster animation
                ease: 'power3.out',
              },
              0.25 // Stagger for visual hierarchy
            );
          }
        }
      );
    }, wrapperRef); // Scope animations to wrapperRef for React's strict mode

    // Cleanup GSAP context and animations
    return () => ctx.revert();
  }, []);

  
    return ( 
        <div id='Ecosystem' ref={wrapperRef} className='relative '>
          {/* <div className='w-1/3 absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 goadsgvedfevg h-1/3 -z-[1]'></div> */}
            <div  className='relative container mx-auto '>
                <div className="flex flex-col justify-between gap-[24px] sm:gap-[32px] md:gap-[36px] lg:gap-[40px] xl:gap-[48px] 2xl:gap-[64px] px-4 sm:px-6 lg:px-8">
                  <div  className="relative">
                    <div>
                      
                        <div className='flex justify-center items-center flex-col w-full sm:gap-0 gap-6'>
                          <h2 className='speciasda relative text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px] !text-center px-[20%]
                          '>
                            <svg className='absolute -z-[1] -left-3 sm:-left-0 top-0 sm:top-1/2 w-1/3 sm:w-1/3' viewBox="0 0 529 322" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M529 1.36499H306H201.706C197.124 1.36499 192.761 3.32993 189.724 6.76176L87.0179 122.825C84.4291 125.75 83 129.521 83 133.428V243.365" stroke="url(#paint0_linear_356_822)"/>
                            <g filter="url(#filter0_f_356_822)">
                            <circle cx="83" cy="238.365" r="17" fill="#D84124"/>
                            </g>
                            <circle cx="83" cy="238.365" r="18" fill="url(#paint1_linear_356_822)" stroke="#5E2116" stroke-width="10"/>
                            <defs>
                            <filter id="filter0_f_356_822" x="0.300003" y="155.665" width="165.4" height="165.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="32.85" result="effect1_foregroundBlur_356_822"/>
                            </filter>
                            <linearGradient id="paint0_linear_356_822" x1="82.9999" y1="352.365" x2="527.607" y2="-160.834" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#ED8B34"/>
                            <stop offset="1" stop-color="#D84124" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_356_822" x1="65.6473" y1="222.165" x2="99.1314" y2="225.7" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#ED8B34"/>
                            <stop offset="1" stop-color="#D84124"/>
                            </linearGradient>
                            </defs>
                            </svg>
                            Understanding the Differences</h2>
                      </div>
                      <div className='grid grid-cols-1 sm:grid-cols-12 relative items-center justify-between gap-[15px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px] xl:gap-[32px] 2xl:gap-[36px] pt-[36px] sm:pt-[40px]'>
                        <div className='col-span-7 pl-[36px] sm:pl-[40px] md:pl-[48px] lg:pl-[70px] xl:pl-[110px] 2xl:pl-[136px] flex items-start justify-start gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] flex-col'>
                          <h2 className='diasdtasclaroad text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]'>Difference</h2>
                          <div className='cosplaformions text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px]'>The COREx platform is crafted to facilitate ease of use for individuals unfamiliar with Web3 and DEXes, minimizing learning barriers. Our efforts are focused on the strategic incorporation and innovative advancements of Uni V3 within the CORE blockchain ecosystem, </div>
                        </div>
                        <div className='w-full col-span-4 '>
                          <div className='relative'>
                          <Image className='w-full' src={slide1} alt='loading.. '/>
                          <Image className='w-full absolute right-0 top-0 ' src={slide2} alt='loading.. '/>
                          </div>
                          <svg className='absolute -right-6  sm:right-0 top-2/3 sm:top-1/2 translate-y-1/6 w-1/2 sm:w-1/3 -z-[1]' viewBox="0 0 529 446" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 1.36499H223H327.686C332.04 1.36499 336.205 3.13877 339.222 6.27724L441.535 112.72C444.4 115.7 446 119.674 446 123.808V355.365" stroke="url(#paint0_linear_356_802)"/>
                          <g filter="url(#filter0_f_356_802)">
                          <circle cx="17" cy="17" r="17" transform="matrix(-1 0 0 1 463 345.365)" fill="#D84124"/>
                          </g>
                          <circle cx="13" cy="13" r="18" transform="matrix(-1 0 0 1 459 349.365)" fill="url(#paint1_linear_356_802)" stroke="#5E2116" stroke-width="10"/>
                          <defs>
                          <filter id="filter0_f_356_802" x="363.3" y="279.665" width="165.4" height="165.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="32.85" result="effect1_foregroundBlur_356_802"/>
                          </filter>
                          <linearGradient id="paint0_linear_356_802" x1="446" y1="342.365" x2="1.393" y2="-170.834" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#ED8B34"/>
                          <stop offset="1" stop-color="#D84124" stop-opacity="0"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_356_802" x1="-4.35268" y1="-3.2" x2="29.1314" y2="0.334834" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#ED8B34"/>
                          <stop offset="1" stop-color="#D84124"/>
                          </linearGradient>
                          </defs>
                          </svg>
                        </div>
                      </div>
                      {/* egfewses */}
                      <div className='grid grid-cols-1 sm:grid-cols-12 relative items-center justify-between gap-[15px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px] xl:gap-[32px] 2xl:gap-[36px] pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[80px] px-[36px] sm:px-[40px] md:px-[48px] lg:px-[70px] xl:px-[110px] 2xl:px-[136px]'>
                          <div className='w-full col-span-5 sm:block hidden'>
                          <div className='relative'>
                          <Image className='w-full' src={slide3} alt='loading.. '/>
                          <Image className='w-full absolute right-0 top-0 ' src={slide4} alt='loading.. '/>
                          </div>
                          <svg className='absolute left-0 top-1/2 translate-y-1/6 w-1/3 -z-[1]' viewBox="0 0 529 446" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M529 1.36499H306H201.314C196.96 1.36499 192.795 3.13877 189.778 6.27724L87.4648 112.72C84.6 115.7 83 119.674 83 123.808L83 357.865" stroke="url(#paint0_linear_356_807)"/>
                          <g filter="url(#filter0_f_356_807)">
                          <circle cx="83" cy="362.365" r="17" fill="#D84124"/>
                          </g>
                          <circle cx="83" cy="362.365" r="18" fill="url(#paint1_linear_356_807)" stroke="#5E2116" stroke-width="10"/>
                          <defs>
                          <filter id="filter0_f_356_807" x="0.300003" y="279.665" width="165.4" height="165.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="32.85" result="effect1_foregroundBlur_356_807"/>
                          </filter>
                          <linearGradient id="paint0_linear_356_807" x1="82.9997" y1="342.365" x2="527.607" y2="-170.834" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#ED8B34"/>
                          <stop offset="1" stop-color="#D84124" stop-opacity="0"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_356_807" x1="65.6473" y1="346.165" x2="99.1314" y2="349.7" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#ED8B34"/>
                          <stop offset="1" stop-color="#D84124"/>
                          </linearGradient>
                          </defs>
                          </svg>
                        </div>
                        <div className='col-span-7  flex items-end justify-end gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] flex-col'>
                          <h2 className='diasdtasclaroad text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]  !text-right'>Social</h2>
                          <div className='cosplaformions text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] text-right'>COREx believes in the power of community and is ready to be powered by you. To start, we are establishing a Social function, where peer-to-peer discussion can take place for to operational recommendations for COREx, we are all ears.</div>
                        </div>
                        <div className='w-full col-span-5 sm:hidden block'>
                          <div className='relative'>
                          <Image className='w-full' src={slide3} alt='loading.. '/>
                          <Image className='w-full absolute right-0 top-0 ' src={slide4} alt='loading.. '/>
                          </div>
                          <svg className='absolute left-0 top-1/2 translate-y-1/6 w-1/3 z-[1]' viewBox="0 0 529 446" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M529 1.36499H306H201.314C196.96 1.36499 192.795 3.13877 189.778 6.27724L87.4648 112.72C84.6 115.7 83 119.674 83 123.808L83 357.865" stroke="url(#paint0_linear_356_807)"/>
                          <g filter="url(#filter0_f_356_807)">
                          <circle cx="83" cy="362.365" r="17" fill="#D84124"/>
                          </g>
                          <circle cx="83" cy="362.365" r="18" fill="url(#paint1_linear_356_807)" stroke="#5E2116" stroke-width="10"/>
                          <defs>
                          <filter id="filter0_f_356_807" x="0.300003" y="279.665" width="165.4" height="165.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="32.85" result="effect1_foregroundBlur_356_807"/>
                          </filter>
                          <linearGradient id="paint0_linear_356_807" x1="82.9997" y1="342.365" x2="527.607" y2="-170.834" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#ED8B34"/>
                          <stop offset="1" stop-color="#D84124" stop-opacity="0"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_356_807" x1="65.6473" y1="346.165" x2="99.1314" y2="349.7" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#ED8B34"/>
                          <stop offset="1" stop-color="#D84124"/>
                          </linearGradient>
                          </defs>
                          </svg>
                        </div>
                      </div>
                      {/* ssvs */}
                      <div className='grid grid-cols-1 sm:grid-cols-12 relative items-center justify-between gap-[15px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px] xl:gap-[32px] 2xl:gap-[36px] pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[60px]'>
                        <div className='col-span-7 pl-[36px] sm:pl-[40px] md:pl-[48px] lg:pl-[70px] xl:pl-[110px] 2xl:pl-[136px] flex items-start justify-start gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] flex-col'>
                          <h2 className='diasdtasclaroad text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]'>AI</h2>
                          <div className='cosplaformions text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px]'>COREx is strategically positioning itself to pioneer the next wave of growth within the CoreDao ecosystem through the application of artificial intelligence. Access to our AI features will be an exclusive benefit for COREx token stakers.</div>
                        </div>
                        <div className='w-full col-span-4 '>
                          <div className='relative'>
                          <Image className='w-full' src={slide5} alt='loading.. '/>
                          <Image className='w-full absolute right-0 top-0 ' src={slide6} alt='loading.. '/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Pagethree;