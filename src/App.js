import React from 'react';
import {Provider} from 'react-redux'
import { store } from './store/store';
import TodoUI from './TodoUI';

function App() {
  return (
    <div>
        <Provider store={store}>
          <TodoUI/>
        </Provider>
    </div>
  );
}
export default App;
