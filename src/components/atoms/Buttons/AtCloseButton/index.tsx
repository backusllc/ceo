import React, { FC } from 'react'
import { MdClose } from 'react-icons/md'
import { button, icon } from './index.css'


interface Props {
    onClick: () => void;
}

export const AtCloseButton: FC<Props> = ({ onClick }) => {

    return (
        <button className={button} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20.707" height="20.707" viewBox="0 0 20.707 20.707">
                <g id="グループ_2378" data-name="グループ 2378" transform="translate(-1305.646 -39.646)">
                    <line id="線_128" data-name="線 128" x1="20" y2="20" transform="translate(1306 40)" fill="none" stroke="#fff" stroke-width="1" />
                    <line id="線_129" data-name="線 129" x2="20" y2="20" transform="translate(1306 40)" fill="none" stroke="#fff" stroke-width="1" />
                </g>
            </svg>
            {/* <MdClose className={icon} onClick={onClick} /> */}
        </button>
    )
}
