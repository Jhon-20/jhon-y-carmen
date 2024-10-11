import React, { useEffect, useRef } from 'react';
import './carousel.css'
import imgSlide_01_mobile from "../../../assets/img/banner_01_mobile.webp";
import imgSlide_02_mobile from "../../../assets/img/banner_02_mobile.webp";
import imgSlide_03_mobile from "../../../assets/img/banner_03_mobile.webp";


const Carousel: React.FC = () => {
  // Referencias a los elementos del DOM
  const nextDom = useRef<HTMLButtonElement | null>(null);
  const prevDom = useRef<HTMLButtonElement | null>(null);
  const carouselDom = useRef<HTMLDivElement | null>(null);
  const sliderDom = useRef<HTMLDivElement | null>(null);
  const thumbnailBorderDom = useRef<HTMLDivElement | null>(null);
  const timeDom = useRef<HTMLDivElement | null>(null);

  let timeRunning = 3000;
  let timeAutoNext = 7000;

  let runTimeOut: any;
  let runNextAuto: any;

  // Simula el ciclo de vida de los componentes para manejar eventos y auto-slide
  useEffect(() => {
    const nextButton = nextDom.current;
    const prevButton = prevDom.current;

    if (nextButton) {
      nextButton.onclick = () => showSlider('next');
    }
    if (prevButton) {
      prevButton.onclick = () => showSlider('prev');
    }

    runNextAuto = setTimeout(() => {
      nextButton?.click();
    }, timeAutoNext);

    // Limpiar timeout cuando el componente se desmonta
    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);

  // Función para mostrar el slider
  const showSlider = (type: 'next' | 'prev') => {
    if (!sliderDom.current || !thumbnailBorderDom.current || !carouselDom.current) return;

    const SliderItemsDom = sliderDom.current.querySelectorAll<HTMLDivElement>('.item');
    const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll<HTMLDivElement>('.item');

    if (type === 'next') {
      sliderDom.current.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);
      carouselDom.current.classList.add('next');
    } else {
      sliderDom.current.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      carouselDom.current.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.current?.classList.remove('next');
      carouselDom.current?.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextDom.current?.click();
    }, timeAutoNext);
  };


  return (
    <>
      <div className="carousel" ref={carouselDom}>


        <div className="list" ref={sliderDom}>
          <div className="item">

            <img src={imgSlide_01_mobile} alt="Slider 1" />
            <div className="content">

              <div className="author">JHON Y CARMEN</div>
              <div className="title">UNIDOS EN</div>
              <div className="topic">AMOR</div>

              <div className="des">
                Las muchas aguas no podrán apagar el amor...
              </div>

            </div>

          </div>
          <div className="item">
            <img src={imgSlide_02_mobile} alt="Slider 1" />
            <div className="content">
              <div className="author">JHON Y CARMEN</div>
              <div className="title">GUIADOS POR</div>
              <div className="topic">DIOS</div>
              <div className="des">
                Ponme como un sello sobre tu corazón...
              </div>

            </div>
          </div>
          <div className="item">
            <img src={imgSlide_03_mobile} alt="Slider 1" />
            <div className="content">
              <div className="author">JHON Y CARMEN</div>
              <div className="title">SE PARTE DE NUESTRA</div>
              <div className="topic">UNIÓN</div>
              <div className="des">
                Lo que Dios unió que no lo separe el hombre...
              </div>

            </div>
          </div>

          {/* Repetir los elementos del slider aquí */}

        </div>

        <div className="thumbnail" ref={thumbnailBorderDom}>
          <div className="item">
            <img src={imgSlide_01_mobile} alt="Thumbnail 1" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={imgSlide_02_mobile} alt="Thumbnail 2" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={imgSlide_03_mobile} alt="Thumbnail 2" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>


          {/* Repetir los thumbnails aquí */}
        </div>

        <div className="arrows">
          <button id="prev" ref={prevDom}>a</button>
          <button id="next" ref={nextDom}>&gt;</button>
        </div>

        <div className="time" ref={timeDom}></div>
      </div>
    </>
  );
};

export default Carousel;
