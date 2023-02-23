import React, { PropsWithChildren } from "react";
import { contentDiv, overlayDiv, closeButton } from "./Modal.css"

interface Props {
    isShown: Boolean;
    onClose: () => void;
}

export const Modal = (props: PropsWithChildren<Props>) => {

    return (
        <>
            {props.isShown ? (
                <div className={overlayDiv} onClick={() => props.onClose()}>
                    <div className={closeButton} onClick={() => props.onClose()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.707" height="20.707" viewBox="0 0 20.707 20.707"><g id="グループ_2378" data-name="グループ 2378" transform="translate(-1305.646 -39.646)"><line id="線_128" data-name="線 128" x1="20" y2="20" transform="translate(1306 40)" fill="none" stroke="#fff" stroke-width="1"></line><line id="線_129" data-name="線 129" x2="20" y2="20" transform="translate(1306 40)" fill="none" stroke="#fff" stroke-width="1"></line></g></svg>
                    </div>
                    <div className={contentDiv} >
                        {props.children}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};
