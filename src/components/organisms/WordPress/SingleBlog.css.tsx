
import { style } from '@vanilla-extract/css';

export const topDiv: string = style({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
    marginTop: '5rem',
    paddingBottom: '2rem',
    borderBottom: '1px solid #EAEAEA',
    columnGap: '2rem',
    '@media': {
        'screen and (min-width: 768px)': {
            columnGap: '4rem',
            marginBottom: '4rem',
            paddingBottom: '4rem',
            marginTop: '10rem',
        }
    },
})

export const topInformationDiv: string = style({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    columnGap: '2.1rem',
    '@media': {
        'screen and (min-width: 768px)': {
            columnGap: '3.9rem',
        }
    },
})

export const breadcrumb: string = style({
    display: 'flex',
    '@media': {
        'screen and (min-width: 768px)': {
        }
    },
})

export const activeTag: string = style({
    display: 'inline-block',
    fontSize: '1.5rem',
    fontFamily: '"Noto Sans JP", sans-serif',
    backgroundColor: '#CD2C2E',
    color: '#FFFFFF',
    padding: '1.5rem 2.3rem',
    whiteSpace: 'nowrap',
    borderRadius: '4px',
})

export const closeTag: string = style({
    display: 'inline-block',
    fontSize: '1.5rem',
    fontFamily: '"Noto Sans JP", sans-serif',
    backgroundColor: '#999999',
    color: '#FFFFFF',
    padding: '1.5rem 2.3rem',
    whiteSpace: 'nowrap',
    borderRadius: '4px',
})

export const middleDiv: string = style({
    display: 'flex',
    marginBottom: '8.4rem',
    alignItems: 'center',
    columnGap: '2rem',
    '@media': {
        'screen and (min-width: 768px)': {
            marginBottom: '11rem',
            columnGap: '4rem',
        }
    },
})

export const dateDiv: string = style({
    display: 'flex',
    margin: '0',
    flexDirection: 'column',
    zIndex: '2',
    width: '6.5rem',
    height: '6.5rem',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.3rem',
    background: '#000000',
    borderRadius: '2px 0 0 0',
    '@media': {
        'screen and (min-width: 768px)': {
            width: '12.5rem',
            height: '12.5rem',
        }
    },
})

export const dateTagWrap: string = style({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
})

export const month: string = style({
    display: 'block',
    fontFamily: '"Bebas", cursive',
    width: '100%',
    fontSize: '1.2rem',
    fontWeight: '500',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '2.4rem',
        }
    },
})

export const day: string = style({
    display: 'block',
    fontFamily: '"Bebas", cursive',
    width: '100%',
    fontSize: '2.6rem',
    fontWeight: '500',
    lineHeight: '1em',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '5.2rem',
        }
    },
})

export const dateText: string = style({
    display: 'flex',
    columnGap: '0.7rem',
    fontSize: '1.3rem',
    fontFamily: '"Noto Sans JP", sans-serif',
    color: '#999999',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.4rem',
        }
    },
    ':before': {
        content: 'url("/images/clock.svg")',
    }
})

export const titleText: string = style({
    fontSize: '1.8rem',
    lineHeight: '1.77em',
    letterSpacing: '0.05em',
    fontWeight: '500',
    fontFamily: '"Noto Sans JP", sans-serif',
    marginBottom: 0,
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '2.8rem',
            lineHeight: '1.6em',
            letterSpacing: '0.05em',
        }
    },
})

export const bottomDiv: string = style({
    paddingBottom: '3.3rem',
    '@media': {
        'screen and (min-width: 768px)': {
            marginBottom: '6.1rem',
        }
    },
})

export const thumbnailDiv: string = style({
    marginBottom: '4rem',
    '@media': {
        'screen and (min-width: 768px)': {
            marginBottom: '4.8rem',
        }
    },
})

export const recruitingTag: string = style({
    display: 'flex',
    gap: '1rem',
    whiteSpace: 'nowrap',
})

export const tagList: string = style({
    display: 'flex',
    gap: '1rem',
})

export const tag: string = style({
    fontFamily: '"Noto Sans JP", sans-serif',
    border: '1px solid #CD2C2E',
    borderRadius: '4px',
    padding: '1.2rem 2.2rem',
    whiteSpace: 'nowrap',
    fontSize: '1.3rem',
    color: '#CD2C2E',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.5rem',
            padding: '1.2rem 3.6rem',
        }
    },
})






export const titleContainer: string = style({
    paddingBottom: '3.3rem',
    '@media': {
        'screen and (min-width: 768px)': {
            marginBottom: '6.1rem',
        }
    },
})

export const titleBorder: string = style({
    borderBottom: '1px solid #E5E5E5',
})


export const titleClass: string = style({
    fontSize: '5rem',
    lineHeight: '1em',
    fontFamily: '"Bebas", cursive',
    letterSpacing: '0.25rem',
    fontWeight: '400',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '9rem',
            lineHeight: '6.4rem',
        }
    }
});

export const subTitleClass: string = style({
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#CD2C2E',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.5rem',
        }
    }
});
