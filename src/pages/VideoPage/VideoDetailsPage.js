import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
const API_URL ="http://localhost:5001";

const VideoPage = () => {
    const [videos, setVideos] = useState(null);
    const { videoId } = useParams();

    const getVideos = async () => {
        let res = await axios.get(`${API_URL}/videos`);
        setVideos(res.data);
      };

      useEffect(() => {
        getVideos();
      }, []);
      
      if (videos === null) {
        return <p>loading...</p>;
      }

    const selectedVideoId = videoId || videos[0].id; 

    const filteredVideos = videos.filter((video) => {
        return selectedVideoId !== video.id;
    });
  
    return(
        <div className="video-page">
            {/* selected video as props */}
            <SelectedVideo selectedVideoId={selectedVideoId} />
            
            {/* filtered videos as props */}
            <NavBar videos={filteredVideos} />
        </div>
    )
}

export default VideoPage;