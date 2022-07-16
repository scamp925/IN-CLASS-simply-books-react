import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function AuthorCard({
  firstName, lastName, email,
}) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{firstName} {lastName}</Card.Title>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

AuthorCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default AuthorCard;
