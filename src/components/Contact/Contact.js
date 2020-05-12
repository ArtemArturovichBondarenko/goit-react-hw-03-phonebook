import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ name, number, onDeleteContact }) => (
  <>
    <span>{name}:</span>
    <span>{number}</span>
    <button type="button" onClick={onDeleteContact}>
      Delete
    </button>
  </>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
