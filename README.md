# react-svg-icon
> Svg icon for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-svg-icon
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| iconClass | string | false    | 'icon'  | The main(prefix) icon class.          |
| value     | string | false    | -       | The icon name.                        |
| size      | union  | false    | -       | The icon size(font-size).             |


## usage
1. import css
  ```scss
  @import "~@jswork/react-svg-icon/dist/style.css";

  // or use sass
  @import "~@jswork/react-svg-icon/dist/style.scss";

  // customize your styles:
  $react-svg-icon-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactSvgIcon from '@jswork/react-svg-icon';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-svg-icon">
          <div className="is-item">
            <ReactSvgIcon value="iconPaaS_test" />
            <ReactSvgIcon value="iconTPA-icon_huaban1" />
            <ReactSvgIcon value="iconTPA-icon_huaban1fuben17" />
          </div>

          <div className="is-item">
            <ReactSvgIcon value="icondiag_file_blue-74" size="20" />
            <ReactSvgIcon value="icondiag_parallel" size="40" />
            <ReactSvgIcon value="iconPaaS_group" size="50" />
          </div>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-svg-icon/


## license
Code released under [the MIT license](https://github.com/afeiship/react-svg-icon/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-svg-icon
[version-url]: https://npmjs.org/package/@jswork/react-svg-icon

[license-image]: https://img.shields.io/npm/l/@jswork/react-svg-icon
[license-url]: https://github.com/afeiship/react-svg-icon/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-svg-icon
[size-url]: https://github.com/afeiship/react-svg-icon/blob/master/dist/react-svg-icon.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-svg-icon
[download-url]: https://www.npmjs.com/package/@jswork/react-svg-icon
