import React, { Component, Fragment, lazy, Suspense, StrictMode } from 'react';
import { render, createBlockingRoot } from 'react-dom';

import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

function contentLoadedCallback() {
  console.log('ReactDOM.render-ed');
}

export default function renderReactDom() {
  const root = document.querySelector('#root') as HTMLElement;
  const appJsx = (
    <Fragment>
      <StrictMode>
          <App />
      </StrictMode>
    </Fragment>
  );
  // render root element
  createBlockingRoot(root).render(appJsx);
  // Opt into Concurrent Mode.
  contentLoadedCallback();
}

renderReactDom();