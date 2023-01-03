
import { style } from '@vanilla-extract/css';

export const titleContainer: string = style({
    marginBottom: '2.7rem',
    paddingBottom: '3.3rem',
    '@media': {
        'screen and (min-width: 768px)': {
            marginBottom: '4.8rem',
            paddingBottom: '6.1rem',
        }
    },
})

export const titleBorder: string = style({
    borderBottom: '1px solid #E5E5E5',
})


export const titleClass: string = style({
    fontSize: '5rem',
    lineHeight: '1.13em',
    fontFamily: '"Bebas", cursive',
    letterSpacing: '0.25rem',
    fontWeight: '600',
    margin: '0',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '9rem',
            lineHeight: '1.13em',
        }
    }
});

export const subTitleClass: string = style({
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#CD2C2E',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.5rem',
        }
    }
});
