'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import bglastsec from './image/bglastsec.svg';

gsap.registerPlugin(ScrollTrigger);


const Pagesix = () => {
  // State to track if the circle is on the left side
  const [isCircleLeft, setIsCircleLeft] = useState(true);

  // Handle click on left SVG
  const handleLeftClick = () => {
    setIsCircleLeft(true); // Move circle to left-0
  };

  // Handle click on right SVG
  const handleRightClick = () => {
    setIsCircleLeft(false); // Move circle to right-0
  };

  const wrapperRef = useRef(null); // Outer container
  const titleRef = useRef(null); // "Core Products" title (if needed)
  const acquireRef = useRef(null); // "Acquire CRX" section (if needed)
  const cardRefs = useRef([]); // Refs for mapped cards

  // Helper to assign refs to card elements
  const setCardRef = (el, index) => {
    cardRefs.current[index] = el;
  };

  useEffect(() => {
    // GSAP context for proper scoping and cleanup
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
          isMobile: '(max-width: 767px)',
        },
        (context) => {
          const { isDesktop, isMobile } = context.conditions;

          // Main wrapper animation
          gsap.fromTo(
            wrapperRef.current,
            { y: isMobile ? 50 : 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: isMobile ? 1 : 1.5,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: isMobile ? 'top 90%' : 'top 80%',
                end: 'bottom 20%',
                scrub: 0.8,
              },
            }
          );

          // Title animation (if used, currently no title in JSX)
          if (titleRef.current) {
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
          }

          // Card animations with stagger
          cardRefs.current.forEach((card, index) => {
            if (!card) return;
            gsap.fromTo(
              card,
              { y: 50, opacity: 0, scale: 0.9 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                delay: index * 0.25, // Stagger effect
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 80%',
                  end: 'top 30%',
                  scrub: 0.8,
                },
              }
            );
          });

          // Acquire CRX section animation (if used, currently no section in JSX)
          if (acquireRef.current) {
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
        }
      );
    }, wrapperRef); // Scope to wrapperRef for React strict mode

    return () => ctx.revert(); // Cleanup
  }, []);

    return (
        <div className='relative' id='Roadmap'>
          

            <div className='container mx-auto'>
              <div className='relative'>
                <Image className='w-full h-auto ' src={bglastsec} alt="lloading..."/>
                <div className='absolute top-0 left-0 z-[1] w-full'>
                <div className='sm:px-[22%] px-10 pt-[28px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[80px] pb-[16px] sm:pb-[24px] md:pb-[32px] lg:pb-[36px] xl:pb-[40px] 2xl:pb-[50px]'>
                  <h2 className='diasdtasclaroad text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] text-center'>Join Corex Community</h2>
                  <div className='cosplaformions text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] text-center pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>Follow us on our socials and join the conversation on the future of Web3</div>
                </div>
                <div className='flex items-center justify-center gap-2 sm:gap-2 lg:gap-3'>
                  <svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[76px] cursor-pointer hover:scale-105 duration-200' viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_356_1062)">
                  <circle cx="37.5" cy="32.3652" r="32" fill="#262728"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4877 32.5948L21.5 17.6987H30.9951L38.3951 26.9055L46.3007 17.7402H51.5301L40.9235 30.0514L53.5 45.6987H44.0332L36.0206 35.7422L27.4663 45.6711H22.2086L33.4877 32.5948ZM45.4131 42.9387L27.3221 20.4587H29.6142L47.6824 42.9387H45.4131Z" fill="url(#paint0_linear_356_1062)"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_356_1062" x="0.0347223" y="0.365234" width="74.9306" height="74.9306" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="5.46528"/>
                  <feGaussianBlur stdDeviation="2.73264"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_356_1062"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_356_1062" result="shape"/>
                  </filter>
                  <linearGradient id="paint0_linear_356_1062" x1="16.1429" y1="14.2526" x2="57.2154" y2="19.2079" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#ED8B34"/>
                  <stop offset="1" stop-color="#D84124"/>
                  </linearGradient>
                  </defs>
                  </svg>
                  <svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[76px] cursor-pointer hover:scale-105 duration-200' viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_356_1065)">
                  <circle cx="37.5" cy="32.3652" r="32" fill="#262728"/>
                  <path d="M44.6842 34.5161L45.4629 29.632H40.6662V26.4573C40.6662 25.1218 41.3358 23.8169 43.4772 23.8169H45.6887V19.6577C44.4009 19.455 43.0995 19.3453 41.7953 19.3296C37.8473 19.3296 35.2698 21.6724 35.2698 25.9079V29.632H30.8936V34.5161H35.2698V46.3296H40.6662V34.5161H44.6842Z" fill="url(#paint0_linear_356_1065)"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_356_1065" x="0.0347223" y="0.365234" width="74.9306" height="74.9306" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="5.46528"/>
                  <feGaussianBlur stdDeviation="2.73264"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_356_1065"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_356_1065" result="shape"/>
                  </filter>
                  <linearGradient id="paint0_linear_356_1065" x1="28.4167" y1="16.0065" x2="47.6187" y2="17.1173" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#ED8B34"/>
                  <stop offset="1" stop-color="#D84124"/>
                  </linearGradient>
                  </defs>
                  </svg>
                  <svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[76px] cursor-pointer hover:scale-105 duration-200' viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_356_1068)">
<circle cx="37.5" cy="32.3652" r="32" fill="#262728"/>
<path d="M33.3154 32.8306C33.3154 30.1163 35.543 27.9155 38.2917 27.9155C41.0404 27.9155 43.2692 30.1163 43.2692 32.8306C43.2692 35.5448 41.0404 37.7457 38.2917 37.7457C35.543 37.7457 33.3154 35.5448 33.3154 32.8306ZM30.6246 32.8306C30.6246 37.012 34.0572 40.4015 38.2917 40.4015C42.5262 40.4015 45.9587 37.012 45.9587 32.8306C45.9587 28.6491 42.5262 25.2596 38.2917 25.2596C34.0572 25.2596 30.6246 28.6491 30.6246 32.8306ZM44.4705 24.9594C44.4704 25.3094 44.5753 25.6515 44.7721 25.9425C44.9688 26.2336 45.2486 26.4604 45.5759 26.5945C45.9033 26.7285 46.2635 26.7637 46.6111 26.6956C46.9587 26.6274 47.278 26.4591 47.5287 26.2117C47.7794 25.9644 47.9502 25.6492 48.0194 25.306C48.0887 24.9628 48.0534 24.6071 47.9179 24.2837C47.7824 23.9604 47.5529 23.6839 47.2583 23.4894C46.9637 23.2949 46.6174 23.191 46.263 23.1908H46.2623C45.7872 23.1911 45.3317 23.3774 44.9958 23.7091C44.6598 24.0407 44.4709 24.4904 44.4705 24.9594ZM32.2594 44.8319C30.8037 44.7665 30.0124 44.527 29.4866 44.3247C28.7895 44.0568 28.2921 43.7376 27.7692 43.2219C27.2462 42.7062 26.9225 42.2155 26.6523 41.5271C26.4473 41.0081 26.2048 40.2266 26.1387 38.7891C26.0663 37.2349 26.0518 36.7681 26.0518 32.8307C26.0518 28.8933 26.0675 28.4277 26.1387 26.8723C26.2049 25.4348 26.4492 24.6548 26.6523 24.1342C26.9237 23.4459 27.2469 22.9547 27.7692 22.4383C28.2914 21.9219 28.7883 21.6023 29.4866 21.3354C30.0122 21.133 30.8037 20.8936 32.2594 20.8282C33.8333 20.7568 34.3061 20.7425 38.2917 20.7425C42.2773 20.7425 42.7505 20.7579 44.3257 20.8282C45.7815 20.8937 46.5714 21.1349 47.0985 21.3354C47.7956 21.6023 48.293 21.9226 48.816 22.4383C49.3389 22.954 49.6615 23.4459 49.9329 24.1342C50.1378 24.6532 50.3803 25.4348 50.4465 26.8723C50.5189 28.4277 50.5333 28.8933 50.5333 32.8307C50.5333 36.7681 50.5189 37.2336 50.4465 38.7891C50.3802 40.2266 50.1365 41.0079 49.9329 41.5271C49.6615 42.2155 49.3382 42.7067 48.816 43.2219C48.2938 43.7371 47.7956 44.0568 47.0985 44.3247C46.573 44.5271 45.7815 44.7666 44.3257 44.8319C42.7518 44.9034 42.2791 44.9177 38.2917 44.9177C34.3043 44.9177 33.8328 44.9034 32.2594 44.8319ZM32.1358 18.1757C30.5463 18.2472 29.4601 18.4961 28.5115 18.8606C27.5292 19.2369 26.6976 19.7419 25.8665 20.5612C25.0355 21.3805 24.5255 22.203 24.1443 23.173C23.7752 24.1103 23.5232 25.1822 23.4508 26.7519C23.3772 28.3239 23.3604 28.8265 23.3604 32.8306C23.3604 36.8346 23.3772 37.3372 23.4508 38.9093C23.5232 40.479 23.7752 41.5508 24.1443 42.4881C24.5255 43.4576 25.0356 44.281 25.8665 45.0999C26.6974 45.9189 27.5292 46.4231 28.5115 46.8006C29.4619 47.1651 30.5463 47.4139 32.1358 47.4854C33.7287 47.5569 34.2368 47.5747 38.2917 47.5747C42.3465 47.5747 42.8555 47.5581 44.4476 47.4854C46.0372 47.4139 47.1227 47.1651 48.0718 46.8006C49.0536 46.4231 49.8858 45.9192 50.7168 45.0999C51.5478 44.2806 52.0568 43.4576 52.4391 42.4881C52.8082 41.5508 53.0614 40.4789 53.1326 38.9093C53.205 37.336 53.2218 36.8346 53.2218 32.8306C53.2218 28.8265 53.205 28.3239 53.1326 26.7519C53.0602 25.1821 52.8082 24.1097 52.4391 23.173C52.0568 22.2036 51.5465 21.3818 50.7168 20.5612C49.8871 19.7406 49.0536 19.2369 48.073 18.8606C47.1227 18.4961 46.0371 18.246 44.4488 18.1757C42.8567 18.1042 42.3477 18.0864 38.2929 18.0864C34.238 18.0864 33.7287 18.1031 32.1358 18.1757Z" fill="white"/>
<path d="M33.3154 32.8306C33.3154 30.1163 35.543 27.9155 38.2917 27.9155C41.0404 27.9155 43.2692 30.1163 43.2692 32.8306C43.2692 35.5448 41.0404 37.7457 38.2917 37.7457C35.543 37.7457 33.3154 35.5448 33.3154 32.8306ZM30.6246 32.8306C30.6246 37.012 34.0572 40.4015 38.2917 40.4015C42.5262 40.4015 45.9587 37.012 45.9587 32.8306C45.9587 28.6491 42.5262 25.2596 38.2917 25.2596C34.0572 25.2596 30.6246 28.6491 30.6246 32.8306ZM44.4705 24.9594C44.4704 25.3094 44.5753 25.6515 44.7721 25.9425C44.9688 26.2336 45.2486 26.4604 45.5759 26.5945C45.9033 26.7285 46.2635 26.7637 46.6111 26.6956C46.9587 26.6274 47.278 26.4591 47.5287 26.2117C47.7794 25.9644 47.9502 25.6492 48.0194 25.306C48.0887 24.9628 48.0534 24.6071 47.9179 24.2837C47.7824 23.9604 47.5529 23.6839 47.2583 23.4894C46.9637 23.2949 46.6174 23.191 46.263 23.1908H46.2623C45.7872 23.1911 45.3317 23.3774 44.9958 23.7091C44.6598 24.0407 44.4709 24.4904 44.4705 24.9594ZM32.2594 44.8319C30.8037 44.7665 30.0124 44.527 29.4866 44.3247C28.7895 44.0568 28.2921 43.7376 27.7692 43.2219C27.2462 42.7062 26.9225 42.2155 26.6523 41.5271C26.4473 41.0081 26.2048 40.2266 26.1387 38.7891C26.0663 37.2349 26.0518 36.7681 26.0518 32.8307C26.0518 28.8933 26.0675 28.4277 26.1387 26.8723C26.2049 25.4348 26.4492 24.6548 26.6523 24.1342C26.9237 23.4459 27.2469 22.9547 27.7692 22.4383C28.2914 21.9219 28.7883 21.6023 29.4866 21.3354C30.0122 21.133 30.8037 20.8936 32.2594 20.8282C33.8333 20.7568 34.3061 20.7425 38.2917 20.7425C42.2773 20.7425 42.7505 20.7579 44.3257 20.8282C45.7815 20.8937 46.5714 21.1349 47.0985 21.3354C47.7956 21.6023 48.293 21.9226 48.816 22.4383C49.3389 22.954 49.6615 23.4459 49.9329 24.1342C50.1378 24.6532 50.3803 25.4348 50.4465 26.8723C50.5189 28.4277 50.5333 28.8933 50.5333 32.8307C50.5333 36.7681 50.5189 37.2336 50.4465 38.7891C50.3802 40.2266 50.1365 41.0079 49.9329 41.5271C49.6615 42.2155 49.3382 42.7067 48.816 43.2219C48.2938 43.7371 47.7956 44.0568 47.0985 44.3247C46.573 44.5271 45.7815 44.7666 44.3257 44.8319C42.7518 44.9034 42.2791 44.9177 38.2917 44.9177C34.3043 44.9177 33.8328 44.9034 32.2594 44.8319ZM32.1358 18.1757C30.5463 18.2472 29.4601 18.4961 28.5115 18.8606C27.5292 19.2369 26.6976 19.7419 25.8665 20.5612C25.0355 21.3805 24.5255 22.203 24.1443 23.173C23.7752 24.1103 23.5232 25.1822 23.4508 26.7519C23.3772 28.3239 23.3604 28.8265 23.3604 32.8306C23.3604 36.8346 23.3772 37.3372 23.4508 38.9093C23.5232 40.479 23.7752 41.5508 24.1443 42.4881C24.5255 43.4576 25.0356 44.281 25.8665 45.0999C26.6974 45.9189 27.5292 46.4231 28.5115 46.8006C29.4619 47.1651 30.5463 47.4139 32.1358 47.4854C33.7287 47.5569 34.2368 47.5747 38.2917 47.5747C42.3465 47.5747 42.8555 47.5581 44.4476 47.4854C46.0372 47.4139 47.1227 47.1651 48.0718 46.8006C49.0536 46.4231 49.8858 45.9192 50.7168 45.0999C51.5478 44.2806 52.0568 43.4576 52.4391 42.4881C52.8082 41.5508 53.0614 40.4789 53.1326 38.9093C53.205 37.336 53.2218 36.8346 53.2218 32.8306C53.2218 28.8265 53.205 28.3239 53.1326 26.7519C53.0602 25.1821 52.8082 24.1097 52.4391 23.173C52.0568 22.2036 51.5465 21.3818 50.7168 20.5612C49.8871 19.7406 49.0536 19.2369 48.073 18.8606C47.1227 18.4961 46.0371 18.246 44.4488 18.1757C42.8567 18.1042 42.3477 18.0864 38.2929 18.0864C34.238 18.0864 33.7287 18.1031 32.1358 18.1757Z" fill="#0C0B0C"/>
<path d="M33.3154 32.8306C33.3154 30.1163 35.543 27.9155 38.2917 27.9155C41.0404 27.9155 43.2692 30.1163 43.2692 32.8306C43.2692 35.5448 41.0404 37.7457 38.2917 37.7457C35.543 37.7457 33.3154 35.5448 33.3154 32.8306ZM30.6246 32.8306C30.6246 37.012 34.0572 40.4015 38.2917 40.4015C42.5262 40.4015 45.9587 37.012 45.9587 32.8306C45.9587 28.6491 42.5262 25.2596 38.2917 25.2596C34.0572 25.2596 30.6246 28.6491 30.6246 32.8306ZM44.4705 24.9594C44.4704 25.3094 44.5753 25.6515 44.7721 25.9425C44.9688 26.2336 45.2486 26.4604 45.5759 26.5945C45.9033 26.7285 46.2635 26.7637 46.6111 26.6956C46.9587 26.6274 47.278 26.4591 47.5287 26.2117C47.7794 25.9644 47.9502 25.6492 48.0194 25.306C48.0887 24.9628 48.0534 24.6071 47.9179 24.2837C47.7824 23.9604 47.5529 23.6839 47.2583 23.4894C46.9637 23.2949 46.6174 23.191 46.263 23.1908H46.2623C45.7872 23.1911 45.3317 23.3774 44.9958 23.7091C44.6598 24.0407 44.4709 24.4904 44.4705 24.9594ZM32.2594 44.8319C30.8037 44.7665 30.0124 44.527 29.4866 44.3247C28.7895 44.0568 28.2921 43.7376 27.7692 43.2219C27.2462 42.7062 26.9225 42.2155 26.6523 41.5271C26.4473 41.0081 26.2048 40.2266 26.1387 38.7891C26.0663 37.2349 26.0518 36.7681 26.0518 32.8307C26.0518 28.8933 26.0675 28.4277 26.1387 26.8723C26.2049 25.4348 26.4492 24.6548 26.6523 24.1342C26.9237 23.4459 27.2469 22.9547 27.7692 22.4383C28.2914 21.9219 28.7883 21.6023 29.4866 21.3354C30.0122 21.133 30.8037 20.8936 32.2594 20.8282C33.8333 20.7568 34.3061 20.7425 38.2917 20.7425C42.2773 20.7425 42.7505 20.7579 44.3257 20.8282C45.7815 20.8937 46.5714 21.1349 47.0985 21.3354C47.7956 21.6023 48.293 21.9226 48.816 22.4383C49.3389 22.954 49.6615 23.4459 49.9329 24.1342C50.1378 24.6532 50.3803 25.4348 50.4465 26.8723C50.5189 28.4277 50.5333 28.8933 50.5333 32.8307C50.5333 36.7681 50.5189 37.2336 50.4465 38.7891C50.3802 40.2266 50.1365 41.0079 49.9329 41.5271C49.6615 42.2155 49.3382 42.7067 48.816 43.2219C48.2938 43.7371 47.7956 44.0568 47.0985 44.3247C46.573 44.5271 45.7815 44.7666 44.3257 44.8319C42.7518 44.9034 42.2791 44.9177 38.2917 44.9177C34.3043 44.9177 33.8328 44.9034 32.2594 44.8319ZM32.1358 18.1757C30.5463 18.2472 29.4601 18.4961 28.5115 18.8606C27.5292 19.2369 26.6976 19.7419 25.8665 20.5612C25.0355 21.3805 24.5255 22.203 24.1443 23.173C23.7752 24.1103 23.5232 25.1822 23.4508 26.7519C23.3772 28.3239 23.3604 28.8265 23.3604 32.8306C23.3604 36.8346 23.3772 37.3372 23.4508 38.9093C23.5232 40.479 23.7752 41.5508 24.1443 42.4881C24.5255 43.4576 25.0356 44.281 25.8665 45.0999C26.6974 45.9189 27.5292 46.4231 28.5115 46.8006C29.4619 47.1651 30.5463 47.4139 32.1358 47.4854C33.7287 47.5569 34.2368 47.5747 38.2917 47.5747C42.3465 47.5747 42.8555 47.5581 44.4476 47.4854C46.0372 47.4139 47.1227 47.1651 48.0718 46.8006C49.0536 46.4231 49.8858 45.9192 50.7168 45.0999C51.5478 44.2806 52.0568 43.4576 52.4391 42.4881C52.8082 41.5508 53.0614 40.4789 53.1326 38.9093C53.205 37.336 53.2218 36.8346 53.2218 32.8306C53.2218 28.8265 53.205 28.3239 53.1326 26.7519C53.0602 25.1821 52.8082 24.1097 52.4391 23.173C52.0568 22.2036 51.5465 21.3818 50.7168 20.5612C49.8871 19.7406 49.0536 19.2369 48.073 18.8606C47.1227 18.4961 46.0371 18.246 44.4488 18.1757C42.8567 18.1042 42.3477 18.0864 38.2929 18.0864C34.238 18.0864 33.7287 18.1031 32.1358 18.1757Z" fill="url(#paint0_linear_356_1068)"/>
</g>
<defs>
<filter id="filter0_d_356_1068" x="0.0347223" y="0.365234" width="74.9306" height="74.9306" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.46528"/>
<feGaussianBlur stdDeviation="2.73264"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_356_1068"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_356_1068" result="shape"/>
</filter>
<linearGradient id="paint0_linear_356_1068" x1="18.3612" y1="14.4571" x2="56.8074" y2="18.5671" gradientUnits="userSpaceOnUse">
<stop stop-color="#ED8B34"/>
<stop offset="1" stop-color="#D84124"/>
</linearGradient>
</defs>
                  </svg>
                  <svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[76px] cursor-pointer hover:scale-105 duration-200' viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_356_1071)">
                  <circle cx="37.5" cy="32.3652" r="32" fill="#262728"/>
                  <path d="M22.8848 20.3284C22.8848 19.1618 23.8615 18.2148 25.0654 18.2148H50.2101C51.4145 18.2148 52.3907 19.1618 52.3907 20.3284V45.6076C52.3907 46.7745 51.4145 47.7208 50.2101 47.7208H25.0654C23.8616 47.7208 22.8848 46.7747 22.8848 45.6079V20.3281V20.3284Z" fill="url(#paint0_linear_356_1071)"/>
                  <path d="M31.8513 42.9079V29.6242H27.436V42.9079H31.8518H31.8513ZM29.6446 27.8108C31.184 27.8108 32.1424 26.7908 32.1424 25.5161C32.1135 24.2123 31.184 23.2207 29.6739 23.2207C28.1627 23.2207 27.1758 24.2123 27.1758 25.5159C27.1758 26.7907 28.1338 27.8107 29.6157 27.8107H29.6443L29.6446 27.8108ZM34.2952 42.9079H38.7102V35.4905C38.7102 35.094 38.739 34.6965 38.8556 34.4133C39.1747 33.6197 39.9012 32.7983 41.1212 32.7983C42.7184 32.7983 43.3577 34.0163 43.3577 35.8022V42.9079H47.7726V35.2914C47.7726 31.2114 45.5947 29.3128 42.6898 29.3128C40.3082 29.3128 39.2623 30.6439 38.6811 31.5505H38.7105V29.6247H34.2955C34.3531 30.8708 34.2951 42.9083 34.2951 42.9083L34.2952 42.9079Z" fill="#232324"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_356_1071" x="0.0347223" y="0.365234" width="74.9306" height="74.9306" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="5.46528"/>
                  <feGaussianBlur stdDeviation="2.73264"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_356_1071"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_356_1071" result="shape"/>
                  </filter>
                  <linearGradient id="paint0_linear_356_1071" x1="17.9452" y1="14.5833" x2="55.9444" y2="18.5948" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#ED8B34"/>
                  <stop offset="1" stop-color="#D84124"/>
                  </linearGradient>
                  </defs>
                  </svg>
                  <svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[76px] cursor-pointer hover:scale-105 duration-200' viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_356_1071)">
                  <circle cx="37.5" cy="32.3652" r="32" fill="#262728"/>
                  <path d="M22.8848 20.3284C22.8848 19.1618 23.8615 18.2148 25.0654 18.2148H50.2101C51.4145 18.2148 52.3907 19.1618 52.3907 20.3284V45.6076C52.3907 46.7745 51.4145 47.7208 50.2101 47.7208H25.0654C23.8616 47.7208 22.8848 46.7747 22.8848 45.6079V20.3281V20.3284Z" fill="url(#paint0_linear_356_1071)"/>
                  <path d="M31.8513 42.9079V29.6242H27.436V42.9079H31.8518H31.8513ZM29.6446 27.8108C31.184 27.8108 32.1424 26.7908 32.1424 25.5161C32.1135 24.2123 31.184 23.2207 29.6739 23.2207C28.1627 23.2207 27.1758 24.2123 27.1758 25.5159C27.1758 26.7907 28.1338 27.8107 29.6157 27.8107H29.6443L29.6446 27.8108ZM34.2952 42.9079H38.7102V35.4905C38.7102 35.094 38.739 34.6965 38.8556 34.4133C39.1747 33.6197 39.9012 32.7983 41.1212 32.7983C42.7184 32.7983 43.3577 34.0163 43.3577 35.8022V42.9079H47.7726V35.2914C47.7726 31.2114 45.5947 29.3128 42.6898 29.3128C40.3082 29.3128 39.2623 30.6439 38.6811 31.5505H38.7105V29.6247H34.2955C34.3531 30.8708 34.2951 42.9083 34.2951 42.9083L34.2952 42.9079Z" fill="#232324"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_356_1071" x="0.0347223" y="0.365234" width="74.9306" height="74.9306" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="5.46528"/>
                  <feGaussianBlur stdDeviation="2.73264"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_356_1071"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_356_1071" result="shape"/>
                  </filter>
                  <linearGradient id="paint0_linear_356_1071" x1="17.9452" y1="14.5833" x2="55.9444" y2="18.5948" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#ED8B34"/>
                  <stop offset="1" stop-color="#D84124"/>
                  </linearGradient>
                  </defs>
                  </svg>


                </div>
              </div>
              </div>
            </div>
        </div>
    );
};

export default Pagesix;