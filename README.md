# react-svg-icon
> Svg icon for react.

## installation
```shell
npm install -S @feizheng/react-svg-icon
```
## properties
| property  | type | description |
| --------- | ---- | ----------- |
| className | -    | -           |
| iconClass | -    | -           |
| value     | -    | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-svg-icon/dist/style.scss";

  // customize your styles:
  $react-svg-icon-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactSvgIcon from '@feizheng/react-svg-icon';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactSvgIcon value="search-v1"/>
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-svg-icon/
