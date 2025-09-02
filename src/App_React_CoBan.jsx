import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Contact from './components/Contact';

const App = () => {
  let mark = 80;
  const status = true;
  const ItemObj = {
    name: 'Kazi Ariyan',
    age: 69
  }
  const city = ['Hai Phong', 'Ha Noi', 'Tp.Ho Chi Minh'];
  const LoginStatusBtn = status => {
    if (status) return <button>Logout</button>;
    else return <button>Login</button>;
  };
  const LoginStatusBtn2 = status => {
    switch (status) {
      case true:
        return <button>Logout</button>;
      case false:
        return <button>Login</button>;
      default:
        return null;
    }
  };
  const funcTestClick = () => {
    alert('Cook')
  }
  const PostFormData = (e) => {
    e.preventDefault();
    alert('form submited')
  }
  return (
    <div>
      <Header></Header>

      <Contact />
      <Footer />
      {mark > 80 ? <h1>Do</h1> : <h1>Truot</h1>}
      {/* Hàm gọi ngay lập tức */}
      {(() => {
        if (mark > 80) {
          return <h1>A+</h1>;
        } else if (mark <= 80) {
          return <h1>B</h1>;
        }
      })()}
      {/* Vòng lặp */}
      <ul>
        {city.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      {/* kết xuất có điều kiện */}
      <div>Login Status</div>
      {LoginStatusBtn(false)}
      {LoginStatusBtn2(true)}
      {status ? <button>Logout</button> : <button>Login</button>}
      {status && <button>Logout</button>}
      {/* truyền thuộc tính vào component con */}
      <Hero title="meo còn" desc="đây là con mèo" item={ItemObj} func={funcTestClick}/>
      {/* form */}
      <form onSubmit={PostFormData}>
        <input type="text" placeholder='name' />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
