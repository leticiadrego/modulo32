import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './styles/GlobalStyles';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';


function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AddContact />
      <ContactList />
      <EditContact />
    </Provider>
  );
}

export default App;