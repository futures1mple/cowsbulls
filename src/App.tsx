import './App.css';
import Game from './components/Game/Game';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Game/>
      </Layout>
    </div>
  );
}

export default App;
