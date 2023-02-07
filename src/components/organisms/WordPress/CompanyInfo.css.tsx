
import { style } from '@vanilla-extract/css';

export const border: string = style({
    borderBottom: '3px solid #CA2C33',
    width: '50px',
    display: 'inline-block',
})

export const borderBottom: string = style({
    position: 'absolute',
    height: '1.25px',
    width: '20px',
    backgroundColor: 'red',
    bottom: '-1.5px',
    zIndex: '1',
    '@media': {
        'screen and (min-width: 768px)': {
            width: '31.5px',
        }
    }
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
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    padding: '1.7rem 0',
    borderBottom: '1px solid #E5E5E5',
    borderTop: '1px solid #E5E5E5',
    ':last-child': {
        marginBottom: '14rem',
    },
    '@media': {
        'screen and (min-width: 768px)': {
            padding: '3.6rem 0',
        }
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
    fontSize: '1.3rem',
    fontWeight: '600',
    letterSpacing: '0.1em',
    padding: 0,
    margin: 0,
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.7rem',
            letterSpacing: '0.05em',
        }
    }
});

export const description: string = style({
    fontSize: '1.3rem',
    lineHeight: '1.8em',
    letterSpacing: '0.05em',
    listStyle: 'initial',
    padding: 0,
    margin: 0,
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.8rem',
            lineHeight: '2em',
            letterSpacing: '0.05em'
        }
    }
});

export const gridLayout: string = style({
    display: 'grid',
    gridTemplateColumns: '30% 70%',
    padding: '2.2rem 0 9.6rem 0',

    '@media': {
        'screen and (min-width: 768px)': {
            padding: '3rem 0 20rem 0',

        }
    }
});

export const gridLeft: string = style({
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 1,
    gridRowEnd: 2,

    fontSize: '1.3rem',
    lineHeight: '3rem',
    listStyle: 'initial',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.8rem',
        }
    }
});

export const gridText: string = style({
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 2,
});

export const gridMap: string = style({
    marginTop: '2.3rem',
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 2,
    gridRowEnd: 3,
    '@media': {
        'screen and (min-width: 768px)': {
            gridColumnStart: 2,
            gridColumnEnd: 3,
            gridRowStart: 2,
            gridRowEnd: 3,
        }
    }
});

export const map: string = style({
    height: '180px',
    '@media': {
        'screen and (min-width: 768px)': {
            height: '380px',
        }
    }
});

export const ul: string = style({
    paddingLeft: '1rem',
});
