import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../store';
import EditContact from './EditContact';
import styled from 'styled-components';

const ListItem = styled.li`
list-style: none;
background: #fff;
padding: 10px;
margin: 5px 0;
border-radius: 5px;
display: flex;
justify-content: space-between;
`;

const Button = styled.button`
background: #ff6b6b;
border: none;
color: #fff;
padding: 5px 10px;
cursor: pointer;
border-radius: 5px;
`;

function ContactList() {
const contacts = useSelector(state => state.contacts);
const dispatch = useDispatch();
const [editingContact, setEditingContact] = useState(null);

return (
    <div>
    <ul>
        {contacts.map(contact => (
        <ListItem key={contact.id}>
            <span>{contact.name} - {contact.email} - {contact.phone}</span>
            <Button onClick={() => setEditingContact(contact)}>Editar</Button>
            <Button onClick={() => dispatch(removeContact(contact.id))}>Remover</Button>
        </ListItem>
        ))}
    </ul>
    {editingContact && (
        <EditContact contact={editingContact} onClose={() => setEditingContact(null)} />
    )}
    </div>
);
}

export default ContactList;
