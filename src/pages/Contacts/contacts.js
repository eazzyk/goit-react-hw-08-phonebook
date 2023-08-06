import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useContacts } from 'hooks/useContacts';
import Form from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Loader } from 'components/Loader/Loader';
import css from './contacts.module.css';

export default function Contacts() {
  const { contacts, fetchContacts } = useContacts();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <div className={css.contacts}>
      <h1 className={css.contacts_title}>Your phonebook</h1>
      <Form />
      {isLoading && !error && <Loader />}
      {contacts.length >= 1 && <Filter />}
      {contacts.length > 0 ? <ContactList /> : <p>Your phonebook is empty. Please add contact.</p>}
    </div>
  );
}
