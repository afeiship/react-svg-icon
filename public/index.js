import ReactSvgIcon from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import 'phoenix-icons';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      // copy value from iconfont: https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=YOURPROJECT_ID
      <div className="app-container">
        <ReactSvgIcon value="iconPaaS_test" />
        <ReactSvgIcon value="iconPaaS_search" />
        <ReactSvgIcon value="iconPaaS_sort" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
