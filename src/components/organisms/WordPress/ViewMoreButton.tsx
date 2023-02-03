import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { buttonContainer, buttonInner, button, buttonWrap, link, buttonHidden, arrow, arrowDiv, buttonCircleCover } from './ViewMoreButton.css'
import { gsap, TweenMax, Power2, TimelineMax } from 'gsap';

interface Props {
    toLink: string,
}

const ViewMoreButton = React.memo(({ toLink }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const buttonHiddenRef = useRef<HTMLDivElement>(null);

    const mouseEnter = () => {
        gsap.fromTo(ref.current,
            {
                scale: 0,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 0.5,
                duration: .4,
            }
        ).play();


        gsap.fromTo(buttonHiddenRef.current,
            {
                ease: "power4.in",
                y: "0",
            },
            {
                y: "-30",
                duration: 0.4,
            }
        ).play();

        gsap.fromTo(buttonRef.current,
            {
                ease: "power4.in",
                y: "30",
            },
            {
                y: "0%",
                duration: .4,
            }
        ).play();
    }

    const mouseLeave = () => {
        const tl = gsap.timeline({ paused: true });
        tl.fromTo(ref.current,
            {
                opacity: 0.5,
            },
            {
                opacity: 0,
                duration: .4,
            }
        ).play();
    }

    return (
        <>
            <div className={buttonContainer}>
                <div className={buttonInner} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <div className={buttonWrap} >
                        <button className={button} ref={buttonRef}>VIEW MORE</button>
                        <button className={buttonHidden} ref={buttonHiddenRef}>VIEW MORE</button>
                    </div>
                    <div className={arrowDiv}>
                        <i className={arrow}></i>
                        <div ref={ref} className={buttonCircleCover} >
                        </div>
                    </div>
                    <Link className={link} to={toLink} />
                </div>
            </div>
        </>
    );
});

export default ViewMoreButton;
