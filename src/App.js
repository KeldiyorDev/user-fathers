import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Reyting from './pages/Reyting';
import Layout from './utils/Layout';
import News from './pages/News';
import SchoolRating from './pages/SchoolRating';
import NewDetail from './pages/NewDetail';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/loyiha-haqida' element={<Layout> <About /> </Layout>} />
      <Route path='/reyting' element={<Layout> <Reyting /> </Layout>} />
      <Route path='/maktab-reyting' element={<Layout> <SchoolRating /> </Layout>} />
      <Route path='/yangiliklar' element={<Layout> <News /> </Layout>} />
      <Route path='/yangiliklar/:id' element={<Layout> <NewDetail /> </Layout>} />
    </Routes>
  );
}

export default App;
