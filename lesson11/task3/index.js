const sortContacts = (contacts, isAsc) => {
  const result = contacts.soft((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return result;
};
console.log(sortContacts(contacts));
