import Navigation from './components/navigation';
import IndexAbout from './components/indexAbout';
import IndexLatest from './components/indexLatest';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
      <Router>
          <div className="App">
            <Navigation />
            <IndexAbout />
            <IndexLatest />
          </div>
      </Router>
  );
}

export default App;
