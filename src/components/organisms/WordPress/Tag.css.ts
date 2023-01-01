import { style } from '@vanilla-extract/css';

export const tagList: string = style({
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.4rem',
})

export const tag: string = style({
    fontFamily: '"Noto Sans JP", sans-serif',
    border: '1px solid #E0E0E0',
    borderRadius: '4px',
    padding: '0.4rem 1rem',
    color: '#999999',
})

export const activeStyle: string = style({
    backgroundColor: "#E3E3E3",
    color: '#000000',
})

