import { Col, Form } from 'react-bootstrap';

const SearchForm = ({ params, onParamChange }) => {
  return (
    <div>
      <Form className='mb-4'>
        <Form.Row className='align-items-end'>
          <Form.Group as={Col}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={onParamChange}
              value={params.description ? params.description : ''}
              name='description'
              type='text'
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Location</Form.Label>
            <Form.Control
              onChange={onParamChange}
              value={params.location ? params.location : ''}
              name='location'
              type='text'
            />
          </Form.Group>
          <Form.Group as={Col} xs='auto' className='ml-2'>
            <Form.Check
              onChange={onParamChange}
              value={params.full_time ? params.full_time : false}
              name='full_time'
              id='full-time'
              label='Only Full Time'
              type='checkbox'
              className='mb-2'
            />
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default SearchForm;
