# deku-tab-control

Simple tab control component for [deku](https://github.com/dekujs/deku).

## Usage

```shell
npm install deku-tab-control
```

```js
import element from 'magic-virtual-element';
import { connect } from 'deku-redux';
import TabControl from 'deku-tab-control';

const initialState = {
  activeTabIndex: 0
};

const reducers = {
  change: (state, {value}) => {
    state = Object.assign({}, state, {activeTabIndex: value});
    return state;
  }
};

export function reducer (state = initialState, action) {
  if (action.type && reducers[action.type]) {
    return reducers[action.type](state, action);
  }
  return state;
}

function render ({props: {activeTabIndex, dispatch}}) {
  const items = [
    { text: 'Tab #1', content: <div>Tab #1 content</div> },
    { text: 'Tab #2', content: <div>Tab #2 content</div> }
  ];

  return (
    <TabControl activeTabIndex={activeTabIndex} items={items} onChange={onChange} />
  );

  function onChange ({clickedIndex}) {
    dispatch({
      type: 'change',
      value: clickedIndex
    });
  }
}

export const Component = connect(state => state)({ render });
```

### Attributes

#### activeTabIndex
Set initial active tab index

### removeOnHide
If set to true, only the active tab content will be rendered. Defaults to show/hide with css.
