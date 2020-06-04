// @flow
import type { EdgeTheme, EdgeThemeRaw } from '../../reducers/ThemeReducer.js'
import { scale } from '../../util/scaling.js'

const pallete = {
  edgeNavy: '#0D2145',
  edgeMint: '#66EDA8',
  edgeBlue: '#0E4B75',
  edgeBlueOp50: 'rgba(14, 75, 117, .5)',
  darkBlue: '#2F5E89',
  darkBlueNavyGradient1: '#0C446A',
  darkBlueNavyGradient2: '#0D2145',

  accentBlue: '#0073D9',
  accentOrange: '#F1AA19',
  accentRed: '#E85466',
  accentGreen: '#77C513',

  white: '#FFFFFF',
  whiteOp10: 'rgba(255, 255, 255, .1)',

  darkGray: '#4A5157',
  gray: '#87939E',
  lightGray: '#D9E3ED',
  lightestGray: '#F4F5F6',
  blueGray: '#A4C7DF'
}

export const theme: EdgeThemeRaw = {
  primaryButton: pallete.edgeMint,
  primaryButtonText: pallete.edgeNavy,
  secondaryButtonOutline: pallete.edgeMint,
  secondaryButtonText: pallete.edgeMint,
  selectButtonOutline: pallete.edgeMint,
  selectButtonText: pallete.edgeMint,
  modalBody: pallete.edgeNavy,
  headerText: pallete.white,
  primaryText: pallete.white,
  secondaryText: pallete.blueGray,
  tileBackground: pallete.edgeBlue,
  tileIcon: pallete.edgeMint,
  tileMore: pallete.white,
  lineDivider: pallete.edgeBlue,
  background1: pallete.darkBlueNavyGradient1,
  background2: pallete.darkBlueNavyGradient2,
  cancelButton: pallete.white,
  accentTextPositive: pallete.accentGreen,
  accentTextNegative: pallete.accentRed,
  remMultiplier: 16
}

export const themeTest: EdgeTheme = {
  ...theme,
  rem: (rem: number) => Math.round(rem * scale(theme.remMultiplier))
}
