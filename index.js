'use strict';
/** @jsx element */

import element from 'magic-virtual-element';

export function initialState (props) {
  return {
    activeTabIndex: props['active-tab-index'] || 0
  };
}

export function render ({ props, state }, setState) {
  const { items } = props;
  const { activeTabIndex } = state;

  const buttons = items.map(({ text }, index) => (
    <div class={['tab-control__tab-button', {'tab-control__tab-button__active': activeTabIndex === index}]}
      onClick={() => setState({ activeTabIndex: index })}>
      {text}
    </div>
  ));

  const panels = items.map(({ content }, index) => (
    <div class={['tab-control__tab-panel', {'tab-control__tab-panel__active': activeTabIndex === index}]}>
      {content}
    </div>
  ));

  return (
    <div class='tab-control'>
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
