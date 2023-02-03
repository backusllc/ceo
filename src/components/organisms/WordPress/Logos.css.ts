import { style } from '@vanilla-extract/css';

export const wrapDiv: string = style({
    marginTop: '3rem',
    marginBottom: '0',
    '@media': {
        'screen and (min-width: 768px)': {
            // marginBottom: '14rem',
        }
    }
});

export const imgDiv: string = style({
    position: 'relative',
    paddingTop: '35%',
    // marginBottom: '1.4rem',
    backgroundColor: '#fff',
    // border: '1px solid #F0F0F0',
})

export const pageWrap: string = style({


})

export const img: string = style({
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
});

export const ul: string = style({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '2rem',
    '@media': {
        'screen and (min-width: 768px)': {
            gap: '2rem',
        }
    }
})

export const li: string = style({
    flexBasis: '47%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    '@media': {
        'screen and (min-width: 768px)': {
            flexBasis: 'calc(25% - 1.5rem)',
        }
    }
})

export const text: string = style({
    height: '10%',
    minHeight: '0%',
    wordBreak: 'break-all',
    marginBottom: '1rem',
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

