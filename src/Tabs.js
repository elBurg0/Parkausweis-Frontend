import React, { useState } from "react";

const Tab = (props) => {
  const [activeTab, setActiveTab] = useState(props.defaultActiveTab);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div>
        {props.tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={activeTab === tab.id ? "active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {props.tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? "visible" : "hidden"}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

Tab.defaultProps = {
  defaultActiveTab: 1,
};

export default Tab;
