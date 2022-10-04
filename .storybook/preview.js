import '../src/styles/index.css'
import { Provider } from 'react-redux';
import { store } from '../src/store/index';





export const decorators = [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ];