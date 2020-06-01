import React, { useState } from 'react';
import { RiPushpinLine } from 'react-icons/ri';

import { CardContainer } from '../CardContainer';

import { Form, DateInput, Pin, TitleInput, TextArea } from './styles';

const AddNoteForm: React.FC = () => {
  const [date, setDate] = useState('');
  const [pinned, setPinned] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  console.log(date, title, body);

  return (
    <CardContainer>
      <Form>
        <header>
          <DateInput
            type="text"
            placeholder="6.01.19"
            onBlur={({ target: { value } }): void => setDate(value)}
          />

          <Pin pinned={pinned} onClick={(): void => setPinned(!pinned)}>
            <RiPushpinLine />
          </Pin>
        </header>

        <TitleInput
          type="text"
          placeholder=""
          onBlur={({ target: { value } }): void => setTitle(value)}
        />

        <TextArea
          placeholder="Once upon a time..."
          onBlur={({ target: { value } }): void => setBody(value)}
        />
      </Form>
    </CardContainer>
  );
};

export default AddNoteForm;
