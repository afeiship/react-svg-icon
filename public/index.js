import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSvgIcon from '../src/main';
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
