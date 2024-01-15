import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = ({ videos }) => {
  return (
      <nav className="container-nav">
        <div>
            <h2 className="next-videos">NEXT VIDEOS</h2>
        </div>
        <ul className="video-list">
          <li className="video-list__item">
              {videos.map((video) =>
                  {
                    return(
                      <NavLink key={video.id} to={`/videos/${video.id}`}>
                          <div className="video-list__item--container">
                              <div className="video-list__item--left">
                                <img src={video.image} className="selectedVideoImage" alt="A poster of the video inside the video player"/>
                              </div>

                              <div className="video-list__item--right">
                                  <p className="videoTitle"><strong>{video.title}</strong></p>
                                  <p className="videoChannelInNav">{video.channel}</p>
                              </div>
                          </div>
                      </NavLink>
                    )
                  }
              )}
          </li>
        </ul>
      </nav>
    );
  };

export default NavBar;