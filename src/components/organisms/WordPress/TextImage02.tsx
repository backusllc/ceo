import React from 'react';
import { multiColumnGrid, multiColumnTile, container, textContainer, imageContainer, image, titleClass, contentClass, descriptionClass, backgroundDiv } from './TextImage02.css'
import { sprinkles, Sprinkles } from '../../../styles/sprinkles.css';
import ViewMoreButton from './ViewMoreButton';
import { FadeInOnScroll } from '../../../hooks/FadeInOnScroll';

interface Props {
    title: string,
    content: string,
    description: string,
    imageSrc: string,
    imageAlt: string,
    textAlign: Sprinkles['textAlign'],
    right?: number,
    left?: number,
    flexDirection: Sprinkles['flexDirection'],
}

const TextImage02 = React.memo(({
    title,
    content,
    description,
    imageSrc,
    imageAlt,
    textAlign,
    right,
    left,
    flexDirection }: Props) => {

    const spMultiColumnGrid = sprinkles({
        flexDirection: {
            mobile: 'column',
            desktop: flexDirection,
        }
    })

    return (
        <>
            {/* <FadeInOnScroll duration={1}> */}
            <div className="">
                <div className={`${multiColumnGrid} ${spMultiColumnGrid}`}>
                    <div className={multiColumnTile}>
                        <div className={imageContainer} style={{

                        }}>
                            <picture>
                                <source type="image/webp" srcSet={`${imageSrc}.webp`} />
                                <img className={image} src={`${imageSrc}.png`} alt={imageAlt} loading="lazy" />
                            </picture>
                        </div>
                    </div>
                    <div className={multiColumnTile}>
                        <div className={container}>
                            <div className={`${textContainer} ${sprinkles({ textAlign: textAlign })}`} >
                                <h3 className={titleClass} >{title}</h3>
                            </div>
                            <div >
                                <h4 className={contentClass}>{content}</h4>
                                <p className={descriptionClass}>
                                    {description}
                                </p>
                            </div>
                            <ViewMoreButton />
                        </div>
                    </div>
                    <div className={backgroundDiv} style={{ right: right, left: left }} />
                </div>
            </div>
        </>
    );
});

export default TextImage02;
