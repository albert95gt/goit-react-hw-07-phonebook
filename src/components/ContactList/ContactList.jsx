import React from 'react';
import ContactItem from './ContactItem';
import { MdDeleteForever } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
// import { removeContact } from '../../redux/contactApi';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactApi';
import { ContactListCss, DeleteContactBtn } from './ContactList.styled';

const ContactList = () => {
  const { data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  // const text = useSelector(state => state.filter.filter);
  // const filteredContacts = data.filter(({ name }) =>
  //   name.toLowerCase().includes(text.toLowerCase())
  // );

  // const dispatch = useDispatch();

  return (
    <ContactListCss>
      {data &&
        data.map(({ id, name, phone }) => {
          return (
            <ContactItem key={id} name={name} number={phone}>
              <DeleteContactBtn type="button" onClick={() => deleteContact(id)}>
                Delete <MdDeleteForever color="#f69d3c" size={22} />
              </DeleteContactBtn>
            </ContactItem>
          );
        })}
    </ContactListCss>
  );
};

export default ContactList;
