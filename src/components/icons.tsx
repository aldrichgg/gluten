import type { SVGProps } from "react";

export function GlutenFreeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 22 22 2" />
      <path d="M10.5 12.5c-1.55-1-2-2.8-2-4.5.45-3.1 3.25-5.5 6.5-5.5.83 0 1.6.17 2.3.48" />
      <path d="m16 14-3-3" />
      <path d="M18.18 11.66c-2.22 1.98-4.32 4.45-5.68 7.34" />
    </svg>
  );
}
