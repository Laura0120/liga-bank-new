import React from "react";
import PropTypes from "prop-types";
import SingIn from "./sign-in";

const Navigation = (props) => {
  const { location, isOpenMenu, setIsOpenMenu, setIsModal } = props;

  return (
    <React.Fragment>
      {location === `header` ? (
        <button
          type="button"
          className="page-header__toggle  page-header__toggle--closed"
          onClick={() => setIsOpenMenu(true)}
        >
          <span className="visually-hidden">
            {isOpenMenu ? `Закрыть навигацию` : `Открыть навигацию`}
          </span>
        </button>
      ) : (
        ``
      )}
      {location === `header` && isOpenMenu ? (
        <button
          type="button"
          className="page-header__toggle page-header__toggle--open button-close"
          onClick={() => setIsOpenMenu(false)}
        >
          <span className="visually-hidden">Закрыть навигацию</span>
        </button>
      ) : (
        ``
      )}
      <nav
        className={`navigation navigation--${location} ${
          location === `header` && !isOpenMenu ? `navigation--closed` : ``
        }`}
      >
        <ul className={`navigation__list navigation__list--${location}`}>
          <li className={`navigation__item navigation__item--${location}`}>
            <a href="#services">Услуги</a>
          </li>
          <li className={`navigation__item navigation__item--${location}`}>
            <a href="#credit">Рассчитать кредит</a>
          </li>
          <li className={`navigation__item navigation__item--${location}`}>
            <a href="/">Конвертер валют</a>
          </li>
          <li className={`navigation__item navigation__item--${location}`}>
            <a href="#contacts">Контакты</a>
          </li>
          <li className={`navigation__item navigation__item--${location}`}>
            <a href="#ask-a-Question">Задать вопрос</a>
          </li>
          {isOpenMenu && (
            <li className={`navigation__item navigation__item--${location}`}>
              <SingIn
                setIsModal={setIsModal}
                isOpenMenu={isOpenMenu}
                setIsOpenMenu={setIsOpenMenu}
              />
            </li>
          )}
        </ul>
      </nav>
    </React.Fragment>
  );
};

Navigation.propTypes = {
  location: PropTypes.string.isRequired,
  isOpenMenu: PropTypes.bool,
  setIsOpenMenu: PropTypes.func,
  setIsModal: PropTypes.func,
};

export default Navigation;
