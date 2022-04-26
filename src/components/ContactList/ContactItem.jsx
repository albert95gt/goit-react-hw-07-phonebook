import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactApi';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';
import { MdDeleteForever } from 'react-icons/md';
import { DeleteContactBtn } from './ContactList.styled';
import { ContactItemCss, ItemDescr } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const { id, name, phone } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDeleteContact = () => {
    deleteContact(id);
    toast.success(`Contact ${name} successfully deleted!`);
  };

  return (
    <ContactItemCss>
      <ItemDescr>{name}:</ItemDescr>
      <span>{phone}</span>
      <DeleteContactBtn
        type="button"
        onClick={handleDeleteContact}
        disabled={isLoading}
      >
        Delete
        {isLoading ? (
          <ClipLoader size="20px" color="aqua" />
        ) : (
          <MdDeleteForever color="#f69d3c" size={22} />
        )}
      </DeleteContactBtn>
    </ContactItemCss>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
