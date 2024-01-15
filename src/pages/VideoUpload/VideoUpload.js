import VideoPreview from '../../assets/images/Upload-video-preview.jpg';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import publishLogo from '../../assets/icons/publish.svg';
import './VideoUpload.scss';
import axios from 'axios';
const API_URL = 'http://localhost:5001'

function VideoUpload(){
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [uploadTitle, setUploadTitle] = useState('');
    const [uploadDescription, setUploadDescription] = useState('');

    const videoUpload = async() => {
        const videoData = {
            title: uploadTitle,
            description: uploadDescription
        }
        try{
            let res = await axios.post(`${API_URL}/videos`, videoData);
            return res;
        } catch(err){
            console.log("Error: ", err);
        }
    }

    const handleTitleChange = (e) => {
        if(e.target.value === ""){
            alert("Please enter video title to be uploaded!");
        } else{
            setUploadTitle(e.target.value);
        }
    }

    const handleDescriptionChange = (e) => {
        if(e.target.value === ""){
            alert("Please enter video description to be uploaded!");
        } else{
            setUploadDescription(e.target.value);
        }
    }

    const handleUpload = (event) => {
        if(!handleTitleChange && !handleDescriptionChange){
            alert("Details missing");
            return false;
        } else{
            videoUpload();
            setUploadSuccess(true);
        }
        return true;
    }

    return(
        <div>
            <main>
                <h1 className="uploadVideoTitle">Upload Video</h1>
                <section className='videoUpload'>
                    <div className="videoThumbnail">
                        <h5 className="videoThumbnailTitle">VIDEO THUMBNAIL</h5>
                        <img src={VideoPreview} className="videoThumbnailImage" alt="thumbnail image for video upload page"/>
                    </div>

                    <div className="videoTitleContainer">
                        <label id="videoTitle"> TITLE YOUR VIDEO </label>
                        <input id="videoTitleInput" onChange={handleTitleChange} placeholder="Add a title to your video"/>
                    </div>

                    <div className="videoDescriptionContainer">
                        <label id="videoDescription"> ADD A VIDEO DESCRIPTION </label>
                        <textarea type="text" id="addvideoDescription"  onChange={handleDescriptionChange}  name="addvideoDescription" rows="7" cols="50" placeholder='Add a description to your video' >
                        </textarea>
                        
                    </div>

                    <div>
                      { 
                        uploadSuccess ? (
                            <>
                                <div className="uploadSuccess"> Upload successful</div>
                                <div>
                                    <Link to={'/'}>
                                        <button type="button" className="home">
                                            Home
                                        </button>
                                    </Link>
                                </div> 
                            </>        
                        ) : (
                            <>
                                <button type="submit" className="publishButton" onClick={handleUpload}>
                                    <img src={publishLogo} alt="A logo that is contained and displayed within a button" className="publish" />
                                        PUBLISH
                                </button>

                                <button type="submit" className="cancelButton">
                                    <strong>CANCEL</strong>
                                </button>
                            </> 
                        )
                    }    
                    </div>  
                </section>
            </main>  
        </div>  
    )
}

export default VideoUpload;