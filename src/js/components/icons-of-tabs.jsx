import React from "react";

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

export default IconsOfTabs;
