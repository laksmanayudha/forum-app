import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, Navigate } from 'react-router-dom';
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
  const { authUser } = useSelector((states) => states);
  const [email, setEmail] = useInput();
  const [name, setName] = useInput();
  const [password, setPassword] = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onRegister = (e) => {
    e.preventDefault();
    dispatch(asyncRegisterUser({ name, email, password }))
      .then(({ error }) => {
        if (!error) {
          navigate('/login');
        }
      });
  };

  if (authUser) return <Navigate to="/" />;

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
              <Input type="text" placeholder="Your Name" onChange={setName} value={name} />
              <Input type="email" placeholder="Your Email" onChange={setEmail} value={email} />
              <Input type="password" placeholder="Your Password" onChange={setPassword} value={password} />
              <FormSubmit label="Register" />
            </Form>
            <p className="already-have-account">
              Already have an account?
              <Link to="/login">
                <span className="to-login"> login</span>
              </Link>
            </p>
          </FormContainer>
        </article>
      </aside>
    </section>
  );
}

export default RegisterPage;
