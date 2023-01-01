import { style } from '@vanilla-extract/css';

export const footer: string = style({
});

export const footerContainer: string = style({
    padding: '4rem 0 10rem',
});

export const ul: string = style({
    marginTop: '3.7rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    rowGap: '1rem',
    columnGap: '4rem',
});

export const topContainer: string = style({
    // flexBasis: "70%",
});

export const link: string = style({
    fontWeight: '600',
    fontSize: '1.6rem',
});

export const rights: string = style({
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
});

export const rightsText: string = style({
    fontSize: '1.2rem',
});
