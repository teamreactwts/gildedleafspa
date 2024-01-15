import { CustomIconProps } from '@/interface/icons.interface'
import React from 'react'

function PhoneIcon({
   
    IconWidth,
    IconHeight
  }: CustomIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={IconWidth || "9"}
    height={IconHeight || "9"} viewBox="0 0 9 9" fill="none">
  <g clipPath="url(#clip0_124_704)">
    <path d="M7.90001 5.76673C7.4041 5.76673 6.91717 5.68917 6.45574 5.53669C6.22964 5.45957 5.95169 5.53032 5.81369 5.67204L4.90293 6.35957C3.8467 5.79576 3.19608 5.14535 2.63997 4.09706L3.30727 3.21002C3.48064 3.03689 3.54282 2.78397 3.46832 2.54667C3.31518 2.08282 3.23738 1.59612 3.23738 1.1C3.23741 0.741591 2.94583 0.450012 2.58744 0.450012H1.09991C0.74153 0.450012 0.449951 0.741591 0.449951 1.09997C0.449951 5.20798 3.792 8.55001 7.90001 8.55001C8.25839 8.55001 8.54997 8.25843 8.54997 7.90005V6.41668C8.54995 6.05831 8.25837 5.76673 7.90001 5.76673Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_124_704">
      <rect width="8.1" height="8.1" fill="white" transform="translate(0.449951 0.450012)"/>
    </clipPath>
  </defs>
</svg>
  )
}

export default PhoneIcon