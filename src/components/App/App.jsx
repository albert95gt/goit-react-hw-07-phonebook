import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Wrapper, PageTitle, ContactsTitle } from './App.styled';

const App = () => {
  return (
    <Wrapper>
      <PageTitle>Phonebook</PageTitle>
      <ToastContainer theme="colored" />
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>

      <Filter />

      <ContactList />
    </Wrapper>
  );
};

export default App;
