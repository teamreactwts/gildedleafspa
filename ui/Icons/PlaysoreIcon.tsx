import { CustomIconProps } from "@/interface/icons.interface";

function PlaysoreIcon({ IconColor, IconWidth, IconHeight }: CustomIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth || "11"}
      height={IconHeight || "13"}
      viewBox="0 0 11 13"
      fill={"currentcolor" || IconColor}
    >
      <path
        d="M7.15131 5.58518L1.89033 0.30989L8.58396 4.15253L7.15131 5.58518ZM0.517278 0C0.207388 0.162096 0 0.457684 0 0.841471V11.3611C0 11.7448 0.207388 12.0404 0.517278 12.2025L6.63404 6.10007L0.517278 0ZM10.6531 5.37779L9.24903 4.56492L7.6829 6.10246L9.24903 7.63999L10.6817 6.82712C11.1108 6.48624 11.1108 5.71867 10.6531 5.37779ZM1.89033 11.895L8.58396 8.05238L7.15131 6.61973L1.89033 11.895Z"
        fill={"currentcolor" || IconColor}
      />
    </svg>
  );
}

export default PlaysoreIcon;
