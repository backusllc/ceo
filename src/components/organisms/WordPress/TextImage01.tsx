import React, { useEffect, useRef, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { multiColumnGrid, multiColumnTile, titleContainer, descriptionContainer, bgWrap, title, description, img } from './TextImage01.css'
import ViewMoreButton from './ViewMoreButton';

const TextImage01 = React.memo(() => {
    const data = useStaticQuery(query);
    const domRef = useRef();
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);

    const bgStyle = isVisible ? bgWrap : "";

    return (
        <>
            <section >
                <div className="inner">
                    <div className={multiColumnGrid} >
                        <div className={multiColumnTile} >
                            <div className={titleContainer}
                                ref={domRef}>
                                <span className={bgStyle}><span className={title}>社会を継続可能にするために、</span></span><br />
                                <span className={bgStyle}><span className={title}>あらゆる角度から社長、</span></span><br />
                                <span className={bgStyle}><span className={title}>経営陣を創出する。</span></span>
                            </div>
                            <div className={descriptionContainer}

                            >
                                <p className={description}>
                                    この激しい変化の真っ只中にある現代社会に必要とされるのは、<br className="pc" />
                                    変化を好機ととらえ、主体的に考え実践、実装していく人間だ。<br />
                                    そのような人になるには、期待と責任を負いながら挑戦できる機会が必要だ。<br />
                                    意欲ある全ての人が挑戦できる場をつくりたい。<br />
                                    主体性をもって 、持てる能力を余すところなく発揮し、仕事の楽しさを味わってもらいたい。<br />
                                    挑戦すれば、ときに悩み、つまずき、葛藤することもあるだろう。<br />
                                    しかし、自分らしく、一人ひとりが輝く場所が必ずある。<br />
                                    今を生きる 人たちが輝けば、未来も輝くものになるはずだから。
                                </p>
                            </div>
                            <ViewMoreButton />
                        </div>
                        <div className={multiColumnTile} >
                            <div className="imageContainer" style={{
                                overflow: 'hidden',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                marginBottom: '1rem',
                            }}
                            >
                                <GatsbyImage
                                    image={getImage(data.allFile.edges[0].node.childrenImageSharp[0]) as IGatsbyImageData}
                                    alt={"flag"}
                                    className={img}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});

export default TextImage01;

const query = graphql`
query {
  allFile (filter: {name:{eq:"top_flag"}}){
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
