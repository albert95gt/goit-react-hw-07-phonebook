import { useState } from 'react';
import { MdPersonAddAlt1 } from 'react-icons/md';
// import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contactApi';
import { Form, Label, Input, SubmitBtn } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data } = useGetContactsQuery();
  const [addContact] = useCreateContactMutation();

  const handdleChange = event => {
    const name = event.currentTarget.name;
    const inputValue = event.target.value;

    switch (name) {
      case 'name':
        setName(inputValue);
        break;
      case 'number':
        setPhone(inputValue);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const searchContact = await data.some(contact => {
      return contact.name.toLowerCase().includes(name.toLowerCase());
    });
    if (searchContact) {
      toast.error(`${name} is alredy in contacts!!!`);
      return;
    }

    await addContact({ name, phone });
    toast.success(`${name} has added to contacts list`);
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handdleChange}
      />
      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        value={phone}
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handdleChange}
      />
      <SubmitBtn type="submit">
        Add contact
        <MdPersonAddAlt1 color="#f69d3c" size={22} />
      </SubmitBtn>
    </Form>
  );
};

export default ContactForm;
