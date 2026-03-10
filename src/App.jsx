import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import NotFound from './assets/pages/NotFound'
import Dashboard from './assets/components/Dashboard'
import Projects from './assets/pages/Projects'

function App() {

  return (
    <Router>
        <Routes>
        <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
        </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App
