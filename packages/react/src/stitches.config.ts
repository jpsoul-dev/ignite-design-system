import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@souldev-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  config,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  styled,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    space,
    radii,
  },
})
