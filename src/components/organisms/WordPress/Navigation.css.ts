import { style } from '@vanilla-extract/css'

export const wrap: string = style({
    position: 'fixed',
    backgroundColor: '#FFFFFF',
    zIndex: '999',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    top: 0,
    left: 0,
    width: '100%',
    paddingBottom: '4rem',
    boxSizing: 'border-box',
})

export const logoDiv: string = style({
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    backgroundColor: '#fff',
    zIndex: '999',

    display: 'flex',
    justifyContent: 'flex-between',
    alignItems: 'center',
    height: '6rem',
    flexDirection: 'row',
    width: '100%',
    marginLeft: '1rem',
    '@media': {
        'screen and (min-width: 768px)': {
            position: 'relative',
            height: '10rem',
        }
    }
})


export const menuContainer: string = style({
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    paddingTop: '12rem',
    columnGap: '6rem',
    '@media': {
        'screen and (min-width: 768px)': {
            paddingTop: '16rem',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }
    }
})

export const menuWrap: string = style({
    display: 'flex',
    flexBasis: '20%',
    flexWrap: 'wrap',
    flexDirection: 'column',
    '@media': {
        'screen and (min-width: 768px)': {
            padding: '1.5rem 0',
        }
    }
})

export const container: string = style({
    background: '#00762D',
    width: '80vw',
    position: 'relative',
})

export const links: string = style({

})


export const logoLink: string = style({
    '@media': {
        'screen and (min-width: 768px)': {
            marginLeft: '1.5rem',
        }
    }
})

export const clink: string = style({
    backgroundColor: '#00762D'
})

export const img: string = style({
})

export const a: string = style({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '0.75rem',
    alignItems: 'center',
    color: '#0a2540',
    textTransform: 'capitalize',
    fontWeight: '700',
    fontSize: '1.2rem',
})

export const liMenu: string = style({
    borderTop: '0.1px solid #51A370',
    borderBottom: '0.1px solid #51A370',
})

export const divMenu: string = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
})

export const aMenu: string = style({
    color: '#fff',
    fontSize: '1rem',
    padding: '1.5rem',
})

export const wrapMegaMenu: string = style({
    background: '#555555',

})

export const liMegaMenu: string = style({
    borderTop: '0.1px solid #777777',
    // borderBottom: '0.1px solid #fff',
})

export const aMegaMenu: string = style({
    color: '#fff',
    fontSize: '1rem',
    padding: '1.5rem',
})
