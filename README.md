# react-svg-icon
> Svg icon for react.

## installation
```shell
npm install -S @feizheng/react-svg-icon
```

## update
```shell
npm update @feizheng/react-svg-icon
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| iconClass | string | 'icon'  | The main(prefix) icon class.          |
| value     | string | -       | The icon name.                        |
| size      | number | -       | The icon size(font-size).             |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-svg-icon/dist/style.scss";

  // customize your styles:
  $react-svg-icon-options: ()
  ```
2. import js
  ```js
  import ReactSvgIcon from '@feizheng/react-svg-icon';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import 'phoenix-icons';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        // copy value from iconfont:
        // https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=YOURPROJECT_ID
        <div className="app-container">
          <div className="is-item">
            <ReactSvgIcon value="iconPaaS_test" />
            <ReactSvgIcon value="iconPaaS_search" />
            <ReactSvgIcon value="iconPaaS_sort" />
          </div>

          <div className="is-item">
            <ReactSvgIcon value="iconPaaS_ruler" size="20" />
            <ReactSvgIcon value="iconG_zhenduan" size="40" />
            <ReactSvgIcon value="iconG_data" size="50" />
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-svg-icon/
