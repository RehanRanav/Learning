
import './App.css';
// import LazyComponent from './components/Lazycomponent';
// import UseRefDemo from './components/UseRefDemo';
import Car from './components/Car';

function App() {
  return (
    <div className="App">
      {/* props example components */}
      <Car model="Mustang" brand="Ford"/>
      {/* <UseRefDemo/> */}
      {/* <LazyComponent/> */}
    </div>
  );
}

export default App;
