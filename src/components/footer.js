import React from 'react';

import '../styles/footer.css';

export default () => {
  return (
    <div className='container__footer row'>
      <div className='col'>
        <h6>© {new Date().getFullYear()} China Chef, South Milwaukee, WI</h6>
      </div>
    </div>
  );
};
