import { CustomIconProps } from '@/interface/icons.interface'
import { primaryColors } from '@/themes/_muiPalette'
import React from 'react'

function TictockIcon({ IconColor, IconWidth, IconHeight }: CustomIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={IconWidth || "24"}
    height={IconHeight || "24"} viewBox="0 0 24 24" fill="none">
  <path d="M16.5999 5.82C15.9163 5.03962 15.5396 4.03743 15.5399 3H12.4499V15.4C12.4261 16.071 12.1428 16.7066 11.6597 17.1729C11.1766 17.6393 10.5314 17.8999 9.85991 17.9C8.43991 17.9 7.25991 16.74 7.25991 15.3C7.25991 13.58 8.91991 12.29 10.6299 12.82V9.66C7.17991 9.2 4.15991 11.88 4.15991 15.3C4.15991 18.63 6.91991 21 9.84991 21C12.9899 21 15.5399 18.45 15.5399 15.3V9.01C16.7929 9.90985 18.2973 10.3926 19.8399 10.39V7.3C19.8399 7.3 17.9599 7.39 16.5999 5.82Z" fill={IconColor || primaryColors.white}/>
</svg>
  )
}

export default TictockIcon