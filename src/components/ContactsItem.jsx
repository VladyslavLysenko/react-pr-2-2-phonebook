export const ContactsItem = ({ contacts }) => (
  <>
    {contacts.map(item => (
      <li key={item.id}>
        {item.name} : {item.number}
      </li>
    ))}
  </>
);
