import { style } from '@vanilla-extract/css';

export const wrapDiv: string = style({
    marginTop: '3rem',
    marginBottom: '8.9rem',
    '@media': {
        'screen and (min-width: 768px)': {
            marginBottom: '8.9rem',
        }
    }
});

export const imgDiv: string = style({
    position: 'relative',
    aspectRatio: '1/1',
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
    position: 'relative',
    marginBottom: '1rem',
    width: '100%',
    '@media': {
        'screen and (min-width: 768px)': {
            flexBasis: '20%',
        }
    }
})

export const text: string = style({
    height: '10%',
    minHeight: '0%',
    wordBreak: 'break-all',
    marginBottom: '1rem',
    fontSize: '1.3rem',
})

export const postTitle: string = style({
    fontSize: '1.6rem',
    fontWeight: '600',
})

export const titleContainer: string = style({
    marginBottom: '3.5rem',
});

export const titleClass: string = style({
    fontSize: '1.5rem',
    position: 'relative',
    paddingLeft: '1.2rem',
    '::before': {
        content: '',
        top: '0',
        bottom: '0',
        left: '0',
        borderLeft: '3px solid #000000',
        display: 'inline-block',
        position: 'absolute',
    },
});

export const p: string = style({
    margin: 0,
});

