import './App.css';
import Row from "./components/Row";
import categories from './api';

function App() {
  return (
    <div className="App">
      {/*Navbar*/}
      {/*Destaque*/}
      {/*Em alta*/}
      {categories.map(category => {
        return <Row />;
      })}      
    </div>
  ); 
}

export default App;
