import './Header.scss';
import BrainFlixLogo from '../../assets/images/BrainFlix-logo.svg';
import uploadLogo from '../../assets/icons/upload.svg';
import avatarLogo from '../../assets/images/Mohan-muruge.jpg';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div class="container">
            <img src={BrainFlixLogo} className="brainflixLogo" alt="brainflix-logo"/>

            <input type="search" id="search" name="search" placeholder="Search" />
            <img src={avatarLogo} className="avatar" alt="avatar of a singer" />
 
            <Link to='/VideoUpload'>
                <button type="submit" className="uploadButton">
                    <img src={uploadLogo} alt="A logo that is contained and displayed within a button" className="upload" />
                    UPLOAD
                </button>
            </Link>
        </div>    
    )
}

export default Header;
