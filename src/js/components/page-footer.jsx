import React from "react";
import Logo from "./logo";
import Navigation from "./navigation";
import SocialList from "./social-list";

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer__wrapper page-footer__wrapper--first">
        <Logo />
        <p className="page-footer__contacts page-footer__contacts--adress">
          150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка
          России №1050 Ⓒ Лига Банк, 2019
        </p>
        <Navigation location={`footer`} />
      </div>
      <div className="page-footer__wrapper page-footer__wrapper--second">
        <div className="page-footer__contacts page-footer__contacts--mobile">
          <span>*0904</span>{" "}
          <p>Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
        </div>
        <div className="page-footer__contacts page-footer__contacts--phone">
          <span>8 800 111 22 33</span> <p>Бесплатный для всех городов России</p>
        </div>
        <SocialList />
      </div>
    </footer>
  );
};

export default PageFooter;
