'use strict';
/** @jsx element */

import test from 'tape';
import { renderString, tree } from 'deku';
import tsml from 'tsml';
import TabControl from './index';
import element from 'magic-virtual-element';

test('tab control 3 tabs', function (t) {
  const items = [
    { text: 'Tab 1', content: <div>Tab 1 content</div> },
    { text: 'Tab 2', content: <div>Tab 2 content</div> },
    { text: 'Tab 3', content: <div>Tab 3 content</div> }
  ];

  const html = renderString(tree(
    <TabControl items={items} />
  ));

  t.equal(html, tsml`
    <div class="tab-control">
      <div class="tab-control__tab-buttons">
        <div class="tab-control__tab-button tab-control__tab-button__active">Tab 1</div>
        <div class="tab-control__tab-button">Tab 2</div>
        <div class="tab-control__tab-button">Tab 3</div>
      </div>
      <div class="tab-control__tab-panels">
        <div class="tab-control__tab-panel tab-control__tab-panel__active"><div>Tab 1 content</div></div>
        <div class="tab-control__tab-panel"><div>Tab 2 content</div></div>
        <div class="tab-control__tab-panel"><div>Tab 3 content</div></div>
      </div>
    </div>
  `);

  t.end();
});

test('tab control 1 tab', function (t) {
  const items = [
    { text: 'Tab 1', content: <div>Tab 1 content</div> }
  ];

  const html = renderString(tree(
    <TabControl items={items} />
  ));

  t.equal(html, tsml`
    <div class="tab-control">
      <div class="tab-control__tab-buttons">
        <div class="tab-control__tab-button tab-control__tab-button__active">Tab 1</div>
      </div>
      <div class="tab-control__tab-panels">
        <div class="tab-control__tab-panel tab-control__tab-panel__active"><div>Tab 1 content</div></div>
      </div>
    </div>
  `);

  t.end();
});

test('tab control 0 tabs', function (t) {
  const items = [];

  const html = renderString(tree(
    <TabControl items={items} />
  ));

  t.equal(html, tsml`
    <div class="tab-control">
      <div class="tab-control__tab-buttons"></div>
      <div class="tab-control__tab-panels"></div>
    </div>
  `);

  t.end();
});
