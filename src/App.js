import './App.css';
import Comments from './Components/Comments/Comments';
import ContextProvider from './Context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Comments/>
      </div>
    </ContextProvider>
  );
}

export default App;
