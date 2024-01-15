import VideoPreview from '../../assets/images/Upload-video-preview.jpg';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import publishLogo from '../../assets/icons/publish.svg';
import './VideoUpload.scss';



function VideoUpload(){
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const handleUpload = (event) => {
        setUploadSuccess(true);
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
                        <input id="videoTitleInput" placeholder="Add a title to your video"/>
                    </div>

                    <div className="videoDescriptionContainer">
                        <label id="videoDescription"> ADD A VIDEO DESCRIPTION </label>
                        <textarea type="text" id="addvideoDescription" name="addvideoDescription" rows="7" cols="50" placeholder='Add a description to your video'>
                        </textarea>
                    </div>

                    <div>
                     { 
                        uploadSuccess ? (
                            <>
                                <div> Upload successful</div>
                                <div>
                                    <Link to={'/'}>
                                        <button type="button">
                                            Successful
                                        </button>
                                    </Link>
                                </div> 
                            </>        
                        ) : (
                            <>
                                <button type="submit" className="publishButton">
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