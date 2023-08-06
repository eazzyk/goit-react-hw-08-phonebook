import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter, getFilteredContact } from 'redux/selectors';
import { useCallback } from 'react';
import * as contactsOperations from 'redux/contacts/contactOperations';
import * as filterActions from 'redux/filter/filterSlice';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(getFilteredContact);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const fetchContacts = useCallback(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const addContact = newContact => {
    dispatch(contactsOperations.addContact(newContact));
  };

  const removeContact = id => {
    dispatch(contactsOperations.removeContact(id));
  };

  const setFilter = filter => {
    dispatch(filterActions.setFilter(filter));
  };

  return {
    filter,
    contacts,
    filteredContacts,
    addContact,
    setFilter,
    removeContact,
    fetchContacts,
  };
};
