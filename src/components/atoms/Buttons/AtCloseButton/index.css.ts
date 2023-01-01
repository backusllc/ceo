import { style } from '@vanilla-extract/css'

export const button: string = style({
    position: 'absolute',
    right: '0',
    top: '0',
    backgroundColor: 'black',
    width: '7rem',
    height: '6rem',
    '@media': {
        'screen and (min-width: 768px)': {
            width: '10rem',
            height: '10rem',
        }
    }
})

export const icon: string = style({
    color: '#FFF',
    fontSize: '4rem',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '8rem',
        }
    }
})
