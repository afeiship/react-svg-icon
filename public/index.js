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
        <div className="is-item">
          <ReactSvgIcon value="iconPaaS_test" />
          <ReactSvgIcon value="iconPaaS_search" />
          <ReactSvgIcon value="iconPaaS_sort" />
        </div>

        <div className="is-item">
          <ReactSvgIcon value="iconPaaS_ruler" size="20" />
          <ReactSvgIcon value="iconG_zhenduan" size="40"/>
          <ReactSvgIcon value="iconG_data" size="50"/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
