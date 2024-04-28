import * as React from "react";
import { SVGProps } from "react";
const BarsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="h-6 w-6 text-white"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6H20M4 12H20M4 18H20"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
);
export default BarsIcon;
