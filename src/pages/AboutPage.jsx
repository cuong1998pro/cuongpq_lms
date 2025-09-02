import React from 'react';
import Menu from '../components/Menu';
import { useParams } from 'react-router-dom';

const AboutPage = () => {
  let {id, name} = useParams();
  return (
    <div>
      <Menu/>
      <h1>Aboutpage</h1>
      <p>ID: {id}</p><p>Name: {name}</p>
    </div>
  );
};

export default AboutPage;