import { ContactsItem } from './ContactsItem';

export const ContactsList = ({ contacts, handlerDelete }) => (
  <section title="Contacts">
    <h2>Contacts</h2>
    <ul className="contacts__list">
      <ContactsItem contacts={contacts} handlerDelete={handlerDelete} />
    </ul>
  </section>
);
