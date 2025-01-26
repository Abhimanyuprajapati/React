import React, { useState } from 'react';

const SearchContact = ({ contacts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredContacts = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(term) ||
        contact.mobile.includes(term) ||
        contact.email.toLowerCase().includes(term)
    );
    setSearchResults(filteredContacts);
  };

  return (
    <div>
      <h2>Search Contact</h2>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />
      {searchResults.map((contact) => (
        <div key={contact.id}>
          <span>{contact.name}</span>
          <span>{contact.mobile}</span>
          <span>{contact.email}</span>
        </div>
      ))}
    </div>
  );
};

export default SearchContact;