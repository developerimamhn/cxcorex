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
                      <svg className="h-full absolute bottom-0 right-0 z-[1]" viewBox="0 0 441 1316" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M897.033 193.996C1073.29 276.082 946.658 562.647 951.128 735.966C955.597 909.284 975.306 930.729 918.486 1025.93C861.666 1121.12 787.849 1172.46 678.39 1192.91C568.931 1213.36 481.215 1192.2 393.083 1124.08C304.951 1055.97 315.358 1028.9 255.357 865.952C195.355 703.008 -28.6083 481.944 105.074 341.953" stroke="white" stroke-opacity="0.03"/>
            <path d="M885.371 214.651C1053.62 293.005 932.74 566.545 937.006 731.985C941.272 897.426 960.086 917.895 905.848 1008.77C851.611 1099.64 781.149 1148.64 676.666 1168.16C572.182 1187.68 488.453 1167.48 404.327 1102.46C320.201 1037.44 330.135 1011.6 272.861 856.063C215.587 700.526 1.80356 489.51 129.41 355.882" stroke="white" stroke-opacity="0.03"/>
            <path d="M873.709 235.305C1033.95 309.929 918.822 570.442 922.885 728.005C926.948 885.567 944.866 905.062 893.211 991.605C841.556 1078.15 774.451 1124.82 674.942 1143.41C575.434 1162 495.692 1142.76 415.572 1080.84C335.452 1018.91 344.913 994.305 290.366 846.174C235.819 698.043 32.2163 497.076 153.746 369.811" stroke="white" stroke-opacity="0.03"/>
            <path d="M862.046 255.96C1014.27 326.852 904.904 574.34 908.764 724.024C912.624 873.709 929.645 892.229 880.573 974.444C831.501 1056.66 767.751 1101 673.218 1118.66C578.685 1136.32 502.93 1118.04 426.816 1059.22C350.702 1000.39 359.69 977.01 307.871 836.285C256.051 695.561 62.6282 504.642 178.081 383.741" stroke="white" stroke-opacity="0.03"/>
            <path d="M850.383 276.614C994.597 343.775 890.985 578.237 894.642 720.044C898.299 861.85 914.424 879.395 867.935 957.284C821.446 1035.17 761.051 1077.18 671.493 1093.91C581.936 1110.64 510.168 1093.33 438.06 1037.59C365.952 981.863 374.467 959.714 325.375 826.396C276.282 693.079 93.0399 512.208 202.417 397.67" stroke="white" stroke-opacity="0.03"/>
            <path d="M838.72 297.269C974.922 360.699 877.067 582.135 880.52 716.063C883.974 849.991 899.204 866.562 855.297 940.123C811.391 1013.68 754.351 1053.36 669.769 1069.16C585.187 1084.96 517.406 1068.61 449.304 1015.97C381.202 963.337 389.244 942.418 342.879 816.507C296.514 690.596 123.452 519.774 226.752 411.599" stroke="white" stroke-opacity="0.03"/>
            <path d="M827.058 317.923C955.248 377.622 863.149 586.033 866.4 712.083C869.65 838.133 883.984 853.729 842.66 922.963C801.336 992.197 747.652 1029.53 668.045 1044.41C588.439 1059.28 524.645 1043.89 460.549 994.35C396.453 944.811 404.022 925.123 360.384 806.618C316.747 688.114 153.865 527.34 251.088 425.528" stroke="white" stroke-opacity="0.03"/>
            <path d="M815.395 338.577C935.574 394.545 849.231 589.93 852.278 708.102C855.325 826.274 868.763 840.895 830.022 905.802C791.281 970.709 740.952 1005.71 666.321 1019.66C591.69 1033.6 531.883 1019.17 471.793 972.728C411.703 926.285 418.799 907.827 377.889 796.729C336.978 685.631 184.276 534.905 275.423 439.457" stroke="white" stroke-opacity="0.03"/>
            <path d="M803.733 359.232C915.899 411.469 835.312 593.828 838.156 704.122C841 814.415 853.543 828.062 817.384 888.642C781.226 949.222 734.252 981.892 664.596 994.905C594.941 1007.92 539.121 994.453 483.037 951.106C426.953 907.759 433.576 890.532 395.393 786.84C357.21 683.149 214.688 542.471 299.759 453.386" stroke="white" stroke-opacity="0.03"/>
            <path d="M792.07 379.887C896.224 428.392 821.394 597.726 824.035 700.141C826.676 802.557 838.322 815.228 804.746 871.481C771.171 927.734 727.552 958.071 662.872 970.154C598.191 982.238 546.359 969.734 494.281 929.483C442.203 889.233 448.353 873.236 412.897 776.951C377.442 680.666 245.1 550.037 324.094 467.316" stroke="white" stroke-opacity="0.03"/>
            <path d="M780.408 400.541C876.551 445.315 807.476 601.623 809.914 696.161C812.352 790.698 823.102 802.395 792.109 854.321C761.117 906.246 720.853 934.249 661.148 945.404C601.443 956.558 553.598 945.016 505.526 907.861C457.454 870.707 463.131 855.941 430.403 767.062C397.674 678.184 275.513 557.603 348.43 481.245" stroke="white" stroke-opacity="0.03"/>
            <path d="M768.745 421.195C856.876 462.238 793.558 605.521 795.792 692.18C798.027 778.839 807.882 789.562 779.472 837.16C751.061 884.759 714.153 910.428 659.424 920.653C604.694 930.878 560.836 920.297 516.77 886.239C472.704 852.181 477.908 838.645 447.907 757.173C417.906 675.701 305.924 565.169 372.766 495.174" stroke="white" stroke-opacity="0.03"/>
            <path d="M757.082 441.85C837.201 479.162 779.639 609.418 781.671 688.2C783.702 766.981 792.661 776.728 766.833 820C741.006 863.271 707.453 886.607 657.699 895.902C607.945 905.197 568.074 895.579 528.014 864.617C487.954 833.655 492.685 821.35 465.411 747.284C438.138 673.219 336.336 572.735 397.101 509.103" stroke="white" stroke-opacity="0.03"/>
            <path d="M745.42 462.504C817.526 496.085 765.721 613.316 767.549 684.219C769.377 755.122 777.44 763.895 754.196 802.839C730.951 841.783 700.753 862.786 655.975 871.151C611.196 879.517 575.312 870.86 539.258 842.995C503.204 815.129 507.462 804.054 482.915 737.395C458.369 670.737 366.748 580.301 421.436 523.032" stroke="white" stroke-opacity="0.03"/>
            <path d="M733.757 483.159C797.852 513.008 751.802 617.214 753.427 680.239C755.052 743.264 762.22 751.062 741.558 785.679C720.896 820.296 694.053 838.964 654.25 846.401C614.447 853.837 582.55 846.142 550.502 821.372C518.454 796.603 522.239 786.759 500.42 727.506C478.601 668.254 397.16 587.867 445.772 536.961" stroke="white" stroke-opacity="0.03"/>
            <path d="M722.095 503.813C778.178 529.932 737.885 621.111 739.307 676.258C740.729 731.405 747 738.228 728.921 768.518C710.842 798.808 687.355 815.143 652.527 821.65C617.699 828.157 589.789 821.424 561.747 799.75C533.705 778.077 537.016 769.463 517.925 717.618C498.834 665.772 427.573 595.433 470.108 550.891" stroke="white" stroke-opacity="0.03"/>
            </svg>
            <svg className="h-full absolute bottom-0 right-0 z-[1]" viewBox="0 0 1185 1311" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_356_475)">
            <circle cx="988.5" cy="322.5" r="488.5" fill="#DA4625" fill-opacity="0.1"/>
            <circle cx="988.5" cy="322.5" r="488" stroke="white" stroke-opacity="0.03"/>
            </g>
            <defs>
            <filter id="filter0_f_356_475" x="0" y="-666" width="1977" height="1977" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_356_475"/>
            </filter>
            </defs>
            </svg>
          {/* <div className='w-1/3 absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 goadsgvedfevg h-1/3 -z-[1]'></div> */}
            <div  className='relative container mx-auto '>
                <div className="flex flex-col justify-between gap-[24px] sm:gap-[32px] md:gap-[36px] lg:gap-[40px] xl:gap-[48px] 2xl:gap-[64px] px-4 sm:px-6 lg:px-8">
                  <div  className="relative">
                    <div>
                      
                        <div className='flex justify-center items-center flex-col w-full sm:gap-0 gap-6'>
                          <h2 className='speciasda relative text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px] !text-center px-[20%]
                          '>
                            <svg className='absolute sm:block hidden -z-[1] -left-3 sm:-left-0 top-0 sm:top-1/2 w-1/3 sm:w-1/3' viewBox="0 0 529 322" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <div className='col-span-7 sm:pl-[40px] md:pl-[48px] lg:pl-[70px] xl:pl-[110px] 2xl:pl-[136px] flex items-center sm:items-start justify-center sm:justify-start gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] flex-col'>
                          <h2 className='diasdtasclaroad text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] text-center sm:text-left'>Difference</h2>
                          <div className='cosplaformions text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] text-center sm:text-left'>The COREx platform is crafted to facilitate ease of use for individuals unfamiliar with Web3 and DEXes, minimizing learning barriers. Our efforts are focused on the strategic incorporation and innovative advancements of Uni V3 within the CORE blockchain ecosystem, </div>
                        </div>
                        <div className='w-full col-span-4 '>
                          <div className='relative'>
                          <Image className='w-full' src={slide1} alt='loading.. '/>
                          <Image className='w-full absolute right-0 top-0 ' src={slide2} alt='loading.. '/>
                          </div>
                          <svg className='absolute -right-6  sm:right-0 top-2/3 sm:top-1/2 translate-y-1/6 w-1/2 sm:w-1/3 -z-[1] sm:block hidden' viewBox="0 0 529 446" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <div className='col-span-7  flex items-center sm:items-end justify-center sm:justify-end gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] flex-col'>
                          <h2 className='diasdtasclaroad text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] !text-center  sm:!text-right'>Social</h2>
                          <div className='cosplaformions text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] sm:text-right text-center '>COREx believes in the power of community and is ready to be powered by you. To start, we are establishing a Social function, where peer-to-peer discussion can take place for to operational recommendations for COREx, we are all ears.</div>
                        </div>
                        {/* <div className='w-full col-span-5 sm:hidden block'>
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
                        </div> */}
                      </div>
                      {/* ssvs */}
                      <div className='grid grid-cols-1 sm:grid-cols-12 relative items-center justify-between gap-[15px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px] xl:gap-[32px] 2xl:gap-[36px] pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[60px]'>
                        <div className='col-span-7 sm:pl-[40px] md:pl-[48px] lg:pl-[70px] xl:pl-[110px] 2xl:pl-[136px] flex items-center sm:items-start justify-center sm:justify-start gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] flex-col'>
                          <h2 className='diasdtasclaroad text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] text-center sm:text-left'>AI</h2>
                          <div className='cosplaformions text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] text-center sm:text-left'>COREx is strategically positioning itself to pioneer the next wave of growth within the CoreDao ecosystem through the application of artificial intelligence. Access to our AI features will be an exclusive benefit for COREx token stakers.</div>
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