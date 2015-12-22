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

  return <TabControl active-tab-index={0} items={items} onChange={onChange} />;
}

```

### Attributes

#### active-tab-index
Set initial active tab index
