'use client';


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image2 from './image/image1.svg';
import Image from 'next/image';
import image1 from './image/image1 (2).svg';


const HeroPage = () => {

  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Check if the screen width is greater than 768px (non-mobile)
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      // Animation for text elements
      gsap.from(textRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: 'power2.out',
      });

      // Animation for buttons
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Animation for image
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });
    }
  }, []);


  const itemRefs = useRef([]);

  // GSAP animation effect
  useEffect(() => {
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
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
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 100%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.1, // Delay between each item
          }
        );
      });
    }
  }, []);


    return (
        <div id="hero" ref={buttonRef} className='relative'>
          <div className='relative z-[2]'>
              <div className='pt-[80px] sm:pt-[81px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[200px]  px-[24px] sm:px-0 container mx-auto w-full flex justify-start relative pb-[50px] sm:pb-[70px] md:pb-[90px] lg:pb-[110px] xl:pb-[140px] 2xl:pb-[180px]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-[20px] sm:gap-[24px] md:gap-[32px] lg:gap-[36px] xl:gap-[40px] 2xl:gap-[43px]'>
                  <div>
                    <span className='flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 unslesvisaobn text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] sm:text-left text-center'>
                        <svg className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[20px]' viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="21" height="14.8235" transform="translate(0 0.588379)" fill="#A2A1A8"/>
                        <rect width="21" height="14.8235" transform="translate(0 0.588379)" fill="url(#paint0_linear_356_687)"/>
                        <defs>
                        <linearGradient id="paint0_linear_356_687" x1="-3.51562" y1="-1.82444" x2="23.2323" y2="2.17584" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#ED8B34"/>
                        <stop offset="1" stop-color="#D84124"/>
                        </linearGradient>
                        </defs>
                        </svg>Future Unleashed
                    </span>
                    <h2 className='decentrowea text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[80px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] sm:text-left text-center'>Decentralized <div className='expersowrks'> World Experience 
                      </div> Reimagined </h2>
                    <p className='disbytitsuser text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px] pb-[16px] sm:pb-[20px] md:pb-[24px] lg:pb-[32px] xl:pb-[36px] 2xl:pb-[40px] sm:text-left text-center'>Is distinguished by its user-friendly design requiring minimal learning curve, robust community features, advanced transaction.</p>
                    <button className='buttonauditelt mx-auto sm:mx-0 cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] flex items-center justify-center h-[35px] md:h-[40px] lg:h-[50px] xl:h-[60px] 2xl:h-[70px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px] group gap-[7.50px] '>
                    Explore Now <svg xmlns="http://www.w3.org/2000/svg" className='w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[24px] ' viewBox="0 0 24 24" fill="none">
                      <path d="M13.5 4.50012L21 12.0001M21 12.0001L13.5 19.5001M21 12.0001H3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                  </div>
                  <div className='relative flex items-center justify-center sm:block'>
                    <Image className='w-1/2 sm:w-9/10' src={image1} alt='loadn...'/>
                    {/* <Image className='absolute top-1/2 left-1/2 -translate-1/2 w-[183.453px]' src={image2} alt='loading...'/> */}
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default HeroPage;