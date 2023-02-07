import { style } from '@vanilla-extract/css';

export const policyWrap: string = style({
  marginBottom: '10.6rem',
  '@media': {
    'screen and (min-width: 768px)': {
    }
  }
})

export const textWrap: string = style({
  marginBottom: '7.7rem',
  '@media': {
    'screen and (min-width: 768px)': {
    }
  }
})

export const title: string = style({
  marginBottom: '4.1rem',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  letterSpacing: '0.05em',
  lineHeight: '1.5em',
  '@media': {
    'screen and (min-width: 768px)': {
      marginBottom: '4.1rem',
      fontSize: '2.4rem',
      fontWeight: 'bold',
      letterSpacing: '0.05em',
      lineHeight: '1.5em',
    }
  }
})

export const text: string = style({
  fontSize: '1.4rem',
  letterSpacing: '0.05em',
  lineHeight: '2em',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '1.5rem',
      letterSpacing: '0.1em',
      lineHeight: '2.33em',
    }
  }
})

export const ol: string = style({
  listStyle: 'decimal',
  paddingLeft: '22px',
  '@media': {
    'screen and (min-width: 768px)': {
    }
  }
})

export const li: string = style({
  fontSize: '1.4rem',
  letterSpacing: '0.05em',
  lineHeight: '2em',
  marginBottom: '3rem',
  ':last-child': {
    marginBottom: '0',
  },
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '1.5rem',
      letterSpacing: '0.1em',
      lineHeight: '2.33em',
    }
  }
})

export const revisionDate: string = style({
  fontSize: '1.4rem',
  letterSpacing: '0.05em',
  lineHeight: '2em',
  marginTop: '2.4rem',
  marginBottom: '10.1rem',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '1.5rem',
      letterSpacing: '0.1em',
      lineHeight: '2.33em',
    }
  }
})
