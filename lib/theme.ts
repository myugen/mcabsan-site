import { deep, swiss } from '@theme-ui/presets'
import { toTheme } from '@theme-ui/typography' // @ts-ignore
import funston from 'typography-theme-funston'
import deepmerge from 'deepmerge'

export const theme = deepmerge(toTheme(funston), {
  config: {
    initialColorModeName: 'light',
  },
  ...swiss,
  colors: {
    ...swiss.colors,
    modes: {
      dark: {
        ...deep.colors,
      },
    },
  },
  layout: {
    container: {
      maxWidth: 1024,
      mx: 'auto',
      py: 3,
      px: 4,
    },
  },
  buttons: {
    primary: {
      cursor: 'pointer',
    },
  },
  links: {
    nav: {
      fontFamily: 'body',
    },
  },
})
