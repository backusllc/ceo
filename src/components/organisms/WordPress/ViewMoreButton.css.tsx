
import { style } from '@vanilla-extract/css';

export const buttonContainer: string = style({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
});

export const button: string = style({
    position: 'relative',
    border: 'none',
    fontSize: '1.5rem',
    lineHeight: '3rem',
    fontWeight: '600',
    fontFamily: '"Bebas", cursive',
    letterSpacing: '0.2rem',
    whiteSpace: 'nowrap',
});

export const buttonHidden: string = style({
    position: 'absolute',
    border: 'none',
    fontSize: '1.5rem',
    lineHeight: '3rem',
    fontWeight: '600',
    fontFamily: '"Bebas", cursive',
    transform: 'translate(0, 60px)',
    letterSpacing: '0.2rem',
    whiteSpace: 'nowrap',
    left: 0,
});

export const arrowDiv: string = style({
    cursor: 'pointer',
    position: 'relative',
    display: 'inline-block',
    border: '1px solid #CD2C2E',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    marginLeft: '30px',
})

export const arrow: string = style({
    '::after': {
        zIndex: 2,
        content: '',
        top: '20px',
        left: '18px',
        width: '8px',
        height: '8px',
        borderTop: '1px solid #CD2C2E',
        borderRight: '1px solid #CD2C2E',
        transform: 'rotate(45deg)',
        display: 'inline-block',
        position: 'absolute',
    },
})

export const buttonCircleCover: string = style({
    zIndex: 0,
    backgroundColor: 'pink',
    position: 'absolute',
    top: '-1px',
    right: '-1px',
    bottom: '-1px',
    left: '-1px',
    borderRadius: '50%',
    transform: 'scale(0)',
    margin: 0,
    padding: 0,
})

export const buttonInner: string = style({
    width: "auto",
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
})

export const buttonWrap: string = style({
    position: 'relative',
    overflow: 'hidden'
})

export const link: string = style({
    position: 'absolute',
    inset: 0
})
