import React, { useState, useEffect } from 'react';
import ContactItem from './ContactItem';
import { toast } from 'react-toastify';
import BounceLoader from 'react-spinners/BounceLoader';
import { MdDeleteForever } from 'react-icons/md';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactApi';
import { ContactListCss, DeleteContactBtn } from './ContactList.styled';

const ContactList = () => {
  const { data, isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const [filteredContacts, setFilteredContacts] = useState([]);
  const text = useSelector(state => state.filter.filter);

  useEffect(() => {
    if (!data) {
      return;
    }
    const getFilteredContacts = async () => {
      try {
        const contacts = await data.filter(({ name }) =>
          name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredContacts(contacts);
      } catch (error) {
        console.log(error.message);
      }
    };
    getFilteredContacts();
  }, [data, text]);

  const handleDeleteContact = (id, name) => {
    deleteContact(id);
    toast.success(`Contact ${name} successfully deleted!`);
  };

  return (
    <ContactListCss>
      {isFetching && !data && <BounceLoader color="orange" />}

      {filteredContacts &&
        filteredContacts.map(({ id, name, phone }) => {
          return (
            <ContactItem key={id} name={name} number={phone}>
              <DeleteContactBtn
                type="button"
                onClick={() => handleDeleteContact(id, name)}
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
