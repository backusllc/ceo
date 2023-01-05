
import { style } from '@vanilla-extract/css';

export const multiColumnGrid: string = style({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    columnGap: '4rem',
    // margin: '14rem 0',
    flexDirection: 'column',
    '@media': {
        'screen and (min-width: 768px)': {
            flexDirection: 'row',
        }
    }
});

export const multiColumnTileLeft: string = style({
    position: 'relative',
    flexBasis: '50%',
    zIndex: '1',
    backgroundColor: '#FFFFFF',
    margin: '2rem 0 0.7rem 0',
    transition: 'all 0.5s',
    '@media': {
        'screen and (min-width: 768px)': {
            margin: '7rem 0',
        }
    },
    ":hover": {
        opacity: '0.8'
    }
});

export const multiColumnTileRight: string = style({
    position: 'relative',
    flexBasis: '50%',
    zIndex: '1',
    backgroundColor: '#FFFFFF',
    margin: '0.7rem 0 2rem 0',
    transition: 'all 0.5s',
    '@media': {
        'screen and (min-width: 768px)': {
            margin: '7rem 0',
        }
    },
    ":hover": {
        opacity: '0.8'
    }
});

export const container: string = style({
    padding: '1.5rem ',
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: '80px auto',
    '@media': {
        'screen and (min-width: 768px)': {
            padding: '2rem 4rem',
            gridTemplateColumns: '115px auto',
        }
    }
});

export const imageContainer: string = style({
    flexBasis: '11.5rem',
    boxSizing: 'border-box',
    padding: '2rem',
    backgroundColor: '#F7F7F7',
    borderRadius: '4px',
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 1,
    gridRowEnd: 3,
    alignSelf: 'center',
    '@media': {
        'screen and (min-width: 768px)': {
            margin: '1rem',
            gridColumnStart: 1,
            gridColumnEnd: 2,
            gridRowStart: 1,
            gridRowEnd: 4,
        }
    }
})

export const titleClass: string = style({
    fontFamily: '"Noto Sans JP", sans-serif',
    fontSize: '1.6rem',
    alignSelf: 'center',
    marginBottom: '1rem',
    fontWeight: '600',
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 3,
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.5rem',
            gridColumnStart: 2,
            gridColumnEnd: 3,
            gridRowStart: 2,
            gridRowEnd: 3,
        }
    }
});

export const descriptionClass: string = style({
    fontFamily: '"Noto Sans JP", sans-serif',
    fontSize: '1.4rem',
    color: '#666666',
    lineHeight: '2.5rem',
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 3,
    gridRowEnd: 4,
    '@media': {
        'screen and (min-width: 768px)': {
            gridColumnStart: 2,
            gridColumnEnd: 3,
            gridRowStart: 3,
            gridRowEnd: 4,
        }
    }
});

export const backgroundDiv: string = style({
    backgroundColor: '#000000',
    position: 'absolute',
    marginRight: 'calc(50% - 50vw)',
    marginLeft: 'calc(50% - 50vw)',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: '0',
});

export const lineLink: string = style({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: '1',
})

export const contactLink: string = style({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: '1',
})
