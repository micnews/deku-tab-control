'use strict';
/** @jsx element */

import element from 'magic-virtual-element';

export function initialState (props) {
  return {
    activeTabIndex: props.activeTabIndex || 0
  };
}

export function render ({ props, state }, setState) {
  const { items, onChange, removeOnHide, customClass } = props;
  const { activeTabIndex } = state;

  const buttons = items.map(({ text }, index) => {
    const onClick = () => {
      if (onChange) {
        onChange({ clickedIndex: index });
      }
      setState({ activeTabIndex: index });
    };

    return (<div class={['tab-control__tab-button', {'tab-control__tab-button__active': activeTabIndex === index}]}
      onClick={onClick}>
      {text}
    </div>);
  });

  const panels = removeOnHide
    ? <div class='tab-control__tab-panel tab-control__tab-panel__active'>
          {items[activeTabIndex].content}
        </div>
    : items.map(({ content }, index) => (
    <div class={['tab-control__tab-panel', {'tab-control__tab-panel__active': activeTabIndex === index}]}>
      {content}
    </div>
  ));

  return (
    <div class={['tab-control', customClass]}>
      <div class='tab-control__tab-buttons'>
        {buttons}
      </div>
      <div class='tab-control__tab-panels'>
        {panels}
      </div>
    </div>
  );
}

export default { initialState, render };
