import { style } from '@vanilla-extract/css';

export const wrapDiv: string = style({
    marginTop: '3rem',
    marginBottom: '15rem',
    '@media': {
        'screen and (min-width: 768px)': {
            flexDirection: 'row',
            marginBottom: '21.7rem',
        }
    }
});

export const imgDiv: string = style({
    position: 'relative',
    paddingTop: '56.25%',
    marginBottom: '1.4rem',
    overflow: 'hidden',
    width: '100%',
})

export const img: string = style({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
    // height: '10%',
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

export const newsList: string = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.4rem',
    flexDirection: 'row',
    '@media': {
        'screen and (min-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
        }
    }
})

export const tagList: string = style({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '1rem',
    // marginBottom: '1.4rem',
    '@media': {
        'screen and (min-width: 768px)': {
            flexBasis: '23%',
        }
    }
})

export const tag: string = style({
    fontFamily: '"Noto Sans JP", sans-serif',
    border: '1px solid #E0E0E0',
    borderRadius: '4px',
    padding: '0.4rem 1rem',
})
