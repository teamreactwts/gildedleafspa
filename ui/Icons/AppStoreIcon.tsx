import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

function AppStoreIcon({ IconColor, IconWidth, IconHeight }: CustomIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth || "11"}
      height={IconHeight || "14"}
      viewBox="0 0 11 14"
      fill="none"
    >
      <path
        d="M9.19657 6.91946C9.19027 5.84621 9.67654 5.03734 10.6585 4.44092C10.1093 3.65408 9.2784 3.22132 8.18312 3.13791C7.14607 3.05608 6.01144 3.7422 5.59599 3.7422C5.15694 3.7422 4.15293 3.16624 3.36295 3.16624C1.73262 3.19142 0 4.46609 0 7.05951C0 7.82589 0.140057 8.61745 0.420172 9.43262C0.794707 10.5059 2.14492 13.1355 3.55336 13.093C4.28984 13.0757 4.81073 12.5705 5.7691 12.5705C6.69914 12.5705 7.18069 13.093 8.00215 13.093C9.42318 13.0725 10.6443 10.6821 11 9.60572C9.09428 8.70715 9.19657 6.97453 9.19657 6.91946ZM7.54263 2.11974C8.34049 1.17239 8.2681 0.310014 8.24449 0C7.53948 0.0409156 6.72432 0.479971 6.26009 1.01974C5.74864 1.59886 5.44807 2.31488 5.51259 3.12217C6.27425 3.1804 6.96981 2.78855 7.54263 2.11974Z"
        fill={IconColor || primaryColors.colorF3EEE8}
      />
    </svg>
  );
}

export default AppStoreIcon;
