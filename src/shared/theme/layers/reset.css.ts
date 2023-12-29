import { globalLayer, globalStyle } from '@vanilla-extract/css'

const reset = globalLayer('reset')

export { reset }

/*  Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
    - The "symbol *" part is to solve Firefox SVG sprite bug
    - The "html" attribute is exclud, because otherwise a bug in Chrome breaks the CSS hyphens property (https://github.com/elad2412/the-new-css-reset/issues/36) */
globalStyle(`:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)`, {
  '@layer': {
    [reset]: {
      all: 'unset',
      display: 'revert',
    },
  },
})

/* Preferred box-sizing value */
globalStyle(`*, *::before, *::after`, {
  '@layer': {
    [reset]: {
      boxSizing: 'border-box',
    },
  },
})

/* Prevent font size inflation */
globalStyle(`html`, {
  '@layer': {
    [reset]: {
      MozTextSizeAdjust: 'none',
      WebkitTextSizeAdjust: 'none',
      textSizeAdjust: 'none',
    },
  },
})

/* Remove default margin in favour of better control in authored CSS */
globalStyle(`body, h1, h2, h3, h4, p, figure, blockquote, dl, dd`, {
  '@layer': {
    [reset]: {
      margin: 0,
    },
  },
})

/* Remove list styles on ul, ol elements with a list role and menu, which suggests default styling will be removed */
globalStyle(`ul[role='list'], ol[role='list'], menu`, {
  '@layer': {
    [reset]: {
      listStyle: 'none',
    },
  },
})

/* Set core body defaults */
globalStyle(`body`, {
  '@layer': {
    [reset]: {
      minHeight: '100vh',
      lineHeight: 1.5,
    },
  },
})

/* Set shorter line heights on headings and interactive elements */
globalStyle(`h1, h2, h3, h4, button, input, label`, {
  '@layer': {
    [reset]: {
      lineHeight: 1.1,
    },
  },
})

/* Balance text wrapping on headings */
globalStyle(`h1, h2, h3, h4`, {
  '@layer': {
    [reset]: {
      textWrap: 'balance',
    },
  },
})

/* A elements that don't have a class get default styles */
globalStyle(`a:not([class])`, {
  '@layer': {
    [reset]: {
      textDecorationSkipInk: 'auto',
      color: 'currentcolor',
    },
  },
})

/* Reapply the pointer cursor for anchor tags */
globalStyle(`a, button`, {
  '@layer': {
    [reset]: {
      cursor: 'revert',
    },
  },
})

/* For images to not be able to exceed their container */
globalStyle(`img, picture`, {
  '@layer': {
    [reset]: {
      maxInlineSize: '100%',
      maxBlockSize: '100%',
    },
  },
})

/* removes spacing between cells in tables */
globalStyle(`table`, {
  '@layer': {
    [reset]: {
      borderCollapse: 'collapse',
    },
  },
})

/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
globalStyle(`input, textarea`, {
  '@layer': {
    [reset]: {
      WebkitUserSelect: 'auto',
    },
  },
})

/* revert the 'white-space' property for textarea elements on Safari */
globalStyle(`textarea`, {
  '@layer': {
    [reset]: {
      whiteSpace: 'revert',
    },
  },
})

/* Inherit fonts for inputs and buttons */
globalStyle(`input, button, textarea, select`, {
  '@layer': {
    [reset]: {
      font: 'inherit',
    },
  },
})

/* Make sure textarea without a rows attribute are not tiny */
globalStyle(`textarea:not([rows])`, {
  '@layer': {
    [reset]: {
      minHeight: '10em',
    },
  },
})

/* minimum style to allow to style meter element */
globalStyle(`meter`, {
  '@layer': {
    [reset]: {
      WebkitAppearance: 'revert',
      appearance: 'revert',
    },
  },
})

/* preformatted text - use only for this feature */
globalStyle(`:where(pre)`, {
  '@layer': {
    [reset]: {
      all: 'revert',
    },
  },
})

/* reset default text opacity of input placeholder */
globalStyle(`::placeholder`, {
  '@layer': {
    [reset]: {
      color: 'unset',
    },
  },
})

/* remove default dot (•) sign */
globalStyle(`::marker`, {
  '@layer': {
    [reset]: { content: 'initial' },
  },
})

/* fix the feature of 'hidden' attribute.
   display:revert; revert to element instead of attribute */
globalStyle(`:where([hidden])`, {
  '@layer': {
    [reset]: { display: 'none' },
  },
})

/* revert for bug in Chromium browsers
   - fix for the content editable attribute will work properly.
   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element */
globalStyle(`:where([contenteditable]:not([contenteditable="false"]))`, {
  // @ts-expect-error
  '@layer': {
    [reset]: {
      MozUserModify: 'read-write',
      WebkitUserModify: 'read-write',
      overflowWrap: 'break-word',
      WebkitLineBreak: 'after-white-space',
      WebkitUserSelect: 'auto',
    },
  },
})

/* revert for bug in Chromium browsers
   - fix for the content editable attribute will work properly.
   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element */
globalStyle(`:where([draggable="true"])`, {
  '@layer': {
    [reset]: {
      // @ts-expect-error
      WebkitUserDrag: 'element',
    },
  },
})

/* Revert Modal native behavior */
globalStyle(`:where(dialog:modal)`, {
  '@layer': {
    [reset]: {
      all: 'revert',
    },
  },
})

/* Anything that has been anchored to should have extra scroll margin */
globalStyle(`:target`, {
  '@layer': {
    [reset]: {
      scrollMarginBlock: '5ex',
    },
  },
})
