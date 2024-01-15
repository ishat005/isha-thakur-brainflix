// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header/Header.js'
import VideoPage from './pages/VideoPage/VideoDetailsPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoUpload from './pages/VideoUpload/VideoUpload.js'

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<VideoPage />} />
                <Route path="videos/:videoId" element={<VideoPage />}/>
                <Route path="/VideoUpload" element={<VideoUpload />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
};
export default App;