
import { style } from '@vanilla-extract/css';

export const border: string = style({
    borderBottom: '3px solid #CA2C33',
    width: '50px',
    display: 'inline-block',
})

export const philosophyContainer: string = style({
    marginTop: '7rem',
    marginBottom: '7rem',
});

export const philosophy: string = style({
    fontSize: '2.2rem',
    lineHeight: '0.136em',
    letterSpacing: '0.05em',
    fontFamily: '"游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif',
    fontWeight: '600',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '3.2rem',
            lineHeight: '1.34em',
            letterSpacing: '0.1em',
        }
    }
});

export const multiColumnGrid: string = style({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    columnGap: '0rem',
    rowGap: '2rem',
    padding: '7.2rem 0',
    borderBottom: '1px solid #E5E5E5',
    borderTop: '1px solid #E5E5E5',
    ':last-child': {
        marginBottom: '14rem',
    }
});

export const multiColumnTileLeft: string = style({
    flexBasis: '30%',
    zIndex: '1',
});

export const multiColumnTileRight: string = style({
    flexBasis: '70%',
    zIndex: '1',
});

export const container: string = style({
    display: 'flex',
    gap: '3rem',
    flexDirection: 'column',
});

export const titleClass: string = style({
    fontSize: '2.8rem',
    color: '#CD2C2E',
    fontFamily: '"Bebas", cursive',
    fontWeight: '600',
    letterSpacing: '0.05em',
});

export const concept: string = style({
    fontSize: '2.4rem',
    lineHeight: '3.2rem',
    letterSpacing: '0.13em',
    fontWeight: '600',
});

export const description: string = style({
    fontSize: '1.4rem',
    lineHeight: '1.7em',
    letterSpacing: '0.05em',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.6rem',
            lineHeight: '2em',
            letterSpacing: '0.1em',
        }
    }
});
