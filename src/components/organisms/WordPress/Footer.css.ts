import { style } from '@vanilla-extract/css';

export const footer: string = style({
});

export const footerContainer: string = style({
    padding: '4rem 0 3.5rem',
    '@media': {
        'screen and (min-width: 768px)': {
            padding: '4rem 0 10rem',
        }
    }
});

export const ul: string = style({
    marginTop: '3.7rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    rowGap: '2rem',
    columnGap: '4rem',
    '@media': {
        'screen and (min-width: 768px)': {
            rowGap: '1rem',
        }
    }
});

export const topContainer: string = style({
    width: '231px',
    '@media': {
        'screen and (min-width: 768px)': {
            width: '268px',
        }
    }
});

export const link: string = style({
    fontWeight: '600',
    fontSize: '1.6rem',
});

export const rights: string = style({
    position: 'relative',
    marginBottom: '2.4rem',
    rowGap: '5.6rem',
    columnGap: '4.9rem',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    '@media': {
        'screen and (min-width: 768px)': {
            flexDirection: 'row-reverse',
            marginBottom: '5.8rem',
        }
    }
});

export const privacyText: string = style({
    fontSize: '1.3rem',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.2rem',
        }
    }
});

export const rightsText: string = style({
    fontSize: '1.1rem',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.2rem',
        }
    }
});

export const scrollTop: string = style({
    position: 'absolute',
    cursor: 'pointer',
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    width: '4.5rem',
    height: '4.5rem',
    fontSize: '1.2rem',
    '@media': {
        'screen and (min-width: 768px)': {
            width: '5.5rem',
            height: '5.5rem',
        }
    }
});

export const arrow: string = style({
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '100%',
    '::after': {
        zIndex: 2,
        content: '',
        top: '60%',
        left: '50%',
        width: '14px',
        height: '14px',
        borderTop: '2px solid #fff',
        borderRight: '2px solid #fff',
        transform: 'translate(-50%, -60%) rotate(-45deg)',
        display: 'inline-block',
        position: 'absolute',
    },

});
