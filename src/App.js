import './App.css';
import Navbar from './Navbar';
import Home from './Home';

const App = () =>{
  return (
    <div className='App'>
      <Navbar />
      <h1>App Content</h1>
      <div className='content'>
        <Home />
      </div>
    </div>
  )
}

export default App