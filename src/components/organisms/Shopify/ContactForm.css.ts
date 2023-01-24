import { style } from '@vanilla-extract/css';

export const formWrapper: string = style({
  '@media': {
    'screen and (min-width: 768px)': {
      backgroundColor: '#F7F7F7',
      padding: '9rem 10rem 15rem 10rem',
    }
  }
})

export const cautionText: string = style({
  fontSize: '1.5rem',
  marginBottom: '6rem',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '1.6rem',
      marginBottom: '4rem',
    }
  }
})

export const formDiv: string = style({
  display: 'flex',
  flexDirection: 'column',
  columnGap: '15rem',
  rowGap: '1rem',
  padding: '3rem 0',
  borderTop: '1px solid #E0E0E0',
  '@media': {
    'screen and (min-width: 768px)': {
      rowGap: '3rem',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '6rem 0',
    }
  }
})

export const label: string = style({
  fontSize: '1.5rem',
  fontWeight: '600',
  minWidth: '18rem',
})

export const input: string = style({
  fontSize: '1.5rem',
  fontWeight: '400',
  border: '1px solid #E0E0E0',
  boxSizing: 'content-box',
  background: '#FFFFFF',
  height: '1.4375em',
  margin: '0',
  display: 'block',
  minWidth: '0',
  width: '90%',
  animationDuration: '10ms',
  padding: '16.5px 14px',
})

export const abbr: string = style({
  color: 'red',
  textDecorationStyle: 'unset',
  marginLeft: '0.5rem',
})

export const radioWrap: string = style({
  display: 'flex',
  flexDirection: 'column',
  columnGap: '4rem',
  rowGap: '2rem',
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row',
    }
  }
})

export const radio: string = style({
  width: '2rem',
  height: '2rem',
  marginRight: '1.1rem',
  appearance: 'auto',
})

export const radioLabel: string = style({
  display: 'flex',
  alignItems: 'center',
  color: '#999999',
  fontSize: '1.4rem',
  whiteSpace: 'nowrap',
})

export const textarea: string = style({
  fontSize: '1.5rem',
  fontWeight: '400',
  border: '1px solid #E0E0E0',
  boxSizing: 'content-box',
  background: '#FFFFFF',
  margin: '0',
  display: 'block',
  minWidth: '0',
  animationDuration: '10ms',
  padding: '16.5px 14px',
  width: '90%',
  height: '300px',
})

export const submitDiv: string = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const checkWrap: string = style({
  textAlign: 'center',
  padding: '5rem 0 6rem 0',
  borderTop: '1px solid #E0E0E0',
  '@media': {
    'screen and (min-width: 768px)': {
      padding: '9rem 0 14rem 0',
    }
  }
})

export const check: string = style({
  width: '2rem',
  height: '2rem',
  marginRight: '1.1rem',
  appearance: 'auto',
})

export const checkLabel: string = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#999999',
  fontSize: '1.4rem',
  whiteSpace: 'nowrap',
})

export const submit: string = style({
  padding: '2rem 10rem',
  display: 'inline-block',
  fontSize: '1.5rem',
  backgroundColor: '#000000',
  color: '#FFFFFF',
  fontWeight: '500',
  cursor: 'pointer',
  ':disabled': {
    pointerEvents: 'none',
    color: 'none',
    border: 'none',
    backgroundColor: '#cccccc',
  }
})
