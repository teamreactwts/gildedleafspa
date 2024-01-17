import { CustomIconProps } from "@/interface/icons.interface";

function LocationIcon({
  IconColor,
  IconWidth,
  IconHeight,
  ...props
}: CustomIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth || "17"}
      height={IconHeight || "17"}
      viewBox="0 0 17 17"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_124_635)">
        <path
          d="M8.5 0C6.80994 0.00224892 5.18974 0.674621 3.99468 1.86968C2.79962 3.06474 2.12725 4.68493 2.125 6.375C2.125 10.9517 8.06437 16.6839 8.31672 16.9256C8.3658 16.9733 8.43155 17 8.5 17C8.56845 17 8.6342 16.9733 8.68328 16.9256C8.93562 16.6839 14.875 10.9517 14.875 6.375C14.8728 4.68493 14.2004 3.06474 13.0053 1.86968C11.8103 0.674621 10.1901 0.00224892 8.5 0ZM8.5 9.29687C7.92211 9.29687 7.35719 9.12551 6.87669 8.80445C6.39619 8.48339 6.02169 8.02705 5.80054 7.49315C5.57939 6.95925 5.52153 6.37176 5.63427 5.80497C5.74701 5.23818 6.02529 4.71755 6.43392 4.30892C6.84255 3.90029 7.36318 3.62201 7.92997 3.50927C8.49676 3.39653 9.08425 3.45439 9.61815 3.67554C10.1521 3.89669 10.6084 4.27119 10.9295 4.75169C11.2505 5.23219 11.4219 5.79711 11.4219 6.375C11.4214 7.14978 11.1134 7.89268 10.5655 8.44053C10.0177 8.98838 9.27478 9.29638 8.5 9.29687Z"
          fill={IconColor || "white"}
        />
      </g>
      <defs>
        <clipPath id="clip0_124_635">
          <rect width="17" height="17" fill={IconColor || "white"} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default LocationIcon;
