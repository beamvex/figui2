import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createMemoryHistory } from 'history';
import routes from './routes';
import configureStore from './store';
import footballActions from './actions/footballers';
import playerService from './engine/playerService';

const syncHistoryWithStore = (store, history) => {
  const { router } = store.getState();
  if (router && router.location) {
    history.replace(router.location);
  }
};

const initialState = {};
const routerHistory = createMemoryHistory();
const store = configureStore(initialState, routerHistory);
syncHistoryWithStore(store, routerHistory);

class App extends Component {
  componentDidMount() {
    playerService.getPlayers().then(result => {
    this.props.onLoadData(
      result
    )});
  }

  render() {
    return (
    <ConnectedRouter history={routerHistory}>{routes}</ConnectedRouter>
  );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  const football = bindActionCreators(footballActions, dispatch);
  return {
    onLoadData: (data) => {
      football.loadData(data);
    },
  };
};

let ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

ReactDOM.render(<Provider store={store}>
    <ConnectedApp/>
  </Provider>,
  rootElement,
);
