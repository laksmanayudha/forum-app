import React from 'react';
import {
  FormContainer,
  FormSubmit,
  Form,
  Input,
} from '../components/Form';
import '../styles/pages/login-register-page.css';

function RegisterPage() {
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
            <Form>
              <Input type="text" placeholder="Your Name" />
              <Input type="text" placeholder="Your Email" />
              <Input type="password" placeholder="Your Password" />
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
