import React, { useState } from "react";

import { SERVICES, TOUCH_SENSITIVITY } from "../const";
import ServicesContributions from "./services-contributions";
import ServicesCredits from "./services-credits";
import ServicesInsurance from "./services-insurance";
import ServicesOnlineServices from "./services-online-services";
import IconsOfTabs from "./icons-of-tabs";

const Services = () => {
  const servicesArrey = Object.keys(SERVICES);
  const [currentTab, setCurrentTab] = useState(0);

  let touchStart = null;
  let touchPosition = null;

  const onGetNextTab = (directionSide) => {
    if (directionSide === "right") {
      currentTab < servicesArrey.length - 1
        ? setCurrentTab(currentTab + 1)
        : setCurrentTab(0);
    }
    if (directionSide === "left") {
      currentTab !== 0
        ? setCurrentTab(currentTab - 1)
        : setCurrentTab(servicesArrey.length - 1);
    }
  };

  const checkActionMove = () => {
    var distance = touchStart - touchPosition;

    if (Math.abs(distance) > TOUCH_SENSITIVITY) {
      if (distance > 0) {
        onGetNextTab("right");
      } else {
        onGetNextTab("left");
      }
    }
  };

  const onTouchStart = (evt) => {
    // evt.preventDefault();
    touchStart = evt.changedTouches[0].clientX;
    touchPosition = touchStart;
  };

  const onTouchMove = (evt) => {
    // evt.preventDefault();
    touchPosition = evt.changedTouches[0].clientX;
  };

  const onTouchEnd = (evt) => {
    // evt.preventDefault();
    checkActionMove();
    touchStart = null;
    touchPosition = null;
  };

  const getContentOnActiveTab = () => {
    switch (currentTab) {
      case 0:
        return <ServicesContributions />;
      case 1:
        return <ServicesCredits />;
      case 2:
        return <ServicesInsurance />;
      case 3:
        return <ServicesOnlineServices />;
      default:
        return ``;
    }
  };
  return (
    <section
      className="page-content__services services"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
    >
      <h2 className="visually-hidden">Наши услуги</h2>
      <div className="services__tabs">
        {servicesArrey.map((tab, index) => (
          <a
            href="#"
            className={`services-tabs__item
            services-tabs__item--${tab}
            ${currentTab === index ? `services-tabs__item--active` : ``}`}
            key={index}
            onClick={(evt) => {
              evt.preventDefault();
              setCurrentTab(index);
            }}
          >
            <span>{SERVICES[tab]}</span>
          </a>
        ))}
      </div>
      <div className={`services__page services__page--${currentTab}`}>
        <div className="services__wrappper">
          {getContentOnActiveTab()}
          <a className="services__button button" href="#">
            Узнать подробнее
          </a>
        </div>
        {
          <IconsOfTabs
            tabs={servicesArrey}
            currentTab={currentTab}
            location={`services`}
          />
        }
      </div>
    </section>
  );
};

export default Services;
