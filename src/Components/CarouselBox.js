import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import oneImg from '../Assets/one.jpg';
import twoImg from '../Assets/two.jpg';
import threeImg from '../Assets/three.jpg';
import fourImg from '../Assets/four.jpg';


export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img 
                    className="d-block w-100 carousel-img"
                    src={ oneImg }
                    alt="Yoga"
                />
                <Carousel.Caption>
                    <h3>Групповые тренировки</h3>
                    <p>Откройте для себя силу единства — наши групповые занятия позволяют ощутить поддержку и энергию единомышленников, способствуя глубокой практике и взаимному вдохновению</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100 carousel-img"
                    src={ twoImg }
                    alt="Yoga"
                />
                <Carousel.Caption>
                    <h3>Индивидуальный подоход</h3>
                    <p>Каждое занятие строится с учетом ваших уникальных потребностей и целей, обеспечивая максимально эффективное и комфортное освоение йоги</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100 carousel-img"
                    src={ threeImg }
                    alt="Yoga"
                />
                <Carousel.Caption>
                    <h3>Авторские методики</h3>
                    <p>Наши тренеры используют эксклюзивные методики, разработанные с учетом современных тенденций и традиционных практик, чтобы подарить вам незабываемый опыт</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100 carousel-img"
                    src={ fourImg }
                    alt="Yoga"
                />
                <Carousel.Caption>
                    <h3>Бережный подход к каждому</h3>
                    <p>Мы заботимся о вашем здоровье и благополучии, предлагая внимательное отношение и бережный подход к каждому ученику в процессе обучения</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
  }
}
