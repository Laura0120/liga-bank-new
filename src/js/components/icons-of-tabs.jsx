import React from "react";
import PropTypes from "prop-types";

const IconsOfTabs = (props) => {
  const { tabs, currentTab, location } = props;

  return (
    <div className={`icons-of-tabs icons-of-tabs--${location}`}>
      {tabs.map((tab, index) => (
        <div
          className={`icons-of-tabs__item  ${
            currentTab === index ? `icons-of-tabs__item--active` : ``
          }`}
          key={index}
        ></div>
      ))}
    </div>
  );
};

IconsOfTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  currentTab: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default IconsOfTabs;
