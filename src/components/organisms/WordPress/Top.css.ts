import { style } from '@vanilla-extract/css';

export const eventSection: string = style({
    backgroundColor: '#FAFAFA',
    padding: '7.5rem 0 7.5rem 0',
    '@media': {
        'screen and (min-width: 768px)': {
            marginTop: '26rem',
            padding: '7.5rem 0 7.5rem 0',
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
    padding: '86px 0 130px 0',
    '@media': {
        'screen and (min-width: 768px)': {
            padding: '86px 0 130px 0',
            marginBottom: '10.7rem',
        }
    }
});

