import { style } from '@vanilla-extract/css';

export const flexDiv: string = style({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '4rem',
    flexDirection: 'column',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '2.9rem',
            marginBottom: '10rem',
            flexDirection: 'row',
        }
    }
});

export const title: string = style({
    fontSize: '1.8rem',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: '2.5rem',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '2.9rem',
            marginBottom: '10rem',
        }
    }
});

export const topDiv: string = style({
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '40%',
    marginBottom: '4rem',
    maxWidth: '480px',
    width: '100%',
    '@media': {
        'screen and (min-width: 768px)': {
            marginBottom: '0',
        }
    }
});

export const bottomDiv: string = style({
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '40%',
    maxWidth: '480px',
});

export const topTitleContainer: string = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '5rem',
    backgroundColor: '#000000',
    paddingLeft: '1.8rem',
    marginBottom: '0.5rem',
});

export const topTitle: string = style({
    fontSize: '3.2rem',
    fontFamily: '"Bebas", cursive',
    fontWeight: '600',
    color: '#FFFFFF',
});

export const bottomTitleContainer: string = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '5rem',
    backgroundColor: '#000000',
    paddingLeft: '1.8rem',
    marginBottom: '0.5rem',
});

export const bottomTitle: string = style({
    fontSize: '3.2rem',
    fontFamily: '"Bebas", cursive',
    fontWeight: '600',
    color: '#FFFFFF',
});

export const topContentContainer: string = style({
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '340px',
});

export const bottomContentContainer: string = style({
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '340px',
});
