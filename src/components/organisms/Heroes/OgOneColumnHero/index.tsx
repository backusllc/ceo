import { gsap } from 'gsap';

import React, { useEffect, useState } from 'react';

import { Texture, WebGLRenderer, TextureLoader, Scene, Color, ShaderMaterial, LinearFilter, OrthographicCamera, Mesh, PlaneGeometry } from 'three'
import { section, sectionInner, gridDiv, topDiv, sliderWrapper, bottomDiv, title, subTitle, img, pagination } from './index.css'

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
    const image1 = document.createElement('img');
    image1.src = "/images/firstview01.webp";
    const image2 = document.createElement('img');
    image2.src = "/images/firstview02.webp";
    const image3 = document.createElement('img');
    image3.src = "/images/firstview03.webp";

    const el = document.getElementById('slider-wrapper');
    const imgs: HTMLImageElement[] = [image1, image2, image3];

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

    const canvasEl = document.querySelector('#slider-wrapper canvas');
    canvasEl?.classList.add("firstview");
    const slideTitleEl = document.querySelector(`.${bottomDiv}`);

    gsap.timeline().fromTo
      ("canvas",
        {
          autoAlpha: 0,
          y: 20,
          ease: 'Expo.easeIn',
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
        }
      ).fromTo(slideTitleEl,
        {
          autoAlpha: 0,
          y: 20,
          ease: 'Expo.easeIn',
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
        }
      )
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className={`${section}`}>
        <div className={sectionInner}>
          <div id="slider" >
            <div className={bottomDiv}>
              <div className={title}>Producing presidents<br />
                creates a sustainable society.</div>
              <div className={subTitle}>社長を輩出することが<br className="sp" />持続可能な社会を作り出す。</div>
            </div>
          </div>
          <div id="slider-wrapper" className={sliderWrapper}>
            <div id="pagination" className={pagination}>
              <button id="btn0" className="active" data-slide="0"></button>
              <button id="btn1" data-slide="1"></button>
              <button id="btn2" data-slide="2"></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
