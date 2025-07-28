import React, { Children, ReactNode } from 'react';

interface Props {
  text: string,
  className: StyleSheet
}

const Text: React.FC<Props> = ({ text }) => {
  return (
    <p className='Texts'>
      {text}
    </p>
  );
};

export default Text;