import React from 'react'
import 'aos/dist/aos.css';
import type { FC } from 'react';
import AOS from 'aos';
import './index.css';
import "normalize.css";


export const RootPrivider: FC = ({ children }) => {
    React.useEffect(() => {  // 追加
        AOS.init({
            once: true,
        });
    }, []);

    return <>
        <div className="root-wrap">{children}</div>
    </>
}
