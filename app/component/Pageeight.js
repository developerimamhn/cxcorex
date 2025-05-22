'use client';


import React, { useEffect, useRef, useState  } from 'react';
import Image from 'next/image';
import image9 from './image/image9.png';
import imageone from './image/Ellipse 71.svg';
import imagetwo from './image/Ellipse 72.svg';
import imagethree from './image/Ellipse 73.svg';
import imagefore from './image/Ellipse 74.svg';
import imagefive from './image/Ellipse 75.svg';
import image10 from './image/Mask group.svg'
import image102 from './image/Group 27.svg';
import image13 from './image/Mask group-1.svg';
import image14 from './image/Mask group-2.svg';
import image15 from './image/Mask group-3.svg';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pageeight = () => {
    const svgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);


  const [hasGradientBorder, setHasGradientBorder] = useState(false);
  const inputRef = useRef(null);

  const toggleGradientBorder = () => {
    setHasGradientBorder(!hasGradientBorder);
    inputRef.current.focus();
  };

const teamMembers = [
    {
      image: imageone,
      name: 'Courtney Henry',
      title: 'Co-Founder',
      socialIcon: image10,
    },
    {
      image: imagetwo,
      name: 'Jane Doe',
      title: 'CEO',
      socialIcon: image102,
    },
    {
      image: imagethree,
      name: 'John Smith',
      title: 'CTO',
      socialIcon: image13,
    },
    {
      image: imagefore,
      name: 'Emily Johnson',
      title: 'Lead Designer',
      socialIcon: image14,
    },
    {
      image: imagefive,
      name: 'Michael Brown',
      title: 'Lead Developer',
      socialIcon: image15,
    },
  ];

  
    return (
        <div className='py-[50px] sm:py-[70px] md:py-[90px] lg:py-[120px] xl:py-[160px] 2xl:py-[190px] relative'>
          <svg className="w-1/2 absolute -bottom-1/2 left-0 -z-[1]" viewBox="0 0 1107 1803" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-181.841 404.166C-358.102 486.252 -231.466 772.817 -235.935 946.136C-240.405 1119.45 -260.114 1140.9 -203.294 1236.1C-146.473 1331.29 -72.6571 1382.63 36.8019 1403.08C146.261 1423.53 233.977 1402.37 322.109 1334.25C410.242 1266.14 399.834 1239.07 459.836 1076.12C519.838 913.178 743.801 692.114 610.118 552.123" stroke="white" stroke-opacity="0.03"/>
          <g filter="url(#filter0_f_356_603)">
          <ellipse cx="486.866" cy="485.595" rx="486.866" ry="485.595" transform="matrix(1.00182 -0.00153624 -0.00154396 0.998179 -367.749 501.497)" fill="#DA4625" fill-opacity="0.1"/>
          </g>
          <path d="M-170.178 424.821C-338.428 503.175 -217.547 776.715 -221.814 942.155C-226.08 1107.6 -244.893 1128.07 -190.656 1218.94C-136.418 1309.8 -65.9571 1358.81 38.5265 1378.33C143.01 1397.85 226.739 1377.65 310.865 1312.63C394.992 1247.61 385.057 1221.77 442.331 1066.23C499.606 910.696 713.389 699.68 585.783 566.052" stroke="white" stroke-opacity="0.03"/>
          <path d="M-158.516 445.475C-318.754 520.099 -203.63 780.612 -207.693 938.174C-211.756 1095.74 -229.673 1115.23 -178.019 1201.77C-126.364 1288.32 -59.2582 1334.99 40.25 1353.58C139.758 1372.17 219.5 1352.93 299.62 1291.01C379.741 1229.08 370.279 1204.47 424.826 1056.34C479.373 908.213 682.976 707.245 561.446 579.981" stroke="white" stroke-opacity="0.03"/>
          <path d="M-146.854 466.13C-299.079 537.022 -189.711 784.51 -193.571 934.194C-197.431 1083.88 -214.453 1102.4 -165.381 1184.61C-116.309 1266.83 -52.5583 1311.17 41.9745 1328.83C136.507 1346.49 212.262 1328.21 288.376 1269.39C364.49 1210.56 355.502 1187.18 407.322 1046.46C459.142 905.731 652.564 714.812 537.111 593.911" stroke="white" stroke-opacity="0.03"/>
          <path d="M-135.191 486.784C-279.404 553.946 -175.793 788.408 -179.45 930.214C-183.106 1072.02 -199.232 1089.57 -152.743 1167.45C-106.254 1245.34 -45.8583 1287.35 43.699 1304.08C133.256 1320.81 205.024 1303.5 277.132 1247.76C349.24 1192.03 340.725 1169.88 389.818 1036.57C438.91 903.249 622.153 722.378 512.776 607.84" stroke="white" stroke-opacity="0.03"/>
          <path d="M-123.528 507.439C-259.73 570.869 -161.874 792.305 -165.328 926.233C-168.781 1060.16 -184.011 1076.73 -140.105 1150.29C-96.1983 1223.85 -39.1584 1263.53 45.4235 1279.33C130.005 1295.13 197.786 1278.78 265.888 1226.14C333.99 1173.51 325.948 1152.59 372.313 1026.68C418.678 900.766 591.741 729.944 488.44 621.769" stroke="white" stroke-opacity="0.03"/>
          <path d="M-111.866 528.093C-240.056 587.792 -147.957 796.203 -151.207 922.253C-154.458 1048.3 -168.792 1063.9 -127.468 1133.13C-86.144 1202.37 -32.4595 1239.7 47.1471 1254.58C126.754 1269.45 190.547 1254.06 254.643 1204.52C318.739 1154.98 311.17 1135.29 354.808 1016.79C398.446 898.284 561.328 737.51 464.104 635.698" stroke="white" stroke-opacity="0.03"/>
          <path d="M-100.203 548.747C-220.381 604.715 -134.038 800.1 -137.086 918.272C-140.133 1036.44 -153.571 1051.07 -114.83 1115.97C-76.0889 1180.88 -25.7596 1215.88 48.8716 1229.83C123.503 1243.77 183.309 1229.34 243.399 1182.9C303.489 1136.45 296.393 1118 337.304 1006.9C378.214 895.801 530.916 745.075 439.769 649.627" stroke="white" stroke-opacity="0.03"/>
          <path d="M-88.5403 569.402C-200.706 621.639 -120.12 803.998 -122.964 914.292C-125.808 1024.59 -138.35 1038.23 -102.192 1098.81C-66.0337 1159.39 -19.0596 1192.06 50.5961 1205.08C120.252 1218.09 176.071 1204.62 232.155 1161.28C288.239 1117.93 281.616 1100.7 319.799 997.011C357.982 893.319 500.504 752.642 415.434 663.557" stroke="white" stroke-opacity="0.03"/>
          <path d="M-76.8775 590.057C-181.032 638.562 -106.201 807.896 -108.842 910.311C-111.483 1012.73 -123.13 1025.4 -89.554 1081.65C-55.9784 1137.9 -12.3597 1168.24 52.3206 1180.32C117.001 1192.41 168.833 1179.9 220.911 1139.65C272.989 1099.4 266.839 1083.41 302.295 987.121C337.751 890.836 470.092 760.207 391.098 677.486" stroke="white" stroke-opacity="0.03"/>
          <path d="M-65.2157 610.711C-161.358 655.485 -92.2838 811.794 -94.7216 906.331C-97.1594 1000.87 -107.91 1012.57 -76.9171 1064.49C-45.9242 1116.42 -5.66076 1144.42 54.0441 1155.57C113.749 1166.73 161.594 1155.19 209.666 1118.03C257.738 1080.88 252.062 1066.11 284.79 977.233C317.518 888.354 439.68 767.774 366.762 691.415" stroke="white" stroke-opacity="0.03"/>
          <path d="M-53.5528 631.365C-141.683 672.408 -78.3653 815.691 -80.6 902.35C-82.8346 989.009 -92.6893 999.732 -64.2791 1047.33C-35.869 1094.93 1.03915 1120.6 55.7686 1130.82C110.498 1141.05 154.356 1130.47 198.422 1096.41C242.488 1062.35 237.285 1048.82 267.286 967.343C297.286 885.871 409.268 775.339 342.427 705.344" stroke="white" stroke-opacity="0.03"/>
          <path d="M-41.89 652.02C-122.009 689.332 -64.4467 819.589 -66.4782 898.37C-68.5097 977.151 -77.4685 986.899 -51.6411 1030.17C-25.8137 1073.44 7.7391 1096.78 57.4932 1106.07C107.247 1115.37 147.118 1105.75 187.178 1074.79C227.238 1043.83 222.508 1031.52 249.781 957.455C277.055 883.389 378.856 782.905 318.091 719.273" stroke="white" stroke-opacity="0.03"/>
          <path d="M-30.2272 672.674C-102.334 706.254 -50.5283 823.486 -52.3566 894.389C-54.185 965.292 -62.2479 974.064 -39.0032 1013.01C-15.7586 1051.95 14.439 1072.96 59.2177 1081.32C103.996 1089.69 139.88 1081.03 175.934 1053.16C211.988 1025.3 207.731 1014.22 232.277 947.565C256.823 880.906 348.444 790.471 293.756 733.202" stroke="white" stroke-opacity="0.03"/>
          <path d="M-18.5643 693.329C-82.6592 723.178 -36.6097 827.384 -38.2349 890.408C-39.8601 953.433 -47.0271 961.231 -26.3652 995.848C-5.70333 1030.47 21.1389 1049.13 60.9422 1056.57C100.745 1064.01 132.642 1056.31 164.69 1031.54C196.738 1006.77 192.954 996.929 214.773 937.676C236.591 878.424 318.033 798.037 269.421 747.131" stroke="white" stroke-opacity="0.03"/>
          <path d="M-6.90253 713.983C-62.9856 740.102 -22.6922 831.281 -24.1143 886.428C-25.5363 941.575 -31.8075 948.398 -13.7283 978.688C4.35085 1008.98 27.8378 1025.31 62.6657 1031.82C97.4935 1038.33 125.403 1031.59 153.445 1009.92C181.487 988.247 178.176 979.633 197.267 927.788C216.359 875.942 287.62 805.603 245.084 761.061" stroke="white" stroke-opacity="0.03"/>
          <path d="M4.7603 734.638C-43.3109 757.025 -8.77375 835.179 -9.99264 882.447C-11.2115 929.716 -16.5868 935.565 -1.09038 961.527C14.4061 987.49 34.5378 1001.49 64.3902 1007.07C94.2427 1012.65 118.165 1006.87 142.201 988.298C166.237 969.721 163.399 962.338 179.763 917.898C196.127 873.459 257.208 813.169 220.749 774.989" stroke="white" stroke-opacity="0.03"/>
          <path d="M16.4232 755.292C-23.6362 773.948 5.14475 839.077 4.129 878.467C3.11326 917.858 -1.36611 922.732 11.5476 944.367C24.4613 966.003 41.2377 977.671 66.1147 982.318C90.9918 986.966 110.927 982.157 130.957 966.676C150.987 951.195 148.622 945.042 162.259 908.01C175.896 870.977 226.796 820.735 196.414 788.919" stroke="white" stroke-opacity="0.03"/>
          <path d="M28.085 775.947C-3.96244 790.872 19.0623 842.974 18.2497 874.487C17.4371 905.999 13.8536 909.898 24.1846 927.207C34.5155 944.515 47.9367 953.85 67.8383 957.568C87.7399 961.286 103.688 957.439 119.712 945.054C135.736 932.669 133.844 927.747 144.754 898.121C155.663 868.495 196.383 828.301 172.078 802.848" stroke="white" stroke-opacity="0.03"/>
          <path d="M39.7478 796.601C15.7122 807.794 32.9808 846.871 32.3713 870.506C31.7619 894.14 29.0743 897.064 36.8225 910.046C44.5707 923.027 54.6366 930.028 69.5628 932.816C84.489 935.605 96.4503 932.719 108.468 923.431C120.486 914.142 119.067 910.451 127.249 888.231C135.431 866.012 165.972 835.866 147.742 816.777" stroke="white" stroke-opacity="0.03"/>
          <path d="M51.4107 817.255C35.387 824.718 46.8993 850.769 46.493 866.525C46.0867 882.282 44.295 884.231 49.4605 892.885C54.6259 901.54 61.3365 906.207 71.2873 908.066C81.2381 909.925 89.2124 908.001 97.2244 901.809C105.236 895.616 104.29 893.155 109.745 878.342C115.2 863.529 135.56 843.433 123.407 830.706" stroke="white" stroke-opacity="0.03"/>
          <path d="M63.0735 837.91C55.0616 841.641 60.8178 854.667 60.6147 862.545C60.4115 870.423 59.5156 871.398 62.0984 875.725C64.6811 880.052 68.0364 882.385 73.0118 883.315C77.9872 884.244 81.9743 883.283 85.9804 880.186C89.9864 877.09 89.5133 875.86 92.2406 868.453C94.968 861.047 105.148 850.998 99.0716 844.635" stroke="white" stroke-opacity="0.03"/>
          <defs>
          <filter id="filter0_f_356_603" x="-868.499" y="0.748535" width="1975.5" height="1969.42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_356_603"/>
          </filter>
          </defs>
          </svg>
          <div className='container mx-auto relative sm:px-0 px-6'>
            
            <div className='sm:px-[22%] px-6'>
              <h2 className='diasdtasclaroad text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] text-center'>Our Team</h2>
              <div className='cosplaformions text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] text-center pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>Charting our path toward future milestones and innovations.</div>
            </div>
            <div
              className="mt-[32px] sm:mt-[36px] md:mt-[40px] lg:mt-[48px] xl:mt-[64px] 2xl:mt-[80px] grid grid-cols-3 lg:grid-cols-5 gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px]"
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col"
                >
                  <Image src={member.image} alt={`${member.name}'s profile`} />
                  <h3
                    className="courtnharss text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px] text-center"
                  >
                    {member.name}
                  </h3>
                  <p
                    className="dixfofosna text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] text-center pb-[16px] sm:pb-[20px] md:pb-[24px] lg:pb-[32px] xl:pb-[36px] 2xl:pb-[40px]"
                  >
                    {member.title}
                  </p>
                  <Image
                    className="h-[12px] sm:h-[13px] md:h-[14px] lg:h-[15px] xl:h-[16px] 2xl:h-[20px]"
                    src={member.socialIcon}
                    alt={`${member.name}'s social icon`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
    );
};

export default Pageeight;