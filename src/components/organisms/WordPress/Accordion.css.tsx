import { style } from '@vanilla-extract/css'

export const baseWrap: string = style({
    padding: '1.5rem 0',
    position: 'relative',


    '@media': {
        'screen and (min-width: 768px)': {
            padding: '1.5rem 0',
            marginBottom: '1.5rem',
            borderBottom: '1px solid #E5E5E5',
        },
    }
})

export const titleWrapClose: string = style({
    padding: '1.5rem 0',
    position: 'relative',
    transition: 'all .3s',

    "::before": {
        position: 'absolute',
        content: '',
        top: '50%',
        right: '10px',
        transform: 'translate(0, -50%) rotate(90deg)',
        width: '1.5px',
        height: '15px',
        backgroundColor: '#000',
    },
    "::after": {
        transition: 'all .3s',
        position: 'absolute',
        content: '',
        top: '50%',
        right: '10px',
        transform: 'translate(0, -50%) rotate(180deg)',
        width: '1.5px',
        height: '15px',
        backgroundColor: '#000',
    },
    '@media': {
        'screen and (min-width: 768px)': {
            padding: '1.5rem 0',
            marginBottom: '1.5rem',
            borderBottom: '1px solid #E5E5E5',
            "::before": {
                content: 'none',
            },
            "::after": {
                content: 'none',
            },
        }
    },
})

export const titleWrapOpen: string = style({
    padding: '1.5rem 0',
    position: 'relative',
    transition: 'all .3s',

    "::before": {
        position: 'absolute',
        content: '',
        top: '50%',
        right: '10px',
        transform: 'translate(0, -50%) rotate(90deg)',
        width: '1.5px',
        height: '15px',
        backgroundColor: '#000',
    },
    "::after": {
        transition: 'all .3s',
        position: 'absolute',
        content: '',
        top: '50%',
        right: '10px',
        transform: 'translate(0, -50%) rotate(90deg)',
        width: '1.5px',
        height: '15px',
        backgroundColor: '#000',
    },
    '@media': {
        'screen and (min-width: 768px)': {
            padding: '1.5rem 0',
            marginBottom: '1.5rem',
            borderBottom: '1px solid #E5E5E5',
            "::before": {
                content: 'none',
            },
            "::after": {
                content: 'none',
            },
        }
    },
})


export const title: string = style({
    fontFamily: '"Bebas", cursive',
    fontSize: '2.4rem',
    fontWeight: '600',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '3.5rem',
        }
    }
})

export const ul: string = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    overflow: 'hidden',
    transition: 'all .3s',
    borderBottom: '1px solid #E5E5E5',
    '@media': {
        'screen and (min-width: 768px)': {
            borderBottom: 'none',
        }
    }
})

export const li: string = style({
    '@media': {
        'screen and (min-width: 768px)': {
            // display: 'none',
        }
    }
})

export const link: string = style({
    fontSize: '1.4rem',
    color: '#999999',
    cursor: 'pointer',
    '@media': {
        'screen and (min-width: 768px)': {
            // display: 'none',
        }
    }
})

export const accordionHeightActive: string = style({
    transition: 'max-height .3s',
    maxHeight: '200px',
    paddingBottom: '1.9rem',
})

export const accordionHeightNotActive: string = style({
    transition: 'max-height .3s',
    maxHeight: '0px',
    paddingBottom: '0',
    '@media': {
        'screen and (min-width: 768px)': {
            maxHeight: 'none',
            paddingBottom: 'initial',

        }
    }
})
