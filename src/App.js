import logo from './logo.svg';
import './App.css';
import {Header} from './components/header.component/header.component'
import {Login} from './screens/login.screen/login.screen';
import {Chart} from './components/donutChart.component/donut.component';
function App() {
  const user = localStorage.getItem('user');
  const data = [
    {value: 50},
    {value: 30},
    {value: 20}
  ]
  return (
    <>
        {user!=null ? 
        <>
          <Login />
        </>:<div className="App">
          <Header/>
          <Chart data = {data}/>
        </div>}
    </>
  );
  
}

export default App;
