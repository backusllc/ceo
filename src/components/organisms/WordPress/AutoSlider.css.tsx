import { style, globalStyle, keyframes } from '@vanilla-extract/css'

export const imgContainer: string = style({
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '100%',
    maxHeight: '100%',
    paddingTop: '75%',
})

export const img: string = style({
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    margin: 0,
    padding: 0,
    paddingRight: '5px',
})

export const section: string = style({
    marginBottom: '7.5rem',
    overflow: 'hidden',
    '@media': {
        'screen and (min-width: 768px)': {
            marginBottom: '14rem',
        }
    }
})
