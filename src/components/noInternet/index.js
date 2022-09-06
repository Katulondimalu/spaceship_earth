import React, { useEffect } from 'react';

const NoInternet = () => {
  useEffect(() => {
    document.title = 'Spaceship Earth';
  });

  return <div></div>;
};

export default NoInternet;
