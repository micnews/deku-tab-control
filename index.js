'use strict';
/** @jsx element */

import element from 'magic-virtual-element';

export default { render };

export function render ({ props }) {
  const { items, onChange, removeOnHide } = props;
  let { activeTabIndex = 0 } = props;

  const buttons = items.map(({ text }, index) => {
    const onClick = () => {
      if (onChange) {
        onChange({ clickedIndex: index });
      }
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
    <div class={['tab-control', props.class]}>
      <div class='tab-control__tab-buttons'>
        {buttons}
      </div>
      <div class='tab-control__tab-panels'>
        {panels}
      </div>
    </div>
  );
}
