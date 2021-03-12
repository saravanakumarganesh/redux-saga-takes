import Card from './components/card/card.component';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';

const App = (props) => {
  const { value, increment, decrement } = props;
  return (
    <div className='App'>
      <Card>
        {value}
        <button onClick={increment}> Add 1</button>
        <button onClick={decrement}> Minus 1</button>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.app.value,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
