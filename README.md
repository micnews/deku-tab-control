# deku-tab-control

Simple tab control component for [deku](https://github.com/dekujs/deku).

## Usage

```shell
npm install deku-tab-control
```

```js
import TabControl from 'deku-tab-control';

export function render () {
  const items = [
    { text: 'Tab 1', content: <div>Tab 1 content</div> },
    { text: 'Tab 2', content: <div>Tab 2 content</div> },
    { text: 'Tab 3', content: <div>Tab 3 content</div> }
  ];
  // optional onChange event
  const onChange = ({ clickedIndex }) => {
    console.log(`you clicked index ${clickedIndex}`)
  };

  return <TabControl activeTabIndex={0} items={items} onChange={onChange} removeOnHide={true} />;
}

```

### Attributes

#### activeTabIndex
Set initial active tab index

### removeOnHide
If set to true, only the active tab content will be rendered. Defaults to show/hide with css.
