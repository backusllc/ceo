
import { style } from '@vanilla-extract/css';

export const multiColumnGrid: string = style({
    width: '90%',
    maxWidth: '1200px',
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    columnGap: '10rem',
    marginBottom: '12.4rem',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '3rem',
            marginBottom: '14rem',
        }
    }
});

export const multiColumnTile: string = style({
    flexBasis: '50%',
    zIndex: '1',
});

export const container: string = style({
    marginTop: '-3em',
    // '@media': {
    // op: '-6.5em'
    //     }
    // },
    '@media': {
        'screen and (min-width: 768px)': {
            marginTop: '-6.5em',
        },
        'screen and (min-width: 1200px)': {
            marginTop: '3rem'
        }
    }
});

export const textContainer: string = style({
});

export const imageContainer: string = style({
    overflow: 'hidden',
    position: 'relative',
    paddingTop: '52%',
    marginBottom: '0',
    '@media': {
        'screen and (min-width: 768px)': {
            marginBottom: '1rem',
        }
    }
})

export const image: string = style({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    // width: '100%',
    // height: '100%',
    // objectFit: 'cover',
    // objectPosition: 'center'
})

export const titleClass: string = style({
    fontSize: '4.2rem',
    fontFamily: '"Bebas", cursive',
    fontWeight: 'bold',
    color: '#CD2C2E',
    display: 'inline-block',
    marginBottom: '1rem',
    padding: '0',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '8rem',
        }
    }
});

export const contentClass: string = style({
    fontSize: '2.2rem',
    fontWeight: 'bold',
    display: 'inline-block',
    marginBottom: '1.5rem',
    padding: '0',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '3.2rem',
            marginBottom: '3rem',
        }
    }
});

export const descriptionClass: string = style({
    fontSize: '1.4rem',
    lineHeight: '2.4rem',
    letterSpacing: '0.05em',
    marginBottom: '3.7rem',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.5rem',
            lineHeight: '3rem',
            letterSpacing: '0.1em',
            marginBottom: '3.1rem',
        }
    }
});

export const backgroundDiv: string = style({
    backgroundColor: '#F7F7F7',
    position: 'absolute',
    width: '97.5%',
    height: '400px',
    marginTop: '7.5rem',
    paddingLeft: '10rem',
    zIndex: '0',
    '@media': {
        'screen and (min-width: 768px)': {
            width: '80%',
            height: '350px',
        }
    }
});

export const marginLeft: string = style({
    marginLeft: 'calc(100vw / 2* -0.1 )',
    '@media': {
        'screen and (min-width: 1200px)': {
            marginLeft: 0,
        }
    }
});

export const marginRight: string = style({
    marginRight: 'calc(100vw / 2* -0.1 )',
    '@media': {
        'screen and (min-width: 1200px)': {
            marginRight: 0,
        }
    }
});
