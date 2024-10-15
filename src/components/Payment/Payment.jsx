import React from 'react'
import './Payment.scss'
import ButtonInStock from '../Button/ButtonInStock/ButtonInStock'
import ButtonYear from '../Button/ButtonYear/ButtonYear'
import { ButtonCart1, ButtonCart2 } from '../Button/ButtonCart/ButtonCart'
import ImageEcip from '../../images/slide/left.png'
import Starting from '../../images/slide/payment/starting/starting.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { MethodsProductData } from '../../Data/MethodsProductData'
import { MethodsImgData } from '../../Data/MethodsImgData'

const Payment = () => {
  const seter = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className="payment" id="payment">
      <div className="container">
        <div className="payment__content">
          <div className="payment__content__mobile">
            <div className="payment__content__mobile__button payment__button">
              <ButtonInStock />
            </div>
            <div className="payment__title">
              <h1 className="payment__title__text">
                SEGWAY NINEBOT KICKSCOOTER MAX
              </h1>
            </div>
            <Slider {...seter}>
              {MethodsProductData.map((id, index) => (
                <div className="payment__slider" key={index}>
                  <div className="payment__image">
                    <img
                      className="payment__image__product"
                      src={id.imgUrl}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="payment__mobile__cart">
              <div className="payment__mobile__cart__text">
                <div className="payment__mobile__cart__text__title">
                  SEGWAY PROTECTIVE GEAR SET <span>AS A GIFT</span>
                </div>
                <div className="payment__mobile__cart__text__description">
                  The cost of a protection kit when buying a scooter is $0
                  instead of $29.99
                </div>
              </div>
              <div className="payment__mobile__cart__image">
                <img src={ImageEcip} alt="ImageEcip" />
              </div>
            </div>
            <div className="payment__cart">
              <div className="payment__cart__top">
                <div className="payment__cart__top__title">
                  Add an extended warranty from <span>Extend</span>
                </div>
                <div className="payment__cart__top__button">
                  <ButtonYear />
                </div>
              </div>
              <div className="payment__cart__center">
                <div className="payment__cart__center__price">
                  <div className="payment__cart__center__price__old">
                    $1049.99
                  </div>
                  <div className="payment__cart__center__price__new">
                    $949.99
                  </div>
                </div>
              </div>
              <div className="payment__cart__bottom">
                <ButtonCart1 />
                <ButtonCart2 />
              </div>
            </div>
            <div className="payment__methods">
              <div className="payment__methods__text">Payment Methods:</div>
              <div className="payment__methods__image">
                {MethodsImgData.map((id, index) => (
                  <div className="methods__image" key={index}>
                    <div className="methods__image__img">
                      <img className="box__image" src={id.imgUrl} alt="" />
                    </div>
                  </div>
                ))}
              </div>
              <span className="payment__methods__text_blue">
                Starting at $55/mo with <img src={Starting} alt="" />.
              </span>
              <span className="payment__methods__text_green">
                Prequalify now
              </span>
            </div>
          </div>
          <div className="payment__content__left">
            <div className="payment__button">
              <ButtonInStock />
            </div>
            <div className="payment__title">
              <h1 className="payment__title__text">
                SEGWAY NINEBOT KICKSCOOTER MAX
              </h1>
            </div>
            <div className="payment__cart">
              <div className="payment__cart__top">
                <div className="payment__cart__top__title">
                  Add an extended warranty from <span>Extend</span>
                </div>
                <div className="payment__cart__top__button">
                  <ButtonYear />
                </div>
              </div>
              <div className="payment__cart__center">
                <div className="payment__cart__center__price">
                  <div className="payment__cart__center__price__old">
                    $1049.99
                  </div>
                  <div className="payment__cart__center__price__new">
                    $949.99
                  </div>
                </div>
                <div className="payment__cart__center__description">
                  Segway Protective <br /> Gear Set as a gift
                </div>
                <div className="payment__cart__center__image">
                  <img src={ImageEcip} alt="ImageEcip" />
                </div>
              </div>
              <div className="payment__cart__bottom">
                <ButtonCart1 />
                <ButtonCart2 />
              </div>
            </div>
            <div className="payment__methods">
              <div className="payment__methods__text">
                Payment Methods:{' '}
                <span className="payment__methods__text_blue">
                  Starting at $55/mo with <img src={Starting} alt="" />.
                </span>{' '}
                <span className="payment__methods__text_green">
                  Prequalify now
                </span>
              </div>
              <div className="payment__methods__image">
                {MethodsImgData.map((id, index) => (
                  <div className="methods__image" key={index}>
                    <div className="methods__image__img">
                      <img className="box__image" src={id.imgUrl} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="payment__content__right">
            <Slider {...seter}>
              {MethodsProductData.map((id, index) => (
                <div className="payment__slider" key={index}>
                  <div className="payment__image">
                    <img
                      className="payment__image__product"
                      src={id.imgUrl}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment
