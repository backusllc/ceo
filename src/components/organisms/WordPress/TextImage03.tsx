import React from 'react';
import { multiColumnGrid, multiColumnTileBottom, multiColumnTileTop, container, textContainer, imageContainer, image, titleClass, subTitle, descriptionClass, delegate, delegateName, backgroundDiv } from './TextImage03.css'
import { sprinkles, Sprinkles } from '../../../styles/sprinkles.css';
import ViewMoreButton from './ViewMoreButton';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
    title: string,
    content: string,
    imageSrc: string,
    imageAlt: string,
    textAlign: Sprinkles['textAlign'],
    right?: number,
    left?: number,
    flexDirection: Sprinkles['flexDirection'],
}

const TextImage03 = React.memo(({
    title,
    content,
    imageSrc,
    imageAlt,
    textAlign,
    right,
    left }: Props) => {
    const data = useStaticQuery(query);


    return (
        <>
            <div style={{ position: 'relative' }}>
                <div className={multiColumnGrid}>
                    <div className={multiColumnTileTop} >
                        <div className={imageContainer}
                            data-aos="fade"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                        >
                            <GatsbyImage
                                image={getImage(data.allFile.edges[0].node.childrenImageSharp[0]) as IGatsbyImageData}
                                alt={"代表理事"}
                                className={image}
                            />
                        </div>
                    </div>
                    <div className={multiColumnTileBottom}>
                        <div className={container}
                            data-aos="fade"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                        >
                            <h3 className={titleClass}>代表挨拶</h3>
                            <p className={subTitle}>
                                いつもの自分から一歩を踏み出したら、<br />
                                「世界」が変わり始めた。
                            </p>
                            <p className={descriptionClass}>
                                技術革新やグローバリゼーションの進展、環境問題や少子高齢化社会の到来など、経営を取り巻く環境は、これまでとは比較にならないほど課題が山積しています。 これらの課題解決のためには、意欲ある人が立ち上がり、社会を引っ張り、自主的に動くことが求められています。 社会を牽引する意欲ある人に対し、起業、事業承継、プロ経営、どんな形であれ経営者として活躍する機会を提供し、社会に優秀な経営者を輩出していくことは、結果として社会の課題を解決することに繋がり、持続可能な社会の実現に貢献することになります。<br />
                                一般社団法人日本CEO協会のプラットフォームを活用し、ぜひ沢山の出会いや学びを得る機会を得て、意欲ある素晴らしい経営者になることを目指して欲しいと願っています。
                            </p>
                            <p className={delegate}>
                                代表理事 <span className={delegateName}>田中千穂</span>
                            </p>
                        </div>
                    </div>
                    <div className={backgroundDiv} style={{ right: right, left: left }} />
                </div>
            </div>
        </>
    );
});

export default TextImage03;

const query = graphql`
query {
  allFile (filter: {name:{eq:"about_greeting"}}){
    edges {
      node {
        name
        childrenImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  }
}
`
