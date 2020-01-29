const purpleBgGradient =`linear-gradient(180deg, #EBEFFF 0%, #FFFFFF 48.96%, #EBEFFF 99.99%);`
const scannerBgGradient=`linear-gradient(0deg, rgba(255, 255, 255, 0) 11.49%, rgba(255, 254, 250, 0.0128372) 12.05%, rgba(65, 244, 255, 0.1372) 17.48%, rgba(65, 244, 255, 0.26) 23.07%, rgba(65, 244, 255, 0.4) 28.76%, rgba(65, 244, 255, 0.5) 34.55%, rgba(65, 244, 255, 0.66) 40.51%, rgba(65, 244, 255, 0.85) 46.73%, #41F4FF 127.1%);`

const _color ={
  red                : `red`,
  red_alert          : `#be0000`,
  white              : `#fff`,
  black              : `#243533`,
  black_font         : `#242F35`,
  purple             : `#726AA6`,
  purple_hover       : `#5A509A`,
  purple_hoverBg     : `rgba(224, 222, 236, 0.3)`,
  purple_weak        : `#F5F7FF`,
  purple_bg          : `#F8F9FF`,
  purple_deep        : `#353147`,
  gray_text          : `#999999`,
  gray_placeHolder   : `#cacaca`,
  gray_bg            : `#F5F5FB`,
  gray_border        : `#ddd`,
  gray_border2       : `#D9D8DF`,
  gray_border3       : `#e5e5e5`,
  gray_border4       : `#ccc`,
  gray_border5       : `#C2C7D8`,
  grat_border6       : `#E2E7EA`,
  gray_font          : `#777777`,
  gray_dashboard     : `#FAFAFA`,
  gray_bg2           : `#dddce680`,
  gray_icon          : `#C6CBCD`,
  window_bg          : `#353147`,
  green              : `#309687`,
  green_hover        : `#229987`,
  blue               : `#54ACDF`,
  blue_hover         : `#4198ca`,
  blue_week_hover    : `#F8FBFD`,
  blue_week          : `#CAE1EF`,
  orange             : `#ffa500`,
  purple_bg_gradient : purpleBgGradient,
  scanner_gradient   : scannerBgGradient,
}

const _deviceSize={
  pc:'1920px',
  mobile:'320px',
  pad:"768px"
}

export {_color,_deviceSize}