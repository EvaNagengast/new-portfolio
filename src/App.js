import React, {Routes, Route} from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Error from './pages/Error';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='about'
            element={<About />}
          />
          <Route
            path='projects'
            element={<Projects />}
          />
          <Route
            path='contact'
            element={<Contact />}
          />
          <Route
            path='*'
            element={<Error />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
