
import { style } from '@vanilla-extract/css';

export const filterWrap: string = style({
    paddingTop: '2rem',
    marginBottom: '6rem',
    backgroundColor: 'transparent',
    '@media': {
        'screen and (min-width: 768px)': {
            padding: '4.8rem 0',
            marginTop: '4.8rem',
            backgroundColor: '#F7F7F7',
        }
    }
})

export const filterDiv: string = style({
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '1rem',
    paddingBottom: '2rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    borderBottom: '1px solid #EAEAEA',
    '@media': {
        'screen and (min-width: 768px)': {
            flexWrap: 'nowrap',
            paddingBottom: '3rem',
            marginBottom: '3rem',
        }
    }
})

export const filterContainer: string = style({
    width: '100%',
    '@media': {
        'screen and (min-width: 768px)': {
            width: '70%',
            margin: '0 auto'
        }
    }
})

export const filter: string = style({
    textAlign: 'center',
    flexBasis: 'calc(50% - 0.5rem)',
    height: '40px',
    '@media': {
        'screen and (min-width: 768px)': {
            flexBasis: '33%',
            height: '59px',
        }
    }
})

export const filterButton: string = style({
    fontSize: '1.3rem',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#999999',
    border: '1px solid #E5E5E5',
    cursor: 'pointer',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.5rem',
        }
    }
})

export const selectedButton: string = style({
    backgroundColor: '#000000',
    border: '1px solid #000000',
    color: '#FFFFFF',
    height: '100%',
});

export const filterTagDiv: string = style({
});

export const filterText: string = style({
    fontFamily: '"游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif',
    fontSize: '1.4rem',
    fontWeight: '600',
    display: 'none',
    marginRight: '5rem',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.5rem',
            display: 'block',
        }
    }
});

export const filterTagLists: string = style({
    gap: '1.7rem',
});

export const eventWrap: string = style({
    marginBottom: '7rem',

    '@media': {
        'screen and (min-width: 768px)': {
            marginBottom: '14rem',
        }
    }
});
