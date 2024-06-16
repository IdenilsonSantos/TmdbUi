import React, { useEffect, useState } from "react";
import "./styles.scss";

type TabOption = {
  value: number;
  label: string;
};

type TabsOptionsProps = {
  options: TabOption[];
  onChange: (tab: TabOption) => void;
  value: TabOption;
  renderTab?: (tab: TabOption, currentValue: number) => React.ReactNode;
  currentTab: TabOption;
};

type TabsProps = {
  options: TabOption[];
  defaulValue?: TabOption;
  goTo?: (value: TabOption) => void;
  children?: React.ReactNode;
};

const defaultTab = (value: TabOption) => (
  <button className="tabs__button">{value.label}</button>
);

const TabsOptions = ({
  options,
  onChange,
  renderTab = defaultTab,
  currentTab,
}: TabsOptionsProps) => {
  return (
     <div className="tabs">
    {options.map((tab) => (
      <div
        key={tab.value}
        className={`tabs__item tabs__item${tab.value}`}
        onClick={() => onChange(tab)}
      >
        {renderTab(tab, currentTab.value)}
      </div>
    ))}
  </div>
  )
};

const renderTab = (tab: TabOption, currentValue: number) => (
  <button className={`tabs__button ${currentValue === tab.value ? "active" : ""}`}>
    {tab.label}
  </button>
);

export const Tabs = ({ options, defaulValue, goTo, children }: TabsProps) => {
  const [currentTab, setCurrentTab] = useState<TabOption>(defaulValue || options[0]);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [width, setWidth] = useState(0);

  const onChangeHandler = (value: TabOption) => {
    setCurrentTab(value);
    if (typeof goTo === "function") goTo(value);
  };

  useEffect(() => {
    const tabs = document.querySelector(".tabs");
    const tab = document.querySelector(`.tabs__item${currentTab.value}`);
    const tabButton = document.querySelector(`.active`);

    if (tabs && tab && tabButton) {
      const leftTabsPosition = Math.round(tabs.getBoundingClientRect().left);
      const leftTabPosition = Math.round(tab.getBoundingClientRect().left);
      const diff = leftTabPosition - leftTabsPosition;

      console.log(tabButton?.getBoundingClientRect())

      setWidth(Math.round(tab.getBoundingClientRect().width));
      setIndicatorPosition(diff);
    }
  }, [currentTab.value]);

  return (
    <div className="tab-container">
      <TabsOptions
        options={options}
        value={currentTab}
        onChange={onChangeHandler}
        renderTab={renderTab}
        currentTab={currentTab}
      />
      <div className="slider">
        <div
          className="indicator"
          style={{ left: `${indicatorPosition}px`, width: `${width}px` }}
        ></div>
      </div>
      {children && <div className="tabs__content">{children}</div>}
    </div>
  );
};