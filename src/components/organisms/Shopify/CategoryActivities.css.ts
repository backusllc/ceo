import { style } from '@vanilla-extract/css'

export const wrapDiv: string = style({
    marginTop: '3rem',
    marginBottom: '6rem',
    '@media': {
        'screen and (min-width: 768px)': {
            flexDirection: 'row',
            marginBottom: '13rem',
        }
    }
});

export const imgDiv: string = style({
    position: 'relative',
    aspectRatio: '16/9',
    marginBottom: '1.4rem',
    overflow: 'hidden'
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
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: '4rem',
    marginBottom: '4.8rem',
    '@media': {
        'screen and (min-width: 768px)': {
            flexDirection: 'row',
            marginBottom: '9.2rem',
        }
    }
})

export const link: string = style({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
})

export const li: string = style({
    flexBasis: '45%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    marginBottom: '1rem',
    width: '100%',
})

export const text: string = style({
    height: '10%',
    minHeight: '0%',
    wordBreak: 'break-all',
    marginBottom: '1rem',
    fontSize: '2rem',
})

export const description: string = style({
    fontSize: '1.6rem',
    fontWeight: '500',
    letterSpacing: '0.05em',
    lineHeight: '1.75em',
})

export const activeTag: string = style({
    display: 'inline-block',
    backgroundColor: '#CD2C2E',
    color: '#FFFFFF',
    padding: '0.4rem 1rem',
})

export const closeTag: string = style({
    display: 'inline-block',
    backgroundColor: '#999999',
    color: '#FFFFFF',
    padding: '0.4rem 1rem',
})

export const recruitingTag: string = style({
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.4rem',
})

export const tag: string = style({
    fontFamily: '"Noto Sans JP", sans-serif',
    border: '1px solid #E0E0E0',
    borderRadius: '4px',
    padding: '0.4rem 1rem',
})

export const pCategory: string = style({
    fontSize: '1.25rem',
});

export const p: string = style({
    margin: 0,
});

export const month: string = style({
    display: 'block',
    fontSize: '1.2rem',
    fontFamily: 'Roboto',
    fontWeight: '500',
})

export const day: string = style({
    display: 'block',
    fontSize: '2.7rem',
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: '1em',
})

export const ribbon: string = style({
    display: 'inline-block',
    position: 'absolute',
    top: '-6px',
    left: '10px',
    margin: '0',
    padding: '10px 0 0 0',
    zIndex: '2',
    width: '6rem',
    height: '6rem',
    textAlign: 'center',
    color: 'white',
    fontSize: '1.3rem',
    background: '#000000',
    borderRadius: '2px 0 0 0',
    ':before': {
        position: 'absolute',
        content: '',
        top: '0',
        right: '-5px',
        border: 'none',
        borderBottom: 'solid 6px #9F9F9F',
        borderRight: 'solid 5px transparent',
    }
});

