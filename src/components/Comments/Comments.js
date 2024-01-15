import likes from '../../assets/icons/likes.svg';
import views from '../../assets/icons/views.svg';
import commentLogo from '../../assets/icons/add_comment.svg';
import avatarLogo from '../../assets/images/Mohan-muruge.jpg';
import './Comments.scss';

function Comments({video}){
    // Get the count of number of comments
    let len;
    for(let i = 0; i <= video.comments.length; i++){
        len = i;
    }

    return (
            <>
                <main>
                    <video className="videoPlayer" width="640" height="360" poster={video.image} controls>
                    </video>
                    <h1 className="videoTitle">{video.title}</h1>
                    <p className="videoChannel"><strong>{video.channel}</strong></p>
                    <p className="videoTimestamp">{new Date(video.timestamp).toLocaleDateString()}</p>
                    <p className="videoViews"><img src={views} />{video.views}</p>
                    <p className="videoLikes"><img src={likes} />{video.likes}</p>
                    <p className="videoDescription">{video.description}</p>
                    <p className="numberOfComments"><b>{len} Comments</b></p>
                
                    <img src={avatarLogo} className="avatar-comments" alt="an avatar image of a singer" />
                    
                    <label  id="label-comment"> JOIN THE CONVERSATION </label>
                    <textarea type="text" id="addComment" name="addComment" rows="7" cols="50" placeholder='Add a new comment'>

                    </textarea>

                    <button type="submit" className="commentButton">
                        <img src={commentLogo} alt="An icon of comment within a comment button" className="comment" />
                            COMMENT
                    </button>
                    <p>
                        {video.comments.map((comment)=>{
                            return (
                            <div className="commentBlock">
                                <img className="placeholderAvatar"></img>
                                <p className="commentator">{comment.name}</p>
                                <p className="commentDate">{new Date(comment.timestamp).toLocaleDateString()}</p>
                                <p className="commentPosted">{comment.comment}</p>  
                            </div>         
                            )         
                        })}
                    </p>
                </main>
            </>     
    )}

export default Comments;