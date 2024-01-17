import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

function MailIcon({ IconColor, IconWidth, IconHeight }: CustomIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth || "16"}
      height={IconHeight || "16"}
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_124_655)">
        <path
          d="M9.33716 9.80279C8.93909 10.0682 8.47672 10.2085 8 10.2085C7.52331 10.2085 7.06094 10.0682 6.66288 9.80279L0.106531 5.43176C0.0703376 5.40756 0.0348139 5.38238 0 5.35623L0 12.5186C0 13.3398 0.666406 13.9915 1.47291 13.9915H14.5271C15.3482 13.9915 16 13.3251 16 12.5186V5.3562C15.9651 5.38242 15.9295 5.40766 15.8932 5.43189L9.33716 9.80279Z"
          fill={IconColor || "white"}
        />
        <path
          d="M0.626563 4.6518L7.18291 9.02286C7.43109 9.18833 7.71553 9.27105 7.99997 9.27105C8.28444 9.27105 8.56891 9.1883 8.81709 9.02286L15.3734 4.6518C15.7658 4.39039 16 3.95289 16 3.48071C16 2.6688 15.3395 2.0083 14.5276 2.0083H1.47241C0.660532 2.00833 7.75033e-07 2.66883 7.75033e-07 3.48149C-0.000242619 3.71312 0.0568447 3.9412 0.166171 4.1454C0.275497 4.34961 0.433664 4.52358 0.626563 4.6518Z"
          fill={IconColor || "white"}
        />
      </g>
      <defs>
        <clipPath id="clip0_124_655">
          <rect
            width="16"
            height="16"
            fill={IconColor || primaryColors.white}
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default MailIcon;
