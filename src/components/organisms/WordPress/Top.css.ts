import { style } from '@vanilla-extract/css';

export const eventSection: string = style({
    backgroundColor: '#FAFAFA',
    padding: '6.3rem 0 2.2rem 0',
    '@media': {
        'screen and (min-width: 768px)': {
            marginTop: '26rem',
            padding: '7.6rem 0 13.1rem 0',
        }
    }
});

export const newsSection: string = style({
    // backgroundColor: '#FAFAFA',
    // padding: '75px 0 75px 0',
    // '@media': {
    //     'screen and (min-width: 768px)': {
    //         marginBottom: '14rem',
    //     }
    // }
});

export const memberSection: string = style({
    backgroundColor: '#FAFAFA',
    padding: '4.5rem 0 6.7rem 0',
    '@media': {
        'screen and (min-width: 768px)': {
            padding: '8.6rem 0 13rem 0',
            marginBottom: '10.7rem',
        }
    }
});

