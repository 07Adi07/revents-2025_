import { Button, Form, Header, Segment } from "semantic-ui-react";

type Props = {
  setFormOpen: (value: boolean) => void;
};

export default function EventForm({ setFormOpen }: Props) {
  return (
    <Segment clearing>
      <Header content='Create Event' />
      <Form.Field>
        <input type='text' placeholder='Event title' />
        <input type='text' placeholder='Category' />
        <input type='text' placeholder='Description' />
        <input type='text' placeholder='City' />
        <input type='text' placeholder='Venue' />
        <input type='text' placeholder='Date' />
      </Form.Field>

      <Button type='submit' floated='right' positive content='Submit' />
      <Button
        onClick={() => setFormOpen(false)}
        type='button'
        floated='right'
        content='Cancel'
      />
    </Segment>
  );
}
