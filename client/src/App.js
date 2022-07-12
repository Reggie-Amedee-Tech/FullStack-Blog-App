import CreatePostPage from './views/CreatePostPage';
import AllPostPage from './views/AllPostPage';
import Header from './views/Header';
import {Routes, Route} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<CreatePostPage/>}/>
      <Route path="/allPosts" element={<AllPostPage />}/>
      </Routes>
    </div>
  );
}

export default App;
