import React from 'react';
import ContactItem from './ContactItem';
import { MdDeleteForever } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactSlice';
import { ContactListCss, DeleteContactBtn } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const text = useSelector(state => state.filter.filter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(text.toLowerCase())
  );

  const dispatch = useDispatch();
  return (
    <ContactListCss>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id} name={name} number={number}>
            <DeleteContactBtn
              type="button"
              onClick={() => dispatch(removeContact({ id }))}
            >
              Delete <MdDeleteForever color="#f69d3c" size={22} />
            </DeleteContactBtn>
          </ContactItem>
        );
      })}
    </ContactListCss>
  );
};

export default ContactList;
