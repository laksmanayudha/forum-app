import React from 'react';
import { FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  Form,
  FormSubmit,
  Input,
  Textarea,
} from '../components/Form';
import useInput from '../hooks/useInput';
import { asyncAddThread } from '../states/threads/action';
import '../styles/pages/create-thread-page.css';

function CreateThreadPage() {
  const { authUser } = useSelector((states) => states);
  const [title, setTitle] = useInput();
  const [body, setBody] = useInput();
  const [category, setCategory] = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  if (!authUser) return <Navigate to="/login" />;

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
            <Form onSubmit={onSubmit}>
              <Input type="text" placeholder="Thread Title" onChange={setTitle} value={title} />
              <Input type="text" placeholder="Thread Category" onChange={setCategory} value={category} />
              <Textarea placeholder="Thread Body" onInput={setBody} />
              <FormSubmit label="Create" />
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateThreadPage;
