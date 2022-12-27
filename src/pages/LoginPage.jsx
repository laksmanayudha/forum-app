import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  FormContainer,
  FormSubmit,
  Form,
  Input,
} from '../components/Form';
import '../styles/pages/login-register-page.css';
import useInput from '../hooks/useInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogin = (e) => {
    e.preventDefault();
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };
  return (
    <section className="login-page page">
      <div className="login-page__hero">
        <div className="logo">
          <h1>FA</h1>
        </div>
      </div>
      <aside className="login-page__main">
        <article>
          <header className="headbar">
            <h2 className="headbar__title">Forum App</h2>
            <p className="headbar__subtitle">Let&lsquo;s discuss what you are thinking right now.</p>
          </header>
          <FormContainer>
            <Form onSubmit={onLogin}>
              <Input type="text" placeholder="Your Email" onChange={setEmail} />
              <Input type="password" placeholder="Your Password" onChange={setPassword} />
              <FormSubmit label="Login" />
            </Form>
            <p className="dont-have-account">
              Don&lsquo;t have an account?
              <span className="to-register"> register</span>
            </p>
          </FormContainer>
        </article>
      </aside>
    </section>
  );
}

export default LoginPage;
