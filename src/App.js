import { Route , Routes , BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VedioDetails from './components/VedioDetails';
import ChannelDetails from './components/ChannelDetails';
import Search from './components/Search';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
       <Routes>
        <Route path='/' element={<Feed/>} />
        <Route path='/channel/:id' element={<ChannelDetails/>} />
        <Route path='/vedio/:id' element={<VedioDetails/>} />
        <Route path='/search/:searchTerm' element={<Search/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
