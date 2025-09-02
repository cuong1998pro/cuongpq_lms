import React from 'react';

const Hero = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <p>{props.item.name}</p>
      <img
        src="https://samyangvietnam.com/wp-content/uploads/2024/01/can-nang-cua-meo-con-01.jpg"
        alt=""
      />
      <div>
        <button onClick={props.func}>Click</button>
      </div>
    </div>
  );
};

export default Hero;
