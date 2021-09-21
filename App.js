import logo from './logo.svg';
import './App.css';
import {Header} from './components/header.component/header.component'
import {Login} from './screens/login.screen/login.screen';
function App() {
  const user = localStorage.getItem('user');
  return (
    <>
        {user==null ? 
        <>
          <Login />
        </>:<div className="App">
          <Header/>
        </div>}
    </>
  );
  
}

export default App;
