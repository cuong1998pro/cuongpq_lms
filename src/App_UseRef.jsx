import React, { useRef } from 'react';

const App = () => {
  let myHeadLine = useRef();
  let image = useRef();
  let ApiData = useRef();
  let firstname = useRef();
  let lastname = useRef();
  let myTag = useRef();
  const changeText = () => {
    myHeadLine.current.innerText = 'cuongpq';
    image.current.setAttribute('width', 800);
    image.current.setAttribute('height', 200);
    myHeadLine.current.classList.remove('text-success');
    myHeadLine.current.classList.add('text-danger');
  };
  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    ApiData.current = await response.json();
  };
  const showData = () => {
    myTag.current.innerText = JSON.stringify(ApiData.current);
  };

  return (
    <div>
      <h1 className="text-success" ref={myHeadLine}>
        This is Head line
      </h1>

      <input ref={firstname} type="text" placeholder="first name" />
      <input ref={lastname} type="text" placeholder="last name" />
      <div>
        <img
          ref={image}
          src="https://samyangvietnam.com/wp-content/uploads/2024/01/can-nang-cua-meo-con-01.jpg"
          alt=""
        />
      </div>
      {/* Call APi Use Ref de luu vao bo nho */}
      <div >
      <p ref={myTag}></p>
      <button onClick={fetchData}>Call Api</button>
      <button onClick={showData}>Show Data</button>
      <button onClick={changeText}>Click</button>
      </div>
    </div>
  );
};

export default App;
