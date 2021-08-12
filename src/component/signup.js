import React,{useRef, useState} from 'react';
import { Form,Button,Card, Alert } from 'react-bootstrap';
import { useAuth } from '../context/Authcontext';

export default function SignUp(){
    const email=useRef();
    const password=useRef();
    const passwordconfirm=useRef();
    const {signup}=useAuth()
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)

async function handleSubmit(e){
    e.preventDefault();
if(password.current.value!==passwordconfirm.current.value){
    return setError('Password does not match')
}

try{
    setError('')
    setLoading(true)
    console.log(email.current.value)
  await  signup(email.current.value,password.current.value);
}catch{
    setError('Failed to create account')
}
setLoading(false)
    
}

    return(
    <>
<Card>
<Card.Body>
    <h2 className="text-center mb-4">Sign Up</h2>
  
    {error && <Alert variant='danger'>{error}</Alert>}
    <Form onSubmit={handleSubmit}>
        <Form.Group id='email'>
<Form.Label>Email</Form.Label>
<Form.Control type ='email' ref={email} required/>
        </Form.Group>

        <Form.Group id='password'>
<Form.Label>Password</Form.Label>
<Form.Control type ='password' ref={password} required/>
        </Form.Group>

        <Form.Group id='passwordconfirm'>
<Form.Label>Password Confirmation</Form.Label>
<Form.Control type ='password' ref={passwordconfirm} required/>
        </Form.Group>
        <Button  disabled={loading} type='submit'>SignUP</Button>
    </Form>
</Card.Body>
</Card>
<div className="w-100 text-center mt-2">
    Already have an account? Log in
</div>
    </>
        )
}