import React from 'react';
import PropTypes from 'prop-types';

function FuncComponent({ name }) {
  return (
    <h1>
      Greetings,
      {name}
      !
    </h1>
  );
}

FuncComponent.propTypes = {
  name: PropTypes.string,
};

FuncComponent.defaultProps = {
  name: 'React',
};

export default FuncComponent;
