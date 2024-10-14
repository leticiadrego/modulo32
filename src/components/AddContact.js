import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store';
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

function AddContact() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const dispatch = useDispatch();

const handlePhoneChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/; 
    if (value === '' || regex.test(value)) {
    setPhone(value);
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ id: Date.now(), name, email, phone }));
    setName('');
    setEmail('');
    setPhone('');
};

return (
    <Form onSubmit={handleSubmit}>
    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome completo" required />
    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
    <Input type="tel" value={phone} onChange={handlePhoneChange} placeholder="Telefone" required />
    <Button type="submit">Adicionar Contato</Button>
    </Form>
);
}

export default AddContact;


