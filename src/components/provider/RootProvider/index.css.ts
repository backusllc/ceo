import { globalStyle, keyframes, globalFontFace, style } from '@vanilla-extract/css';

import { createTheme } from "@vanilla-extract/css";

globalFontFace("Bebas", {
  src: 'url("/fonts/BebasNeue.woff2") format("woff2")',
});

globalStyle('html,body,#___gatsby,#gatsby-focus-wrapper', {
  height: '100%',
});

globalStyle('html', {
  fontSize: '62.5%',
  overflowX: 'hidden',
  overflowY: 'scroll',
});

globalStyle('input, select', {
  appearance: 'none',
  border: 'solid 1px #333',
  borderRadius: '2px',
});

globalStyle('button', {
  cursor: 'pointer',
})

globalStyle('iframe', {
  width: '100%',
});

globalStyle('button', {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  padding: '0',
  appearance: 'none',
});

globalStyle('*, ::after,::before', {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontFamily: '"游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif',
  lineHeight: '1.5',
  fontSize: '0.875rem',
});

globalStyle('ul', { listStyleType: 'none' });
globalStyle('ol', { listStyleType: 'none' });
globalStyle('a', { textDecoration: 'none', wordBreak: 'normal', display: 'block', color: '#000' });
globalStyle('img', {
  width: '100%',
  display: 'block',
});

globalStyle('#slider canvas', {
  display: 'none',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  marginBottom: '2rem',
  width: '100%',
});

globalStyle('tr', {
  borderTop: 'solid #D9D9D9 1px',
  borderBottom: 'solid #D9D9D9 1px',
});

globalStyle('th', {
  width: '20%',
  padding: '1rem 0.5rem',
  fontSize: '1rem',
  whiteSpace: 'nowrap',
});

globalStyle('td', {
  padding: '1rem 0.5rem',
  fontSize: '1rem',
});

globalStyle('.fb-page span', {
  width: '350px !important',
});

globalStyle('.fb-page iframe', {
  width: '350px !important',
});
globalStyle('._2p3a', {
  width: '350px !important',
});

const fadeIn = keyframes({
  '0%': { opacity: '0', },
  '100%': { opacity: '1' }
});

globalStyle('.wrapper', {
  animation: `${fadeIn} .5s ease 0s 1 normal`

});


globalStyle('.page', {
  position: 'relative',
});

globalStyle('.page h2', {
  position: 'relative',
  marginBottom: "4rem",
  fontSize: '2.8rem',
  letterSpacing: '0.05em',
  lineHeight: '1.3em',
  fontWeight: '700',
  padding: "0.25rem 2.2rem"
});

globalStyle('.page h2:before', {
  content: '',
  top: '0px',
  left: '0px',
  width: '4px',
  height: '28px',
  position: 'absolute',
  backgroundColor: '#CD2C2E',
  transform: 'scaleX(1)',
});

globalStyle('.page h3', {
  backgroundColor: '#F7F7F7',
  fontSize: '2.2rem',
  letterSpacing: '0.05em',
  lineHeight: '1.3em',
  fontWeight: '700',
  marginBottom: "2rem",
  padding: "0.25rem 1rem"
});

globalStyle('.page h4', {
  fontSize: '1.8rem',
  letterSpacing: '0.05em',
  lineHeight: '1.3em',
  fontWeight: '700',
  marginBottom: "2rem",
  padding: "0.25rem 1rem",
  borderBottom: '1px solid #CA2C33',
});

globalStyle('.page h5', {
  fontSize: '1.6rem',
  letterSpacing: '0.05em',
  lineHeight: '1.3em',
  fontWeight: '700',
  marginBottom: "2rem",
  padding: "0.25rem 1rem",
});

globalStyle('.page p', {
  fontSize: '1.6rem',
  lineHeight: '2em',
  letterSpacing: '0.1em',
  marginBottom: '4rem',
});

globalStyle('.page ul', {
  paddingLeft: '1.6rem',
  listStyleType: 'initial',
});

globalStyle('.page li', {
  fontSize: '1.6rem',
  lineHeight: '2em',
  letterSpacing: '0.1em',
});

globalStyle('.page h1,.page h2,.page h3,.term_page h1,.term_page h2,.term_page h3', {
  marginBottom: '2rem'
})

globalStyle('h1,h2,h3,h4', {
  textTransform: 'capitalize',
  lineHeight: '1.25',
  marginBottom: '0.75rem',
  fontWeight: '400',
  margin: '0',
  padding: '0',
});



globalStyle('h1', {
  fontSize: '2rem',
  fontWeight: '700',
});
globalStyle('h2', {
  fontSize: '1.5rem',
  fontWeight: '700',
});
globalStyle('h3', {
  fontSize: '1.25rem',
  fontWeight: '700',
});
globalStyle('h4', {
  fontSize: '0.875rem',
});
globalStyle('p', {
  fontSize: "1rem",
  marginBottom: '1.25rem',
  lineHeight: '2.2rem',
  color: '#000000',
});

globalStyle('li', {
  fontSize: "1rem",
  lineHeight: '2.2rem',
  color: '#000000',
});


globalStyle('body', {
  color: '#000',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '1rem',
    }
  }
});

globalStyle('.root-wrap', {
  minHeight: '100%',
  scrollPaddingTop: '100px',
  display: 'flex',
  flexDirection: 'column',
})

globalStyle('main', {
  flex: 1,
});

globalStyle('header,footer', {
  width: '100%',
});

globalStyle('section', {
  marginBottom: '6rem',
  position: 'relative',
  '@media': {
    'screen and (min-width: 768px)': {
      marginBottom: '14rem',
    }
  }
});

globalStyle('.inner', {
  position: 'relative',
  width: '90%',
  maxWidth: '1200px',
  margin: '0 auto',
})

globalStyle('.description p', {
  lineHeight: '1.7rem',
});

globalStyle('.breadcrumb li a', {
  textDecoration: 'none',
  color: '#9B9B9B',
  fontSize: '1.1rem',
})

globalStyle('.breadcrumb li a:hover', {
  textDecoration: 'underline',
})

globalStyle('.breadcrumb li:first-child a:after', {
  content: '-',
  fontWeight: 'normal',
  fontSize: '1.1rem',
  color: '#9B9B9B',
  margin: '0 0.5rem',
})

globalStyle('.sp', {
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    }
  },
})

globalStyle('.pc', {
  display: 'none',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'inline-block',
    }
  },
})

export const [themeClass, themeVars] = createTheme({
  color: {
    brand: "blue"
  },
  font: {
    body: "arial"
  }
});



