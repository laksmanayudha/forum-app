import React from 'react';
import {
  FormContainer,
  FormSubmit,
  Form,
  Input,
} from '../components/Form';
import '../styles/pages/login-register-page.css';

function LoginPage() {
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
            <Form>
              <Input type="text" placeholder="Your Email" />
              <Input type="password" placeholder="Your Password" />
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
