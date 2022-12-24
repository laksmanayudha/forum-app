import React from 'react';
import { FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  FormSubmit,
  Input,
  Textarea,
} from '../components/Form';
import '../styles/pages/create-thread-page.css';

function CreateThreadPage() {
  const navigate = useNavigate();
  return (
    <section className="create-page">
      <div className="create-page-background">
        <div className="create-input-container">
          <div className="close-input">
            <button type="button" onClick={() => navigate('../')}>
              <FiX />
            </button>
          </div>
          <div className="create-input">
            <Form>
              <Input type="text" placeholder="Thread Title" />
              <Input type="text" placeholder="Thread Category" />
              <Textarea placeholder="Thread Body" />
              <FormSubmit label="Create" />
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateThreadPage;
