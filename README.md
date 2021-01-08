[![Build Status](https://travis-ci.com/eBay/skin-react.svg?branch=master)](https://travis-ci.com/eBay/skin-react)
# skin-react
> [Skin](https://github.com/eBay/skin) components built with React (Typescript).
https://github.com/eBay/skin

### Components
* [x] [Actionable](src/Actionable/.)
* [x] [alert-dialog](src/.)
* [x] [badge](src/.)
* [x] [breadcrumbs](src/.)
* [x] [button](src/.)
* [ ] [carousel](src/.)
* [x] [checkbox](src/.)
* [ ] [combobox-readonly](src/.)
* [ ] [combobox](src/.)
* [x] [confirm-dialog](src/.)
* [x] [cta-button](src/.)
* [x] [details](src/.)
* [x] [dialog](src/.)
* [x] [drawer-dialog](src/.)
* [x] [drawer](src/.)
* [ ] [expand-button](src/.)
* [ ] [fake-menu-button](src/.)
* [ ] [fake-menu](src/.)
* [ ] [fake-tabs](src/.)
* [ ] [filter-menu-button](src/.)
* [ ] [filter-menu](src/.)
* [ ] [filter](src/.)
* [x] [fullscreen-dialog](src/.)
* [x] [icon](src/.)
* [ ] [infotip](src/.)
* [x] [inline-notice](src/.)
* [ ] [legacy-floating-textbox](src/.)
* [x] [lightbox-dialog](src/.)
* [ ] [listbox-button](src/.)
* [ ] [listbox](src/.)
* [ ] [menu-button](src/.)
* [ ] [menu](src/.)
* [x] [notice](src/.)
* [x] [page-notice](src/.)
* [x] [pagination](src/.)
* [x] [panel-dialog](src/.)
* [x] [progress-spinner](src/.)
* [x] [radio](src/.)
* [x] [section-notice](src/.)
* [x] [section-title](src/.)
* [ ] [select](src/.)
* [x] [stepper](src/.)
* [x] [switch](src/.)
* [x] [tabs](src/.)
* [x] [textbox](src/.)
* [x] [toast-dialog](src/.)
* [x] [toast](src/.)
* [ ] [tooltip](src/.)
* [ ] [tourtip](src/.)
* [x] [window-notice](src/.)

## Install
```sh
$ yarn add skin-react
$ yarn add @ebay/skin
```

### Why
skin-react eases the use of the original skin for developers who are more conversant with Rx style programming by condensing it into React-styled components. 

### html skin #
```javascript

<button class="btn btn--primary">
    <span class="btn__cell">
        <svg aria-hidden="true" focusable="false" class="icon icon--menu btn__icon">
          <use xlink:href="#icon-menu"></use>
        </svg>
        <span>Button</span>
    </span>
</button>

```
### skin-react
```javascript
import * as React from 'react';
import {Button, BtnCell, Icon} from 'skin-react';

function Example() {
  return (
    <Button btnColor="primary" >
        <BtnCell>
          <Icon className="btn__icon" iconType="menu" />
          <span>Button</span>
        </BtnCell>
    </Button>
  )
}
```

## Usage
```javascript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Spinner } from 'skin-react';

ReactDOM.render(
    <div>
      <Spinner />
    </div>,
  document.getElementById('root')
);
```
### Stylesheets
stylesheet is required to use these components.
```javascript
    //The following line can be included in your root .js/ts file
    import '@ebay/skin/dist/spinner/ds6/spinner.css';
```

## Accessibility (A11Y)

We take accessibility very seriously. Very seriously indeed. Therefore all modules are built in accordance to the <a href="https://ebay.gitbooks.io/mindpatterns/content/">eBay MIND Patterns</a>. These patterns, in turn, build on from the specifications provided by the <a href="https://w3c.github.io/aria-practices/">WAI-ARIA Authoring Practices</a>.

## Issues
Please use our [issues page](#) to ask questions, report issues or submit feature requests.
To help track your issue, the team will assign it with a label from one or more issue categories.

## Developing &amp; Contributing

Interested in contributing? Head over to our [contributing guide](CONTRIBUTING.md) for information on how to get started.

Contributions don't have to be code! They can be ideas, inspiration, discussion or filing bugs!

### License
Copyright 2019 eBay Inc.
Developers: Arturo Montoya, Jake Hall

Use of this source code is governed by an MIT-style license that can be found in the LICENSE file or at https://opensource.org/licenses/MIT.
