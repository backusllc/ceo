
import { style } from '@vanilla-extract/css';

export const multiColumnGrid: string = style({
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    columnGap: '10rem',
    rowGap: '2.2rem',
    marginBottom: '14rem',
    flexDirection: 'column',
    '@media': {
        'screen and (min-width: 768px)': {
            flexDirection: 'row'
        }
    }
});

export const multiColumnTileBottom: string = style({
    flexBasis: '60%',
    zIndex: '1',
    paddingLeft: '2rem',
    '@media': {
        'screen and (min-width: 768px)': {
            paddingLeft: '0',
        }
    }
});

export const multiColumnTileTop: string = style({
    flexBasis: '40%',
    zIndex: '1',
});

export const container: string = style({
    marginTop: '0',
    display: 'flex',
    rowGap: '1.4rem',
    flexDirection: 'column',
    '@media': {
        'screen and (min-width: 768px)': {
            marginTop: '14.4rem',
            rowGap: '3rem',
        }
    }
});

export const textContainer: string = style({
});

export const imageContainer: string = style({
    overflow: 'hidden',
    width: '90%',
    maxWidth: '100%',
    maxHeight: '100%',
    marginBottom: '1rem',
    '@media': {
        'screen and (min-width: 768px)': {
            width: '100%',
        }
    }
})

export const image: string = style({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
})

export const titleClass: string = style({
    fontSize: '1.4rem',
    display: 'inline-block',
    marginBottom: '1rem',
    padding: '0 1rem',
    fontWeight: '400',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.5rem',
        }
    }
});

export const subTitle: string = style({
    fontSize: '1.6rem',
    color: '#CD2C2E',
    fontWeight: '900',
    fontFamily: "YuMincho,'Yu Mincho',serif",
    lineHeight: '2.7rem',
    letterSpacing: '0.1em',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '3rem',
            lineHeight: '5rem',
            letterSpacing: '0.2em',
        }
    }
});

export const descriptionClass: string = style({
    fontSize: '1.4rem',
    lineHeight: '2em',
    letterSpacing: '0.05em',
    marginBottom: '4.6rem',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.6rem',
            lineHeight: '2em',
            letterSpacing: '0.1em',
            marginBottom: '6rem',
        }
    }
});

export const delegate: string = style({
    fontSize: '1.5rem',
    lineHeight: '3rem',
});

export const delegateName: string = style({
    fontSize: '1.9rem',
    lineHeight: '3rem',
});

export const backgroundDiv: string = style({
    backgroundColor: '#F7F7F7',
    position: 'absolute',
    width: '95%',
    height: '100%',
    marginTop: '2rem',
    zIndex: '0',
    '@media': {
        'screen and (min-width: 768px)': {
            width: '80%',
            height: '100%',
            marginTop: '7.5rem',
            paddingLeft: '10rem',
        }
    }
});
