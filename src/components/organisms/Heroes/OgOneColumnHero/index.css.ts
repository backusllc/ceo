import { style } from '@vanilla-extract/css';
// import { bebas } from '../../../../components/provider/RootProvider/index.css';

export const img: string = style({
    display: 'none',
    visibility: 'hidden',
    // width: '840px',
    // height: '289px',
    // marginLeft: '-180px',
    // zIndex: '-1',
    // '@media': {
    //     'screen and (min-width: 768px)': {
    //         marginLeft: '0',
    //         width: '1200px',
    //         height: '413px',
    //     }
    // }
})

export const section: string = style({
    position: 'relative',
    marginTop: '6.8rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    minHeight: 'calc(100vh - 6rem - 6.8rem)',
    maxWidth: '1200px',
    overflow: 'hidden',
    marginBottom: 0,
    '@media': {
        'screen and (min-width: 981px)': {
            width: '90%',
            marginTop: '6.1rem',
            minHeight: 'calc(100vh - 6.1rem - 6.8rem)',
            // marginBottom: '13.5rem',
        }
    }
})

export const sectionInner: string = style({
    position: 'relative',
    // marginTop: '6.8rem',
    // marginRight: 'auto',
    // marginLeft: 'auto',
    // minHeight: 'calc(100vh - 6rem - 6.8rem)',
    // maxWidth: '1200px',
    // overflow: 'hidden',
    // marginBottom: 0,
    '@media': {
        'screen and (min-width: 981px)': {
            // width: '90%',
            // marginTop: '6.1rem',
            // minHeight: 'calc(100vh - 6.1rem - 6.8rem)',
            // marginBottom: '13.5rem',
        }
    }
})

export const gridDiv: string = style({
    display: 'flex',
    flexDirection: 'column-reverse',
    '@media': {
        'screen and (min-width: 981px)': {
            flexDirection: 'column',
        }
    }
})

export const topDiv: string = style({
})

export const bottomDiv: string = style({
    position: 'relative',
    width: '90%',
    maxWidth: '1200px',
    // width: 'calc(100% - 2rem)',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '0',
    opacity: 0,
    '@media': {
        'screen and (min-width: 981px)': {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: 0,
            zIndex: 1,
        }
    }
})

export const title: string = style({
    fontSize: '3.5rem',
    lineHeight: '1.22em',
    letterSpacing: '0.05em',
    marginBottom: '0.5rem',
    fontWeight: '700',
    fontFamily: '"Bebas", cursive',
    // opacity: 0,
    '@media': {
        'screen and (min-width: 981px)': {
            fontSize: '5.5rem',
            lineHeight: '1.21em',
            marginBottom: '1.6rem',
        }
    },
})

export const subTitle: string = style({
    fontSize: '1.4rem',
    fontWeight: '600',
    letterSpacing: '0.1em',
    lineHeight: '1.71em',
    marginBottom: '3.6rem',
    // opacity: 0,
    '@media': {
        'screen and (min-width: 981px)': {
            fontSize: '1.5rem',
            marginBottom: '0',
        }
    },
})

export const sliderWrapper: string = style({
    width: '100%',
    maxWidth: '850px',
    margin: '0 0 0 auto',
    height: '100%',
    position: 'relative',

})

export const pagination: string = style({
    display: 'none',
})
