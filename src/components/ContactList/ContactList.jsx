import React from 'react';
import ContactItem from './ContactItem';
import BounceLoader from 'react-spinners/BounceLoader';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactApi';
import { ContactListCss } from './ContactList.styled';

const ContactList = () => {
  const { data, isFetching } = useGetContactsQuery();
  const filterValue = useSelector(state => state.filter.value);
  const filteredContacts = data?.filter(({ name }) =>
    name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ContactListCss>
      {isFetching && !data && <BounceLoader color="orange" />}

      {filteredContacts &&
        filteredContacts.map(contact => {
          return <ContactItem key={contact.id} contact={contact}></ContactItem>;
        })}
    </ContactListCss>
  );
};

export default ContactList;
