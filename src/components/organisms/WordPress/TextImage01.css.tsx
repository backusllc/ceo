
import { style, keyframes } from '@vanilla-extract/css';

export const multiColumnGrid: string = style({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    rowGap: '3.5rem',
    flexWrap: 'nowrap',
    columnGap: '1rem',
    '@media': {
        'screen and (min-width: 768px)': {
            flexDirection: 'row',
            fontSize: '3rem',
        }
    }
});

export const multiColumnTile: string = style({
    display: 'flex',
    flexBasis: '50%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    '@media': {
        'screen and (min-width: 768px)': {
            justifyContent: 'center',
        }
    }
});

export const titleContainer: string = style({
    marginBottom: '2.5rem',
    '@media': {
        'screen and (min-width: 768px)': {
            marginBottom: '3.8rem',
        }
    }
});

export const descriptionContainer: string = style({
    marginBottom: '3.1rem',
    '@media': {
        'screen and (min-width: 768px)': {
            marginBottom: '5.7rem',
        }
    }
});

export const title: string = style({
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ffffff',
    display: 'inline',
    position: 'relative',
    padding: '.5rem 3rem .5rem 0.8rem',
    marginBottom: '1rem',
    whiteSpace: 'nowrap',
    boxDecorationBreak: 'clone',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '3rem',
            padding: '1rem 5.7rem 1rem 1.7rem',
        }
    }
});

export const description: string = style({
    fontSize: '1.5rem',
    lineHeight: '3rem',
});

export const img: string = style({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
})

export const bgAnimation: string = keyframes({
    '0%': {
        opacity: '0',
        transform: 'scaleX(0) translateX(-5%)',
    },
    ',30%': {
        transform: 'scaleX(1) translateX(0)',
    },
    '100%': {
        transform: 'scaleX(1) translateX(0)',
    },
    '30%,100%': {
        opacity: '1',
    }
})


export const bgWrap: string = style({
    position: 'relative',
    display: 'inline-block',
    marginTop: '5px',
    '::before': {
        content: "",
        animation: `${bgAnimation} 1.3s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
        background: 'linear-gradient(to right, #000 0%,#000 50%,#000 100%)',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        transformOrigin: 'left center',
    }
});
