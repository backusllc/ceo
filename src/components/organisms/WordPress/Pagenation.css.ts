import { style } from '@vanilla-extract/css';

export const ul: string = style({
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem'
});

export const active: string = style({
    backgroundColor: '#000000',
    color: '#FFFFFF',
})

export const li: string = style({
})

export const prevButton: string = style({
    padding: '1rem 1.5rem',
    border: '1px solid #666666'
});

export const nextButton: string = style({
    padding: '1rem 1.5rem',
    border: '1px solid #666666'
});

export const button: string = style({
    padding: '1rem 1.5rem',
});

export const i: string = style({
})
