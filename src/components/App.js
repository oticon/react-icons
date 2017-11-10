import React from 'react';
import cn from 'classnames';

const App = ({ disabled, label, onClick }) => {
  return (
    <div onClick={onClick} className={cn(disabled ? 'disabled' : '')}>
      {label}
    </div>
  )
};

export default App;
