import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

function HourIcon({
  IconColor,
  IconWidth,
  IconHeight,
  ...props
}: CustomIconProps) {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={IconWidth || "24"}
    //   height={IconHeight || "24"}
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   {...props}
    // >
    //   <g clipPath="url(#clip0_124_635)">
    //     <path
    //       d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1zm3.707 14.707a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 11 12V6a1 1 0 0 1 2 0v5.586l2.707 2.707a1 1 0 0 1 0 1.414z"
    //       fill={IconColor || "white"}
    //     />
    //   </g>
    //   <defs>
    //     <clipPath id="clip0_124_635">
    //       <rect width="24" height="24" fill={IconColor || "white"} />
    //     </clipPath>
    //   </defs>
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={IconWidth || "24"}
      height={IconHeight || "24"}
      x="0"
      y="0"
      viewBox="0 0 24 24"
    >
      <g>
        <path
          d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1zm3.707 14.707a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 11 12V6a1 1 0 0 1 2 0v5.586l2.707 2.707a1 1 0 0 1 0 1.414z"
          data-name="Layer 2"
          fill={IconColor || primaryColors?.white}
          opacity="1"
          data-original={IconColor || primaryColors?.white}
        ></path>
      </g>
    </svg>
  );
}

export default HourIcon;
