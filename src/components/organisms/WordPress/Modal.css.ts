import { style } from '@vanilla-extract/css'

export const contentDiv: string = style({
    width: "90%",
    maxWidth: '448px',
    height: "auto",
})

export const closeButton: string = style({
    position: 'absolute',
    right: '3%',
    top : '3%',
    cursor: 'pointer',
})

export const overlayDiv: string = style({
    zIndex: 999,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

