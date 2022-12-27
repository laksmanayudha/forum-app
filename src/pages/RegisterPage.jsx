import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  FormContainer,
  FormSubmit,
  Form,
  Input,
} from '../components/Form';
import useInput from '../hooks/useInput';
import { asyncRegisterUser } from '../states/users/action';
import '../styles/pages/login-register-page.css';

function RegisterPage() {
  const [email, setEmail] = useInput();
  const [name, setName] = useInput();
  const [password, setPassword] = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onRegister = (e) => {
    e.preventDefault();
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/login');
  };
  return (
    <section className="register-page page">
      <div className="register-page__hero">
        <div className="logo">
          <h1>FA</h1>
        </div>
      </div>
      <aside className="register-page__main">
        <article>
          <header className="headbar">
            <h2 className="headbar__title">Forum App</h2>
            <p className="headbar__subtitle">Let&lsquo;s discuss what you are thinking right now.</p>
          </header>
          <FormContainer>
            <Form onSubmit={onRegister}>
              <Input type="text" placeholder="Your Name" onChange={setName} />
              <Input type="text" placeholder="Your Email" onChange={setEmail} />
              <Input type="password" placeholder="Your Password" onChange={setPassword} />
              <FormSubmit label="Register" />
            </Form>
            <p className="already-have-account">
              Already have an account?
              <span className="to-login"> login</span>
            </p>
          </FormContainer>
        </article>
      </aside>
    </section>
  );
}

export default RegisterPage;
