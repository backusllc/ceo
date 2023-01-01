import { style } from '@vanilla-extract/css';

export const formWrapper: string = style({
  backgroundColor: '#F7F7F7',
  '@media': {
    'screen and (min-width: 768px)': {
      padding: '10rem',
    }
  }
})

export const cautionText: string = style({
  fontSize: '1.6rem',
  marginBottom: '6rem',
})

export const formDiv: string = style({
  display: 'flex',
  flexDirection: 'column',
  columnGap: '15rem',
  rowGap: '3rem',
  padding: '3rem 0',
  borderTop: '1px solid #E0E0E0',
  '@media': {
    'screen and (min-width: 768px)': {
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
  paddingTop: '14rem',
  justifyContent: 'center',
})

export const submit: string = style({
  padding: '2rem 10rem',
  display: 'inline-block',
  fontSize: '1.5rem',
  backgroundColor: '#000000',
  color: '#FFFFFF',
  fontWeight: '500',
  cursor: 'pointer',
})
