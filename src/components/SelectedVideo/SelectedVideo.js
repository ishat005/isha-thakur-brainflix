import axios from "axios";
import { useEffect, useState } from "react";
import './SelectedVideo.scss';
import Comments from "../Comments/Comments";
const API_URL = "http://localhost:5001";

const SelectedVideo = ({selectedVideoId}) => {
  const [video, setVideo] = useState(null);

  const getSelectedVideo = async (videoId) => {
      try { 
        let res = await axios.get(`${API_URL}/videos/${videoId}`)
        setVideo(res.data);
      } catch (err) {
        console.log("Error: ", err);
      }
  };

  getSelectedVideo();

  useEffect(() => {
    getSelectedVideo(selectedVideoId);
  }, [selectedVideoId]);

  if (video === null) {
    return <p>Loading...</p>;
  }

  console.log(video);

  return (
    <>
      <Comments video={video}/>
    </> 
  );
};

export default SelectedVideo;
