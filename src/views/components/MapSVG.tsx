import building_118 from "../../images/elements/buildings/118.png";
import building_119 from "../../images/elements/buildings/119.png";
import building_120 from "../../images/elements/buildings/120.png";
import building_121 from "../../images/elements/buildings/121.png";
import building_122 from "../../images/elements/buildings/122.png";
import building_123 from "../../images/elements/buildings/123.png";
import building_124 from "../../images/elements/buildings/124.png";
import building_125 from "../../images/elements/buildings/125.png";
import building_126 from "../../images/elements/buildings/126.png";
import building_127 from "../../images/elements/buildings/127.png";
import building_128 from "../../images/elements/buildings/128.png";
import building_129 from "../../images/elements/buildings/129.png";
import building_130 from "../../images/elements/buildings/130.png";
import building_131 from "../../images/elements/buildings/131.png";
import building_132 from "../../images/elements/buildings/132.png";
import building_133 from "../../images/elements/buildings/133.png";
import building_134 from "../../images/elements/buildings/134.png";
import building_135 from "../../images/elements/buildings/135.png";
import building_136 from "../../images/elements/buildings/136.png";
import building_137 from "../../images/elements/buildings/137.png";
import building_138 from "../../images/elements/buildings/138.png";
import building_139 from "../../images/elements/buildings/139.png";
import building_140 from "../../images/elements/buildings/140.png";
import building_141 from "../../images/elements/buildings/141.png";
import building_142 from "../../images/elements/buildings/142.png";
import building_143 from "../../images/elements/buildings/143.png";
import building_144 from "../../images/elements/buildings/144.png";
import building_145 from "../../images/elements/buildings/145.png";
import building_146 from "../../images/elements/buildings/146.png";
import building_147 from "../../images/elements/buildings/147.png";
import building_148 from "../../images/elements/buildings/148.png";
import building_149 from "../../images/elements/buildings/149.png";
import building_150 from "../../images/elements/buildings/150.png";
import building_151 from "../../images/elements/buildings/151.png";
import building_152 from "../../images/elements/buildings/152.png";
import building_153 from "../../images/elements/buildings/153.png";
import building_154 from "../../images/elements/buildings/154.png";
import building_155 from "../../images/elements/buildings/155.png";
import building_156 from "../../images/elements/buildings/156.png";
import building_157 from "../../images/elements/buildings/157.png";

import grass_11 from "../../images/elements/grass/11.png";
import grass_12 from "../../images/elements/grass/12.png";
import grass_13 from "../../images/elements/grass/13.png";
import grass_14 from "../../images/elements/grass/14.png";
import grass_15 from "../../images/elements/grass/15.png";
import grass_16 from "../../images/elements/grass/16.png";
import grass_17 from "../../images/elements/grass/17.png";
import grass_18 from "../../images/elements/grass/18.png";
import grass_19 from "../../images/elements/grass/19.png";
import grass_110 from "../../images/elements/grass/110.png";
import grass_111 from "../../images/elements/grass/111.png";
import grass_112 from "../../images/elements/grass/112.png";
import grass_113 from "../../images/elements/grass/113.png";
import grass_114 from "../../images/elements/grass/114.png";
import grass_115 from "../../images/elements/grass/115.png";
import grass_116 from "../../images/elements/grass/116.png";
import grass_117 from "../../images/elements/grass/117.png";

import tree_1 from "../../images/elements/trees/1.png";

import { BuildingName } from "./BuildingCard";

export const MapSVG = (props: {
  handleOpen: () => void;
  setBuildingName: (name: BuildingName) => void;
}) => {
  const { handleOpen, setBuildingName } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 849.53 595.4"
      height="800px"
    >
      <defs>
        <image id="a" width="640" height="624" href={tree_1} />
      </defs>
      <rect width="843.57" height="595.4" fill="#958d8f" />
      <polyline points="849.53 459.49 843.11 465.96 843.06 491.7" fill="none" />
      <polygon
        points="261.32 324.77 622.4 292.28 644.49 479.43 276.21 504.04 261.32 324.77"
        fill="#afabab"
      />
      <polygon
        points="243.06 106.34 596.55 74.94 619.66 267.19 259.23 300.08 243.06 106.34"
        fill="#afabab"
      />
      <rect
        x="-906.13"
        y="213.16"
        width="28.63"
        height="14.67"
        transform="translate(-286.37 -753.12) rotate(-94.99)"
        fill="#958d8f"
      />
      <path
        d="M-606.32,212.43l5.62,55.66,2,24.52,53.62-4.09L-550.75,232l-1.15-11.62s.38-5.19-5.06-5.19c-4.59,0-14.12.34-14.12.34l5,53.62s.19,4.92,5.24,4.72c3.19-.13,13.4-1,13.4-1"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <line
        x1="313.88"
        y1="189.28"
        x2="316.61"
        y2="229.79"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M-545,288.52a31.18,31.18,0,0,0,2.24,6.1c1.21,2.08,7.59,10.11,7.59,10.11"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <line
        x1="379.59"
        y1="101.02"
        x2="390.31"
        y2="201.36"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M-617.36,318.65l.13,11.23s1.19,5.75-5.11,6.26a69.63,69.63,0,0,1-10.21.19"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <line
        x1="276.76"
        y1="233.13"
        x2="279.5"
        y2="273.02"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <line
        x1="305.37"
        y1="263.49"
        x2="308.95"
        y2="303.49"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M-537.64,310.22l1.53,29.62s-.76,8.94,6.39,8.42,17.1,0,17.1,0,11-1,11.75,7.15,4.59,45.45,4.59,45.45"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M-402.57,301s3.54.74,4.34,14c.81,13.49.42,9.45.42,9.45s1,5.53-5.15,6-5,4.72-4.46,10.09,4.34,51.31,4.34,51.31"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M-408,337.88l-24.17,1.53s-5.87-.34-5.36,7.58,2.81,37,2.81,37"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M-441.93,196.14l4.8,56s-.2,7.51,6.68,7.28c3.71-.13,9.45-.22,9.45-.22-.68,0,2.78.77,1.79-10.25-1-11.35-2.51-26.6-3-30.85,0,0-.51-9.62-7.41-9.88s-9.49.9-9.49.9"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M-414,190.31l2.41,35.47s-.36,6.4,10.87,5.72,48.68-3.75,48.68-3.75"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M-288,224l-40.17,3.74s-10.89,1-9.87,9.88,4.08,47,4.08,47"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M-351,316.26l-1.36-12.93s.68-9.19-12.6-8.17-24.17,2-24.17,2-6.12.68-5.78,8.51,1.36,20.77,1.36,20.77-.68,8.17,6.13,7.83,16.34-.68,16.34-.68"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <line
        x1="325.46"
        y1="305.19"
        x2="333.63"
        y2="389.45"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <line
        x1="374.99"
        y1="300.6"
        x2="382.65"
        y2="383.83"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <line
        x1="440.35"
        y1="293.62"
        x2="450.05"
        y2="388.94"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M-454.83,453.8l17.19-.85,2.6-.77s4.81-2.77,7.19-2.89,7.06,0,7.06,0"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <line
        x1="509.8"
        y1="289.19"
        x2="514.56"
        y2="347.4"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <line
        x1="270.82"
        y1="449.53"
        x2="367.84"
        y2="442.72"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M-497.21,568.18l-1-20.94s-.51-6.46,6.3-7,12.76-.51,12.76-.51,7.49-1.87,7.83,6,1.53,23.32,1.53,23.32"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <polyline
        points="470.48 408.34 473.29 440.13 475.33 451.11 479.84 491.75 431.16 495.83"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M-327.17,455.5l-1.7-20.43s-2.38-9.19,7.83-9.87,55.15-5.45,55.15-5.45"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <polyline
        points="608.86 354.21 609.2 364.77 644.27 362.72"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <polyline
        points="601.03 398.81 602.05 409.7 646.31 405.96"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <polyline
        points="529.54 432.51 522.05 447.15 524.78 495.49"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M-378.83,564.09s8.17-2,8.6,5.88.34,14.21.34,14.21"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M-354.32,597.71l-.76-28.85s-1.28-6.89,10.46-7.4,27.07-1,27.07-1"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        d="M-898.33,639.49q9.83-.47,19.64-1,40.41-2.16,80.72-5.08c27.14-1.92,54.26-4,81.37-6.08,27.34-2.11,54.77-3.75,82.15-5.55l81.94-5.42,81.73-5.44q40.8-2.71,81.59-5.47t81.53-5.53q40.77-2.77,81.53-5.6t81.6-5.68q40.89-2.88,81.75-5.79"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#575756"
        strokeMiterlimit="10"
        strokeWidth="25.5"
      />
      <path
        d="M-896.68,631.62q-.17,8.42-.36,16.84l828-55.79c.15-.92.29-1.83.45-2.74q-.59-7-1.05-14Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="2.16"
      />
      <path
        d="M-67.78,583l-1.9.14"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.27"
      />
      <path
        d="M-73.49,583.41q-37.77,2.7-75.55,5.37-40.54,2.85-81.11,5.67t-81,5.58q-40.51,2.78-81,5.52t-81.1,5.46l-81.24,5.42-81.45,5.4c-27.22,1.8-54.48,3.44-81.65,5.54q-40.44,3.12-80.9,6.07c-26.71,1.89-53.45,3.63-80.23,5.06q-7.85.42-15.71.8"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.27"
        strokeDasharray="3.82 3.82"
      />
      <path
        d="M-896.42,639.4l-1.91.09"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.27"
      />
      <rect x="844.44" y="481.55" width="4.92" height="4" fill="none" />
      <rect x="844.44" y="481.55" width="0.98" height="2" fill="none" />
      <path
        d="M-65.12,595.9h1.71A29.51,29.51,0,0,1-62.17,590V588.9h-1.72A26.93,26.93,0,0,1-65.12,595.9Z"
        transform="translate(902.67 -104.35)"
        fill="none"
      />
      <path
        d="M-62.17,595.9V590a29.51,29.51,0,0,0-1.24,5.93Z"
        transform="translate(902.67 -104.35)"
        fill="none"
      />
      <path
        d="M-68.54,588.9h-.52v7h1A24.73,24.73,0,0,1-68.54,588.9Z"
        transform="translate(902.67 -104.35)"
        fill="none"
      />
      <path
        d="M-63.89,588.9h-4.65a24.73,24.73,0,0,0,.53,7h2.89A26.93,26.93,0,0,0-63.89,588.9Z"
        transform="translate(902.67 -104.35)"
        fill="none"
      />
      <path
        d="M-62.17,590c.21-.68.45-1.35.69-2-.24-.37-.47-.74-.69-1.12Z"
        transform="translate(902.67 -104.35)"
        fill="none"
      />
      <path
        d="M-61.48,587.94c1-2.78,2.18-5.53,3.25-8.28V567.9h-2.72c-.43.53-.84,1.09-1.22,1.64v17.28C-61.95,587.2-61.72,587.57-61.48,587.94Z"
        transform="translate(902.67 -104.35)"
        fill="none"
      />
      <path
        d="M-62.17,567.9v1.64c.38-.55.79-1.11,1.22-1.64Z"
        transform="translate(902.67 -104.35)"
        fill="none"
      />
      <path
        d="M-62.17,590v4.93h3.94V592a24.12,24.12,0,0,1-3.25-4.06C-61.72,588.62-62,589.29-62.17,590Z"
        transform="translate(902.67 -104.35)"
        fill="none"
      />
      <path
        d="M-58.23,592V579.66c-1.07,2.75-2.26,5.5-3.25,8.28A24.12,24.12,0,0,0-58.23,592Z"
        transform="translate(902.67 -104.35)"
        fill="none"
      />
      <line
        x1="452.62"
        y1="283.15"
        x2="453.55"
        y2="294.47"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="7"
        strokeDasharray="1"
      />
      <path
        d="M-297.39,118.52C-276.52,308.9-259.52,498.9-234.8,688.8"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#cbc5c6"
        strokeMiterlimit="10"
        strokeWidth="11"
      />
      <line
        x1="639.12"
        y1="283.75"
        x2="627.82"
        y2="284.93"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="7"
        strokeDasharray="1"
      />
      <line
        x1="636.44"
        y1="258.73"
        x2="625.14"
        y2="259.91"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="7"
        strokeDasharray="1"
      />
      <line
        x1="626.91"
        y1="171.52"
        x2="615.6"
        y2="172.56"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="7"
        strokeDasharray="1"
      />
      <path
        d="M-76.4,146c-190,18-378,34-569.93,51-83.78,8-166.6,16-249.2,22.7"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#575756"
        strokeMiterlimit="10"
        strokeWidth="25.3"
      />
      <path
        d="M-75.6,149.52c0-2.57,0-5.14-.05-7.7-.06-1.53-.14-3.06-.2-4.59L-897,211.33c-.07.33-.13.65-.18,1,0,5.3.12,10.59.18,15.88L-75.43,154C-75.53,152.54-75.58,151-75.6,149.52Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="2.17"
      />
      <path
        d="M-76.4,146l-1.89.17"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.26"
      />
      <path
        d="M-82.08,146.48c-188,17.74-374.23,33.59-564.25,50.42-82.5,7.88-164.06,15.76-245.41,22.39"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.26"
        strokeDasharray="3.81 3.81"
      />
      <path
        d="M-893.64,219.45l-1.89.15"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.26"
      />
      <path
        d="M-76.12,365C-262,383-446.06,399-633.89,416c-82,8-163.05,16-243.89,22.69"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#575756"
        strokeMiterlimit="10"
        strokeWidth="25.03"
      />
      <path
        d="M-75.34,368.58c0-2.56,0-5.13,0-7.7-.06-1.53-.14-3.06-.2-4.59L-879.26,430.4c-.06.32-.12.64-.17,1,0,5.29.12,10.58.17,15.88l804.08-74.14C-75.27,371.6-75.32,370.09-75.34,368.58Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="2.15"
      />
      <path
        d="M-76.12,365l-1.87.18"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.25"
      />
      <path
        d="M-81.74,365.55c-184,17.74-366.21,33.59-552.15,50.42-80.74,7.87-160.55,15.75-240.14,22.38"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.25"
        strokeDasharray="3.76 3.76"
      />
      <path
        d="M-875.91,438.51l-1.87.15"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.25"
      />
      <path
        d="M-629.69,694.9q-2.53-28.68-5-57.37t-4.92-57.27q-2.45-28.6-4.84-57.21t-4.77-57.21q-2.37-28.63-4.71-57.26t-4.67-57.35q-2.34-28.74-4.65-57.49c-1.55-19.22-2.94-38.46-4.79-57.65-1.83-19-3.65-38.07-5.32-57.12-1.65-18.86-3.14-37.74-4.32-56.63q-.43-6.89-.81-13.78"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#575756"
        strokeMiterlimit="10"
        strokeWidth="21.35"
      />
      <path
        d="M-636.21,691.24c4.56-.2,9.12-.39,13.71-.53l-48-580q-8.22-.24-16.43-.5,3.34,40.55,6.71,81.1.71,8.61,1.42,17.21,20,241.19,39.91,482.36Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.79"
      />
      <path
        d="M-629.22,697.38c0-.53-.09-1.06-.14-1.59"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.06"
      />
      <path
        d="M-629.64,692.6q-2.33-26-4.6-52.09-2.47-28.38-4.91-56.76T-644,527q-2.38-28.35-4.76-56.71t-4.7-56.75q-2.35-28.43-4.67-56.85t-4.65-57c-1.55-19-2.93-38.11-4.77-57.13s-3.66-37.74-5.32-56.62c-1.65-18.69-3.14-37.4-4.32-56.13q-.33-5.24-.63-10.47"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.06"
        strokeDasharray="3.2 3.2"
      />
      <path
        d="M-677.9,117.8l-.09-1.6"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.06"
      />
      <polygon
        points="245.87 100.68 217.18 103.5 216.64 89.11 242.98 86.89 245.87 100.68"
        fill="#575756"
      />
      <polygon
        points="226.21 104.68 224.21 86.55 236.51 85.23 238.34 103.11 226.21 104.68"
        fill="#575756"
      />
      <polygon
        points="262.81 319.15 237.62 321.53 238.21 307.49 260.6 305.53 262.81 319.15"
        fill="#575756"
      />
      <rect
        x="-649.03"
        y="615.27"
        width="27.12"
        height="14.18"
        transform="translate(-322.43 1183.95) rotate(175.92)"
        fill="#575756"
      />
      <path
        d="M-234,693.85q-3.51-28.58-7-57.16t-6.87-57.07q-3.42-28.5-6.79-57t-6.72-57q-3.34-28.53-6.66-57.06t-6.63-57.16q-3.32-28.65-6.61-57.3c-2.2-19.16-4.25-38.34-6.75-57.45s-4.95-37.92-7.27-56.9c-2.29-18.8-4.42-37.61-6.25-56.46q-.68-6.87-1.28-13.74"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#575756"
        strokeMiterlimit="10"
        strokeWidth="21.35"
      />
      <path
        d="M-240.64,690.41c4.55-.35,9.1-.69,13.68-1l-67.76-578c-5.48,0-11,0-16.44.06q4.74,40.41,9.47,80.82,1,8.58,2,17.15,28.17,240.36,56.35,480.72Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.79"
      />
      <path
        d="M-233.44,696.31l-.2-1.58"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.06"
      />
      <path
        d="M-234,691.55q-3.21-25.95-6.37-51.9-3.45-28.27-6.85-56.56T-254,526.58q-3.36-28.26-6.69-56.52t-6.64-56.56q-3.31-28.32-6.61-56.65t-6.59-56.79c-2.2-19-4.23-38-6.72-56.95-2.48-18.79-4.94-37.58-7.25-56.4-2.28-18.62-4.41-37.27-6.23-56q-.51-5.22-1-10.44"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.06"
        strokeDasharray="3.2 3.2"
      />
      <path
        d="M-301.88,118.73c-.05-.53-.1-1.06-.14-1.59"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.06"
      />
      <rect
        x="-306.95"
        y="159.44"
        width="20.47"
        height="14.19"
        transform="translate(884.75 -132.87) rotate(-5.67)"
        fill="#575756"
      />
      <polygon
        points="643.85 284.62 620.17 286.66 618.45 272.43 642.25 270.19 643.85 284.62"
        fill="#575756"
      />
      <rect x="220.15" y="94.55" width="1" height="1" fill="none" />
      <rect x="218.15" y="91.55" width="6" height="2" fill="none" />
      <rect
        x="-257.08"
        y="589.38"
        width="21.48"
        height="13.73"
        transform="translate(458.26 1105.86) rotate(175.43)"
        fill="#575756"
      />
      <rect
        x="-692.26"
        y="105.72"
        width="28.63"
        height="13.47"
        transform="translate(893.58 -149.65) rotate(-3.85)"
        fill="#958d8f"
      />
      <rect
        x="-894.38"
        y="430.69"
        width="28.63"
        height="14.67"
        transform="translate(-490.31 -504.96) rotate(-94.99)"
        fill="#958d8f"
      />
      <rect
        x="-904.95"
        y="630.16"
        width="29.84"
        height="20.08"
        transform="translate(-669.27 -322.64) rotate(-92.73)"
        fill="#958d8f"
      />
      <rect
        x="-646.52"
        y="676.24"
        width="29.84"
        height="21.48"
        transform="translate(-306.49 1315.63) rotate(175.64)"
        fill="#958d8f"
      />
      <rect
        x="-250.71"
        y="673.69"
        width="29.84"
        height="23.06"
        transform="translate(483.84 1282.02) rotate(175.64)"
        fill="#958d8f"
      />
      <rect
        x="-88.98"
        y="570.54"
        width="29.84"
        height="25.85"
        transform="translate(1415.23 521.35) rotate(86.88)"
        fill="#958d8f"
      />
      <rect
        x="-96.16"
        y="352.9"
        width="29.84"
        height="25.85"
        transform="translate(1193.75 303.95) rotate(83.99)"
        fill="#958d8f"
      />
      <rect
        x="-96.53"
        y="133.84"
        width="29.84"
        height="25.85"
        transform="translate(975.57 108.2) rotate(83.99)"
        fill="#958d8f"
      />
      <rect
        x="-315.21"
        y="107.55"
        width="29.84"
        height="18.35"
        transform="translate(311.21 150.31) rotate(175.89)"
        fill="#958d8f"
      />
      <line
        x1="238.6"
        y1="80.94"
        x2="221.5"
        y2="82.47"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="7"
        strokeDasharray="1"
      />
      <line
        x1="213.82"
        y1="89.05"
        x2="215.23"
        y2="105.62"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="7"
        strokeDasharray="1"
      />
      <rect
        x="-916.24"
        y="210.29"
        width="48.42"
        height="15.4"
        transform="translate(280.45 991.39) rotate(86.65)"
        fill="#958d8f"
      />
      <line
        x1="433.58"
        y1="67.84"
        x2="435.57"
        y2="85.28"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="7"
        strokeDasharray="1"
      />
      <line
        x1="263.41"
        y1="303.12"
        x2="264.77"
        y2="320.55"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="7"
        strokeDasharray="1"
      />
      <line
        x1="394.08"
        y1="518.11"
        x2="392.31"
        y2="500.71"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="7"
        strokeDasharray="1"
      />
      <path
        d="M-630.07,240.43s3.23,1,5.44-4.25,2.56-7.32.34-10.55-2.89-4.6-6.8-4.94-2.39-1.7-6.64-.17-4.6,1.19-8,2.89-2.73,0-5.79,4.94-2.55,6.13-2.55,10.55,1.19,10.22,8.85,10.39S-630.07,240.43-630.07,240.43Z"
        transform="translate(902.67 -104.35)"
        fill="#bdd366"
      />
      <image
        width="512"
        height="305"
        transform="translate(492.94 117.38) scale(0.21)"
        href={grass_11}
      />
      <image
        width="207"
        height="512"
        transform="translate(302.32 116.58) scale(0.11)"
        href={grass_12}
      />
      <image
        width="207"
        height="512"
        transform="translate(480.17 384.96) scale(0.09)"
        href={grass_13}
      />
      <image
        width="180"
        height="512"
        transform="translate(353.82 117.85) scale(0.11)"
        href={grass_14}
      />
      <image
        width="182"
        height="512"
        transform="translate(317.54 123.06) scale(0.11)"
        href={grass_15}
      />
      <image
        width="512"
        height="445"
        transform="translate(568.56 219.32) scale(0.11)"
        href={grass_16}
      />
      <image
        width="512"
        height="356"
        transform="translate(456.31 240.45) scale(0.12)"
        href={grass_17}
      />
      <image
        width="405"
        height="512"
        transform="translate(331.33 323.11) scale(0.09)"
        href={grass_18}
      />
      <image
        width="465"
        height="512"
        transform="translate(273.69 437.71) scale(0.13)"
        href={grass_19}
      />
      <image
        width="512"
        height="206"
        transform="translate(295.2 404.85) scale(0.17)"
        href={grass_110}
      />
      <image
        width="323"
        height="512"
        transform="translate(434.63 411.46) scale(0.06)"
        href={grass_111}
      />
      <image
        width="512"
        height="298"
        transform="translate(487.05 410.61) scale(0.08)"
        href={grass_112}
      />
      <image
        width="512"
        height="333"
        transform="translate(543.42 403.82) scale(0.09)"
        href={grass_113}
      />
      <image
        width="229"
        height="512"
        transform="translate(246.5 109.24) scale(0.21)"
        href={grass_114}
      />
      <image
        width="441"
        height="512"
        transform="translate(253.08 182.79) scale(0.11)"
        href={grass_115}
      />
      <image
        width="512"
        height="394"
        transform="translate(287.46 195.81) scale(0.11)"
        href={grass_116}
      />
      <image
        width="425"
        height="512"
        transform="translate(260.91 224.36) scale(0.12)"
        href={grass_117}
      />
      <use transform="translate(461.62 77.07) scale(0.06)" href="#a" />
      <use transform="translate(546.89 159.8) scale(0.06)" href="#a" />
      <use transform="translate(256.34 440.14) scale(0.06)" href="#a" />
      <use transform="translate(274.72 443.71) scale(0.06)" href="#a" />
      <use transform="translate(260.94 453.93) scale(0.06)" href="#a" />
      <use transform="translate(268.6 373.24) scale(0.06)" href="#a" />
      <use transform="translate(363.57 362.01) scale(0.06)" href="#a" />
      <use transform="translate(346.72 356.9) scale(0.06)" href="#a" />
      <use transform="translate(329.87 368.65) scale(0.06)" href="#a" />
      <use transform="translate(533.11 410.01) scale(0.06)" href="#a" />
      <use transform="translate(523.91 432.48) scale(0.06)" href="#a" />
      <use transform="translate(603.57 376.31) scale(0.06)" href="#a" />
      <use transform="translate(604.6 388.56) scale(0.06)" href="#a" />
      <use transform="translate(563.74 271.63) scale(0.06)" href="#a" />
      <use transform="translate(564.26 286.95) scale(0.06)" href="#a" />
      <use transform="translate(516.26 413.59) scale(0.06)" href="#a" />
      <use transform="matrix(-0.05, 0, 0, 0.06, 517.11, 220.74)" href="#a" />
      <use transform="matrix(-0.05, 0, 0, 0.06, 524.76, 230.44)" href="#a" />
      <use transform="matrix(-0.05, 0, 0, 0.06, 337.36, 194.7)" href="#a" />
      <use transform="matrix(0.06, 0, 0, 0.06, 245.83, 111.27)" href="#a" />
      <use transform="matrix(0.06, 0, 0, 0.06, 254.34, 130.67)" href="#a" />
      <use transform="matrix(0.06, 0, 0, 0.06, 259.78, 140.88)" href="#a" />
      <use transform="matrix(0.06, 0, 0, 0.06, 267.27, 151.44)" href="#a" />
      <use transform="matrix(0.06, 0, 0, 0.06, 261.83, 189.56)" href="#a" />
      <use transform="matrix(0.06, 0, 0, 0.06, 256.04, 201.14)" href="#a" />
      <use transform="matrix(0.06, 0, 0, 0.06, 544.38, 112.63)" href="#a" />
      <use transform="matrix(0.06, 0, 0, 0.06, 549.49, 125.56)" href="#a" />
      <use transform="matrix(0.06, 0, 0, 0.06, 280.89, 105.82)" href="#a" />
      <use transform="matrix(0.06, 0, 0, 0.06, 285.66, 114.67)" href="#a" />
      <use transform="matrix(0.06, 0, 0, 0.06, 290.42, 124.88)" href="#a" />
      <use transform="matrix(0.06, 0, 0, 0.06, 252.29, 95.61)" href="#a" />
      <use transform="matrix(-0.05, 0, 0, 0.06, 362.38, 338.19)" href="#a" />
      <use transform="matrix(-0.05, 0, 0, 0.06, 505.87, 389.76)" href="#a" />
      <use transform="matrix(-0.05, 0, 0, 0.06, 499.74, 401.51)" href="#a" />
      <use transform="matrix(-0.05, 0, 0, 0.06, 462.02, 411.75)" href="#a" />
      <use transform="matrix(-0.05, 0, 0, 0.06, 371.13, 96.68)" href="#a" />
      <image
        width="512"
        height="215"
        transform="translate(469.56 147.26) scale(0.19)"
        href={building_118}
      />
      <image
        width="484"
        height="512"
        transform="translate(320.18 185.71) scale(0.08)"
        href={building_119}
      />
      <image
        width="512"
        height="219"
        transform="translate(284.29 234.69) scale(0.23)"
        href={building_120}
      />
      <image
        width="284"
        height="512"
        transform="translate(246.6 103.08) scale(0.07)"
        href={building_121}
      />
      <image
        width="328"
        height="512"
        transform="translate(250.63 144.97) scale(0.07)"
        href={building_122}
      />
      <image
        width="280"
        height="512"
        transform="translate(273.76 164.16) scale(0.06)"
        href={building_123}
      />
      <image
        width="333"
        height="512"
        transform="translate(253.76 185.66) scale(0.07)"
        href={building_124}
      />
      <image
        width="443"
        height="512"
        transform="translate(257.65 232.57) scale(0.11)"
        href={building_125}
      />
      <image
        width="182"
        height="512"
        transform="translate(307.81 99.65) scale(0.14)"
        href={building_126}
      />
      <image
        width="182"
        height="512"
        transform="translate(356.83 95.99) scale(0.14)"
        href={building_127}
      />
      <image
        width="162"
        height="512"
        transform="translate(574.49 108.82) scale(0.16)"
        href={building_128}
      />
      <image
        width="512"
        height="213"
        transform="translate(495.34 72.52) scale(0.19)"
        href={building_129}
      />
      <image
        width="512"
        height="457"
        transform="translate(395.1 91.99) scale(0.11)"
        href={building_130}
      />
      <image
        width="512"
        height="367"
        transform="translate(396.29 119.53) scale(0.12)"
        href={building_131}
      />
      <image
        width="528"
        height="296"
        transform="translate(372.98 184.01) scale(0.24)"
        href={building_132}
      />
      <image
        width="512"
        height="307"
        transform="translate(519.62 186.19) scale(0.17)"
        href={building_133}
      />
      <image
        width="512"
        height="374"
        transform="translate(501.55 211.28) scale(0.15)"
        href={building_134}
      />
      <image
        width="377"
        height="512"
        transform="translate(332.39 305.48) scale(0.11)"
        href={building_135}
      />
      <image
        width="438"
        height="512"
        transform="translate(384.2 299.94) scale(0.14)"
        href={building_136}
      />
      <image
        width="304"
        height="512"
        transform="translate(474.82 294.2) scale(0.11)"
        href={building_137}
      />
      <image
        width="512"
        height="364"
        transform="translate(464.12 342.35) scale(0.11)"
        href={building_138}
      />
      <image
        width="512"
        height="331"
        transform="translate(265.04 310.66) scale(0.12)"
        href={building_139}
      />
      <image
        width="648"
        height="178"
        transform="translate(318.84 446.34) scale(0.24)"
        href={building_140}
      />
      <image
        width="512"
        height="468"
        transform="translate(393.81 371.94) scale(0.07)"
        href={building_141}
      />
      <image
        width="512"
        height="421"
        transform="translate(479.67 444.33) scale(0.08)"
        href={building_142}
      />
      <image
        width="208"
        height="512"
        transform="translate(444.72 393.93) scale(0.09)"
        href={building_143}
      />
      <image
        width="376"
        height="512"
        transform="translate(402.27 397.95) scale(0.06)"
        href={building_144}
      />
      <image
        width="438"
        height="512"
        transform="translate(581.41 316) scale(0.08)"
        href={building_145}
      />
      <image
        width="561"
        height="358"
        transform="translate(485.13 341.78) scale(0.24)"
        href={building_146}
      />
      <image
        width="218"
        height="512"
        transform="translate(608.72 371.57) scale(0.06)"
        href={building_147}
      />
      <image
        width="218"
        height="512"
        transform="translate(608.21 395.06) scale(0.06)"
        href={building_148}
      />
      <image
        width="512"
        height="413"
        transform="translate(541.78 284.39) scale(0.08)"
        href={building_149}
      />
      <image
        width="385"
        height="512"
        transform="translate(516.29 288.03) scale(0.08)"
        href={building_150}
      />
      <image
        width="227"
        height="512"
        transform="translate(525.78 426.59) scale(0.09)"
        href={building_151}
      />
      <image
        width="497"
        height="512"
        transform="translate(266.07 324.63) scale(0.09)"
        href={building_152}
      />
      <image
        width="512"
        height="423"
        transform="translate(552.93 424.8) scale(0.11)"
        href={building_153}
      />
      <image
        width="512"
        height="314"
        transform="translate(283.77 363.52) scale(0.21)"
        href={building_154}
      />
      <image
        width="263"
        height="512"
        transform="translate(270.5 387.02) scale(0.06)"
        href={building_155}
      />
      <image
        width="380"
        height="512"
        transform="translate(272.79 406.12) scale(0.06)"
        href={building_156}
      />
      <image
        width="442"
        height="512"
        transform="translate(445.43 295.6) scale(0.07)"
        href={building_157}
      />
      <text
        transform="translate(250.71 124.04)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        67
      </text>
      <text
        transform="translate(400.11 116.77)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        59
      </text>
      <text
        transform="translate(484.58 192.34)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        70
      </text>
      <text
        transform="translate(337.89 269.35)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        76
      </text>
      <text
        transform="translate(450.66 317.25)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        51
      </text>
      <text
        transform="translate(470.13 356.45)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        51а
      </text>
      <text
        transform="translate(478.62 315.61)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        49
      </text>
      <text
        transform="translate(520.99 307.86)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        47
      </text>
      <text
        transform="translate(611.36 387.68)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        23
      </text>
      <text
        transform="translate(607.12 338.01)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        43
      </text>
      <text
        transform="translate(561.82 297.99)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        45
      </text>
      <text
        transform="translate(315.14 334.07)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        57
      </text>
      <text
        transform="translate(267.47 321.53)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        59
      </text>
      <text
        transform="translate(348.64 347.14)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        55
      </text>
      <text
        transform="translate(503.07 231.32) scale(0.78 1)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        66
      </text>
      <text
        transform="translate(387.87 266.54)"
        fontSize="6"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        74
      </text>
      <text
        transform="translate(620.43 45.02) rotate(-5.63)"
        fontSize="10"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        Ленина
      </text>
      <text
        transform="translate(650.54 298.49) rotate(83.5)"
        fontSize="8"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        <tspan letterSpacing="-0.02em">С</tspan>
        <tspan x="4.44" y="0">
          ури
        </tspan>
        <tspan x="17.19" y="0" letterSpacing="-0.01em">
          к
        </tspan>
        <tspan x="20.98" y="0">
          ова
        </tspan>
      </text>
      <text
        transform="translate(241.66 442.02) rotate(83.5)"
        fontSize="8"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        <tspan letterSpacing="0em">В</tspan>
        <tspan x="4.36" y="0">
          ейнб
        </tspan>
        <tspan x="21.39" y="0" letterSpacing="-0.01em">
          а
        </tspan>
        <tspan x="25.16" y="0" letterSpacing="-0.01em">
          у
        </tspan>
        <tspan x="28.89" y="0">
          ма
        </tspan>
      </text>
      <text
        transform="translate(642.66 262.87) rotate(-4.71)"
        fontSize="8"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        Проспе
        <tspan x="25.98" y="0" letterSpacing="0.02em">
          к
        </tspan>
        <tspan x="29.94" y="0">
          т Мира
        </tspan>
      </text>
      <text
        transform="translate(285.31 540.26) rotate(-4.71)"
        fontSize="8"
        fontFamily="MyriadPro-Regular, Myriad Pro"
      >
        <tspan letterSpacing="0.01em">К</tspan>
        <tspan x="4.43" y="0" letterSpacing="0em">
          а
        </tspan>
        <tspan x="8.29" y="0" letterSpacing="0em">
          р
        </tspan>
        <tspan x="12.87" y="0">
          ла{" "}
        </tspan>
        <tspan x="22.48" y="0" letterSpacing="0em">
          М
        </tspan>
        <tspan x="28.94" y="0">
          ар
        </tspan>
        <tspan x="37.35" y="0" letterSpacing="-0.01em">
          к
        </tspan>
        <tspan x="41.14" y="0" letterSpacing="0em">
          с
        </tspan>
        <tspan x="44.74" y="0">
          а
        </tspan>
      </text>
      <polygon
        points="697.92 448.89 699.63 467.79 678.48 469.58 673.3 425.43 694.69 423.14 695.34 427.06 707.28 425.87 709.64 442.04 701.94 443.07 700.36 434.26 688.67 435.44 688.84 439.87 684.12 440.54 685.64 454.28 690.62 453.85 690.62 449.49 697.92 448.89"
        fill="#cbc5c6"
      />
      <polygon
        points="667.47 396.83 710.77 392.72 711.96 404.5 714.45 404.16 715.11 414.98 698.44 416.6 698.01 411.93 682.84 413.49 683.93 422.57 674.22 423.18 673.01 411.16 668.78 411.56 667.47 396.83"
        fill="#cbc5c6"
      />
      <polygon
        points="660.17 322.96 667.27 378.36 689.68 376.77 689.18 372.36 695.99 371.93 696.35 376.85 705.97 375.99 699.22 312.19 684.93 313.06 686.28 326.64 677.83 327.62 676.91 321.09 660.17 322.96"
        fill="#cbc5c6"
      />
      <polygon
        points="681.97 291.99 821.78 278.14 822.78 291.4 806.09 292.53 808.17 314.38 834.8 311.88 836.01 324.16 797.43 327.35 794.33 298.39 780.16 300.17 780.57 304.34 745.26 308.14 744.15 298.58 698.36 302.7 698.95 309.57 684.01 310.8 681.97 291.99"
        fill="#cbc5c6"
      />
      <polygon
        points="711.84 342.1 716.03 382.34 731.8 381.25 729.31 354.9 744.41 353.67 744.69 356.62 777.89 354.2 776.25 333.08 742.57 335.84 742.92 340.92 737.77 341.11 738.08 344.88 727.13 345.79 726.6 340.71 711.84 342.1"
        fill="#cbc5c6"
      />
      <polygon
        points="739.23 318.06 739.46 324.3 746.1 323.71 745.86 317.48 739.23 318.06"
        fill="#cbc5c6"
      />
      <polygon
        points="719.74 401.09 722.42 440.89 746.01 439.67 746.39 445.24 783.93 443.16 782.81 422.34 778.66 422.66 777.67 405.29 771.52 405.52 770.03 375.2 739.81 377.17 740.65 394.87 726.19 395.59 726.54 400.5 719.74 401.09"
        fill="#cbc5c6"
      />
      <polygon
        points="622.98 78.98 630.13 152.85 652.6 150.47 650.55 130.38 644.09 131.15 641.02 102.64 646.81 102.04 644.17 77.28 622.98 78.98"
        fill="#cbc5c6"
      />
      <polygon
        points="661.15 118.21 661.4 125.62 670.09 125.36 670.21 142.09 678.38 142.09 677.75 117.57 661.15 118.21"
        fill="#cbc5c6"
      />
      <polygon
        points="673.28 166.6 673.79 182.68 696.51 182.43 696.51 176.68 684.25 176.94 684.25 173.49 695.87 173.11 695.36 158.68 687.83 158.94 688.09 166.34 673.28 166.6"
        fill="#cbc5c6"
      />
      <polygon
        points="686.04 140.81 686.43 155.11 694.6 155.11 694.6 158.43 703.79 158.3 703.66 151.28 694.09 151.28 693.83 140.68 686.04 140.81"
        fill="#cbc5c6"
      />
      <polygon
        points="702.51 143.62 702.64 151.15 734.55 150.13 734.3 142.21 702.51 143.62"
        fill="#cbc5c6"
      />
      <path
        d="M-265.9,301l1.78,22.21,31.92,1,.25-7.23,7.83.08s3.41-1,3.32-5.62-3.83-4.51-3.83-4.51l-7.4.09v-5.45Z"
        transform="translate(902.67 -104.35)"
        fill="#cbc5c6"
      />
      <polygon
        points="674.55 225.32 676.09 248.94 711.32 247.79 711.19 228.51 700.72 228.89 700.34 216.25 713.75 215.62 713.75 208.72 699.57 208.98 698.81 183.32 689.75 183.7 690.89 216.64 687.19 216.64 687.19 224.43 674.55 225.32"
        fill="#cbc5c6"
      />
      <polygon
        points="718.21 227.49 718.47 247.15 753.83 246.38 752.81 223.91 718.21 227.49"
        fill="#cbc5c6"
      />
      <polygon
        points="718.72 199.91 718.72 209.11 726.64 208.85 726.6 200 718.72 199.91"
        fill="#cbc5c6"
      />
      <polygon
        points="738.55 198.13 739.06 214.3 762.89 213.28 761.7 195.57 738.55 198.13"
        fill="#cbc5c6"
      />
      <polygon
        points="662.64 76.6 663.49 89.87 724.6 84.94 723.75 71.32 662.64 76.6"
        fill="#cbc5c6"
      />
      <polygon
        points="706.38 109.11 706.72 126.64 713.87 126.3 713.87 121.02 729.7 120.34 728.85 107.75 706.38 109.11"
        fill="#cbc5c6"
      />
      <polygon
        points="710.81 164.09 710.81 181.45 725.62 181.45 725.62 177.19 734.81 177.02 734.3 163.57 710.81 164.09"
        fill="#cbc5c6"
      />
      <polygon
        points="734.64 160.51 735.32 173.79 767.15 173.11 766.64 159.66 734.64 160.51"
        fill="#cbc5c6"
      />
      <polygon
        points="766.98 154.21 767.49 167.66 806.3 165.62 805.45 152.17 766.98 154.21"
        fill="#cbc5c6"
      />
      <path
        d="M-96.88,244.71l.51,12.83,36.77-.68-.18-15.66h-9.53l-4.25-5.45H-81.9l-4.77,6.47L-97,242.9C-97,243.51-96.94,244.11-96.88,244.71Z"
        transform="translate(902.67 -104.35)"
        fill="#cbc5c6"
      />
      <path
        d="M-137.48,188.61-139,170.22l20.94-1.53,3.57,38.3-5.36.51.51,3.83-31.4,1.79-.77-9.45-6.64.51.51,13.79h4.6l.76,17.61,40.34-2-.76-10.47,3.19-.25-.38-7,7.15-.39,2,30.77-64.85,3.32-5.11-57.58,34-3.06"
        transform="translate(902.67 -104.35)"
        fill="#cbc5c6"
      />
      <polygon
        points="774.81 219.91 775.83 232.17 839.15 227.4 837.79 213.45 774.81 219.91"
        fill="#cbc5c6"
      />
      <polygon
        points="178.04 182.81 179.06 199.83 215.83 196.77 209.7 120.51 172.6 123.92 173.62 138.55 193.36 137.19 197.45 181.11 178.04 182.81"
        fill="#cbc5c6"
      />
      <polygon
        points="208 329.53 230.13 328.17 234.21 373.79 220.6 374.81 217.53 345.87 210.04 346.21 208 329.53"
        fill="#cbc5c6"
      />
      <polygon
        points="226.72 395.57 228.09 412.94 237.62 412.25 236.6 394.89 226.72 395.57"
        fill="#cbc5c6"
      />
      <polygon
        points="171.23 387.4 172.25 402.72 197.45 401.02 196.77 385.7 171.23 387.4"
        fill="#cbc5c6"
      />
      <polygon
        points="141.45 482.61 142.34 490.81 164.43 489.9 163.83 481.7 141.45 482.61"
        fill="#cbc5c6"
      />
      <polygon
        points="185.11 334.85 185.11 341.23 195.57 341.36 195.7 334.6 185.11 334.85"
        fill="#cbc5c6"
      />
      <polygon
        points="581.11 29.11 582.64 46.47 476.68 56.43 472.08 18.89 482.81 17.87 484.6 35.23 493.28 34.21 492.25 24 505.02 22.72 506.3 32.94 518.81 32.17 516.77 13.53 533.87 12.51 536.43 33.45 581.11 29.11"
        fill="#cbc5c6"
      />
      <polygon
        points="414.89 47.74 416.43 62.04 464.94 57.7 460.6 12.77 446.55 14.3 449.36 43.79 414.89 47.74"
        fill="#cbc5c6"
      />
      <polygon
        points="364.21 43.02 366.51 68.04 401.75 65.36 399.45 32.94 386.55 33.7 387.06 40.72 364.21 43.02"
        fill="#cbc5c6"
      />
      <polygon
        points="313.15 36.51 316.34 72.25 351.45 69.57 350.43 53.36 345.83 53.74 344.81 37.02 334.08 37.66 335.36 53.74 325.02 54.64 323.49 35.62 313.15 36.51"
        fill="#cbc5c6"
      />
      <polygon
        points="309.96 72.39 245.4 77.61 240.94 5.75 256.08 6.28 256.76 16.18 262.55 16.05 263.04 31.22 258.09 31.39 259.8 60.4 265.6 59.92 264.59 45.24 271.93 44.82 272.3 48.75 279.3 48.31 278.95 43.7 293.44 43.36 294.12 57.86 308.63 56.84 309.96 72.39"
        fill="#cbc5c6"
      />
      <path
        d="M-698.61,347.91l1,29.09-7.48.47.41,10.37-50.1,3.85-1.4-27,41.45-2.83-.12-7.32-22.76,1.58-2.55-32.26,7.89-.82,8.15-.58.11-3.84,34.88-3.16.33,4,10.52-.92,2.39,26s.91,20.44-21.9,25.26"
        transform="translate(902.67 -104.35)"
        fill="#cbc5c6"
      />
      <polygon
        points="148.05 260.17 148.84 275.85 140.4 275.83 140.52 283.95 133.09 284.36 133.76 291.74 82.82 293.16 84.68 313.14 60.62 313.73 59.05 293.18 19.01 294.8 19.52 277.06 46.84 276.05 46.68 282.06 57.41 282.09 57.51 271.95 81.98 271.68 82.35 281.74 91.72 281.8 91.16 275.6 126.14 274.7 125.26 261 148.05 260.17"
        fill="#cbc5c6"
      />
      <polygon
        points="24.34 157.26 60.15 156.41 61.04 187.28 53.88 187.49 54.44 222.1 60.59 221.85 62.82 257.21 39.41 258.76 37.53 223.25 25.77 223.25 24.34 157.26"
        fill="#cbc5c6"
      />
      <polygon
        points="93.28 142.3 156.94 130.04 158.3 135.83 142.98 138.89 143.32 145.7 148.85 145.53 155.23 210.64 132.25 212.43 129.45 185.62 110.3 187.15 114.38 224.94 89.62 227.75 84.51 167.49 128.68 162.89 127.92 155.23 132.25 154.72 132 148.85 94.72 154.47 93.28 142.3"
        fill="#cbc5c6"
      />
      <polygon
        points="113.87 223.15 114.38 229.02 139.4 226.72 138.64 220.85 113.87 223.15"
        fill="#cbc5c6"
      />
      <polygon
        points="67.4 225.87 67.92 235.06 90.72 233.87 89.7 224 67.4 225.87"
        fill="#cbc5c6"
      />
      <polygon
        points="189.87 25.87 190.89 41.53 209.96 40.51 208.94 23.83 189.87 25.87"
        fill="#cbc5c6"
      />
      <polygon
        points="202.47 55.15 202.72 60.77 189.19 61.79 189.45 67.15 171.83 68.43 172.09 75.83 178.47 75.32 179.23 81.7 145.28 85.02 143.49 67.66 147.45 67.02 145.4 46.47 141.06 46.98 139.49 30.3 141.87 29.96 140 5.45 155.15 3.92 160.43 55.66 186.3 53.45 186.64 56.68 202.47 55.15"
        fill="#cbc5c6"
      />
      <polygon
        points="117.7 39.49 118.89 53.96 132 53.45 130.81 38.81 117.7 39.49"
        fill="#cbc5c6"
      />
      <polygon
        points="113.79 64.51 116.51 87.83 136.43 85.45 135.06 67.4 124.34 68.08 123.49 63.49 113.79 64.51"
        fill="#cbc5c6"
      />
      <polygon
        points="86.81 67.15 88.6 90.13 105.19 89.11 103.4 66.13 86.81 67.15"
        fill="#cbc5c6"
      />
      <polygon
        points="61.28 68.43 63.06 93.19 82.47 91.4 81.7 84 75.32 84.51 73.79 67.15 61.28 68.43"
        fill="#cbc5c6"
      />
      <polygon
        points="18.89 52.09 19.66 61.53 13.02 61.79 13.02 94.21 23.49 93.45 23.49 97.53 47.23 96 43.66 49.79 18.89 52.09"
        fill="#cbc5c6"
      />
      <polygon
        points="55.4 12.26 56.68 27.83 77.36 25.28 77.87 28.34 91.92 26.81 89.87 8.43 55.4 12.26"
        fill="#cbc5c6"
      />
      <polygon
        points="171.57 337.7 174.64 371.4 156.6 373.45 155.4 368 122.55 371.75 118.47 338.21 160.85 333.28 161.53 338.89 171.57 337.7"
        fill="#cbc5c6"
      />
      <polygon
        points="132.94 386.21 133.62 398.98 113.19 400.51 113.7 410.21 99.06 411.4 97.36 388.77 132.94 386.21"
        fill="#cbc5c6"
      />
      <polygon
        points="56.34 423.32 57.87 439.15 69.11 438.47 68.6 432 75.75 431.49 76.77 445.45 79.32 445.28 83.06 490.04 104.51 488.34 99.23 429.11 104.17 428.6 103.15 419.23 56.34 423.32"
        fill="#cbc5c6"
      />
      <polygon
        points="102.3 354.38 103.49 371.57 66.21 374.3 69.45 409.7 54.3 411.4 49.7 363.75 65.19 362.21 64.68 358.13 102.3 354.38"
        fill="#cbc5c6"
      />
      <polygon
        points="64.51 445.79 67.92 493.45 72.51 493.11 74.38 514.72 28.43 518.98 25.87 497.7 40 496.34 40.51 499.92 58.89 498.21 58.21 494.64 50.21 495.32 46.47 446.3 64.51 445.79"
        fill="#cbc5c6"
      />
      <polygon
        points="43.23 415.15 44.43 428.94 3.57 432.68 2.21 418.55 43.23 415.15"
        fill="#cbc5c6"
      />
      <polygon
        points="3.4 346.72 50.38 343.15 52.26 367.32 34.89 369.53 34.04 362.55 5.11 364.77 3.4 346.72"
        fill="#cbc5c6"
      />
      <polygon
        points="5.11 456.68 5.45 466.55 22.3 465.53 21.79 456 5.11 456.68"
        fill="#cbc5c6"
      />
      <path
        d="M-337.2,621.37l2.11,16.77,37.1-3.41,1,13.28,17-1-2-22.13s.34-10.55-10.21-9.87-45.32,4.08-45.32,4.08Z"
        transform="translate(902.67 -104.35)"
        fill="#cbc5c6"
      />
      <polygon
        points="589.28 545.87 590.55 555.32 601.53 554.55 600.51 544.85 589.28 545.87"
        fill="#cbc5c6"
      />
      <polygon
        points="615.06 562.37 626.81 561.45 633.96 594.64 620.68 594.33 615.06 562.37"
        fill="#cbc5c6"
      />
      <polygon
        points="578.81 560.94 580.6 578.04 604.6 575.75 603.57 563.75 591.57 565.28 590.55 559.4 578.81 560.94"
        fill="#cbc5c6"
      />
      <polygon
        points="576.51 582.89 577.53 591.06 593.62 590.04 592.34 580.85 576.51 582.89"
        fill="#cbc5c6"
      />
      <polygon
        points="484.72 558.89 484.98 563.23 482.04 563.49 484.34 586.98 562.6 581.62 561.83 570.89 499.4 574.85 498.38 562.28 494.87 562.47 494.62 558.38 484.72 558.89"
        fill="#cbc5c6"
      />
      <polygon
        points="562.3 583.14 569.11 583.06 569.87 594.06 563.06 594.64 562.3 583.14"
        fill="#cbc5c6"
      />
      <polygon
        points="352.34 546.13 401.87 539.49 430.6 563.36 431.11 571.66 424.34 572.04 424.47 575.11 435.19 575.11 435.57 585.32 432.51 585.45 432.89 590.3 426 590.68 426 594.25 408.51 594.13 408.25 580.72 405.06 580.98 388.98 567.19 386.3 570 381.96 570 376.85 566.04 377.96 564.55 367.72 556.15 366.7 557.55 352.34 546.13"
        fill="#cbc5c6"
      />
      <polygon
        points="803.83 500 742.21 504.73 744.09 522.15 705.96 525.66 705.28 521.47 689.11 522.96 689.62 526.87 674.98 528.22 676 537.68 681.96 537.54 689.11 595.07 716.94 595.27 710.89 546.39 712.5 546.37 711.57 536.56 714.13 536.39 713.94 534.98 729.25 534.62 730.02 546.77 746.81 546.01 748.85 565.63 745.6 565.66 746.04 571.74 749.94 571.59 753.28 595.4 777.53 595.27 772.68 556.92 767.66 557.26 766.21 543.96 794.13 541.86 792.94 532.27 782.72 533.08 754.47 535.25 752.25 517.15 760.94 516.48 761.45 523.63 765.64 523.38 767.17 533.71 782.04 532.54 779.75 508.9 789.62 508.1 790.21 516.75 795.83 516.41 800.17 555.43 779.49 557.05 782.17 582.07 788.94 581.87 789.77 595.29 815.23 595.13 814.47 581.46 821.75 581.26 816.38 528.39 810.77 528.7 810.13 520.9 814.09 520.59 812.94 502.16 804.04 502.16 803.83 500"
        fill="#cbc5c6"
      />
      <polygon
        points="172.6 541.99 242.72 537.87 247.49 583.47 171.91 592.34 169.53 574.92 176 574.29 172.6 541.99"
        fill="#cbc5c6"
      />
      <polygon
        points="99.06 561.79 100 574.47 114.13 573.96 114.3 579.66 146.04 577.7 145.53 570.89 158.98 569.96 158.21 557.02 141.28 558.21 141.96 564.85 116.34 566.89 115.92 560.77 99.06 561.79"
        fill="#cbc5c6"
      />
      <ellipse
        cx="252.78"
        cy="75.38"
        rx="23.09"
        ry="22.62"
        fill="none"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="2.78"
      />
      <polygon
        points="244.63 97.78 252.31 109.73 260.28 97.71 244.63 97.78"
        fill="#020202"
      />
      <ellipse cx="252.78" cy="75.33" rx="21.71" ry="21.44" fill="#fcfcfc" />
      <polygon
        points="235.49 68.73 248.11 66.42 258.7 65.77 267.59 66.75 267.59 67.91 235.49 68.73"
        fill="#5f5f60"
      />
      <polyline
        points="235.49 68.77 267.59 66.79 269.8 72.58 269.82 73.11 267.59 67.95 236.82 69.68 235.55 69.15 235.55 68.79"
        fill="#353535"
      />
      <polygon
        points="267.58 67.94 269.82 73.1 268.71 73.24 265.59 68.06 267.58 67.94"
        fill="#161616"
      />
      <polygon
        points="237.85 69.59 237.63 83.74 265.59 84.08 265.59 68.06 237.85 69.59"
        fill="#8c8c8c"
      />
      <polygon
        points="265.59 84.08 268.75 82.18 268.71 73.24 265.59 68.06 265.59 84.08"
        fill="#5f5f60"
      />
      <rect x="248.28" y="70.87" width="5.5" height="4.12" fill="#5f5f60" />
      <polygon
        points="247.97 75.44 248.28 75 253.79 75 253.59 75.39 247.97 75.44"
        fill="#353535"
      />
      <rect
        x="251.32"
        y="71.24"
        width="1.88"
        height="1.26"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="251.32 74.85 251.32 72.5 252.27 72.5 253.21 72.5 253.17 74.84 252.29 74.85 251.32 74.85"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="252.27"
        y1="72.5"
        x2="252.29"
        y2="74.85"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <rect
        x="248.89"
        y="71.25"
        width="1.88"
        height="1.26"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="248.88 74.86 248.88 72.51 249.83 72.51 250.77 72.51 250.74 74.86 249.85 74.86 248.88 74.86"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="249.83"
        y1="72.51"
        x2="249.85"
        y2="74.86"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="253.79 70.27 253.79 70.95 248.27 70.95 248.27 70.28 253.79 70.27"
        fill="#353535"
      />
      <rect x="248.34" y="78.43" width="5.5" height="4.12" fill="#5f5f60" />
      <polygon
        points="248.03 82.99 248.33 82.55 253.85 82.55 253.65 82.94 248.03 82.99"
        fill="#353535"
      />
      <rect
        x="251.38"
        y="78.79"
        width="1.88"
        height="1.26"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="251.38 82.4 251.38 80.05 252.33 80.05 253.26 80.05 253.23 82.39 252.35 82.4 251.38 82.4"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="252.33"
        y1="80.05"
        x2="252.35"
        y2="82.4"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <rect
        x="248.94"
        y="78.8"
        width="1.88"
        height="1.26"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="248.94 82.41 248.94 80.06 249.89 80.06 250.83 80.06 250.79 82.41 249.91 82.41 248.94 82.41"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="249.89"
        y1="80.06"
        x2="249.91"
        y2="82.41"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="253.85 77.82 253.85 78.5 248.33 78.5 248.33 77.83 253.85 77.82"
        fill="#353535"
      />
      <rect x="242.69" y="71.23" width="3.15" height="4.12" fill="#5f5f60" />
      <polygon
        points="242.52 75.8 242.69 75.35 245.85 75.35 245.73 75.74 242.52 75.8"
        fill="#353535"
      />
      <rect
        x="243.28"
        y="71.52"
        width="1.88"
        height="1.26"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="243.27 75.12 243.28 72.77 244.22 72.77 245.16 72.77 245.13 75.12 244.24 75.12 243.27 75.12"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="244.22"
        y1="72.77"
        x2="244.24"
        y2="75.12"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="245.84 70.62 245.84 71.3 242.68 71.3 242.68 70.64 245.84 70.62"
        fill="#353535"
      />
      <rect x="242.7" y="78.48" width="3.15" height="4.12" fill="#5f5f60" />
      <polygon
        points="242.53 83.05 242.71 82.61 245.86 82.61 245.75 83 242.53 83.05"
        fill="#353535"
      />
      <rect
        x="243.29"
        y="78.77"
        width="1.88"
        height="1.26"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="243.28 82.38 243.29 80.03 244.24 80.03 245.17 80.03 245.14 82.37 244.26 82.38 243.28 82.38"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="244.24"
        y1="80.03"
        x2="244.26"
        y2="82.38"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="245.86 77.88 245.86 78.56 242.7 78.56 242.7 77.89 245.86 77.88"
        fill="#353535"
      />
      <rect x="239.11" y="78.48" width="3.15" height="4.12" fill="#5f5f60" />
      <polygon
        points="238.94 83.05 239.12 82.61 242.27 82.61 242.16 83 238.94 83.05"
        fill="#353535"
      />
      <rect
        x="239.7"
        y="78.77"
        width="1.88"
        height="1.26"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="239.69 82.38 239.7 80.03 240.65 80.03 241.58 80.03 241.55 82.37 240.67 82.38 239.69 82.38"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="240.65"
        y1="80.03"
        x2="240.67"
        y2="82.38"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="242.27 77.88 242.27 78.56 239.11 78.56 239.11 77.89 242.27 77.88"
        fill="#353535"
      />
      <rect x="256.57" y="78.37" width="3.15" height="4.12" fill="#5f5f60" />
      <polygon
        points="256.4 82.94 256.58 82.49 259.74 82.49 259.62 82.88 256.4 82.94"
        fill="#353535"
      />
      <rect
        x="257.16"
        y="78.65"
        width="1.88"
        height="1.26"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="257.15 82.26 257.16 79.91 258.11 79.91 259.04 79.91 259.01 82.26 258.13 82.26 257.15 82.26"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="258.11"
        y1="79.91"
        x2="258.13"
        y2="82.26"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="259.73 77.76 259.73 78.44 256.57 78.44 256.57 77.78 259.73 77.76"
        fill="#353535"
      />
      <rect x="260.76" y="78.38" width="3.15" height="4.12" fill="#5f5f60" />
      <polygon
        points="260.59 82.95 260.77 82.5 263.93 82.5 263.81 82.89 260.59 82.95"
        fill="#353535"
      />
      <rect
        x="261.35"
        y="78.67"
        width="1.88"
        height="1.26"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="261.35 82.28 261.35 79.92 262.3 79.92 263.24 79.92 263.2 82.27 262.32 82.27 261.35 82.28"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="262.3"
        y1="79.92"
        x2="262.32"
        y2="82.27"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="263.92 77.78 263.92 78.45 260.76 78.45 260.76 77.79 263.92 77.78"
        fill="#353535"
      />
      <rect x="256.63" y="70.6" width="3.15" height="4.12" fill="#5f5f60" />
      <polygon
        points="256.46 75.17 256.64 74.72 259.79 74.72 259.68 75.12 256.46 75.17"
        fill="#353535"
      />
      <rect
        x="257.22"
        y="70.89"
        width="1.88"
        height="1.26"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="257.21 74.5 257.22 72.14 258.17 72.14 259.1 72.14 259.07 74.49 258.19 74.49 257.21 74.5"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="258.17"
        y1="72.14"
        x2="258.19"
        y2="74.49"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="259.79 70 259.79 70.67 256.63 70.67 256.63 70.01 259.79 70"
        fill="#353535"
      />
      <rect x="260.73" y="70.58" width="3.15" height="4.12" fill="#5f5f60" />
      <polygon
        points="260.56 75.15 260.74 74.7 263.89 74.7 263.78 75.1 260.56 75.15"
        fill="#353535"
      />
      <rect
        x="261.32"
        y="70.87"
        width="1.88"
        height="1.26"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="261.31 74.48 261.32 72.12 262.27 72.12 263.2 72.12 263.17 74.47 262.29 74.47 261.31 74.48"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="262.27"
        y1="72.12"
        x2="262.29"
        y2="74.47"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="263.89 69.98 263.89 70.66 260.73 70.66 260.73 69.99 263.89 69.98"
        fill="#353535"
      />
      <rect x="239.2" y="71.25" width="3.15" height="4.12" fill="#5f5f60" />
      <polygon
        points="239.03 75.81 239.2 75.37 242.36 75.37 242.24 75.76 239.03 75.81"
        fill="#353535"
      />
      <rect
        x="239.79"
        y="71.54"
        width="1.88"
        height="1.26"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="239.78 75.14 239.78 72.79 240.73 72.79 241.67 72.79 241.63 75.14 240.75 75.14 239.78 75.14"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="240.73"
        y1="72.79"
        x2="240.75"
        y2="75.14"
        fill="#5b5b57"
        stroke="#2d2d2b"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="242.35 70.64 242.35 71.32 239.19 71.32 239.19 70.66 242.35 70.64"
        fill="#353535"
      />
      <polygon
        points="237.67 83.75 237.71 69.51 238.81 69.51 238.73 83.71 237.67 83.75"
        fill="#5f5f60"
      />
      <polygon
        points="254.63 68.68 254.44 83.94 255.87 83.98 256.08 68.7 254.63 68.68"
        fill="#5f5f60"
      />
      <polygon
        points="256.08 68.7 256.08 68.58 254.63 68.68 256.08 68.7"
        fill="#5f5f60"
      />
      <polygon
        points="264.38 68.1 264.19 84.09 265.62 84.13 265.84 68.12 264.38 68.1"
        fill="#353535"
      />
      <polygon
        points="265.84 68.12 265.83 68 264.38 68.1 265.84 68.12"
        fill="#353535"
      />
      <polygon
        points="246.18 69.13 246.1 83.84 247.41 83.82 247.35 69.15 246.18 69.13"
        fill="#5f5f60"
      />
      <polygon
        points="247.35 69.15 247.35 69.06 246.18 69.13 247.35 69.15"
        fill="#5f5f60"
      />
      <ellipse
        cx="277.02"
        cy="284.21"
        rx="22.84"
        ry="22.37"
        fill="none"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="2.75"
      />
      <polygon
        points="268.96 306.36 276.55 318.18 284.44 306.29 268.96 306.36"
        fill="#020202"
      />
      <ellipse cx="277.02" cy="284.16" rx="21.48" ry="21.21" fill="#fcfcfc" />
      <polygon
        points="262.36 273.7 295.7 281.37 295.72 282.1 262.36 273.7"
        fill="#41241a"
      />
      <polygon
        points="262.36 273.7 262.38 274.72 295.72 282.1 262.36 273.7"
        fill="#726c6a"
      />
      <polygon
        points="262.38 274.72 262.42 276.29 295.31 282.49 295.32 282 262.38 274.72"
        fill="#b3b0ab"
      />
      <polygon
        points="262.42 276.29 262.55 283.93 295.39 286.22 295.31 282.49 262.42 276.29"
        fill="#949289"
      />
      <polygon
        points="262.55 283.93 262.4 292.26 295.34 290.16 295.39 286.22 262.55 283.93"
        fill="#9a6150"
      />
      <polygon
        points="261.34 292.38 262.4 292.26 295.34 290.16 295.66 290 295.67 290.61 262.5 293.71 261.4 293.58 261.34 292.38"
        fill="#57473d"
      />
      <polygon
        points="262.4 292.26 261.34 292.38 261.16 273.83 262.36 273.7 262.55 283.93 262.4 292.26"
        fill="#827b70"
      />
      <polygon
        points="295.32 282 295.66 290 295.34 290.16 295.32 282"
        fill="#827b70"
      />
      <polygon
        points="262.47 278.2 262.5 278.81 295.32 283.68 295.31 283.35 262.47 278.2"
        fill="#bab5aa"
      />
      <path
        d="M-632.41,383.43a2.61,2.61,0,0,1,1.4-.15,2.62,2.62,0,0,1,1.19.55l0,4.18h-2.54Z"
        transform="translate(902.67 -104.35)"
        fill="#827b70"
      />
      <polygon
        points="272.52 283.4 271.44 283.4 270.64 283.4 270.64 280.88 271.47 280.88 272.52 280.88 272.52 283.4"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polyline
        points="271.44 280.88 271.44 281.52 271.44 283.4"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="270.64"
        y1="281.49"
        x2="271.44"
        y2="281.5"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <path
        d="M-630.15,385.23v-.87l-.05-.08a1.44,1.44,0,0,0-1.83,0v1"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <path
        d="M-637.23,382.74a2.93,2.93,0,0,1,1.53-.16,2.92,2.92,0,0,1,1.29.59l0,4.5h-2.77Z"
        transform="translate(902.67 -104.35)"
        fill="#827b70"
      />
      <polygon
        points="267.9 283.04 266.72 283.04 265.85 283.04 265.85 280.33 266.75 280.33 267.9 280.33 267.9 283.04"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polyline
        points="266.72 280.33 266.72 281.02 266.72 283.04"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="265.85"
        y1="280.99"
        x2="266.72"
        y2="280.99"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <path
        d="M-634.77,384.68v-.94l-.06-.08a1.58,1.58,0,0,0-2,0v1"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <path
        d="M-628.17,384.19a2.24,2.24,0,0,1,1.26-.13,2.16,2.16,0,0,1,1.06.49l0,3.75h-2.28Z"
        transform="translate(902.67 -104.35)"
        fill="#827b70"
      />
      <polygon
        points="276.52 283.72 275.56 283.72 274.83 283.72 274.83 281.46 275.58 281.46 276.52 281.46 276.52 283.72"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <polyline
        points="275.56 281.45 275.56 282.03 275.56 283.72"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="274.83"
        y1="282"
        x2="275.55"
        y2="282.01"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <path
        d="M-626.14,385.81V385l-.05-.07a1.29,1.29,0,0,0-1.64,0v.88"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <path
        d="M-624.53,384.75a2,2,0,0,1,1.15-.13,2,2,0,0,1,1,.48v3.63h-2.09Z"
        transform="translate(902.67 -104.35)"
        fill="#827b70"
      />
      <polygon
        points="279.99 284.15 279.11 284.15 278.45 284.15 278.45 281.96 279.13 281.96 279.99 281.96 279.99 284.15"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <polyline
        points="279.11 281.96 279.11 282.52 279.11 284.15"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="278.45"
        y1="282.49"
        x2="279.11"
        y2="282.5"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <path
        d="M-622.68,386.31v-.76l-.05-.06a1.13,1.13,0,0,0-1.5,0v.84"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <path
        d="M-621.34,385.27a1.75,1.75,0,0,1,1-.11,1.82,1.82,0,0,1,.87.43l0,3.27h-1.85Z"
        transform="translate(902.67 -104.35)"
        fill="#827b70"
      />
      <polygon
        points="282.97 284.3 282.19 284.3 281.6 284.3 281.6 282.33 282.21 282.33 282.97 282.33 282.97 284.3"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <polyline
        points="282.19 282.33 282.19 282.83 282.19 284.3"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="281.6"
        y1="282.81"
        x2="282.19"
        y2="282.82"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <path
        d="M-619.7,386.68V386l0-.06a1,1,0,0,0-1.33,0v.76"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <path
        d="M-618.57,385.86a1.51,1.51,0,0,1,.91-.1,1.46,1.46,0,0,1,.76.38v2.91h-1.64Z"
        transform="translate(902.67 -104.35)"
        fill="#827b70"
      />
      <polygon
        points="285.56 284.52 284.86 284.52 284.34 284.52 284.34 282.77 284.88 282.77 285.56 282.77 285.56 284.52"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polyline
        points="284.86 282.76 284.86 283.21 284.86 284.52"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="284.34"
        y1="283.19"
        x2="284.86"
        y2="283.19"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <path
        d="M-617.11,387.12v-.61l0-.06a.88.88,0,0,0-1.18,0v.68"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <path
        d="M-616.08,386.26a1.48,1.48,0,0,1,.84-.09,1.44,1.44,0,0,1,.71.35v2.68h-1.52Z"
        transform="translate(902.67 -104.35)"
        fill="#827b70"
      />
      <polygon
        points="287.94 284.68 287.3 284.68 286.82 284.68 286.82 283.07 287.32 283.07 287.94 283.07 287.94 284.68"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polyline
        points="287.3 283.07 287.3 283.48 287.3 284.68"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="286.82"
        y1="283.46"
        x2="287.3"
        y2="283.46"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <path
        d="M-614.73,387.42v-.56l0-.05a.82.82,0,0,0-1.1,0v.62"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <path
        d="M-613.88,386.84a1.05,1.05,0,0,1,.68-.08,1.13,1.13,0,0,1,.58.3v2.29h-1.24Z"
        transform="translate(902.67 -104.35)"
        fill="#827b70"
      />
      <polygon
        points="289.89 284.86 289.36 284.86 288.97 284.86 288.97 283.48 289.38 283.48 289.89 283.48 289.89 284.86"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <polyline
        points="289.36 283.48 289.36 283.83 289.36 284.86"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <line
        x1="288.97"
        y1="283.81"
        x2="289.36"
        y2="283.81"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <path
        d="M-612.78,387.83v-.48l0-.05a.64.64,0,0,0-.89,0v.54"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <path
        d="M-612.09,387.11a1,1,0,0,1,.63-.08,1.16,1.16,0,0,1,.53.28v2.09h-1.14Z"
        transform="translate(902.67 -104.35)"
        fill="#827b70"
      />
      <polygon
        points="291.59 284.92 291.11 284.92 290.75 284.92 290.75 283.66 291.12 283.66 291.59 283.66 291.59 284.92"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <polyline
        points="291.11 283.66 291.11 283.98 291.11 284.92"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <line
        x1="290.75"
        y1="283.97"
        x2="291.11"
        y2="283.97"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <path
        d="M-611.08,388v-.44l0,0a.6.6,0,0,0-.82,0V388"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <path
        d="M-610.37,387.34a.78.78,0,0,1,.55-.07,1,1,0,0,1,.47.26v2h-1Z"
        transform="translate(902.67 -104.35)"
        fill="#827b70"
      />
      <polygon
        points="293.19 285.04 292.76 285.04 292.45 285.04 292.45 283.84 292.78 283.84 293.19 283.84 293.19 285.04"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <polyline
        points="292.76 283.84 292.76 284.14 292.76 285.04"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <line
        x1="292.45"
        y1="284.13"
        x2="292.77"
        y2="284.13"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <path
        d="M-609.48,388.19v-.41l0,0a.5.5,0,0,0-.72,0v.46"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <path
        d="M-608.81,387.53a.69.69,0,0,1,.48-.07.81.81,0,0,1,.4.25v1.89h-.87Z"
        transform="translate(902.67 -104.35)"
        fill="#827b70"
      />
      <polygon
        points="294.63 285.13 294.26 285.13 293.99 285.13 293.99 283.99 294.27 283.99 294.63 283.99 294.63 285.13"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <polyline
        points="294.26 283.99 294.26 284.28 294.26 285.13"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <line
        x1="293.99"
        y1="284.27"
        x2="294.26"
        y2="284.27"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <path
        d="M-608,388.34V388l0,0a.4.4,0,0,0-.62,0v.44"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#70443e"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <polygon
        points="268.77 277.63 268.72 284.34 269.76 284.36 269.76 277.68 268.77 277.63"
        fill="#bab5aa"
      />
      <polygon
        points="268.77 277.63 268.77 277.46 269.76 277.65 269.76 277.68 268.77 277.63"
        fill="#bab5aa"
      />
      <polygon
        points="269.76 284.36 269.76 284.43 268.72 284.35 268.72 284.34 269.76 284.36"
        fill="#bab5aa"
      />
      <polygon
        points="277.03 279.19 276.98 284.93 278.02 284.94 278.02 279.23 277.03 279.19"
        fill="#bab5aa"
      />
      <polygon
        points="277.03 279.19 277.04 279.04 278.02 279.21 278.02 279.23 277.03 279.19"
        fill="#bab5aa"
      />
      <polygon
        points="278.02 284.94 278.02 285 276.98 284.94 276.98 284.93 278.02 284.94"
        fill="#bab5aa"
      />
      <polygon
        points="280.45 279.8 280.41 285.15 281.17 285.17 281.17 279.84 280.45 279.8"
        fill="#bab5aa"
      />
      <polygon
        points="280.45 279.8 280.45 279.66 281.18 279.82 281.17 279.84 280.45 279.8"
        fill="#bab5aa"
      />
      <polygon
        points="281.17 285.17 281.17 285.22 280.41 285.17 280.41 285.15 281.17 285.17"
        fill="#bab5aa"
      />
      <polygon
        points="273.27 278.49 273.21 284.65 274.25 284.67 274.25 278.53 273.27 278.49"
        fill="#bab5aa"
      />
      <polygon
        points="273.27 278.49 273.27 278.33 274.25 278.51 274.25 278.53 273.27 278.49"
        fill="#bab5aa"
      />
      <polygon
        points="274.25 284.67 274.25 284.74 273.21 284.67 273.21 284.65 274.25 284.67"
        fill="#bab5aa"
      />
      <polygon
        points="285.9 280.83 285.88 285.53 286.42 285.54 286.42 280.87 285.9 280.83"
        fill="#bab5aa"
      />
      <polygon
        points="285.9 280.83 285.91 280.71 286.42 280.85 286.42 280.87 285.9 280.83"
        fill="#bab5aa"
      />
      <path
        d="M-616.79,389.89"
        transform="translate(902.67 -104.35)"
        fill="#bab5aa"
      />
      <polygon
        points="286.42 280.85 286.42 280.81 285.91 280.71 286.42 280.85"
        fill="#bab5aa"
      />
      <polygon
        points="286.42 285.54 286.42 285.59 285.88 285.56 285.88 285.53 286.42 285.54"
        fill="#bab5aa"
      />
      <polygon
        points="288.27 281.25 288.25 285.69 288.67 285.7 288.67 281.28 288.27 281.25"
        fill="#bab5aa"
      />
      <polygon
        points="288.27 281.25 288.27 281.14 288.67 281.26 288.67 281.28 288.27 281.25"
        fill="#bab5aa"
      />
      <path
        d="M-614.42,390.05"
        transform="translate(902.67 -104.35)"
        fill="#bab5aa"
      />
      <polygon
        points="288.67 281.26 288.67 281.23 288.27 281.14 288.67 281.26"
        fill="#bab5aa"
      />
      <polygon
        points="288.67 285.7 288.67 285.75 288.25 285.72 288.25 285.69 288.67 285.7"
        fill="#bab5aa"
      />
      <polygon
        points="290.11 281.6 290.09 285.82 290.5 285.83 290.5 281.63 290.11 281.6"
        fill="#bab5aa"
      />
      <polygon
        points="290.11 281.6 290.11 281.49 290.5 281.61 290.5 281.63 290.11 281.6"
        fill="#bab5aa"
      />
      <path
        d="M-612.58,390.18"
        transform="translate(902.67 -104.35)"
        fill="#bab5aa"
      />
      <polygon
        points="290.5 281.61 290.5 281.58 290.11 281.49 290.5 281.61"
        fill="#bab5aa"
      />
      <polygon
        points="290.5 285.83 290.5 285.88 290.09 285.85 290.09 285.82 290.5 285.83"
        fill="#bab5aa"
      />
      <polygon
        points="291.81 281.92 291.78 285.94 292.2 285.96 292.2 281.94 291.81 281.92"
        fill="#bab5aa"
      />
      <polygon
        points="291.81 281.92 291.81 281.81 292.2 281.93 292.2 281.94 291.81 281.92"
        fill="#bab5aa"
      />
      <path
        d="M-610.88,390.3"
        transform="translate(902.67 -104.35)"
        fill="#bab5aa"
      />
      <polygon
        points="292.2 281.93 292.2 281.9 291.81 281.81 292.2 281.93"
        fill="#bab5aa"
      />
      <polygon
        points="292.2 285.96 292.2 286 291.78 285.97 291.78 285.94 292.2 285.96"
        fill="#bab5aa"
      />
      <polygon
        points="293.41 282.22 293.39 286.06 293.8 286.07 293.8 282.24 293.41 282.22"
        fill="#bab5aa"
      />
      <polygon
        points="293.41 282.22 293.41 282.12 293.8 282.23 293.8 282.24 293.41 282.22"
        fill="#bab5aa"
      />
      <path
        d="M-609.28,390.42"
        transform="translate(902.67 -104.35)"
        fill="#bab5aa"
      />
      <polygon
        points="293.8 282.23 293.8 282.2 293.41 282.12 293.8 282.23"
        fill="#bab5aa"
      />
      <polygon
        points="293.8 286.07 293.8 286.11 293.39 286.08 293.39 286.06 293.8 286.07"
        fill="#bab5aa"
      />
      <polygon
        points="294.89 282.5 294.9 286.16 295.34 286.17 295.31 282.52 294.89 282.5"
        fill="#bab5aa"
      />
      <polygon
        points="294.89 282.5 294.89 282.4 295.31 282.5 295.31 282.52 294.89 282.5"
        fill="#bab5aa"
      />
      <path
        d="M-607.76,390.52"
        transform="translate(902.67 -104.35)"
        fill="#bab5aa"
      />
      <polygon
        points="295.31 282.5 295.31 282.48 294.89 282.4 295.31 282.5"
        fill="#bab5aa"
      />
      <polygon
        points="295.34 286.17 295.34 286.21 294.9 286.18 294.9 286.16 295.34 286.17"
        fill="#bab5aa"
      />
      <polygon
        points="283.39 280.36 283.37 285.35 283.91 285.36 283.91 280.39 283.39 280.36"
        fill="#bab5aa"
      />
      <polygon
        points="283.39 280.36 283.39 280.23 283.91 280.37 283.91 280.39 283.39 280.36"
        fill="#bab5aa"
      />
      <path
        d="M-619.3,389.71"
        transform="translate(902.67 -104.35)"
        fill="#bab5aa"
      />
      <polygon
        points="283.91 280.37 283.91 280.33 283.39 280.23 283.91 280.37"
        fill="#bab5aa"
      />
      <polygon
        points="283.91 285.36 283.91 285.42 283.37 285.38 283.37 285.35 283.91 285.36"
        fill="#bab5aa"
      />
      <polygon
        points="262.4 276.28 264.04 276.59 264.23 284.06 262.59 283.94 262.4 276.28"
        fill="#bab5aa"
      />
      <ellipse
        cx="390.55"
        cy="220.11"
        rx="22.98"
        ry="22.51"
        fill="none"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="2.77"
      />
      <polygon
        points="382.44 242.4 390.08 254.29 398.02 242.33 382.44 242.4"
        fill="#020202"
      />
      <ellipse cx="390.55" cy="220.06" rx="21.61" ry="21.34" fill="#fcfcfc" />
      <polygon
        points="377.54 213.37 392.05 212.79 392.34 232.35 377.24 232.38 377.54 213.37"
        fill="#6eafa7"
      />
      <polygon
        points="392.05 212.79 392.02 211.55 395.09 209.26 398.45 209.12 401.63 211.2 402.09 232.43 392.34 232.35 392.05 212.79"
        fill="#6eafa7"
      />
      <polygon
        points="392.04 214.73 379.08 215.26 378.91 232.38 377.13 232.38 377.36 213.3 392.05 212.78 392.04 214.73"
        fill="#cacad4"
      />
      <line
        x1="378.06"
        y1="213.44"
        x2="391.85"
        y2="212.87"
        fill="#fff"
        stroke="#4f301a"
        strokeMiterlimit="10"
        strokeWidth="0.3"
      />
      <line
        x1="378.02"
        y1="232.38"
        x2="378.23"
        y2="214.76"
        fill="#fff"
        stroke="#4f301a"
        strokeMiterlimit="10"
        strokeWidth="0.34"
      />
      <path
        d="M-524.58,319.29a6.71,6.71,0,0,1-.24-1.5c0-.13.08-.37.25-.42a.3.3,0,0,1,.19,0,1.56,1.56,0,0,1,.13.13.71.71,0,0,1,.13.41c0,.56-.18,1.4-.18,1.4Z"
        transform="translate(902.67 -104.35)"
        fill="#4f301a"
      />
      <line
        x1="392.26"
        y1="209.91"
        x2="394.9"
        y2="207.79"
        fill="#606263"
        stroke="#cccfd2"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <line
        x1="393.06"
        y1="210.56"
        x2="393.03"
        y2="209.3"
        fill="none"
        stroke="#cccfd2"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <line
        x1="393.71"
        y1="210.01"
        x2="393.66"
        y2="208.77"
        fill="none"
        stroke="#cccfd2"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <line
        x1="394.32"
        y1="209.52"
        x2="394.29"
        y2="208.29"
        fill="none"
        stroke="#cccfd2"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <line
        x1="398.57"
        y1="207.95"
        x2="401.47"
        y2="209.69"
        fill="none"
        stroke="#cccfd2"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <line
        x1="399.18"
        y1="209.48"
        x2="399.21"
        y2="208.33"
        fill="none"
        stroke="#cccfd2"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <line
        x1="399.91"
        y1="210.04"
        x2="399.94"
        y2="208.78"
        fill="none"
        stroke="#cccfd2"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <line
        x1="400.51"
        y1="210.37"
        x2="400.56"
        y2="209.15"
        fill="none"
        stroke="#cccfd2"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <rect x="395.31" y="207.77" width="2.99" height="0.3" fill="#897f77" />
      <polygon
        points="395.03 209.23 392.26 211.47 392.06 211.24 394.83 209 395.03 209.23"
        fill="#897f77"
      />
      <polygon
        points="401.35 211.22 398.37 209.23 398.55 208.98 401.52 210.96 401.35 211.22"
        fill="#897f77"
      />
      <ellipse cx="396.92" cy="212.26" rx="1.33" ry="1.16" fill="#cccfd2" />
      <polygon
        points="391.71 214.06 392.07 214.57 392.49 214.09 392.43 208.78 392.43 208.55 391.96 208.11 391.58 208.54 391.71 214.06"
        fill="#cccfd2"
      />
      <polygon
        points="394.86 211.32 395.22 211.82 395.64 211.34 395.58 206.03 395.58 205.8 395.11 205.36 394.73 205.79 394.86 211.32"
        fill="#cccfd2"
      />
      <polygon
        points="397.98 211.3 398.34 211.81 398.75 211.32 398.7 206.01 398.7 205.78 398.23 205.35 397.84 205.78 397.98 211.3"
        fill="#cccfd2"
      />
      <polygon
        points="401.35 213.8 401.7 214.31 402.12 213.82 402.07 208.52 402.06 208.29 401.6 207.85 401.21 208.28 401.35 213.8"
        fill="#cccfd2"
      />
      <path
        d="M-507.24,314.57a1.75,1.75,0,0,1,.71-.47,2,2,0,0,1,1.07,0,2.22,2.22,0,0,1,.87.39l0,.8-.23-.11a2.81,2.81,0,0,0-1-.26,1.86,1.86,0,0,0-1.22.49Z"
        transform="translate(902.67 -104.35)"
        fill="#cccfd2"
      />
      <rect x="395.45" y="208.05" width="2.51" height="1.34" fill="#cccfd2" />
      <line
        x1="392.16"
        y1="232.35"
        x2="392.06"
        y2="213.99"
        fill="#fff"
        stroke="#4f301a"
        strokeMiterlimit="10"
        strokeWidth="0.35"
      />
      <path
        d="M-510.75,318.53A7.55,7.55,0,0,1-511,317c0-.14.08-.39.25-.45a.28.28,0,0,1,.18,0l.13.13a.73.73,0,0,1,.14.43c0,.58-.15,1.46-.15,1.46Z"
        transform="translate(902.67 -104.35)"
        fill="#4f301a"
      />
      <polygon
        points="380.58 218.07 380.23 218.07 380.17 215.97 383.07 215.9 383.09 217.99 382.67 217.99 382.66 216.37 380.59 216.44 380.58 218.07"
        fill="#cccfd2"
      />
      <path
        d="M-520,325.55l-2.2,0,.08-3.91a1.73,1.73,0,0,1,2.06,0Z"
        transform="translate(902.67 -104.35)"
        fill="#6a5942"
      />
      <rect
        x="-522.56"
        y="322.84"
        width="3"
        height="2.01"
        transform="translate(60.28 -303.11) rotate(-89.72)"
        fill="none"
        stroke="#4f443d"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="381.69"
        y1="217.99"
        x2="381.67"
        y2="221"
        fill="none"
        stroke="#4f443d"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="381.68"
        y1="218.54"
        x2="380.6"
        y2="218.53"
        fill="none"
        stroke="#4f443d"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="380.27 221.2 382.8 221.19 382.81 221.6 382.7 221.61 382.7 221.82 382.08 221.83 382.08 221.62 381.03 221.62 381.03 221.81 380.42 221.82 380.42 221.61 380.27 221.61 380.27 221.2"
        fill="#cccfd2"
      />
      <polygon
        points="384.5 217.99 384.14 217.99 384.09 215.89 386.99 215.82 387.01 217.91 386.59 217.91 386.58 216.29 384.51 216.36 384.5 217.99"
        fill="#cccfd2"
      />
      <path
        d="M-516,325.47h-2.2l.08-3.91a1.73,1.73,0,0,1,2.06,0Z"
        transform="translate(902.67 -104.35)"
        fill="#6a5942"
      />
      <rect
        x="-518.64"
        y="322.75"
        width="3"
        height="2.01"
        transform="matrix(0, -1, 1, 0, 64.26, -299.27)"
        fill="none"
        stroke="#4f443d"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="385.61"
        y1="217.9"
        x2="385.59"
        y2="220.92"
        fill="none"
        stroke="#4f443d"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="385.6"
        y1="218.45"
        x2="384.52"
        y2="218.44"
        fill="none"
        stroke="#4f443d"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="384.19 221.12 386.72 221.11 386.72 221.52 386.62 221.52 386.62 221.73 386 221.74 386 221.53 384.95 221.53 384.95 221.72 384.34 221.73 384.33 221.53 384.19 221.53 384.19 221.12"
        fill="#cccfd2"
      />
      <polygon
        points="388.49 217.94 388.14 217.94 388.09 215.84 390.98 215.77 391 217.86 390.58 217.86 390.58 216.24 388.5 216.31 388.49 217.94"
        fill="#cccfd2"
      />
      <path
        d="M-512,325.42l-2.19,0,.08-3.92a1.72,1.72,0,0,1,2,.05Z"
        transform="translate(902.67 -104.35)"
        fill="#6a5942"
      />
      <rect
        x="-514.64"
        y="322.71"
        width="3"
        height="2.01"
        transform="translate(68.28 -295.32) rotate(-89.72)"
        fill="none"
        stroke="#4f443d"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="389.6"
        y1="217.86"
        x2="389.58"
        y2="220.87"
        fill="none"
        stroke="#4f443d"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="389.59"
        y1="218.41"
        x2="388.51"
        y2="218.4"
        fill="none"
        stroke="#4f443d"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="388.18 221.07 390.71 221.06 390.72 221.47 390.61 221.48 390.61 221.69 389.99 221.7 389.99 221.49 388.94 221.49 388.95 221.68 388.33 221.69 388.33 221.48 388.18 221.48 388.18 221.07"
        fill="#cccfd2"
      />
      <path
        d="M-509.3,321.61a2.05,2.05,0,0,1,.49-1.31,2,2,0,0,1,1.07-.63,2.25,2.25,0,0,1,1,0,2.5,2.5,0,0,1,1.33.74,2.25,2.25,0,0,1,.38-.37,2.42,2.42,0,0,1,1.68-.49,2.08,2.08,0,0,1,1.41.69,2.1,2.1,0,0,1,.48,1.16l-1,0a.93.93,0,0,0,0-.26,1.12,1.12,0,0,0-.69-.66,1.33,1.33,0,0,0-1.15.23,1.38,1.38,0,0,0-.4.53v3.82h-1.1l0-3.8-.09-.12a1.79,1.79,0,0,0-.75-.61,1.2,1.2,0,0,0-1.09.13,1.52,1.52,0,0,0-.46.83s0,.06,0,.08Z"
        transform="translate(902.67 -104.35)"
        fill="#cccfd2"
      />
      <path
        d="M-505.89,325.09"
        transform="translate(902.67 -104.35)"
        fill="#cccfd2"
      />
      <path
        d="M-505.83,325.25l-.06-3.55a1.27,1.27,0,0,0-.05-.44s0-.08-.05-.16a1.49,1.49,0,0,0-.55-.62,1.27,1.27,0,0,0-1.11-.11,1.34,1.34,0,0,0-.76,1.28l.08,3.65h0Z"
        transform="translate(902.67 -104.35)"
        fill="#6a5942"
      />
      <path
        d="M-502.3,325.21l-.06-3.55a1.58,1.58,0,0,0-.05-.44,1.07,1.07,0,0,0,0-.16,1.43,1.43,0,0,0-.55-.62,1.27,1.27,0,0,0-1.11-.11,1.34,1.34,0,0,0-.76,1.28l.08,3.65h0Z"
        transform="translate(902.67 -104.35)"
        fill="#6a5942"
      />
      <rect
        x="-508.13"
        y="321.91"
        width="2.01"
        height="3"
        transform="translate(898.4 -110.94) rotate(-0.75)"
        fill="none"
        stroke="#4f443d"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="395.59"
        y1="217.56"
        x2="395.62"
        y2="220.57"
        fill="none"
        stroke="#4f443d"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="395.59"
        y1="218.1"
        x2="394.51"
        y2="218.12"
        fill="none"
        stroke="#4f443d"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <rect
        x="-504.57"
        y="321.87"
        width="2.01"
        height="3"
        transform="translate(898.4 -110.9) rotate(-0.75)"
        fill="none"
        stroke="#4f443d"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="399.16"
        y1="217.51"
        x2="399.19"
        y2="220.53"
        fill="none"
        stroke="#4f443d"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="399.15"
        y1="218.06"
        x2="398.08"
        y2="218.07"
        fill="none"
        stroke="#4f443d"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <rect x="394.32" y="220.89" width="2.53" height="0.23" fill="#cccfd2" />
      <rect x="397.86" y="220.86" width="2.53" height="0.23" fill="#cccfd2" />
      <ellipse
        cx="335.57"
        cy="223.02"
        rx="23.23"
        ry="22.76"
        fill="none"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="2.8"
      />
      <polygon
        points="327.37 245.57 335.1 257.59 343.12 245.5 327.37 245.57"
        fill="#020202"
      />
      <ellipse cx="335.57" cy="222.97" rx="21.85" ry="21.57" fill="#fcfcfc" />
      <polygon
        points="321.94 208.88 319.59 234.94 352.6 233.72 351.2 217.01 321.94 208.88"
        fill="#dcd9da"
      />
      <rect
        x="-580.89"
        y="324.53"
        width="27.61"
        height="1.12"
        transform="translate(948.73 -5.81) rotate(9.54)"
        fill="#a6c2d0"
      />
      <rect
        x="-579.31"
        y="330.99"
        width="27.61"
        height="0.65"
        transform="translate(922.52 -67.85) rotate(3.63)"
        fill="#a6c2d0"
      />
      <rect
        x="-578.94"
        y="332.53"
        width="27.61"
        height="0.9"
        transform="translate(910.79 -90.17) rotate(1.43)"
        fill="#a6c2d0"
      />
      <rect x="334.91" y="215.85" width="0.73" height="18.5" fill="#cecece" />
      <polygon
        points="335.64 215.85 334.91 215.85 334.91 215.6 335.64 215.85"
        fill="#cecece"
      />
      <rect x="332.31" y="215.24" width="0.73" height="19.2" fill="#cecece" />
      <polygon
        points="333.04 215.24 332.31 215.24 332.31 214.94 333.04 215.24"
        fill="#cecece"
      />
      <polygon
        points="329.88 213.08 330.55 213.29 330.35 214.39 329.85 214.4 329.88 213.08"
        fill="#70a9c0"
      />
      <polygon
        points="332.2 213.79 332.31 214.94 333.04 215.24 333.21 214.05 332.2 213.79"
        fill="#70a9c0"
      />
      <polygon
        points="334.79 214.46 334.9 215.61 335.65 215.91 335.82 214.72 334.79 214.46"
        fill="#70a9c0"
      />
      <rect x="337.21" y="216.45" width="0.73" height="17.81" fill="#cecece" />
      <polygon
        points="337.94 216.45 337.21 216.45 337.21 216.24 337.94 216.45"
        fill="#cecece"
      />
      <polygon
        points="337.09 215.1 337.2 216.25 337.95 216.55 338.12 215.36 337.09 215.1"
        fill="#70a9c0"
      />
      <rect
        x="-558.12"
        y="322.66"
        width="0.73"
        height="15.68"
        transform="translate(894.07 -118.45) rotate(-1.46)"
        fill="#cecece"
      />
      <polygon
        points="345.08 218.3 344.35 218.32 344.34 218.14 345.08 218.3"
        fill="#cecece"
      />
      <polygon
        points="344.2 217.14 344.34 218.14 345.09 218.39 345.23 217.34 344.2 217.14"
        fill="#70a9c0"
      />
      <rect
        x="-556.26"
        y="323.14"
        width="0.73"
        height="15.15"
        transform="translate(894.06 -118.41) rotate(-1.46)"
        fill="#cecece"
      />
      <polygon
        points="346.95 218.78 346.22 218.8 346.21 218.62 346.95 218.78"
        fill="#cecece"
      />
      <polygon
        points="346.07 217.65 346.2 218.63 346.96 218.86 347.1 217.85 346.07 217.65"
        fill="#70a9c0"
      />
      <rect
        x="-554.71"
        y="323.47"
        width="0.73"
        height="14.76"
        transform="translate(894.06 -118.37) rotate(-1.46)"
        fill="#cecece"
      />
      <polygon
        points="348.5 219.11 347.77 219.13 347.76 218.96 348.5 219.11"
        fill="#cecece"
      />
      <polygon
        points="347.62 218.01 347.75 218.96 348.51 219.19 348.65 218.2 347.62 218.01"
        fill="#70a9c0"
      />
      <rect
        x="-575.94"
        y="318.85"
        width="23.42"
        height="1.13"
        transform="translate(964.03 44.72) rotate(14.28)"
        fill="#c2c2ba"
      />
      <polygon
        points="327.96 234.54 320.6 233.94 322.59 210.49 329.94 211.1 327.96 234.54"
        fill="#cecece"
      />
      <polygon
        points="329.21 234.56 329.94 211.1 327.96 234.54 329.21 234.56"
        fill="#cecece"
      />
      <polygon
        points="329.21 234.56 320.63 234.89 320.6 233.94 329.21 234.56"
        fill="#cecece"
      />
      <polygon
        points="322.59 210.49 322.68 209.05 329.94 211.1 322.59 210.49"
        fill="#cecece"
      />
      <rect x="338.24" y="214.86" width="5.2" height="19.19" fill="#cecece" />
      <polygon
        points="343.44 214.86 338.18 213.39 338.24 214.86 343.44 214.86"
        fill="#cecece"
      />
      <polygon
        points="343.44 234.05 338.25 234.25 338.24 234.05 343.44 234.05"
        fill="#cecece"
      />
      <polygon
        points="337.85 212.11 338.31 211.81 339.05 212.05 339.06 213.1 341.68 213.94 341.7 212.97 342.35 213.22 342.4 214.59 338.28 213.41 337.86 213.3 337.85 212.11"
        fill="#cecece"
      />
      <polygon
        points="341.18 213.24 341.7 212.98 341.71 213.97 341.17 213.79 341.18 213.24"
        fill="#cecece"
      />
      <rect x="348.47" y="217.01" width="2.73" height="16.76" fill="#cecece" />
      <polygon
        points="348.47 217.01 348.48 216.26 351.2 217.01 348.47 217.01"
        fill="#cecece"
      />
      <polygon
        points="351.2 217.01 352.6 233.72 351.2 233.77 351.2 217.01"
        fill="#cecece"
      />
      <polyline
        points="348.47 233.77 352.6 233.72 348.47 233.87 348.47 233.77"
        fill="#cecece"
      />
      <polygon
        points="331.81 218.54 331.9 216.34 331.96 214.99 330.37 214.59 330.38 216.03 330.4 218.35 331.81 218.54"
        fill="#c2c2ba"
      />
      <polygon
        points="331.81 218.54 331.9 216.34 331.96 214.99 330.37 214.59 330.38 216.03 330.4 218.35 331.81 218.54"
        fill="none"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="331.92"
        y1="216.35"
        x2="330.38"
        y2="216.1"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="331"
        y1="218.42"
        x2="331.03"
        y2="216.21"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <polygon
        points="331.73 225.65 331.83 223.31 331.89 221.88 330.29 221.46 330.31 222.98 330.33 225.45 331.73 225.65"
        fill="#c2c2ba"
      />
      <polygon
        points="331.73 225.65 331.83 223.31 331.89 221.88 330.29 221.46 330.31 222.98 330.33 225.45 331.73 225.65"
        fill="none"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="331.85"
        y1="223.33"
        x2="330.3"
        y2="223.06"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="330.93"
        y1="225.52"
        x2="330.95"
        y2="223.18"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <polygon
        points="334.63 219.1 334.72 216.9 334.78 215.55 333.18 215.15 333.2 216.59 333.22 218.91 334.63 219.1"
        fill="#c2c2ba"
      />
      <polygon
        points="334.63 219.1 334.72 216.9 334.78 215.55 333.18 215.15 333.2 216.59 333.22 218.91 334.63 219.1"
        fill="none"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="334.74"
        y1="216.92"
        x2="333.19"
        y2="216.66"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="333.82"
        y1="218.98"
        x2="333.85"
        y2="216.78"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <polygon
        points="334.61 225.94 334.7 223.74 334.76 222.39 333.17 221.99 333.18 223.43 333.2 225.75 334.61 225.94"
        fill="#c2c2ba"
      />
      <polygon
        points="334.61 225.94 334.7 223.74 334.76 222.39 333.17 221.99 333.18 223.43 333.2 225.75 334.61 225.94"
        fill="none"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="334.72"
        y1="223.75"
        x2="333.17"
        y2="223.5"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="333.8"
        y1="225.82"
        x2="333.83"
        y2="223.61"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <polygon
        points="337.01 219.46 337.1 217.48 337.15 216.28 335.72 215.92 335.73 217.2 335.75 219.29 337.01 219.46"
        fill="#c2c2ba"
      />
      <polygon
        points="337.01 219.46 337.1 217.48 337.15 216.28 335.72 215.92 335.73 217.2 335.75 219.29 337.01 219.46"
        fill="none"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="337.11"
        y1="217.5"
        x2="335.73"
        y2="217.27"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="336.29"
        y1="219.35"
        x2="336.31"
        y2="217.37"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polygon
        points="344.19 221.16 344.21 219.31 344.22 218.18 343.47 217.86 343.49 219.06 343.53 221.01 344.19 221.16"
        fill="#c2c2ba"
      />
      <polygon
        points="344.19 221.16 344.21 219.31 344.22 218.18 343.47 217.86 343.49 219.06 343.53 221.01 344.19 221.16"
        fill="none"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <line
        x1="344.22"
        y1="219.33"
        x2="343.49"
        y2="219.13"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <line
        x1="343.81"
        y1="221.07"
        x2="343.8"
        y2="219.22"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <polygon
        points="345.94 221.53 345.95 219.77 345.97 218.7 345.21 218.39 345.24 219.53 345.28 221.38 345.94 221.53"
        fill="#c2c2ba"
      />
      <polygon
        points="345.94 221.53 345.95 219.77 345.97 218.7 345.21 218.39 345.24 219.53 345.28 221.38 345.94 221.53"
        fill="none"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <line
        x1="345.96"
        y1="219.78"
        x2="345.24"
        y2="219.59"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <line
        x1="345.56"
        y1="221.43"
        x2="345.54"
        y2="219.68"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <polygon
        points="347.68 222.02 347.69 220.27 347.7 219.2 347.01 218.89 347.03 220.03 347.07 221.87 347.68 222.02"
        fill="#c2c2ba"
      />
      <polygon
        points="347.68 222.02 347.69 220.27 347.7 219.2 347.01 218.89 347.03 220.03 347.07 221.87 347.68 222.02"
        fill="none"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <line
        x1="347.7"
        y1="220.28"
        x2="347.03"
        y2="220.09"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <line
        x1="347.33"
        y1="221.93"
        x2="347.31"
        y2="220.18"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <polygon
        points="347.87 227.19 347.89 225.44 347.9 224.37 347.2 224.07 347.23 225.2 347.26 227.04 347.87 227.19"
        fill="#c2c2ba"
      />
      <polygon
        points="347.87 227.19 347.89 225.44 347.9 224.37 347.2 224.07 347.23 225.2 347.26 227.04 347.87 227.19"
        fill="none"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <line
        x1="347.89"
        y1="225.45"
        x2="347.22"
        y2="225.26"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <line
        x1="347.52"
        y1="227.1"
        x2="347.51"
        y2="225.35"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.03"
      />
      <polygon
        points="346.27 227.07 346.3 225.23 346.32 224.11 345.39 223.79 345.42 224.99 345.46 226.92 346.27 227.07"
        fill="#c2c2ba"
      />
      <polygon
        points="346.27 227.07 346.3 225.23 346.32 224.11 345.39 223.79 345.42 224.99 345.46 226.92 346.27 227.07"
        fill="none"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <line
        x1="346.31"
        y1="225.25"
        x2="345.42"
        y2="225.05"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <line
        x1="345.81"
        y1="226.98"
        x2="345.79"
        y2="225.14"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <polygon
        points="344.39 226.9 344.42 225.06 344.44 223.93 343.51 223.62 343.54 224.81 343.58 226.75 344.39 226.9"
        fill="#c2c2ba"
      />
      <polygon
        points="344.39 226.9 344.42 225.06 344.44 223.93 343.51 223.62 343.54 224.81 343.58 226.75 344.39 226.9"
        fill="none"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <line
        x1="344.43"
        y1="225.07"
        x2="343.54"
        y2="224.87"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <line
        x1="343.93"
        y1="226.8"
        x2="343.92"
        y2="224.96"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.04"
      />
      <polygon
        points="337.05 226.19 337.13 224.21 337.19 223 335.75 222.64 335.77 223.93 335.79 226.01 337.05 226.19"
        fill="#c2c2ba"
      />
      <polygon
        points="337.05 226.19 337.13 224.21 337.19 223 335.75 222.64 335.77 223.93 335.79 226.01 337.05 226.19"
        fill="none"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="337.15"
        y1="224.22"
        x2="335.76"
        y2="224"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="336.32"
        y1="226.08"
        x2="336.35"
        y2="224.1"
        fill="#c2c2ba"
        stroke="#734e48"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <rect x="319.77" y="232.67" width="32.72" height="1.05" fill="#a6c2d0" />
      <polygon
        points="319.77 232.66 319.6 234.91 352.6 233.72 352.5 232.66 319.77 232.66"
        fill="#a6c2d0"
      />
      <polygon
        points="330.28 229.47 331.96 229.53 331.87 232.65 330.17 232.66 330.28 229.47"
        fill="#535351"
      />
      <polygon
        points="333.16 229.56 334.54 229.59 334.52 232.62 333.14 232.67 333.16 229.56"
        fill="#4f413b"
      />
      <polygon
        points="335.73 229.55 337.25 229.6 337.17 232.66 335.63 232.68 335.73 229.55"
        fill="#535351"
      />
      <polygon
        points="343.55 229.6 344.62 229.66 344.56 232.65 343.49 232.66 343.55 229.6"
        fill="#535351"
      />
      <polygon
        points="347.35 229.8 348.06 229.85 348.01 232.65 347.31 232.67 347.35 229.8"
        fill="#535351"
      />
      <ellipse
        cx="610.98"
        cy="291.4"
        rx="23.29"
        ry="22.81"
        fill="none"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="2.8"
      />
      <polygon
        points="602.76 313.99 610.5 326.04 618.54 313.92 602.76 313.99"
        fill="#020202"
      />
      <ellipse cx="610.98" cy="291.35" rx="21.9" ry="21.62" fill="#fcfcfc" />
      <polygon
        points="591.59 287.51 591.54 298.68 630.18 298.4 630.24 287.31 591.59 287.51"
        fill="#e3cb96"
      />
      <polygon
        points="630.24 287.33 630.22 285.69 603.52 285.15 590.85 286.62 591.59 287.52 630.24 287.33"
        fill="#9a7970"
      />
      <polygon
        points="607.91 285.22 607.51 285.12 607.52 283.54 613.97 283.72 613.96 283.1 621.01 283.3 620.97 284.12 626.36 284.28 626.26 284.57 620.85 284.39 620.95 283.68 613.99 283.54 614 283.76 614.13 284.09 607.89 283.96 607.91 285.22"
        fill="#b18f89"
      />
      <polygon
        points="607.91 285.22 626.24 285.7 626.26 284.57 620.85 284.39 621.03 283.69 613.91 283.53 614.13 284.09 607.89 283.96 607.91 285.22"
        fill="#ddd6d0"
      />
      <line
        x1="591.59"
        y1="289.28"
        x2="630.24"
        y2="288.97"
        fill="none"
        stroke="#bbbbaf"
        strokeMiterlimit="10"
        strokeWidth="0.36"
      />
      <line
        x1="593.77"
        y1="288.13"
        x2="593.8"
        y2="289.94"
        fill="none"
        stroke="#bbbbaf"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="0.36"
      />
      <line
        x1="595.69"
        y1="288.18"
        x2="595.71"
        y2="289.99"
        fill="none"
        stroke="#bbbbaf"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="0.36"
      />
      <line
        x1="601.05"
        y1="287.96"
        x2="601.07"
        y2="289.76"
        fill="none"
        stroke="#bbbbaf"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="0.36"
      />
      <line
        x1="598.56"
        y1="288.01"
        x2="598.58"
        y2="289.82"
        fill="none"
        stroke="#bbbbaf"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="0.36"
      />
      <line
        x1="603.8"
        y1="287.96"
        x2="603.83"
        y2="289.76"
        fill="none"
        stroke="#bbbbaf"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="0.36"
      />
      <line
        x1="606.26"
        y1="287.86"
        x2="606.29"
        y2="289.66"
        fill="none"
        stroke="#bbbbaf"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="0.36"
      />
      <line
        x1="609.08"
        y1="287.88"
        x2="609.11"
        y2="289.68"
        fill="none"
        stroke="#bbbbaf"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="0.36"
      />
      <line
        x1="611.39"
        y1="287.82"
        x2="611.41"
        y2="289.63"
        fill="none"
        stroke="#bbbbaf"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="0.36"
      />
      <line
        x1="623.65"
        y1="287.77"
        x2="623.67"
        y2="289.57"
        fill="none"
        stroke="#bbbbaf"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="0.36"
      />
      <line
        x1="625.58"
        y1="287.8"
        x2="625.61"
        y2="289.6"
        fill="none"
        stroke="#bbbbaf"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="0.36"
      />
      <line
        x1="627.92"
        y1="287.77"
        x2="627.94"
        y2="289.57"
        fill="none"
        stroke="#bbbbaf"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="0.36"
      />
      <path
        d="M-311.16,392.71"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#bbbbaf"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="0.36"
      />
      <polygon
        points="591.59 288.36 614.53 288.34 614.53 287.4 591.6 287.66 591.59 288.36"
        fill="#bbbbaf"
      />
      <polygon
        points="591.6 287.66 591.59 287.52 614.53 287.4 591.6 287.66"
        fill="#bbbbaf"
      />
      <polygon
        points="614.53 287.4 614.71 298.47 616.51 298.49 616.16 287.43 614.53 287.4"
        fill="#ceb88d"
      />
      <polygon
        points="619.67 287.38 619.85 298.45 621.65 298.47 621.3 287.41 619.67 287.38"
        fill="#ceb88d"
      />
      <polygon
        points="621.3 287.41 621.34 288.4 630.24 288.5 630.22 287.64 621.3 287.41"
        fill="#bbbbaf"
      />
      <polygon
        points="630.22 287.64 630.21 287.33 621.3 287.41 630.22 287.64"
        fill="#bbbbaf"
      />
      <polygon
        points="613.72 286.8 614.56 287.91 621.33 287.92 622.43 286.9 613.72 286.8"
        fill="#bbbbaf"
      />
      <rect
        x="601.07"
        y="291.38"
        width="2.89"
        height="4.82"
        fill="#c9c3bd"
        stroke="#6c3924"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="603.91"
        y1="292.79"
        x2="601.08"
        y2="292.75"
        fill="#61625c"
        stroke="#6c3924"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <rect x="595.97" y="291.41" width="2.89" height="4.82" fill="#c9c3bd" />
      <rect
        x="595.97"
        y="291.41"
        width="2.89"
        height="4.82"
        fill="none"
        stroke="#6c3924"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="598.81"
        y1="292.82"
        x2="595.98"
        y2="292.78"
        fill="#c9c3bd"
        stroke="#6c3924"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <rect x="606.24" y="291.41" width="2.89" height="4.82" fill="#c9c3bd" />
      <rect
        x="606.24"
        y="291.41"
        width="2.89"
        height="4.82"
        fill="none"
        stroke="#6c3924"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="609.08"
        y1="292.82"
        x2="606.25"
        y2="292.78"
        fill="#c9c3bd"
        stroke="#6c3924"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <rect x="611.16" y="291.31" width="2.89" height="4.82" fill="#c9c3bd" />
      <rect
        x="611.16"
        y="291.31"
        width="2.89"
        height="4.82"
        fill="none"
        stroke="#6c3924"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="614"
        y1="292.72"
        x2="611.17"
        y2="292.68"
        fill="#c9c3bd"
        stroke="#6c3924"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <rect x="622.65" y="291.31" width="2.89" height="4.82" fill="#c9c3bd" />
      <rect
        x="622.65"
        y="291.31"
        width="2.89"
        height="4.82"
        fill="none"
        stroke="#6c3924"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="625.49"
        y1="292.72"
        x2="622.66"
        y2="292.68"
        fill="#c9c3bd"
        stroke="#6c3924"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <rect x="626.91" y="291.33" width="2.89" height="4.82" fill="#c9c3bd" />
      <rect
        x="626.91"
        y="291.33"
        width="2.89"
        height="4.82"
        fill="none"
        stroke="#6c3924"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="629.75"
        y1="292.74"
        x2="626.92"
        y2="292.7"
        fill="#c9c3bd"
        stroke="#6c3924"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <rect
        x="-286.98"
        y="398.14"
        width="4.84"
        height="2.11"
        transform="translate(220.07 8.69) rotate(-89.77)"
        fill="#9a7970"
      />
      <line x1="619.14" y1="293.85" x2="617.07" y2="293.8" fill="#9a7970" />
      <rect x="591.45" y="297.01" width="38.78" height="1.69" fill="#c9c3bd" />
      <ellipse
        cx="618.08"
        cy="290.69"
        rx="0.88"
        ry="0.87"
        fill="none"
        stroke="#c9c3bd"
        strokeMiterlimit="10"
        strokeWidth="0.43"
      />
      <rect x="591.57" y="289.62" width="2.16" height="0.67" fill="#c9c3bd" />
      <rect x="591.57" y="290.47" width="1.56" height="0.67" fill="#c9c3bd" />
      <rect x="591.57" y="292.26" width="1.56" height="0.67" fill="#c9c3bd" />
      <rect x="591.57" y="293.93" width="1.34" height="0.67" fill="#c9c3bd" />
      <rect x="591.53" y="295.68" width="1.34" height="0.67" fill="#c9c3bd" />
      <rect x="591.56" y="293.09" width="2.22" height="0.67" fill="#c9c3bd" />
      <rect x="591.56" y="294.81" width="2.22" height="0.67" fill="#c9c3bd" />
      <rect x="591.56" y="291.35" width="2.27" height="0.67" fill="#c9c3bd" />
      <ellipse
        cx="448"
        cy="263.65"
        rx="24.32"
        ry="23.82"
        fill="none"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="2.93"
      />
      <polygon
        points="439.42 287.25 447.5 299.83 455.9 287.17 439.42 287.25"
        fill="#020202"
      />
      <ellipse cx="448" cy="263.59" rx="22.87" ry="22.58" fill="#fcfcfc" />
      <polygon
        points="432 257.17 431.82 273.19 456.87 273.96 455.52 249.31 432 257.17"
        fill="#9a7970"
      />
      <polygon
        points="455.52 249.31 465.21 258.34 465.46 272.38 456.87 273.96 455.52 249.31"
        fill="#502d29"
      />
      <polygon
        points="431.41 257.13 431.97 258.43 455.57 250.86 455.61 248.58 431.41 257.13"
        fill="#a6a2a5"
      />
      <polygon
        points="455.57 250.8 465.2 259.2 465.97 258.06 455.61 248.58 455.57 250.8"
        fill="#8d8d96"
      />
      <polygon
        points="431.94 263.1 431.29 262.27 456.06 256.59 456.02 258.7 431.94 263.1"
        fill="#dee0df"
      />
      <polygon
        points="456.07 256.56 466.04 262.62 465.38 263.46 456.03 258.73 456.07 256.56"
        fill="#adb2ae"
      />
      <polygon
        points="431.64 268.33 431.31 267.63 456.39 265.33 456.39 265.33 456.47 266.39 431.64 268.33"
        fill="#c2c3c4"
      />
      <polygon
        points="456.39 265.33 465.36 267.46 465.39 268.26 456.47 266.39 456.39 265.33"
        fill="#c2c3c4"
      />
      <polygon
        points="454.27 251.32 455.58 250.87 456.88 273.99 455.39 273.96 454.27 251.32"
        fill="#c2c3c4"
      />
      <polygon
        points="455.58 250.83 456.28 251.43 457.5 273.83 456.87 273.99 455.58 250.83"
        fill="#adb2ae"
      />
      <polygon
        points="442.38 255.08 443.33 254.77 443.25 273.54 442.23 273.54 442.38 255.08"
        fill="#c2c3c4"
      />
      <polygon
        points="434.29 257.69 434.86 257.45 434.37 273.26 433.63 273.26 434.29 257.69"
        fill="#c2c3c4"
      />
      <polygon
        points="431.81 272.97 456.8 272.85 456.86 274.12 431.8 273.64 431.81 272.97"
        fill="#52514c"
      />
      <polygon
        points="456.79 272.86 465.47 271.91 465.47 272.59 456.85 274.13 456.79 272.86"
        fill="#262624"
      />
      <polygon
        points="435.7 257.89 436.81 257.52 436.63 260.46 435.55 260.72 435.7 257.89"
        fill="#e3e5e4"
      />
      <path
        d="M-466.95,364.93l.06-2.27s.38-.56.91-.41l-.12,2.53Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="435.78"
        y1="258.91"
        x2="436.64"
        y2="258.68"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="436.3"
        y1="258.77"
        x2="436.23"
        y2="260.46"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="435.74"
        y1="259.51"
        x2="436.28"
        y2="259.42"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <path
        d="M-467,370.7l.06-2.26a.91.91,0,0,1,.91-.41l-.12,2.53Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="435.68"
        y1="264.68"
        x2="436.54"
        y2="264.46"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="436.2"
        y1="264.55"
        x2="436.13"
        y2="266.24"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="435.64"
        y1="265.29"
        x2="436.18"
        y2="265.2"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <path
        d="M-464.85,370.49l.07-2.27a.91.91,0,0,1,.91-.41l-.12,2.53Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="437.88"
        y1="264.46"
        x2="438.74"
        y2="264.24"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="438.41"
        y1="264.33"
        x2="438.33"
        y2="266.02"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="437.84"
        y1="265.07"
        x2="438.38"
        y2="264.98"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <path
        d="M-462.44,370.1l.06-2.27a.93.93,0,0,1,.91-.41l-.12,2.54Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="440.29"
        y1="264.08"
        x2="441.15"
        y2="263.85"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="440.81"
        y1="263.95"
        x2="440.73"
        y2="265.64"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="440.25"
        y1="264.69"
        x2="440.78"
        y2="264.59"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <path
        d="M-470.09,370.91l.07-2.27a.93.93,0,0,1,.91-.41l-.12,2.54Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="432.64"
        y1="264.89"
        x2="433.5"
        y2="264.66"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="433.17"
        y1="264.76"
        x2="433.09"
        y2="266.44"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="432.6"
        y1="265.49"
        x2="433.14"
        y2="265.4"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <path
        d="M-457.68,369.42l.07-2.37s.37-.58.91-.43l-.13,2.65Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="445.05"
        y1="263.33"
        x2="445.91"
        y2="263.09"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="445.57"
        y1="263.19"
        x2="445.5"
        y2="264.95"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="445.01"
        y1="263.96"
        x2="445.55"
        y2="263.86"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <path
        d="M-454.53,369.13l.07-2.54a1,1,0,0,1,1-.46l-.14,2.84Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="448.2"
        y1="262.91"
        x2="449.18"
        y2="262.65"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="448.8"
        y1="262.76"
        x2="448.71"
        y2="264.65"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="448.16"
        y1="263.59"
        x2="448.76"
        y2="263.48"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <path
        d="M-451,368.59l.07-2.7a1.23,1.23,0,0,1,1.18-.49l-.15,3Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="451.69"
        y1="262.25"
        x2="452.8"
        y2="261.98"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="452.37"
        y1="262.09"
        x2="452.28"
        y2="264.1"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="451.64"
        y1="262.97"
        x2="452.34"
        y2="262.86"
        fill="none"
        stroke="#e3e5e4"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <polygon
        points="437.83 257.3 438.94 256.94 438.76 259.88 437.68 260.13 437.83 257.3"
        fill="#e3e5e4"
      />
      <path
        d="M-464.82,364.34l.07-2.27a.93.93,0,0,1,.91-.41l-.12,2.54Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="437.91"
        y1="258.32"
        x2="438.77"
        y2="258.09"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="438.44"
        y1="258.19"
        x2="438.36"
        y2="259.88"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="437.87"
        y1="258.93"
        x2="438.41"
        y2="258.84"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <polygon
        points="440.12 256.72 441.24 256.35 441.05 259.29 439.98 259.55 440.12 256.72"
        fill="#e3e5e4"
      />
      <path
        d="M-462.53,363.76l.07-2.27a.91.91,0,0,1,.91-.41l-.12,2.53Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="440.2"
        y1="257.74"
        x2="441.06"
        y2="257.51"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="440.73"
        y1="257.6"
        x2="440.65"
        y2="259.29"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="440.16"
        y1="258.34"
        x2="440.7"
        y2="258.25"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <polygon
        points="444.42 255.43 446.07 254.96 445.95 258.11 444.34 258.46 444.42 255.43"
        fill="#e3e5e4"
      />
      <path
        d="M-458.08,362.65l0-2.42a1.6,1.6,0,0,1,1.34-.51l-.05,2.71Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="444.59"
        y1="256.51"
        x2="445.87"
        y2="256.21"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="445.37"
        y1="256.33"
        x2="445.35"
        y2="258.14"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="444.56"
        y1="257.16"
        x2="445.37"
        y2="257.02"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="447.37 254.58 449.02 254.11 448.9 257.25 447.29 257.61 447.37 254.58"
        fill="#e3e5e4"
      />
      <path
        d="M-455.13,361.79l0-2.42a1.58,1.58,0,0,1,1.34-.5l-.05,2.71Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="447.54"
        y1="255.66"
        x2="448.82"
        y2="255.35"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="448.32"
        y1="255.48"
        x2="448.3"
        y2="257.28"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="447.51"
        y1="256.31"
        x2="448.31"
        y2="256.17"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="450.78 253.75 452.43 253.28 452.31 256.43 450.71 256.78 450.78 253.75"
        fill="#e3e5e4"
      />
      <path
        d="M-451.72,361l0-2.42a1.58,1.58,0,0,1,1.34-.5l0,2.71Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="450.95"
        y1="254.83"
        x2="452.23"
        y2="254.52"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="451.73"
        y1="254.65"
        x2="451.71"
        y2="256.45"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="450.93"
        y1="255.48"
        x2="451.73"
        y2="255.34"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <polygon
        points="432.86 258.69 433.97 258.32 433.79 261.27 432.71 261.52 432.86 258.69"
        fill="#e3e5e4"
      />
      <path
        d="M-469.79,365.73l.06-2.27a.94.94,0,0,1,.91-.41l-.12,2.54Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="432.94"
        y1="259.71"
        x2="433.8"
        y2="259.48"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="433.46"
        y1="259.58"
        x2="433.39"
        y2="261.27"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="432.9"
        y1="260.32"
        x2="433.44"
        y2="260.23"
        fill="none"
        stroke="#7c7c79"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <polygon
        points="432.16 263.13 431.99 267.57 431.63 267.57 431.8 262.92 431.94 263.13 432.17 263.08 432.16 263.13"
        fill="#c8d0cb"
      />
      <polygon
        points="431.63 267.57 431.63 267.6 431.99 267.57 431.63 267.57"
        fill="#c8d0cb"
      />
      <polygon
        points="434.82 262.55 434.75 267.3 435.33 267.27 435.39 262.44 434.82 262.55"
        fill="#c8d0cb"
      />
      <polygon
        points="436.89 262.2 436.83 267.13 437.41 267.1 437.46 262.09 436.89 262.2"
        fill="#c8d0cb"
      />
      <polygon
        points="439.16 261.79 439.1 266.97 439.67 266.94 439.73 261.67 439.16 261.79"
        fill="#c8d0cb"
      />
      <polygon
        points="441.62 261.35 441.56 266.7 442.13 266.67 442.19 261.22 441.62 261.35"
        fill="#c8d0cb"
      />
      <polygon
        points="443.56 260.98 443.48 266.5 444.19 266.47 444.25 260.86 443.56 260.98"
        fill="#c8d0cb"
      />
      <polygon
        points="446.6 260.41 446.51 266.24 447.3 266.21 447.38 260.27 446.6 260.41"
        fill="#c8d0cb"
      />
      <polygon
        points="449.76 259.83 449.67 265.95 450.47 265.91 450.54 259.69 449.76 259.83"
        fill="#c8d0cb"
      />
      <polygon
        points="453.42 259.18 453.47 265.81 454.48 265.75 454.41 259 453.42 259.18"
        fill="#c8d0cb"
      />
      <ellipse
        cx="490.72"
        cy="271.22"
        rx="23.56"
        ry="23.08"
        fill="none"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="2.84"
      />
      <polygon
        points="482.41 294.08 490.24 306.27 498.38 294.01 482.41 294.08"
        fill="#020202"
      />
      <ellipse cx="490.72" cy="271.17" rx="22.16" ry="21.88" fill="#fcfcfc" />
      <polyline
        points="481.56 263.97 502.54 264.62 503.42 279.53 481.03 279.89 481.56 263.97"
        fill="#ac8f84"
      />
      <polygon
        points="474.23 280.14 475.8 259.51 477.19 259.68 477.18 259.92 480.27 259.98 480.27 259.79 481.7 259.86 481.06 280.06 474.23 280.14"
        fill="#a1897d"
      />
      <polygon
        points="503.45 279.53 502.37 261.48 503.54 261.59 503.54 261.81 505.82 261.91 505.82 261.74 506.88 261.78 508.73 279.37 503.45 279.53"
        fill="#a1897d"
      />
      <polygon
        points="481.67 260.91 492.47 259.64 502.42 262.26 502.5 263.51 481.56 262.24 481.67 260.91"
        fill="#bb9d91"
      />
      <polygon
        points="481.56 262.22 481.59 263.7 502.53 264.49 502.5 263.5 481.56 262.22"
        fill="#584744"
      />
      <polygon
        points="502.37 261.48 502.08 261.7 502.12 262.17 502.42 262.26 502.37 261.48"
        fill="#584744"
      />
      <polygon
        points="474.71 272.18 508.08 272.54 508.14 273.59 474.68 273.33 474.71 272.18"
        fill="#7d6257"
      />
      <polygon
        points="483.71 264.19 485.01 264.2 484.72 264.85 484.5 272.02 484.69 272.29 483.62 272.27 483.8 272.06 483.9 264.85 483.71 264.19"
        fill="#d5d4d9"
      />
      <polygon
        points="508.17 273.59 508.65 273.58 508.21 274.16 474.67 273.9 474.32 273.34 474.67 273.33 508.17 273.59"
        fill="#68554d"
      />
      <polygon
        points="486.9 264.33 488.2 264.32 487.92 264.96 487.83 272.06 488.02 272.33 486.95 272.32 487.13 272.11 487.1 264.98 486.9 264.33"
        fill="#d5d4d9"
      />
      <polygon
        points="490.07 264.37 491.37 264.35 491.1 265 491.03 272.08 491.23 272.35 490.16 272.35 490.34 272.13 490.27 265.02 490.07 264.37"
        fill="#d5d4d9"
      />
      <polygon
        points="493.72 264.49 495.01 264.45 494.75 265.1 494.75 272.11 494.95 272.37 493.89 272.38 494.06 272.17 493.93 265.13 493.72 264.49"
        fill="#d5d4d9"
      />
      <polygon
        points="496.82 264.61 498.12 264.56 497.86 265.2 498.02 272.16 498.22 272.41 497.16 272.45 497.32 272.23 497.04 265.25 496.82 264.61"
        fill="#d5d4d9"
      />
      <polygon
        points="499.53 264.6 500.82 264.55 500.57 265.19 500.73 272.19 500.93 272.44 499.87 272.48 500.04 272.26 499.75 265.24 499.53 264.6"
        fill="#d5d4d9"
      />
      <polygon
        points="483.53 267.35 481.91 267.35 481.91 265.31 481.91 264.31 483.53 264.31 483.53 265.33 483.53 265.34 483.53 267.35"
        fill="#d8d3d1"
      />
      <polygon
        points="483.53 267.35 481.91 267.35 481.91 265.31 481.91 264.31 483.53 264.31 483.53 265.33 483.53 265.34 483.53 267.35"
        fill="none"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="481.92"
        y1="265.31"
        x2="483.52"
        y2="265.32"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="482.76"
        y1="265.31"
        x2="482.74"
        y2="267.36"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polygon
        points="486.71 267.47 485.09 267.47 485.09 265.42 485.09 264.43 486.71 264.43 486.71 265.45 486.71 265.46 486.71 267.47"
        fill="#d8d3d1"
      />
      <polygon
        points="486.71 267.47 485.09 267.47 485.09 265.42 485.09 264.43 486.71 264.43 486.71 265.45 486.71 265.46 486.71 267.47"
        fill="none"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="485.09"
        y1="265.42"
        x2="486.7"
        y2="265.44"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="485.94"
        y1="265.42"
        x2="485.91"
        y2="267.48"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polygon
        points="489.84 267.53 488.22 267.53 488.22 265.49 488.22 264.49 489.84 264.49 489.84 265.51 489.84 265.52 489.84 267.53"
        fill="#d8d3d1"
      />
      <polygon
        points="489.84 267.53 488.22 267.53 488.22 265.49 488.22 264.49 489.84 264.49 489.84 265.51 489.84 265.52 489.84 267.53"
        fill="none"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="488.23"
        y1="265.49"
        x2="489.83"
        y2="265.5"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="489.07"
        y1="265.49"
        x2="489.04"
        y2="267.54"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polygon
        points="493.35 267.59 491.73 267.59 491.73 265.55 491.73 264.55 493.35 264.55 493.35 265.57 493.35 265.58 493.35 267.59"
        fill="#d8d3d1"
      />
      <polygon
        points="493.35 267.59 491.73 267.59 491.73 265.55 491.73 264.55 493.35 264.55 493.35 265.57 493.35 265.58 493.35 267.59"
        fill="none"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="491.74"
        y1="265.55"
        x2="493.34"
        y2="265.56"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="492.58"
        y1="265.55"
        x2="492.56"
        y2="267.6"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polygon
        points="496.71 267.66 495.3 267.66 495.3 265.77 495.3 264.85 496.71 264.85 496.71 265.8 496.71 265.81 496.71 267.66"
        fill="#d8d3d1"
      />
      <polygon
        points="496.71 267.66 495.3 267.66 495.3 265.77 495.3 264.85 496.71 264.85 496.71 265.8 496.71 265.81 496.71 267.66"
        fill="none"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="495.3"
        y1="265.77"
        x2="496.71"
        y2="265.78"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="496.04"
        y1="265.77"
        x2="496.02"
        y2="267.67"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polygon
        points="496.86 272.45 495.44 272.45 495.44 270.56 495.44 269.64 496.86 269.64 496.86 270.59 496.86 270.6 496.86 272.45"
        fill="#d8d3d1"
      />
      <polygon
        points="496.86 272.45 495.44 272.45 495.44 270.56 495.44 269.64 496.86 269.64 496.86 270.59 496.86 270.6 496.86 272.45"
        fill="none"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="495.45"
        y1="270.57"
        x2="496.85"
        y2="270.58"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="496.19"
        y1="270.57"
        x2="496.16"
        y2="272.46"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polygon
        points="493.36 272.45 491.94 272.45 491.94 270.56 491.94 269.64 493.36 269.64 493.36 270.59 493.36 270.6 493.36 272.45"
        fill="#d8d3d1"
      />
      <polygon
        points="493.36 272.45 491.94 272.45 491.94 270.56 491.94 269.64 493.36 269.64 493.36 270.59 493.36 270.6 493.36 272.45"
        fill="none"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="491.94"
        y1="270.57"
        x2="493.35"
        y2="270.58"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="492.68"
        y1="270.57"
        x2="492.66"
        y2="272.46"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polygon
        points="489.75 272.32 488.33 272.32 488.33 270.43 488.33 269.51 489.75 269.51 489.75 270.46 489.75 270.47 489.75 272.32"
        fill="#d8d3d1"
      />
      <polygon
        points="489.75 272.32 488.33 272.32 488.33 270.43 488.33 269.51 489.75 269.51 489.75 270.46 489.75 270.47 489.75 272.32"
        fill="none"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="488.33"
        y1="270.44"
        x2="489.74"
        y2="270.45"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="489.07"
        y1="270.44"
        x2="489.05"
        y2="272.33"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polygon
        points="486.54 272.31 485.12 272.31 485.12 270.41 485.12 269.5 486.54 269.5 486.54 270.44 486.54 270.45 486.54 272.31"
        fill="#d8d3d1"
      />
      <polygon
        points="486.54 272.31 485.12 272.31 485.12 270.41 485.12 269.5 486.54 269.5 486.54 270.44 486.54 270.45 486.54 272.31"
        fill="none"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="485.12"
        y1="270.42"
        x2="486.53"
        y2="270.43"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="485.86"
        y1="270.42"
        x2="485.84"
        y2="272.31"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polygon
        points="483.24 272.27 481.82 272.27 481.82 270.38 481.82 269.46 483.24 269.46 483.24 270.4 483.24 270.41 483.24 272.27"
        fill="#d8d3d1"
      />
      <polygon
        points="483.24 272.27 481.82 272.27 481.82 270.38 481.82 269.46 483.24 269.46 483.24 270.4 483.24 270.41 483.24 272.27"
        fill="none"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="481.82"
        y1="270.38"
        x2="483.23"
        y2="270.39"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="482.56"
        y1="270.38"
        x2="482.54"
        y2="272.28"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polygon
        points="499.79 272.47 498.37 272.47 498.37 270.58 498.37 269.66 499.79 269.66 499.79 270.61 499.79 270.62 499.79 272.47"
        fill="#d8d3d1"
      />
      <polygon
        points="499.79 272.47 498.37 272.47 498.37 270.58 498.37 269.66 499.79 269.66 499.79 270.61 499.79 270.62 499.79 272.47"
        fill="none"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="498.38"
        y1="270.58"
        x2="499.79"
        y2="270.59"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="499.12"
        y1="270.58"
        x2="499.1"
        y2="272.48"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polygon
        points="502.52 272.47 501.1 272.47 501.1 270.58 501.1 269.66 502.52 269.66 502.52 270.61 502.52 270.62 502.52 272.47"
        fill="#d8d3d1"
      />
      <polygon
        points="502.52 272.47 501.1 272.47 501.1 270.58 501.1 269.66 502.52 269.66 502.52 270.61 502.52 270.62 502.52 272.47"
        fill="none"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="501.1"
        y1="270.58"
        x2="502.51"
        y2="270.59"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="501.84"
        y1="270.58"
        x2="501.82"
        y2="272.48"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polygon
        points="499.56 267.76 498.14 267.76 498.14 265.87 498.14 264.95 499.56 264.95 499.56 265.9 499.56 265.91 499.56 267.76"
        fill="#d8d3d1"
      />
      <polygon
        points="499.56 267.76 498.14 267.76 498.14 265.87 498.14 264.95 499.56 264.95 499.56 265.9 499.56 265.91 499.56 267.76"
        fill="none"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="498.15"
        y1="265.87"
        x2="499.56"
        y2="265.88"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="498.89"
        y1="265.87"
        x2="498.86"
        y2="267.77"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polygon
        points="502.25 267.79 500.82 267.79 500.82 265.9 500.82 264.98 502.25 264.98 502.25 265.92 502.25 265.93 502.25 267.79"
        fill="#d8d3d1"
      />
      <polygon
        points="502.25 267.79 500.82 267.79 500.82 265.9 500.82 264.98 502.25 264.98 502.25 265.92 502.25 265.93 502.25 267.79"
        fill="none"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="500.83"
        y1="265.9"
        x2="502.24"
        y2="265.91"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <line
        x1="501.57"
        y1="265.9"
        x2="501.55"
        y2="267.8"
        fill="#d8d3d1"
        stroke="#69504d"
        strokeMiterlimit="10"
        strokeWidth="0.05"
      />
      <polygon
        points="481.59 263.7 481.58 264.08 502.57 264.73 502.56 264.48 481.59 263.7"
        fill="#9e7976"
      />
      <path
        d="M-410.72,384.21l0-3.77a.83.83,0,0,1,.05-.32.93.93,0,0,1,.85-.61,1,1,0,0,1,.9.72l-.09,3.91Z"
        transform="translate(902.67 -104.35)"
        fill="#4f332f"
      />
      <ellipse
        cx="577.62"
        cy="250.2"
        rx="24.51"
        ry="24.01"
        fill="none"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="2.95"
      />
      <polygon
        points="568.97 273.98 577.12 286.66 585.58 273.9 568.97 273.98"
        fill="#020202"
      />
      <ellipse cx="577.62" cy="250.14" rx="23.05" ry="22.76" fill="#fcfcfc" />
      <polygon
        points="559.06 250.73 559.06 259.17 595.3 259.77 594.74 243.83 559.06 250.73"
        fill="#ab9e74"
      />
      <polygon
        points="559.06 250.73 557.89 250.18 594.45 242.36 594.89 242.68 594.97 243.75 594.74 243.83 559.06 250.73"
        fill="#8a8589"
      />
      <polygon
        points="557.87 250.17 559.02 249.73 560.85 246.51 593.1 237.42 593.69 242.51 557.87 250.17"
        fill="#5f8284"
      />
      <polygon
        points="560.85 246.51 566.71 244.06 569.57 243 589.32 237.23 593.1 237.42 560.85 246.51"
        fill="#abc3c5"
      />
      <polygon
        points="593.1 237.42 595.56 240.03 594.89 242.68 594.45 242.36 593.69 242.51 593.1 237.42"
        fill="#293d46"
      />
      <polygon
        points="559.05 255.6 558.78 255.23 595.04 252.41 595.1 253.35 559.05 255.6"
        fill="#a9b3ab"
      />
      <rect x="579.31" y="255.58" width="1.48" height="2.59" fill="#0a1920" />
      <rect x="571.1" y="255.91" width="0.95" height="2.25" fill="#0a1920" />
      <rect x="568.59" y="256.04" width="0.95" height="2.17" fill="#0a1920" />
      <rect x="566.48" y="256.26" width="0.77" height="1.91" fill="#0a1920" />
      <rect x="564.43" y="256.37" width="0.77" height="1.91" fill="#0a1920" />
      <rect x="562.62" y="256.4" width="0.77" height="1.91" fill="#0a1920" />
      <rect x="560.95" y="256.42" width="0.77" height="1.91" fill="#0a1920" />
      <rect x="582.95" y="255.5" width="1.48" height="2.59" fill="#0a1920" />
      <rect x="587.06" y="255.5" width="1.48" height="2.59" fill="#0a1920" />
      <rect x="591.39" y="255.31" width="1.64" height="2.83" fill="#0a1920" />
      <line
        x1="559.05"
        y1="258.29"
        x2="573.64"
        y2="258.29"
        fill="none"
        stroke="#a9b3ab"
        strokeMiterlimit="10"
        strokeWidth="0.21"
      />
      <rect x="573.45" y="255.48" width="2.5" height="4.96" fill="#c1c3c0" />
      <polygon
        points="559.03 258.93 573.46 259.41 573.45 260.36 559.04 259.74 559.03 258.93"
        fill="#473f3d"
      />
      <polygon
        points="575.93 259.46 595.31 259.7 595.31 260.98 575.93 260.46 575.93 259.46"
        fill="#473f3d"
      />
      <polygon
        points="578.99 252.46 578.96 248.86 580.64 248.65 580.76 252.27 578.99 252.46"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.16"
      />
      <line
        x1="580.7"
        y1="249.88"
        x2="578.98"
        y2="250.03"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.16"
      />
      <line
        x1="579.94"
        y1="252.35"
        x2="579.91"
        y2="249.96"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.16"
      />
      <polygon
        points="582.55 252.11 582.52 248.19 584.39 247.96 584.53 251.91 582.55 252.11"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.17"
      />
      <line
        x1="584.46"
        y1="249.3"
        x2="582.54"
        y2="249.47"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.17"
      />
      <line
        x1="583.61"
        y1="252"
        x2="583.58"
        y2="249.39"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.17"
      />
      <polygon
        points="586.5 251.81 586.46 247.69 588.47 247.45 588.61 251.6 586.5 251.81"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.18"
      />
      <line
        x1="588.54"
        y1="248.85"
        x2="586.48"
        y2="249.03"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.18"
      />
      <line
        x1="587.63"
        y1="251.69"
        x2="587.6"
        y2="248.95"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.18"
      />
      <polygon
        points="590.7 251.24 590.66 247.12 592.98 246.88 593.14 251.03 590.7 251.24"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.2"
      />
      <line
        x1="593.06"
        y1="248.28"
        x2="590.68"
        y2="248.46"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.2"
      />
      <line
        x1="592.01"
        y1="251.12"
        x2="591.97"
        y2="248.38"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.2"
      />
      <polygon
        points="574.53 252.89 574.49 249.39 576.17 249.18 576.29 252.71 574.53 252.89"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.15"
      />
      <line
        x1="576.23"
        y1="250.37"
        x2="574.51"
        y2="250.53"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.15"
      />
      <line
        x1="575.47"
        y1="252.79"
        x2="575.45"
        y2="250.46"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.15"
      />
      <polygon
        points="570.95 253.2 570.92 249.93 572.34 249.74 572.44 253.03 570.95 253.2"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.14"
      />
      <line
        x1="572.39"
        y1="250.85"
        x2="570.94"
        y2="250.99"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.14"
      />
      <line
        x1="571.75"
        y1="253.1"
        x2="571.73"
        y2="250.93"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.14"
      />
      <polygon
        points="568.55 253.43 568.53 250.34 569.78 250.16 569.87 253.27 568.55 253.43"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.12"
      />
      <line
        x1="569.82"
        y1="251.21"
        x2="568.54"
        y2="251.35"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.12"
      />
      <line
        x1="569.26"
        y1="253.33"
        x2="569.24"
        y2="251.28"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.12"
      />
      <polygon
        points="566.46 253.62 566.44 250.73 567.6 250.56 567.68 253.47 566.46 253.62"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.12"
      />
      <line
        x1="567.64"
        y1="251.55"
        x2="566.45"
        y2="251.67"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.12"
      />
      <line
        x1="567.12"
        y1="253.54"
        x2="567.1"
        y2="251.62"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.12"
      />
      <polygon
        points="564.61 253.77 564.59 251.02 565.48 250.85 565.54 253.63 564.61 253.77"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.1"
      />
      <line
        x1="565.51"
        y1="251.79"
        x2="564.6"
        y2="251.91"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.1"
      />
      <line
        x1="565.11"
        y1="253.69"
        x2="565.09"
        y2="251.86"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.1"
      />
      <polygon
        points="562.81 253.87 562.79 251.35 563.69 251.2 563.75 253.74 562.81 253.87"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.1"
      />
      <line
        x1="563.72"
        y1="252.06"
        x2="562.8"
        y2="252.17"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.1"
      />
      <line
        x1="563.31"
        y1="253.79"
        x2="563.3"
        y2="252.12"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.1"
      />
      <polygon
        points="561.3 254.07 561.28 251.62 562.07 251.48 562.12 253.94 561.3 254.07"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.09"
      />
      <line
        x1="562.09"
        y1="252.31"
        x2="561.29"
        y2="252.42"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.09"
      />
      <line
        x1="561.74"
        y1="254"
        x2="561.73"
        y2="252.37"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.09"
      />
      <polygon
        points="559.72 254.24 559.71 252.01 560.49 251.88 560.54 254.12 559.72 254.24"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="560.52"
        y1="252.64"
        x2="559.72"
        y2="252.73"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="560.16"
        y1="254.17"
        x2="560.15"
        y2="252.69"
        fill="none"
        stroke="#c1c3c0"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="559.06"
        y1="254.25"
        x2="595"
        y2="251.06"
        fill="none"
        stroke="#a9b3ab"
        strokeMiterlimit="10"
        strokeWidth="0.21"
      />
      <ellipse
        cx="534.55"
        cy="260.83"
        rx="23.66"
        ry="23.17"
        fill="none"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="2.85"
      />
      <polygon
        points="526.2 283.78 534.07 296.02 542.24 283.71 526.2 283.78"
        fill="#020202"
      />
      <ellipse cx="534.55" cy="260.77" rx="22.25" ry="21.97" fill="#fcfcfc" />
      <polygon
        points="515.58 256.83 515.35 268.83 547.08 269.57 546.34 250.81 515.58 256.83"
        fill="#bf9c88"
      />
      <polygon
        points="546.34 250.81 554.31 255.93 554.93 266.48 547.08 269.57 546.34 250.81"
        fill="#6e4941"
      />
      <polygon
        points="515.58 256.83 546.34 250.81 546.49 250.52 541.06 250.44 515.58 256.83"
        fill="#b0a79e"
      />
      <polygon
        points="515.58 256.83 514.43 256.25 541.4 248.93 541.06 250.44 515.58 256.83"
        fill="#857b74"
      />
      <polygon
        points="541.4 248.93 543.48 250.44 541.06 250.44 541.4 248.93"
        fill="#453837"
      />
      <polygon
        points="543.48 250.44 546.61 250.41 546.49 250.52 543.48 250.44"
        fill="#1a1e20"
      />
      <polygon
        points="546.61 250.41 554.75 255.71 554.31 255.93 546.34 250.81 546.49 250.52 546.61 250.41"
        fill="#1a1e20"
      />
      <polygon
        points="515.32 268.25 515.29 268.96 539.79 269.55 539.79 268.65 515.32 268.25"
        fill="#1a1e20"
      />
      <polygon
        points="539.68 252.13 539.79 269.55 541.29 269.53 540.94 251.78 539.68 252.13"
        fill="#b4b0ac"
      />
      <polygon
        points="544.8 251.16 545.18 269.7 547.03 269.65 546.36 250.77 544.8 251.16"
        fill="#b4b0ac"
      />
      <polygon
        points="546.36 250.77 547.02 251.16 547.8 269.28 547.03 269.65 546.36 250.77"
        fill="#565553"
      />
      <polygon
        points="539.77 268.65 541.28 268.64 541.29 269.53 539.77 269.55 539.77 268.65"
        fill="#1a1e20"
      />
      <polygon
        points="545.15 268.81 547.05 268.8 547.07 269.69 545.15 269.71 545.15 268.81"
        fill="#1a1e20"
      />
      <polygon
        points="547.05 268.8 554.89 265.62 554.93 266.48 547.07 269.69 547.05 268.8"
        fill="#1a1e20"
      />
      <polygon
        points="515.43 263.36 515.09 262.43 546.92 259.29 546.73 260.35 515.43 263.36"
        fill="#dad0c9"
      />
      <polygon
        points="546.92 259.29 554.65 261.72 554.69 262.19 546.73 260.36 546.92 259.29"
        fill="#5a5b56"
      />
      <polygon
        points="541.32 261.19 545.2 260.86 545.36 268.86 541.35 268.8 541.32 261.19"
        fill="#232220"
      />
      <path
        d="M-378.31,365l.06-3.82a.88.88,0,0,1,0-.24,1,1,0,0,1,.73-.64,1.08,1.08,0,0,1,1.09.25.64.64,0,0,1,.12.23l-.07,3.85Z"
        transform="translate(902.67 -104.35)"
        fill="#9b9296"
      />
      <path
        d="M-378.15,364.83l0-3.49a.51.51,0,0,1,0-.22.85.85,0,0,1,.61-.58.89.89,0,0,1,.93.22,1.25,1.25,0,0,1,.1.21l-.06,3.53Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="525.39"
        y1="256.14"
        x2="525.33"
        y2="260.3"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="524.58"
        y1="257.86"
        x2="526.21"
        y2="257.53"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <path
        d="M-371.54,364l.06-4.06a.5.5,0,0,1,0-.25,1.08,1.08,0,0,1,.77-.68,1.16,1.16,0,0,1,1.16.27.52.52,0,0,1,.13.24l-.08,4.1Z"
        transform="translate(902.67 -104.35)"
        fill="#9b9296"
      />
      <path
        d="M-371.38,363.8l.06-3.72a.59.59,0,0,1,0-.23.94.94,0,0,1,.65-.62.93.93,0,0,1,1,.24.52.52,0,0,1,.1.22l-.06,3.75Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="532.22"
        y1="254.83"
        x2="532.15"
        y2="259.25"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="531.35"
        y1="256.66"
        x2="533.09"
        y2="256.31"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <path
        d="M-375.11,364.44l.06-3.86a.47.47,0,0,1,0-.24,1,1,0,0,1,.73-.64,1.11,1.11,0,0,1,1.11.25.79.79,0,0,1,.11.23l-.07,3.89Z"
        transform="translate(902.67 -104.35)"
        fill="#9b9296"
      />
      <path
        d="M-375,364.26l.06-3.53a.59.59,0,0,1,0-.23.88.88,0,0,1,.62-.58.88.88,0,0,1,.94.23.62.62,0,0,1,.1.2l-.06,3.57Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="528.59"
        y1="255.52"
        x2="528.53"
        y2="259.72"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <line
        x1="527.77"
        y1="257.26"
        x2="529.42"
        y2="256.93"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.08"
      />
      <path
        d="M-367.76,363.33l.07-4.18a1.06,1.06,0,0,1,0-.26,1.16,1.16,0,0,1,.87-.69,1.38,1.38,0,0,1,1.31.27.64.64,0,0,1,.13.24l-.08,4.22Z"
        transform="translate(902.67 -104.35)"
        fill="#9b9296"
      />
      <path
        d="M-367.57,363.13l.06-3.82a.46.46,0,0,1,0-.24,1,1,0,0,1,.73-.64,1.11,1.11,0,0,1,1.11.25.89.89,0,0,1,.11.22l-.07,3.86Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.09"
      />
      <line
        x1="536.13"
        y1="254.03"
        x2="536.07"
        y2="258.58"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.09"
      />
      <line
        x1="535.16"
        y1="255.91"
        x2="537.12"
        y2="255.55"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.09"
      />
      <path
        d="M-361,362.68l.07-4.18a1.06,1.06,0,0,1,0-.26,1.16,1.16,0,0,1,.87-.69,1.38,1.38,0,0,1,1.31.27.83.83,0,0,1,.13.24l-.08,4.22Z"
        transform="translate(902.67 -104.35)"
        fill="#9b9296"
      />
      <path
        d="M-360.77,362.48l.06-3.83a.48.48,0,0,1,0-.24,1,1,0,0,1,.73-.63,1.11,1.11,0,0,1,1.11.25.75.75,0,0,1,.11.22l-.07,3.86Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.09"
      />
      <line
        x1="542.93"
        y1="253.38"
        x2="542.87"
        y2="257.92"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.09"
      />
      <line
        x1="541.96"
        y1="255.26"
        x2="543.92"
        y2="254.9"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.09"
      />
      <path
        d="M-381.23,365.31l.06-3.3a.49.49,0,0,1,0-.21.88.88,0,0,1,.66-.54,1,1,0,0,1,1,.21.42.42,0,0,1,.1.2l-.06,3.32Z"
        transform="translate(902.67 -104.35)"
        fill="#9b9296"
      />
      <path
        d="M-381.09,365.15l0-3a.6.6,0,0,1,0-.19.78.78,0,0,1,.56-.5.83.83,0,0,1,.85.2.4.4,0,0,1,.08.18l-.05,3Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="522.37"
        y1="257.05"
        x2="522.32"
        y2="260.64"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="521.63"
        y1="258.54"
        x2="523.12"
        y2="258.25"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <path
        d="M-383.45,365.51l.05-3.12a.57.57,0,0,1,0-.19.86.86,0,0,1,.62-.52,1,1,0,0,1,.95.2.58.58,0,0,1,.1.19l-.06,3.14Z"
        transform="translate(902.67 -104.35)"
        fill="#9b9296"
      />
      <path
        d="M-383.31,365.36l0-2.85a.35.35,0,0,1,0-.18.72.72,0,0,1,.52-.47.77.77,0,0,1,.8.18.47.47,0,0,1,.09.17l0,2.88Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="520.1"
        y1="257.47"
        x2="520.05"
        y2="260.86"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="519.4"
        y1="258.87"
        x2="520.81"
        y2="258.6"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <path
        d="M-385.87,365.85l.05-3.12a.56.56,0,0,1,0-.19.84.84,0,0,1,.62-.52,1,1,0,0,1,.95.2.88.88,0,0,1,.1.19l-.06,3.14Z"
        transform="translate(902.67 -104.35)"
        fill="#9b9296"
      />
      <path
        d="M-385.74,365.7l.05-2.85a.54.54,0,0,1,0-.18.7.7,0,0,1,.53-.47.78.78,0,0,1,.8.18.37.37,0,0,1,.08.17l-.05,2.87Z"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="517.68"
        y1="257.81"
        x2="517.63"
        y2="261.2"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="516.98"
        y1="259.21"
        x2="518.39"
        y2="258.94"
        fill="none"
        stroke="#c2c4c7"
        strokeMiterlimit="10"
        strokeWidth="0.06"
      />
      <line
        x1="518.65"
        y1="256.23"
        x2="518.43"
        y2="262.13"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.15"
      />
      <line
        x1="516.86"
        y1="256.58"
        x2="516.64"
        y2="262.48"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.15"
      />
      <line
        x1="521.5"
        y1="255.74"
        x2="521.32"
        y2="261.92"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.15"
      />
      <line
        x1="521.04"
        y1="255.8"
        x2="520.9"
        y2="261.86"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.15"
      />
      <line
        x1="519.28"
        y1="256.14"
        x2="519.1"
        y2="262.32"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.15"
      />
      <line
        x1="523.32"
        y1="255.36"
        x2="523.25"
        y2="261.69"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.15"
      />
      <line
        x1="526.35"
        y1="254.75"
        x2="526.37"
        y2="262"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.16"
      />
      <line
        x1="524.34"
        y1="255.16"
        x2="524.34"
        y2="262.08"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.16"
      />
      <line
        x1="529.6"
        y1="254.41"
        x2="529.61"
        y2="261.72"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.16"
      />
      <line
        x1="527.49"
        y1="254.78"
        x2="527.51"
        y2="262.08"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.16"
      />
      <line
        x1="531.1"
        y1="254.14"
        x2="531.12"
        y2="261.44"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.16"
      />
      <line
        x1="533.38"
        y1="253.45"
        x2="533.29"
        y2="261.5"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.16"
      />
      <line
        x1="534.96"
        y1="253.26"
        x2="534.87"
        y2="261.31"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.16"
      />
      <line
        x1="537.33"
        y1="253.14"
        x2="537.24"
        y2="261.19"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.16"
      />
      <line
        x1="541.72"
        y1="252.59"
        x2="541.63"
        y2="260.64"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.16"
      />
      <line
        x1="544.15"
        y1="252.3"
        x2="544.05"
        y2="260.35"
        fill="none"
        stroke="#dad0c9"
        strokeMiterlimit="10"
        strokeWidth="0.16"
      />
      <polygon
        points="515.59 256.83 546.39 251.99 546.35 250.78 515.59 256.83"
        fill="#dad0c9"
      />
      <ellipse
        cx="615.15"
        cy="341.84"
        rx="23.93"
        ry="23.44"
        fill="none"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="2.88"
      />
      <polygon
        points="606.7 365.06 614.66 377.44 622.92 364.98 606.7 365.06"
        fill="#020202"
      />
      <ellipse cx="615.15" cy="341.79" rx="22.5" ry="22.22" fill="#fcfcfc" />
      <polygon
        points="611.09 328.99 627.51 329.24 626.57 330.12 611.45 330.27 611.09 328.99"
        fill="#664442"
      />
      <polygon
        points="602.76 340.76 613.14 334.28 613.26 356.73 602.94 352.41 602.76 340.76"
        fill="#765a52"
      />
      <polygon
        points="602.76 340.76 601.89 340.19 612.09 332.41 613.14 334.28 602.76 340.76"
        fill="#644540"
      />
      <polygon
        points="601.89 340.19 601.89 338.98 611.45 330.27 612.09 332.41 601.89 340.19"
        fill="#4f3831"
      />
      <polygon
        points="601.89 338.98 600.99 338.99 611.09 328.99 611.45 330.27 601.89 338.98"
        fill="#272727"
      />
      <polygon
        points="611.45 330.27 612.09 332.41 621.02 332.69 626.57 330.12 611.45 330.27"
        fill="#794d3e"
      />
      <polygon
        points="613.14 334.28 612.09 332.41 621.02 332.69 618.39 334.25 613.14 334.28"
        fill="#634036"
      />
      <polygon
        points="613.14 334.28 618.21 334.28 613.14 336.87 613.14 334.28"
        fill="#7b5141"
      />
      <polygon
        points="613.26 353.55 613.26 356.56 612.07 356.87 602.28 352.65 602.36 351.48 613.26 353.55"
        fill="#7b5141"
      />
      <path
        d="M-291.94,448.55s-2.27,1.9-1.59,2.61a3,3,0,0,0,1.71.8Z"
        transform="translate(902.67 -104.35)"
        fill="#626264"
      />
      <path
        d="M-294.31,448.72s-2.36,1.8-1.65,2.47a3.32,3.32,0,0,0,1.78.76Z"
        transform="translate(902.67 -104.35)"
        fill="#626264"
      />
      <path
        d="M-296.32,449.22s-2.36,1.81-1.66,2.48a3.28,3.28,0,0,0,1.79.75Z"
        transform="translate(902.67 -104.35)"
        fill="#626264"
      />
      <path
        d="M-298.07,449.55s-2.1,1.52-1.47,2.08a3,3,0,0,0,1.59.63Z"
        transform="translate(902.67 -104.35)"
        fill="#626264"
      />
      <path
        d="M-296.36,449.3l.1,2.4s-.34.38-1.16-.29,1.06-2.11,1.06-2.11l-.06-3.35-1.34.55,0,3s-1.91,1.66-1,2,.76.35.76.35l1.69-.05v-.11"
        transform="translate(902.67 -104.35)"
        fill="#afabab"
      />
      <path
        d="M-294.34,449l.12,2.75s-.39.44-1.33-.33,1.21-2.42,1.21-2.42l-.06-3.84-1.54.64.05,3.39s-2.19,1.9-1.13,2.36.87.4.87.4l1.94-.06v-.13"
        transform="translate(902.67 -104.35)"
        fill="#afabab"
      />
      <path
        d="M-298,449.6l.08,2.14s-.28.33-1-.26.88-1.88.88-1.88l-.05-3-1.11.49,0,2.63s-1.58,1.48-.81,1.83.63.31.63.31l1.4-.05v-.1"
        transform="translate(902.67 -104.35)"
        fill="#afabab"
      />
      <path
        d="M-291.77,451.72v.15l-2.17.07s.2.06-1-.46,1.26-2.69,1.26-2.69l0-3.87,1.72-.72.07,4.38s-2.4,1.88-1.35,2.76,1.48.38,1.48.38l-.13-3.14"
        transform="translate(902.67 -104.35)"
        fill="#afabab"
      />
      <line
        x1="602.85"
        y1="347.92"
        x2="613.28"
        y2="347.6"
        fill="none"
        stroke="#7b5141"
        strokeMiterlimit="10"
        strokeWidth="0.94"
      />
      <polygon
        points="613.26 356.56 613.14 336.87 627.51 329.24 627.93 351.61 613.26 356.56"
        fill="#7b5141"
      />
      <ellipse
        cx="465.7"
        cy="160.88"
        rx="22.47"
        ry="22.01"
        fill="none"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="2.7"
      />
      <polygon
        points="457.77 182.69 465.24 194.31 473 182.62 457.77 182.69"
        fill="#020202"
      />
      <ellipse cx="465.7" cy="160.84" rx="21.13" ry="20.86" fill="#fcfcfc" />
      <polygon
        points="450.15 154.49 468.13 151.02 467.99 172.04 450 171.19 450.15 154.49"
        fill="#804f48"
      />
      <polygon
        points="468.13 151.02 482.13 156.24 482.32 170.34 467.99 172.04 468.13 151.02"
        fill="#925948"
      />
      <polygon
        points="450.05 153.4 468.46 149.5 468.13 151.02 450.15 154.49 450.05 153.4"
        fill="#c2c1c0"
      />
      <polygon
        points="468.46 149.5 482.89 155.58 482.13 156.24 468.13 151.02 468.46 149.5"
        fill="#b3acb1"
      />
      <polygon
        points="476.3 149.54 475.4 149.69 475.73 149.92 475.71 150.83 474.62 151.02 474.81 151.29 474.81 152.2 475.63 152.49 475.78 151.1 476.33 151.19 476.3 149.54"
        fill="#6d5758"
      />
      <polygon
        points="475.63 152.49 475.59 150.85 476.24 151.02 476.3 149.54 477.51 150.07 477.49 151.23 477.88 151.82 478.43 152.03 478.35 153.25 479.21 153.82 479.11 153.97 475.63 152.49"
        fill="#927066"
      />
      <polygon
        points="469.08 152.75 468.99 157.08 470.41 157.49 470.54 153.25 469.08 152.75"
        fill="#8a9599"
      />
      <polygon
        points="471.11 153.41 471.01 157.75 472.43 158.16 472.56 153.92 471.11 153.41"
        fill="#8a9599"
      />
      <polygon
        points="472.81 154.04 472.72 158.38 474.14 158.79 474.27 154.55 472.81 154.04"
        fill="#8a9599"
      />
      <polygon
        points="476.04 155 475.94 159.34 477.37 159.75 477.5 155.51 476.04 155"
        fill="#8a9599"
      />
      <polygon
        points="478.36 156.08 478.32 159.18 479.01 159.47 479.08 156.44 478.36 156.08"
        fill="#8a9599"
      />
      <polygon
        points="479.41 156.56 479.36 159.65 480.06 159.95 480.12 156.92 479.41 156.56"
        fill="#8a9599"
      />
      <polygon
        points="480.58 157.06 480.53 160.16 481.23 160.45 481.29 157.43 480.58 157.06"
        fill="#8a9599"
      />
      <polygon
        points="469.05 164.58 469.08 160.75 470.41 161 470.44 164.9 469.05 164.58"
        fill="#8a9599"
      />
      <polygon
        points="471.17 164.96 471.19 161.13 472.34 161.38 472.37 165.28 471.17 164.96"
        fill="#8a9599"
      />
      <polygon
        points="473.04 165.34 473.06 161.51 474.02 161.76 474.05 165.65 473.04 165.34"
        fill="#8a9599"
      />
      <polygon
        points="476.29 165.82 476.32 162 477.28 162.25 477.31 166.14 476.29 165.82"
        fill="#8a9599"
      />
      <polygon
        points="478.51 166.29 478.52 162.46 479.03 162.71 479.05 166.6 478.51 166.29"
        fill="#8a9599"
      />
      <polygon
        points="479.58 166.6 479.6 162.78 480.11 163.03 480.12 166.92 479.58 166.6"
        fill="#8a9599"
      />
      <polygon
        points="480.79 166.37 480.8 163.16 481.31 163.37 481.32 166.63 480.79 166.37"
        fill="#8a9599"
      />
      <polygon
        points="451.12 155.76 452.22 155.53 452.18 158.78 450.95 158.91 451.12 155.76"
        fill="#454d4b"
      />
      <polygon
        points="453.84 155.43 454.94 155.19 454.9 158.44 453.67 158.57 453.84 155.43"
        fill="#454d4b"
      />
      <polygon
        points="456.52 154.93 457.62 154.69 457.57 158.08 456.35 158.21 456.52 154.93"
        fill="#454d4b"
      />
      <polygon
        points="459.91 154.22 461.27 153.95 461.21 157.72 459.7 157.87 459.91 154.22"
        fill="#454d4b"
      />
      <polygon
        points="463.12 153.53 464.77 153.23 464.7 157.35 462.87 157.51 463.12 153.53"
        fill="#454d4b"
      />
      <polygon
        points="463.03 161.17 464.67 160.87 464.61 164.99 462.77 165.15 463.03 161.17"
        fill="#454d4b"
      />
      <polygon
        points="459.52 161.39 461.16 161.09 461.1 165.21 459.26 165.38 459.52 161.39"
        fill="#454d4b"
      />
      <polygon
        points="456.29 161.74 457.93 161.44 457.87 165.56 456.04 165.72 456.29 161.74"
        fill="#454d4b"
      />
      <polygon
        points="453.16 161.99 454.8 161.69 454.74 165.81 452.9 165.98 453.16 161.99"
        fill="#454d4b"
      />
      <polygon
        points="450.82 162.21 452.46 161.92 452.4 166.04 450.56 166.2 450.82 162.21"
        fill="#454d4b"
      />
      <polygon
        points="450 159.04 468.04 156.62 468.1 158.34 450.19 160.37 450 159.04"
        fill="#927066"
      />
      <polygon
        points="468.04 156.62 482.18 160.25 482.21 161.41 468.1 158.34 468.04 156.62"
        fill="#8d5542"
      />
      <polygon
        points="450.19 165.15 468.07 164.33 468.07 166.32 450.1 166.92 450.19 165.15"
        fill="#826154"
      />
      <polygon
        points="468.07 164.33 482.34 165.75 482.3 166.98 468.07 166.32 468.07 164.33"
        fill="#a7a09c"
      />
      <polygon
        points="474.71 154.14 475.5 154.04 475.53 171.22 474.96 171.25 474.71 154.14"
        fill="#e2d1d5"
      />
      <polygon
        points="475.5 154.04 476.2 154.24 476.62 170.99 475.53 171.22 475.5 154.04"
        fill="#ccc2c6"
      />
      <polygon
        points="474.64 153.46 474.71 154.14 475.5 154.04 476.2 154.24 476.28 154.09 474.64 153.46"
        fill="#ccc2c6"
      />
      <polygon
        points="477.3 154.86 478.19 154.99 478.17 170.81 477.28 170.96 477.3 154.86"
        fill="#ccc2c6"
      />
      <polygon
        points="477.3 154.86 477.16 154.4 478.36 154.84 478.19 155.01 477.3 154.86"
        fill="#ccc2c6"
      />
      <ellipse
        cx="515.74"
        cy="194.91"
        rx="23.32"
        ry="22.84"
        fill="none"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="2.81"
      />
      <polygon
        points="507.51 217.53 515.27 229.6 523.32 217.46 507.51 217.53"
        fill="#020202"
      />
      <ellipse cx="515.74" cy="194.86" rx="21.93" ry="21.65" fill="#fcfcfc" />
      <polygon
        points="507.67 182.7 529.59 187.86 530.33 205.25 507.16 206.66 507.67 182.7"
        fill="#784b45"
      />
      <polygon
        points="507.67 182.7 504.44 184.01 501.04 191.03 501.23 203.21 507.16 206.66 507.67 182.7"
        fill="#54312f"
      />
      <polygon
        points="507.56 182.72 507.6 186 529.73 189.65 529.77 188.36 530.91 187.48 507.56 182.72"
        fill="#8d8986"
      />
      <polygon
        points="507.6 186 507.1 206.68 508.31 206.57 508.95 186.22 507.6 186"
        fill="#b1b2af"
      />
      <polygon
        points="514.01 187.05 514.36 206.31 515.45 206.19 515.45 187.32 514.01 187.05"
        fill="#b1b2af"
      />
      <polygon
        points="518.58 187.84 518.77 206.1 519.72 205.99 519.45 187.92 518.58 187.84"
        fill="#b1b2af"
      />
      <polygon
        points="522.12 188.41 522.7 205.65 523.36 205.73 523.08 188.48 522.12 188.41"
        fill="#b1b2af"
      />
      <polygon
        points="525.7 189.01 526.43 205.5 527.81 205.57 527.23 189.22 525.7 189.01"
        fill="#b1b2af"
      />
      <polygon
        points="528.41 189.41 529.1 205.37 530.48 205.21 529.73 189.59 528.41 189.41"
        fill="#b1b2af"
      />
      <polygon
        points="507.6 186 529.75 190.37 529.73 189.58 507.6 185.56 507.6 186"
        fill="#adb2ba"
      />
      <polygon
        points="507.42 194.42 530.03 196.39 530.1 197.29 507.37 195.68 507.42 194.42"
        fill="#adb2ba"
      />
      <polygon
        points="507.03 205.85 530.44 204.3 530.48 205.21 507.1 206.68 507.03 205.85"
        fill="#5b4036"
      />
      <polygon
        points="507.03 205.85 501.23 202.6 501.2 203.13 507.1 206.68 507.03 205.85"
        fill="#5b4036"
      />
      <polygon
        points="509.13 193.19 509.18 188.96 510.77 189.14 510.65 193.3 509.13 193.19"
        fill="none"
        stroke="#adb2ba"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="510.7"
        y1="190.24"
        x2="509.16"
        y2="190.09"
        fill="none"
        stroke="#adb2ba"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <polygon
        points="511.86 193.49 511.91 189.26 513.5 189.44 513.39 193.6 511.86 193.49"
        fill="none"
        stroke="#adb2ba"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="513.44"
        y1="190.55"
        x2="511.89"
        y2="190.39"
        fill="none"
        stroke="#adb2ba"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <path
        d="M-386.24,298.44h-.83l-.05-3.77a.67.67,0,0,1,0-.27.56.56,0,0,1,.39-.4c.25,0,.54.2.6.61l.1,3.84Z"
        transform="translate(902.67 -104.35)"
        fill="#717273"
      />
      <path
        d="M-384.55,298.52l-.78,0,0-3.51a.58.58,0,0,1,0-.25.5.5,0,0,1,.36-.37c.23,0,.51.19.56.57l.09,3.57Z"
        transform="translate(902.67 -104.35)"
        fill="#717273"
      />
      <path
        d="M-382.4,298.6l-.72,0,0-3.25a.67.67,0,0,1,0-.24.52.52,0,0,1,.34-.35c.21,0,.47.18.52.53l.08,3.32Z"
        transform="translate(902.67 -104.35)"
        fill="#717273"
      />
      <path
        d="M-380.81,298.6l-.66,0,0-3a1,1,0,0,1,0-.22.44.44,0,0,1,.31-.31c.2,0,.43.16.48.48l.08,3.06Z"
        transform="translate(902.67 -104.35)"
        fill="#717273"
      />
      <path
        d="M-378.81,298.92h-.66l0-3a.57.57,0,0,1,0-.22.47.47,0,0,1,.31-.32c.2,0,.43.17.48.49l.08,3.06Z"
        transform="translate(902.67 -104.35)"
        fill="#717273"
      />
      <path
        d="M-374.43,299.35h-.66l0-3a.57.57,0,0,1,0-.22.45.45,0,0,1,.31-.32c.2,0,.43.16.48.49l.08,3.06Z"
        transform="translate(902.67 -104.35)"
        fill="#717273"
      />
      <path
        d="M-377.45,299.07h-.66l0-3a.57.57,0,0,1,0-.22.47.47,0,0,1,.31-.32c.2,0,.43.17.48.49l.08,3.06Z"
        transform="translate(902.67 -104.35)"
        fill="#717273"
      />
      <ellipse
        cx="354.81"
        cy="300.86"
        rx="22.89"
        ry="22.42"
        fill="none"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="2.76"
      />
      <polygon
        points="346.73 323.07 354.34 334.92 362.24 323 346.73 323.07"
        fill="#020202"
      />
      <ellipse cx="354.81" cy="300.81" rx="21.53" ry="21.26" fill="#fcfcfc" />
      <polygon
        points="337.76 300.62 358.5 293.34 359.5 310.79 338.31 311.11 337.76 300.62"
        fill="#908475"
      />
      <polygon
        points="358.5 293.34 371.5 295.45 372.64 308.5 359.5 310.79 358.5 293.34"
        fill="#a89f96"
      />
      <polygon
        points="337.76 300.62 337.35 300.3 358.45 291.6 358.5 293.34 337.76 300.62"
        fill="#434434"
      />
      <polygon
        points="358.45 291.6 372.09 294.49 371.5 295.45 358.5 293.34 358.45 291.6"
        fill="#a59c97"
      />
      <polygon
        points="358.45 291.6 358.22 289.28 359.35 289.8 363.93 287.61 365.79 288.13 365.98 289.01 366.86 289.25 366.89 289.83 367.84 290.08 367.84 290.78 368.81 290.9 368.81 291.36 369.73 291.79 369.76 292.46 371.16 292.67 371.29 294.29 358.45 291.6"
        fill="#a6a39c"
      />
      <polygon
        points="337.78 300.12 338.36 298.59 338.87 298.5 340.22 297.65 340.89 297.95 340.92 298.81 342.26 298.23 342.23 296.76 342.98 296.18 344 296.39 345.05 295.3 345.02 295.13 344.75 295.11 344.76 294.95 345.5 294.61 347.71 294.88 348.27 294.55 348.27 293.97 349.07 293.31 350.09 293.79 350.11 295.05 337.78 300.12"
        fill="#aba79e"
      />
      <polygon
        points="350.11 295.05 352.78 293.7 353.05 291.92 352.86 291.77 353.7 291.26 354.15 291.48 354.36 291.55 354.76 291.41 354.76 291.23 355.65 290.42 355.64 290.05 355.04 289.45 355.74 288.93 356.56 289.25 356.1 290 356.17 290.68 357.24 291.05 357.37 290.9 357.34 289.8 358.22 289.28 358.45 291.6 350.11 295.05"
        fill="#aba79e"
      />
      <path
        d="M-559.35,408v-2.24s.07-.79.29-.43a10.59,10.59,0,0,1,.18,2.48Z"
        transform="translate(902.67 -104.35)"
        fill="#6e5f57"
      />
      <path
        d="M-558.34,407.72v-2.24s.07-.79.29-.43a10.67,10.67,0,0,1,.18,2.49Z"
        transform="translate(902.67 -104.35)"
        fill="#6e5f57"
      />
      <path
        d="M-557.24,407.44V405.2s.07-.79.29-.43a10.67,10.67,0,0,1,.18,2.49Z"
        transform="translate(902.67 -104.35)"
        fill="#6e5f57"
      />
      <path
        d="M-556.13,407.21V405s.07-.79.29-.43a10.67,10.67,0,0,1,.18,2.49Z"
        transform="translate(902.67 -104.35)"
        fill="#6e5f57"
      />
      <path
        d="M-554.8,406.89v-2.24s.08-.79.3-.43a10.58,10.58,0,0,1,.17,2.49Z"
        transform="translate(902.67 -104.35)"
        fill="#6e5f57"
      />
      <path
        d="M-561.9,408.59v-2.24s.08-.79.3-.43a10.5,10.5,0,0,1,.17,2.48Z"
        transform="translate(902.67 -104.35)"
        fill="#6e5f57"
      />
      <path
        d="M-560.69,408.31v-2.23s.07-.8.29-.43a10.56,10.56,0,0,1,.18,2.48Z"
        transform="translate(902.67 -104.35)"
        fill="#6e5f57"
      />
      <path
        d="M-552.31,406.33v-2.61s.09-.92.38-.5a11,11,0,0,1,.23,2.9Z"
        transform="translate(902.67 -104.35)"
        fill="#6e5f57"
      />
      <path
        d="M-550.27,405.77v-2.61s.1-.93.39-.5a11.3,11.3,0,0,1,.23,2.89Z"
        transform="translate(902.67 -104.35)"
        fill="#6e5f57"
      />
      <polygon
        points="337.1 304.4 338.25 304.21 339.68 304.29 352.4 301.41 355.69 300.2 357.99 300.28 358.07 301.92 355.67 302.03 352.52 302.66 339.78 305.41 338.24 305.47 337.06 305.58 337.1 304.4"
        fill="#95988b"
      />
      <polygon
        points="357.36 293.64 358.44 293.36 359.5 310.75 358.34 310.79 357.36 293.64"
        fill="#b3ada1"
      />
      <polygon
        points="358.44 293.36 359.76 293.44 360.9 310.14 359.5 310.8 358.44 293.36"
        fill="#9d948b"
      />
      <polygon
        points="359.5 310.8 360.93 310.54 360.9 310.14 359.5 310.8"
        fill="#9d948b"
      />
      <polygon
        points="339.66 299.93 340.27 299.74 340.35 311.09 339.84 310.89 339.66 299.93"
        fill="#979a90"
      />
      <polygon
        points="353.1 295.24 354.1 294.81 354.99 310.59 353.77 310.59 353.1 295.24"
        fill="#979a90"
      />
      <polygon
        points="359.44 310.01 359.5 310.99 338.11 311.21 338.08 310.8 359.44 310.01"
        fill="#4c433b"
      />
      <polygon
        points="359.44 310.01 372.57 308.02 372.63 308.51 359.5 310.99 359.44 310.01"
        fill="#504a46"
      />
      <path
        d="M-561.67,414.25l.06-2.58a.55.55,0,0,1,.34-.44.7.7,0,0,1,.57,0,.64.64,0,0,1,.36.38c0,.08,0,2.64,0,2.64Z"
        transform="translate(902.67 -104.35)"
        fill="#504a46"
      />
      <path
        d="M-558.84,414.12l.06-2.58a.55.55,0,0,1,.34-.44.66.66,0,0,1,.57,0,.64.64,0,0,1,.36.38c0,.07,0,2.64,0,2.64Z"
        transform="translate(902.67 -104.35)"
        fill="#504a46"
      />
      <path
        d="M-555.79,414.06l.07-2.84a.59.59,0,0,1,.39-.48.84.84,0,0,1,.66,0,.7.7,0,0,1,.41.41c0,.09,0,2.91,0,2.91Z"
        transform="translate(902.67 -104.35)"
        fill="#504a46"
      />
      <path
        d="M-552,414.68l0-3.67a.89.89,0,0,1,.74-.65,2.27,2.27,0,0,1,1.28-.05,1.19,1.19,0,0,1,.81.51c0,.1.19,3.75.19,3.75Z"
        transform="translate(902.67 -104.35)"
        fill="#504a46"
      />
      <path
        d="M-547.62,414.55v-4.18a1,1,0,0,1,.79-.73,2.32,2.32,0,0,1,1.34-.06,1.25,1.25,0,0,1,.86.59c0,.12.22,4.26.22,4.26Z"
        transform="translate(902.67 -104.35)"
        fill="#504a46"
      />
      <polygon
        points="340.34 305.67 353.45 303.38 353.48 304.26 340.37 306.24 340.34 305.67"
        fill="#5d584d"
      />
      <ellipse
        cx="420.4"
        cy="66.19"
        rx="22.49"
        ry="22.03"
        fill="none"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="2.71"
      />
      <polygon
        points="412.46 88.01 419.94 99.65 427.71 87.94 412.46 88.01"
        fill="#020202"
      />
      <ellipse cx="420.4" cy="66.14" rx="21.15" ry="20.89" fill="#fcfcfc" />
      <path
        d="M-500.91,176.13l.36-9.8h.59a3.66,3.66,0,0,0,.42,0c.05,0,0-.06.07-.13l1.2-2.14h.52v-.41l.17-.14h.37l.14.14v.42h.47l1.22,2.23,1.18,0,0,.8h.29v-.26H-494v-.15l.48-.56h.32l.26.52,3.06-.05a.56.56,0,0,1,0-.15.52.52,0,0,1,.31-.31.46.46,0,0,1,.31.05.53.53,0,0,1,.22.4v.06H-486a.74.74,0,0,1,0-.15.46.46,0,0,1,.3-.35.41.41,0,0,1,.34.13.45.45,0,0,1,.1.24v.16l1.22,0v-.13h-.22a.71.71,0,0,1,.18-.24,1.18,1.18,0,0,1,.29-.19c.57-.25.46-.22.61-.27a6.09,6.09,0,0,1,1.08-.29v-.22h.1V165l.12-.09h.21l.1.1v.32h.1v.22l.24,0a4.65,4.65,0,0,1,2,.82l.1.09h-.19v.15l.92,0,0-.07a.89.89,0,0,1,.2-.26.36.36,0,0,1,.21-.08.45.45,0,0,1,.36.11.51.51,0,0,1,.13.26l0,.06,2.83,0a.86.86,0,0,1,.05-.15.59.59,0,0,1,.27-.25.5.5,0,0,1,.29,0,.49.49,0,0,1,.27.22.59.59,0,0,1,.08.2l2.88,0s0-.1.08-.17a.55.55,0,0,1,.27-.25.45.45,0,0,1,.36,0,.45.45,0,0,1,.23.37v0h.34v-.28h1.14l1-2.19h.44v-.4l.18-.17h.27l.18.15v.41h.46l1.33,2.18h.84l.64,9.32Z"
        transform="translate(902.67 -104.35)"
        fill="#552e2f"
      />
      <path
        d="M-497.07,163.67l.17.13v.29h.31l.41.3,1,1.92-.3.35c-.51-.86-1.07-1.71-1.59-2.57-.06-.1-.08-.22-.14-.32Z"
        transform="translate(902.67 -104.35)"
        fill="#614753"
      />
      <polygon
        points="435.87 59.34 435.64 59.47 435.65 59.74 435.45 59.74 435.03 60.06 434.02 61.93 433.95 62.04 434.93 62 435.76 59.83 435.92 59.82 435.92 59.37 435.87 59.34"
        fill="#614753"
      />
      <polygon
        points="412.83 63.2 412.69 71.63 413.47 71.61 413.45 63.2 412.83 63.2"
        fill="#5d3132"
      />
      <polygon
        points="416.85 63.19 416.69 71.59 417.48 71.58 417.51 63.18 416.85 63.19"
        fill="#5d3132"
      />
      <polygon
        points="420.69 63.12 420.69 71.5 421.51 71.51 421.38 63.12 420.69 63.12"
        fill="#5d3132"
      />
      <polygon
        points="424.72 63.1 424.69 71.44 425.5 71.44 425.39 63.09 424.72 63.1"
        fill="#5d3132"
      />
      <polygon
        points="428.6 63.06 428.56 71.39 429.39 71.38 429.25 63.06 428.6 63.06"
        fill="#5d3132"
      />
      <path
        d="M-500.53,172.78l5.61,0,.63-.08a1.06,1.06,0,0,1,.62-.21,1.17,1.17,0,0,1,.62.21l.08.06h2.76a.73.73,0,0,1,1.27,0l2.71,0a.79.79,0,0,1,1.33,0h2.53a1,1,0,0,1,1.48,0l2.58,0a.86.86,0,0,1,1.34,0l2.5-.05a.91.91,0,0,1,1.43,0h2.41a.92.92,0,0,1,1.42,0l5.84-.11"
        transform="translate(902.67 -104.35)"
        fill="none"
        stroke="#999499"
        strokeMiterlimit="10"
        strokeWidth="0.21"
      />
      <polygon
        points="402.63 71.77 402.91 63.05 403.25 62.55 404.05 62.51 404.06 62.18 406.53 62.16 406.55 62.52 407.42 62.55 407.62 63.11 407.25 71.7 408.08 71.68 408.25 61.84 407.37 61.83 406.24 59.58 405.73 59.57 405.71 59.12 405.56 58.98 405.54 59.95 405.22 59.95 405.19 58.99 405.02 59.12 405.02 59.54 404.49 59.54 403.19 61.8 402.16 61.78 401.75 71.79 402.63 71.77"
        fill="#999499"
      />
      <polygon
        points="408.08 71.68 408.27 71.68 408.47 62.76 408.21 62.05 408.08 71.68"
        fill="#2f1e23"
      />
      <polygon
        points="433.95 71.3 433.51 62.03 434.35 61.97 435.45 59.77 435.89 59.77 435.88 59.34 436.07 59.19 436.07 60.15 436.37 60.15 436.34 59.19 436.52 59.34 436.52 59.75 437 59.74 438.3 61.92 439.15 61.91 439.79 71.23 438.98 71.25 438.48 63.27 438.14 62.71 437.36 62.7 437.35 62.36 435.29 62.36 435.28 62.68 434.5 62.68 434.21 63.13 434.75 71.3 433.95 71.3"
        fill="#999499"
      />
      <polygon
        points="433.95 71.3 433.58 71.31 433.07 62.27 433.51 62.03 433.95 71.3"
        fill="#2f1e23"
      />
      <line
        x1="408.44"
        y1="63.14"
        x2="433.11"
        y2="62.92"
        fill="none"
        stroke="#999499"
        strokeMiterlimit="10"
        strokeWidth="0.21"
      />
      <polygon
        points="409.61 64.29 409.63 63.47 412.77 63.5 412.78 64.33 412.43 64.33 412.43 63.8 412.31 63.8 412.31 63.65 412.11 63.66 412.1 63.82 411.82 63.83 411.82 63.63 411.58 63.64 411.58 63.82 411.33 63.82 411.33 63.64 411.07 63.64 411.07 63.83 410.82 63.84 410.81 63.64 410.61 63.64 410.61 63.84 410.32 63.84 410.32 63.64 410.13 63.65 410.13 63.79 409.98 63.79 409.98 64.29 409.61 64.29"
        fill="#9e9fa1"
      />
      <polygon
        points="413.52 64.37 413.54 63.55 416.68 63.58 416.69 64.4 416.34 64.41 416.34 63.88 416.23 63.88 416.23 63.73 416.02 63.74 416.02 63.9 415.73 63.91 415.73 63.71 415.5 63.72 415.5 63.9 415.24 63.9 415.24 63.72 414.98 63.72 414.98 63.91 414.73 63.91 414.73 63.72 414.53 63.72 414.52 63.92 414.24 63.92 414.23 63.72 414.04 63.73 414.05 63.87 413.9 63.87 413.89 64.37 413.52 64.37"
        fill="#9e9fa1"
      />
      <polygon
        points="417.48 64.28 417.49 63.46 420.63 63.48 420.64 64.31 420.29 64.32 420.29 63.79 420.18 63.78 420.18 63.64 419.97 63.65 419.97 63.81 419.68 63.81 419.69 63.62 419.45 63.63 419.45 63.81 419.2 63.81 419.19 63.63 418.93 63.63 418.93 63.82 418.69 63.82 418.68 63.63 418.48 63.63 418.47 63.83 418.19 63.83 418.19 63.63 418 63.64 418 63.77 417.85 63.77 417.84 64.28 417.48 64.28"
        fill="#9e9fa1"
      />
      <polygon
        points="421.39 64.26 421.4 63.44 424.55 63.47 424.56 64.3 424.21 64.3 424.21 63.78 424.09 63.77 424.09 63.63 423.89 63.63 423.88 63.79 423.6 63.8 423.6 63.61 423.36 63.61 423.36 63.8 423.11 63.79 423.11 63.61 422.85 63.62 422.85 63.81 422.6 63.81 422.59 63.61 422.39 63.61 422.39 63.82 422.1 63.82 422.1 63.62 421.91 63.62 421.92 63.76 421.76 63.76 421.76 64.26 421.39 64.26"
        fill="#9e9fa1"
      />
      <polygon
        points="425.38 64.25 425.4 63.43 428.54 63.46 428.55 64.29 428.2 64.29 428.2 63.76 428.08 63.76 428.08 63.61 427.88 63.62 427.88 63.78 427.59 63.79 427.59 63.59 427.36 63.6 427.35 63.78 427.1 63.78 427.1 63.6 426.84 63.6 426.84 63.79 426.59 63.8 426.58 63.6 426.38 63.6 426.38 63.8 426.09 63.81 426.09 63.6 425.9 63.61 425.91 63.75 425.75 63.75 425.75 64.25 425.38 64.25"
        fill="#9e9fa1"
      />
      <polygon
        points="429.25 64.2 429.27 63.38 432.41 63.41 432.42 64.23 432.07 64.24 432.07 63.71 431.96 63.71 431.96 63.56 431.75 63.57 431.75 63.73 431.46 63.74 431.47 63.54 431.23 63.55 431.23 63.73 430.98 63.73 430.97 63.55 430.71 63.55 430.71 63.74 430.46 63.74 430.46 63.55 430.26 63.55 430.25 63.75 429.97 63.75 429.97 63.55 429.78 63.56 429.78 63.7 429.63 63.7 429.62 64.2 429.25 64.2"
        fill="#9e9fa1"
      />
      <rect x="409.98" y="64.78" width="2.37" height="1.94" fill="#252726" />
      <rect x="413.97" y="64.71" width="2.37" height="1.94" fill="#252726" />
      <rect x="417.84" y="64.73" width="2.37" height="1.94" fill="#252726" />
      <rect x="421.79" y="64.74" width="2.37" height="1.94" fill="#252726" />
      <rect x="425.6" y="64.71" width="2.37" height="1.94" fill="#252726" />
      <rect x="429.56" y="64.66" width="2.37" height="1.94" fill="#252726" />
      <rect x="435.72" y="64.63" width="1.36" height="1.76" fill="#534e52" />
      <rect x="404.41" y="64.81" width="1.36" height="1.76" fill="#534e52" />
      <ellipse
        cx="315.81"
        cy="288.91"
        rx="21.87"
        ry="21.42"
        fill="none"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="2.63"
      />
      <polygon
        points="308.08 310.13 315.36 321.44 322.91 310.06 308.08 310.13"
        fill="#020202"
      />
      <ellipse cx="315.81" cy="288.86" rx="20.57" ry="20.31" fill="#fcfcfc" />
      <polygon
        points="304.37 277.53 326.94 279.1 329.35 301.9 302.41 303.1 304.37 277.53"
        fill="#78514c"
      />
      <polygon
        points="304.24 303.04 302.33 303.07 304.48 275.74 306.01 275.85 304.24 303.04"
        fill="#959fa1"
      />
      <polygon
        points="329.35 301.9 327.49 302.04 325.37 277.32 326.7 277.46 329.35 301.9"
        fill="#959fa1"
      />
      <path
        d="M-589.18,407l.22-27.67,1.11,0v.59s1.29,1.8,2.54.34v-.6h1.18l1.23,27Z"
        transform="translate(902.67 -104.35)"
        fill="#959fa1"
      />
      <polygon
        points="302.36 302.07 302.33 303.25 329.35 301.99 329.24 300.78 302.36 302.07"
        fill="#211c1c"
      />
      <line
        x1="305.12"
        y1="281.12"
        x2="326.27"
        y2="281.95"
        fill="none"
        stroke="#959fa1"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="305.07"
        y1="281.38"
        x2="326.22"
        y2="282.21"
        fill="none"
        stroke="#959fa1"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <polygon
        points="307.71 284.23 306.06 284.16 306.32 280.54 307.9 280.55 307.71 284.23"
        fill="#5c737e"
      />
      <polygon
        points="306.35 280.55 307.9 280.55 307.71 284.2 306.9 284.17 306.05 284.15 306.35 280.55"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="307.07"
        y1="281.75"
        x2="306.87"
        y2="284.18"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="306.25"
        y1="281.7"
        x2="307.84"
        y2="281.74"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <polygon
        points="310.22 284.28 308.58 284.21 308.83 280.59 310.42 280.6 310.22 284.28"
        fill="#5c737e"
      />
      <polygon
        points="308.86 280.6 310.42 280.6 310.22 284.25 309.41 284.23 308.56 284.2 308.86 280.6"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="309.59"
        y1="281.81"
        x2="309.38"
        y2="284.23"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="308.76"
        y1="281.75"
        x2="310.35"
        y2="281.79"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <polygon
        points="312.88 284.31 311.23 284.24 311.49 280.62 313.07 280.64 312.88 284.31"
        fill="#5c737e"
      />
      <polygon
        points="311.52 280.64 313.07 280.64 312.88 284.29 312.07 284.26 311.22 284.23 311.52 280.64"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="312.24"
        y1="281.84"
        x2="312.04"
        y2="284.27"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="311.42"
        y1="281.79"
        x2="313.01"
        y2="281.82"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <polygon
        points="321.11 284.76 319.5 284.79 319.37 281.06 320.94 281.09 321.11 284.76"
        fill="#5c737e"
      />
      <polygon
        points="319.39 281.08 320.94 281.11 321.11 284.76 320.13 284.79 319.52 284.79 319.39 281.08"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="320.3"
        y1="282.36"
        x2="320.37"
        y2="284.77"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="319.43"
        y1="282.35"
        x2="321.01"
        y2="282.34"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <polygon
        points="323.38 284.76 321.78 284.79 321.64 281.06 323.21 281.09 323.38 284.76"
        fill="#5c737e"
      />
      <polygon
        points="321.66 281.08 323.21 281.11 323.38 284.76 322.4 284.79 321.79 284.79 321.66 281.08"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="322.57"
        y1="282.36"
        x2="322.64"
        y2="284.77"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="321.7"
        y1="282.35"
        x2="323.28"
        y2="282.34"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <polygon
        points="325.54 284.75 323.94 284.77 323.81 281.04 325.37 281.08 325.54 284.75"
        fill="#5c737e"
      />
      <polygon
        points="323.82 281.06 325.37 281.1 325.54 284.75 324.56 284.78 323.95 284.78 323.82 281.06"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="324.73"
        y1="282.35"
        x2="324.8"
        y2="284.76"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <line
        x1="323.86"
        y1="282.34"
        x2="325.44"
        y2="282.33"
        fill="none"
        stroke="#362c38"
        strokeMiterlimit="10"
        strokeWidth="0.07"
      />
      <rect x="305.51" y="288.49" width="1.97" height="3.79" fill="#657883" />
      <rect x="308.17" y="288.56" width="1.97" height="3.79" fill="#657883" />
      <rect x="310.81" y="288.58" width="1.97" height="3.79" fill="#657883" />
      <rect x="319.69" y="288.79" width="1.97" height="3.79" fill="#657883" />
      <rect x="321.98" y="288.76" width="1.97" height="3.79" fill="#657883" />
      <rect x="324.26" y="288.79" width="1.97" height="3.79" fill="#657883" />

      {/* onClick elements */}

      <ellipse
        cx="252.78"
        cy="75.38"
        rx="23.09"
        ry="22.62"
        pointerEvents="all"
        visibility="hidden"
        cursor="pointer"
        onClick={() => {
          console.log("1");
          handleOpen();
          setBuildingName("TeleginHouse");
        }}
      />

      <ellipse
        cx="420.4"
        cy="66.19"
        rx="22.49"
        ry="22.03"
        pointerEvents="all"
        visibility="hidden"
        cursor="pointer"
        onClick={() => {
          console.log("2");
          handleOpen();
          setBuildingName("FireBrigadePhoto");
        }}
      />

      <ellipse
        cx="465.7"
        cy="160.88"
        rx="22.47"
        ry="22.01"
        pointerEvents="all"
        visibility="hidden"
        cursor="pointer"
        onClick={() => {
          console.log("3");
          handleOpen();
          setBuildingName("KudryavtsevHouse");
        }}
      />

      <ellipse
        cx="515.74"
        cy="194.91"
        rx="23.32"
        ry="22.84"
        pointerEvents="all"
        visibility="hidden"
        cursor="pointer"
        onClick={() => {
          console.log("4");
          handleOpen();
          setBuildingName("StavrovskyHouse");
        }}
      />

      <ellipse
        cx="335.57"
        cy="223.02"
        rx="23.23"
        ry="22.76"
        pointerEvents="all"
        visibility="hidden"
        cursor="pointer"
        onClick={() => {
          console.log("5");
          handleOpen();
          setBuildingName("TokarevHouse");
        }}
      />

      <ellipse
        cx="390.55"
        cy="220.11"
        rx="22.98"
        ry="22.51"
        pointerEvents="all"
        visibility="hidden"
        cursor="pointer"
        onClick={() => {
          console.log("6");
          handleOpen();
          setBuildingName("PetrovHouse");
        }}
      />

      <ellipse
        cx="277.02"
        cy="284.21"
        rx="22.84"
        ry="22.37"
        pointerEvents="all"
        visibility="hidden"
        cursor="pointer"
        onClick={() => {
          console.log("7");
          handleOpen();
          setBuildingName("SmirnovTradingHouse");
        }}
      />

      <ellipse
        cx="315.81"
        cy="288.91"
        rx="21.87"
        ry="21.42"
        pointerEvents="all"
        visibility="hidden"
        cursor="pointer"
        onClick={() => {
          console.log("8");
          handleOpen();
          setBuildingName("FrankfurtHouse");
        }}
      />

      <ellipse
        cx="354.81"
        cy="300.86"
        rx="22.89"
        ry="22.42"
        pointerEvents="all"
        visibility="hidden"
        cursor="pointer"
        onClick={() => {
          console.log("9");
          handleOpen();
          setBuildingName("KochanowskaHouse");
        }}
      />

      <ellipse
        cx="448"
        cy="263.65"
        rx="24.32"
        ry="23.82"
        pointerEvents="all"
        visibility="hidden"
        cursor="pointer"
        onClick={() => {
          console.log("10");
          handleOpen();
          setBuildingName("PolyakovHouse");
        }}
      />

      <ellipse
        cx="490.72"
        cy="271.22"
        rx="23.56"
        ry="23.08"
        pointerEvents="all"
        visibility="hidden"
        cursor="pointer"
        onClick={() => {
          console.log("11");
          handleOpen();
          setBuildingName("RevillonBrothers");
        }}
      />

      <ellipse
        cx="534.55"
        cy="260.83"
        rx="23.66"
        ry="23.17"
        pointerEvents="all"
        visibility="hidden"
        cursor="pointer"
        onClick={() => {
          console.log("12");
          handleOpen();
          setBuildingName("VolkovHouse");
        }}
      />

      <ellipse
        cx="577.62"
        cy="250.2"
        rx="24.51"
        ry="24.01"
        pointerEvents="all"
        visibility="hidden"
        cursor="pointer"
        onClick={() => {
          console.log("13");
          handleOpen();
          setBuildingName("Church");
        }}
      />

      <ellipse
        cx="610.98"
        cy="291.4"
        rx="23.29"
        ry="22.81"
        pointerEvents="all"
        visibility="hidden"
        cursor="pointer"
        onClick={() => {
          console.log("14");
          handleOpen();
          setBuildingName("RazorenovHouse");
        }}
      />

      <ellipse
        cx="615.15"
        cy="341.84"
        rx="23.93"
        ry="23.44"
        pointerEvents="all"
        visibility="hidden"
        cursor="pointer"
        onClick={() => {
          console.log("15");
          handleOpen();
          setBuildingName("CityLibrary");
        }}
      />
    </svg>
  );
};

export default MapSVG;
