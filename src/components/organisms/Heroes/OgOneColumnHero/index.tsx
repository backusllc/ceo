import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { gsap, TweenMax, Power2, TimelineMax } from 'gsap';

import React, { useEffect, useState } from 'react';

import THREE, { Texture, WebGLRenderer, TextureLoader, Scene, Color, ShaderMaterial, LinearFilter, OrthographicCamera, Mesh, PlaneGeometry } from 'three'

import { section, gridDiv, topDiv, sliderWrapper, bottomDiv, title, subTitle, img, pagination } from './index.css'

const displacementSlider = function (opts) {

  let vertex = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `;
  let fragment = `

        varying vec2 vUv;
        uniform sampler2D currentImage;
        uniform sampler2D nextImage;
        uniform float dispFactor;
        void main() {
            vec2 uv = vUv;
            vec4 _currentImage;
            vec4 _nextImage;
            float intensity = 0.3;
            vec4 orig1 = texture2D(currentImage, uv);
            vec4 orig2 = texture2D(nextImage, uv);
            _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));
            _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));
            vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
            gl_FragColor = finalTexture;

        }
    `;
  let images = opts.images;
  let image: Texture;

  let sliderImages: Texture[] = [];
  let parent = opts.parent;

  let renderWidth = window.innerWidth <= 1200 ? window.innerWidth : 850;
  let renderHeight = window.innerWidth <= 1200 ? renderWidth * 470 / 850 : 470;

  let renderer = new WebGLRenderer({
    antialias: false
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff, .5);
  renderer.setSize(renderWidth, renderHeight);
  parent.appendChild(renderer.domElement);
  let loader = new TextureLoader();
  loader.crossOrigin = "anonymous";
  images.forEach(img => {
    image = loader.load(img.getAttribute('src'));
    image.magFilter = LinearFilter;
    image.minFilter = LinearFilter;
    image.anisotropy = renderer.capabilities.getMaxAnisotropy();
    sliderImages.push(image);
  });
  let scene = new Scene();
  scene.background = new Color(0xffffff);
  let camera = new OrthographicCamera(renderWidth / -2, renderWidth / 2, renderHeight / 2, renderHeight / -2, 1, 1000);
  camera.position.z = 1;
  let mat = new ShaderMaterial({
    uniforms: {
      dispFactor: {
        type: "f",
        value: 0.0
      },
      currentImage: {
        type: "t",
        value: sliderImages[0]
      },
      nextImage: {
        type: "t",
        value: sliderImages[1]
      }
    },
    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    opacity: 1.0
  });

  let geometry = new PlaneGeometry(parent.offsetWidth, parent.offsetHeight, 1);
  let object = new Mesh(geometry, mat);
  object.position.set(0, 0, 0);
  scene.add(object);

  let addEvents = () => {
    let pagButtons = Array.from(document?.getElementById('pagination').querySelectorAll('button'));
    let isAnimating = false;
    pagButtons.forEach(el => {
      el.addEventListener('click', function () {
        if (!isAnimating) {
          isAnimating = true;
          document.getElementById('pagination').querySelectorAll('.active')[0].className = '';
          this.className = 'active';

          let slideId = parseInt(this.dataset.slide, 10);
          mat.uniforms.nextImage.value = sliderImages[slideId];
          mat.uniforms.nextImage.needsUpdate = true;

          gsap.to(mat.uniforms.dispFactor, {
            value: 1,
            duration: 1,
            ease: 'Expo.easeInOut',
            onComplete: () => {
              mat.uniforms.currentImage.value = sliderImages[slideId];
              mat.uniforms.currentImage.needsUpdate = true;
              mat.uniforms.dispFactor.value = 0.0;
              isAnimating = false;
            }
          });
        }
      });
    });
  };
  addEvents();
  window.addEventListener('resize', () => {
    // renderer.setSize(renderW, renderH);
    // サイズを取得
    let width = window.innerWidth <= 1200 ? window.innerWidth : 850;
    let height = window.innerWidth <= 1200 ? renderWidth * 470 / 850 : 470;

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // カメラのアスペクト比を正す
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  })

  let animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();
};

export const OgOneColumnHero = () => {
  const [paginationCount, setPaginationCount] = useState(0);

  useEffect(() => {
    const el = document.getElementById('slider-wrapper');
    const imgs = Array.from(el?.querySelectorAll('img'));

    displacementSlider({
      parent: el,
      images: imgs
    });

    const func = () => {
      setPaginationCount(prev => prev + 1);
      document.getElementById("btn" + i).click();
      if (i > 1) i = -1;
      i++;
    }
    const interval = 3000;
    let i = 1;
    let timer = setInterval(func, interval);


    //animation
    const slideTitleEl = document.querySelector(`.${title}`);
    gsap.fromTo(slideTitleEl,
      {
        autoAlpha: 0,
        y: 20,
        ease: 'Expo.easeIn',
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: .5,
      }
    )
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className={section}>
        <div id="slider" >
          <div className={bottomDiv}>
            <div className={title}>Producing presidents<br />
              creates a sustainable society.</div>
            <div className={subTitle}>社長を輩出することが<br className="sp" />持続可能な社会を作り出す。</div>
          </div>
        </div>
        <div id="slider-wrapper" className={sliderWrapper}>
          <picture>
            <source type="image/webp" srcSet={'/images/firstview01.webp'} />
            <img className={img} height="0" width="0"
              alt={"社長を輩出することが持続可能な社会を作り出す。"}
              src="/images/firstview01.png"
              loading="lazy"
            />
          </picture>
          <picture>
            <source type="image/webp" srcSet={'/images/firstview02.webp'} />
            <img className={img} height="0" width="0"
              alt={"社長を輩出することが持続可能な社会を作り出す。"}
              src="/images/firstview02.png"
              loading="lazy"
            />
          </picture>
          <picture>
            <source type="image/webp" srcSet={'/images/firstview03.webp'} />
            <img className={img} height="0" width="0"
              alt={"社長を輩出することが持続可能な社会を作り出す。"}
              src="/images/firstview03.png"
              loading="lazy"
            />
          </picture>
          <div id="pagination" className={pagination}>
            <button id="btn0" className="active" data-slide="0"></button>
            <button id="btn1" data-slide="1"></button>
            <button id="btn2" data-slide="2"></button>
          </div>
        </div>
      </section>

      {/* <section className={section}>
        <div className={gridDiv} >
          <div className={topDiv} id="slider">
            <GatsbyImage
              image={getImage(data.allFile.edges[0].node.childrenImageSharp[0]) as IGatsbyImageData}
              alt={"社長を輩出することが持続可能な社会を作り出す。"}
              className={img}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease"
            />
          </div>
          <div className={bottomDiv}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div className={title}>Producing presidents<br />
              creates a sustainable society.</div>
            <div className={subTitle}>社長を輩出することが<br className="sp" />持続可能な社会を作り出す。</div>
          </div>
        </div>
      </section> */}
    </>
  );
};

const query = graphql`
query {
  allFile (filter: {name:{eq:"firstview_desktop"}}){
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
