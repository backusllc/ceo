import { globalStyle, style } from '@vanilla-extract/css';

export const navCenter: string = style({
    width: '100%',
    margin: "0 auto",
    display: 'flex',
    '@media': {
        'screen and (min-width: 768px)': {
            alignItems: "center",
        }
    }
})

export const navHeader: string = style({
    width: 'calc(100% - 2rem)',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: '0 auto',
    height: '6rem',
    '@media': {
        'screen and (min-width: 768px)': {
            height: '10rem',
        }
    }
})

export const divHeader: string = style({
    display: "flex",
    justifyContent: "space-between",
    height: "100px",
    marginRight: '5.1rem',
})

export const header: string = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    // position: 'relative',
    zIndex: '999',
    position: 'sticky',
    top: 0,
    '@media': {
        'screen and (min-width: 768px)': {
            position: 'sticky',
            top: '0',
            flexDirection: 'row',
        }
    }
})

export const h1: string = style({
    '@media': {
        'screen and (min-width: 768px)': {
            marginLeft: "2rem",
        }
    }
})

export const liMenu: string = style({
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
})

export const aMenu: string = style({
    fontSize: "16px",
    color: "#000",
    fontWeight: 'bold',
})

export const ulMegaMenu: string = style({
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "0 auto",
    maxWidth: "810px",
})

export const liMegaMenu: string = style({
    width: "25%",
    padding: "2.5em 1.9rem",
    boxSizing: 'border-box',
})

export const aMegaMenu: string = style({
    color: "#fff",
    fontSize: "15px",
})

export const quantityDiv: string = style({
    position: 'absolute',
    top: '18px',
    right: '30px',
    width: '15px',
    boxSizing: 'border-box',
    height: '15px',
    textAlign: 'center',
    color: '#E35700',
    fontSize: '10px',
    lineHeight: '15px',
    backgroundColor: '#fff',
    borderColor: '#E35700',
    borderImage: 'initial',
    borderRadius: '20px',
    border: 'solid 2px #E35700',
})

globalStyle('svg', {
    width: "50px",
})

export const humburgerButton: string = style({
    backgroundColor: 'black',
    width: '6rem',
    height: '6rem',
    cursor: 'pointer',
    position: 'absolute',
    right: '0',
    top: '0',
    '@media': {
        'screen and (min-width: 768px)': {
            position: 'relative',
            width: '10rem',
            height: '10rem',
        }
    }
})

export const span: string = style({
    display: 'inline-block',
    transition: 'all .4s',
    height: '1px',
    position: 'absolute',
    left: '15px',
    top: '30px',
    borderRadius: '2px',
    background: '#fff',
    width: '55%',
    ':first-child': {
        top: '22px'
    },
    ':last-child': {
        top: '38px'
    },
    '@media': {
        'screen and (min-width: 768px)': {
            left: '25px',
            top: '50px',
            borderRadius: '2px',
            background: '#fff',
            width: '45%',
            ':first-child': {
                top: '40px'
            },
            ':last-child': {
                top: '60px'
            },
        }
    }
})
