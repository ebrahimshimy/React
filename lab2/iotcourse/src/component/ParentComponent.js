import React from 'react';
import FunctionalProps from './FunctionalProps';

const ParentComponent = () => {
  return (
    <div>
      <FunctionalProps
        name="Ebrahim elshimy"
        age={33}
        location="6 October- Down Town"
        occupation="Mechanical Engineer"
      >
        <p>Here is a child element passed from parent component.</p>
      </FunctionalProps>
    </div>
  );
};

export default ParentComponent;