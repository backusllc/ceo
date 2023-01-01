import React, { useEffect, useRef, useState } from 'react';

export const FadeInOnScroll = ({ children, duration }) => {
    const [isVisible, setVisible] = useState(false);

    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    const style = {
        transition: `opacity ${duration}s ease-in-out`,
        opacity: isVisible ? 1 : 0,
    };

    return (
        <div
            className="fade-in-section"
            ref={domRef}
            style={style}
        >
            {children}
        </div>
    );
};
