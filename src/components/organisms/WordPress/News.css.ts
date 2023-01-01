import { style } from '@vanilla-extract/css';

export const wrapDiv: string = style({
    marginTop: '3rem',
    marginBottom: '14rem',
    '@media': {
        'screen and (min-width: 768px)': {
            flexDirection: 'row',
            marginBottom: '14rem',
        }
    }
});

export const imgDiv: string = style({
    position: 'relative',
    aspectRatio: '16/9',
    marginBottom: '1.4rem',
    overflow: 'hidden',
})

export const img: string = style({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100%',
    height: '100%',
});

export const link: string = style({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
})

export const ul: string = style({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: '4.8rem',
    gap: '2rem',
    '@media': {
        'screen and (min-width: 768px)': {
            marginBottom: '9.2rem',
            flexWrap: 'nowrap',
            gap: '4rem',
        }
    }
})

export const li: string = style({
    flexBasis: '47%',
    display: 'flex',
    // flexWrap: 'wrap',
    flexDirection: 'column',
    position: 'relative',
    marginBottom: '1rem',
    width: '100%',
    '@media': {
        'screen and (min-width: 768px)': {
            flexBasis: '23%',
        }
    }
})

export const text: string = style({
    height: '10%',
    minHeight: '0%',
    wordBreak: 'break-all',
    marginBottom: '1rem',
})

export const more: string = style({
    backgroundColor: '#000000',
    color: '#FFFFFF',
    padding: '2rem 10rem',
    display: 'inline-block',
    fontSize: '15px',
    transition: 'opacity .3s',
    ':hover': {
        opacity: '0.8',
    }
})
