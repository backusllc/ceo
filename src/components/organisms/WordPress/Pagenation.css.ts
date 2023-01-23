import { style } from '@vanilla-extract/css';

export const ul: string = style({
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem'
});

export const active: string = style({
    backgroundColor: '#000000',
    color: '#FFFFFF',
    height: '5rem',
    width: '5rem',
})

export const li: string = style({
})

export const prevButton: string = style({
    border: '1px solid #666666',
    height: '5rem',
    width: '5rem',
    fontSize: '2rem',
});

export const nextButton: string = style({
    border: '1px solid #666666',
    height: '5rem',
    width: '5rem',
    fontSize: '2rem',
});

export const button: string = style({
    height: '5rem',
    width: '5rem',
    fontSize: '2rem',
});

export const i: string = style({
})
