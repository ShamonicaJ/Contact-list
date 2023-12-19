/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
        console.log("Contact: ", data);
      } catch (error) {
        console.error(error);
      }
    }

    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div className="selected-contact">
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Website: {contact.website}</p>
      <p>Company: {contact.company.name}</p>
      <p>Catch Phrase: {contact.company.catchPhrase}</p>
      <button onClick={() => setSelectedContactId(null)}>Back to List</button>
    </div>
  );
}