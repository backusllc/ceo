
import { style } from '@vanilla-extract/css';

export const multiColumnGrid: string = style({
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
    flexBasis: '70%',
    zIndex: '1',
});

export const multiColumnTileTop: string = style({
    flexBasis: '30%',
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
    lineHeight: '2.7rem',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '3rem',
            lineHeight: '5rem',
        }
    }
});

export const descriptionClass: string = style({
    fontSize: '1.4rem',
    lineHeight: '2.8rem',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.6rem',
            lineHeight: '3rem',
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
    width: '80%',
    height: '630px',
    marginTop: '7.5rem',
    paddingLeft: '10rem',
    zIndex: '0',
});
