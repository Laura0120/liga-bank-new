import React from "react";
import PropTypes from "prop-types";

import { SLIDER_PAGES, TOUCH_SENSITIVITY } from "../const";
import SlideFirst from "./slide-first";
import SlideSecond from "./slide-second";
import SlideThird from "./slide-third";
import IconsOfTabs from "./icons-of-tabs";

const Slider = (props) => {
  const { currentPage, currentPageIndex, onGetNextPage } = props;

  let touchStart = null;
  let touchPosition = null;

  const checkActionMove = () => {
    var distance = touchStart - touchPosition;

    if (Math.abs(distance) > TOUCH_SENSITIVITY) {
      if (distance > 0) {
        onGetNextPage("right");
      } else {
        onGetNextPage("left");
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

  const getContentOnActivePage = () => {
    switch (currentPage) {
      case SLIDER_PAGES[0]:
        return <SlideFirst />;
      case SLIDER_PAGES[1]:
        return <SlideSecond />;
      case SLIDER_PAGES[2]:
        return <SlideThird />;
      default:
        return ``;
    }
  };

  return (
    <section
      className={`page-content__slider slider slider--${currentPage}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
    >
      <h2 className="visually-hidden">Сладер услуг</h2>
      <div className={`slider__wrapper slider__wrapper--${currentPage}`}>
        {getContentOnActivePage(currentPage)}
        {
          <IconsOfTabs
            tabs={SLIDER_PAGES}
            currentTab={currentPageIndex}
            location={`slider`}
          />
        }
      </div>
    </section>
  );
};

Slider.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Slider;
