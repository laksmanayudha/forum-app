import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
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
  const { authUser } = useSelector((states) => states);
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogin = (e) => {
    e.preventDefault();
    dispatch(asyncSetAuthUser({ email, password }))
      .then(({ error }) => {
        if (!error) {
          navigate('/');
        }
      });
  };

  if (authUser) return <Navigate to="/" />;

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
              <Input type="email" placeholder="Your Email" onChange={setEmail} value={email} />
              <Input type="password" placeholder="Your Password" onChange={setPassword} value={password} />
              <FormSubmit label="Login" />
            </Form>
            <p className="dont-have-account">
              Don&lsquo;t have an account?
              <Link to="/register">
                <span className="to-register"> register</span>
              </Link>
            </p>
          </FormContainer>
        </article>
      </aside>
    </section>
  );
}

export default LoginPage;
