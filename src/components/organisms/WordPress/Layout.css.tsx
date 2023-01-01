import { style } from '@vanilla-extract/css'

export const pageWrap: string = style({
    marginTop: '4.6rem',
    // marginBottom: '9.6rem',
    '@media': {
        'screen and (min-width: 768px)': {
            marginTop: '7.1rem',
            // marginBottom: '17.3rem',
        }
    }
})
