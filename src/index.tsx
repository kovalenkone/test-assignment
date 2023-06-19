import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <BrowserRouter >
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>
);
