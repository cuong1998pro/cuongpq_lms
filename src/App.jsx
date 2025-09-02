import React, { useState } from 'react';

const App = () => {
  // const [myObject, setMyObject] = useState({
  //   key1: 'cuongpq',
  //   key2: 'hoqnq',
  //   key3: 'like',
  // });

  // const changeObject = () => {
  // setMyObject(prevObj => {
  //   return {
  //     ...prevObj,
  //     key3: 'love',
  //   };
  // });
  // };

  const [list, setList] = useState([]);
  const [item, setItem] = useState('');
  const addToList = () => {
    list.push(item);
    setList([...list]);
  };
  const removeItem = index => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div>
      {/* <h1> {myObject.key1 + ' ' + myObject.key3 + ' ' + myObject.key2}</h1> */}
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr>
                  {element}
                  <button onClick={() => removeItem(index)}>Remove</button>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      <input
        onChange={e => setItem(e.target.value)}
        type="text"
        placeholder="item"
      />
      <button onClick={addToList}>Add</button>
    </div>
  );
};

export default App;
