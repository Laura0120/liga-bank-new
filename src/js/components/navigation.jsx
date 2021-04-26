import React from "react";
import PropTypes from "prop-types";
import SingIn from "./sign-in";

const Navigation = (props) => {
  const { location, isOpenMenu, setIsOpenMenu, setIsModal } = props;

  return (
    <React.Fragment>
      {location === `header` 
        ? <button
            type="button"
            className='navigation__toggle  navigation__toggle--closed'
            onClick={() => setIsOpenMenu(true)}
          >
            <span className="visually-hidden">
              {isOpenMenu ? `Закрыть навигацию` : `Открыть навигацию`}
            </span>
          </button>
        :``}
        {location === `header` && isOpenMenu
        ? <button
            type="button"
            className='navigation__toggle  navigation__toggle--open'
            onClick={() => setIsOpenMenu(false)}
          >
            <span className="visually-hidden">Закрыть навигацию</span>
          </button>
        :``}
    <nav className={`navigation navigation--${location} ${location === `header` && !isOpenMenu ? `navigation--closed` : ``}`}>
      <ul className={`navigation__list navigation__list--${location}`}>
        <li className={`navigation__item navigation__item--${location}`}>
          <a href="#">Услуги</a>
        </li>
        <li className={`navigation__item navigation__item--${location}`}>
          <a href="#">Рассчитать кредит</a>
        </li>
        <li className={`navigation__item navigation__item--${location}`}>
          <a href="/">Конвертер валют</a>
        </li>
        <li className={`navigation__item navigation__item--${location}`}>
          <a href="#">Контакты</a>
        </li>
        <li className={`navigation__item navigation__item--${location}`}>
          <a href="#">Задать вопрос</a>
        </li>
        {isOpenMenu && (<li className={`navigation__item navigation__item--${location}`}><SingIn setIsModal={setIsModal} isOpenMenu={isOpenMenu}/></li>)}
      </ul>
    </nav>
   
    </React.Fragment>
  );
};

Navigation.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Navigation;
