import React from 'react';
import { titleContainer, titleBorder, titleClass, subTitleClass } from './Title.css'

interface Props {
    Tag: 'h1' | 'h2' | 'h3',
    title: string,
    subTitle: string,
    children?: React.ReactNode;
    isPageTitle?: boolean,
}

const Title = React.memo(({ Tag, title, subTitle, isPageTitle = false }: Props) => {

    return (
        <>
            <div className={`${titleContainer} ${isPageTitle && titleBorder}`}
                    data-aos="fade"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                >
                <Tag className={titleClass}>{title}</Tag>
                <span className={subTitleClass}>{subTitle}</span>
            </div>
        </>
    );
});

export default Title;
