import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../store';
import styled from 'styled-components';

const Form = styled.form`
background: #fff;
padding: 20px;
border-radius: 5px;
margin-bottom: 20px;
`;

const Input = styled.input`
margin: 5px 0;
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
width: 100%;
`;

const Button = styled.button`
background: #4CAF50;
border: none;
color: white;
padding: 10px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 5px 0;
cursor: pointer;
border-radius: 5px;
`;

function EditContact({ contact, onClose }) {
const [name, setName] = useState(contact ? contact.name : '');
const [email, setEmail] = useState(contact ? contact.email : '');
const [phone, setPhone] = useState(contact ? contact.phone : '');
const dispatch = useDispatch();

useEffect(() => {
    if (contact) {
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
    }
}, [contact]);

const handlePhoneChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/;
    if (value === '' || regex.test(value)) {
    setPhone(value);
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (contact) {
    dispatch(editContact({ ...contact, name, email, phone }));
    onClose();
    }
};

if (!contact) {
    return null;
}

return (
    <Form onSubmit={handleSubmit}>
    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome completo" required />
    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
    <Input type="tel" value={phone} onChange={handlePhoneChange} placeholder="Telefone" required />
    <Button type="submit">Salvar</Button>
    </Form>
);
}

export default EditContact;
