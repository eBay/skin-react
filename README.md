[![Build Status](https://travis-ci.com/eBay/skin-react.svg?branch=master)](https://travis-ci.com/eBay/skin-react)
# skin-react
> [Skin](https://github.com/eBay/skin) components built with React (Typescript).
https://github.com/eBay/skin

### Components
* [x] [Actionable](src/Actionable/.)
* [x] [alert-dialog](src/Dialog/.)
* [x] [badge](src/Badge/.)
* [x] [breadcrumbs](src/Breadcrumb/.)
* [x] [button](src/Button/.)
* [ ] [carousel](src/.)
* [x] [checkbox](src/Checkbox/.)
* [ ] [combobox-readonly](src/.)
* [ ] [combobox](src/.)
* [x] [confirm-dialog](src/Dialog/.)
* [x] [cta-button](src/CtaButton/.)
* [x] [details](src/Details/.)
* [x] [dialog](src/Dialog/.)
* [x] [drawer-dialog](src/Drawer/.)
* [ ] [expand-button](src/.)(in Progress)
* [ ] [fake-menu-button](src/.)
* [ ] [fake-menu](src/.)
* [ ] [fake-tabs](src/.)
* [ ] [filter-menu-button](src/.)
* [ ] [filter-menu](src/.)
* [ ] [filter](src/.)
* [x] [fullscreen-dialog](src/Dialog/components/fullscreen.tsx)
* [x] [icon](src/Icon/.)
* [ ] [infotip](src/.)(in Progress)
* [x] [inline-notice](src/Notice/.)
* [ ] [legacy-floating-textbox](src/.)
* [x] [lightbox-dialog](src/Dialog/components/lightbox.tsx)
* [ ] [listbox-button](src/.)(in Progress)
* [ ] [listbox](src/.)
* [ ] [menu-button](src/.)
* [ ] [menu](src/.)
* [x] [notice](src/Notice/.)
* [x] [page-notice](src/Notice/.)
* [x] [pagination](src/Pagination/.)
* [x] [panel-dialog](src/Dialog/components/panel.tsx)
* [x] [progress-spinner](src/Spinner/.)
* [x] [radio](src/Radio/.)
* [x] [section-notice](src/Notice/.)
* [x] [section-title](src/SectionTitle/.)
* [x] [select](src/Select/.)
* [x] [stepper](src/Stepper/.)
* [x] [switch](src/Switch/.)
* [x] [tabs](src/Tab/.)
* [x] [textbox](src/Textbox/.)
* [x] [toast-dialog](src/Toast/.)
* [ ] [tooltip](src/.)(in Progress)
* [ ] [tourtip](src/.)(in Progress)
* [x] [window-notice](src/Notice/.)

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
