import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark,faBell } from "@fortawesome/free-solid-svg-icons";

function HeadMenu(){

  return(
    <div className="hMenu">
      <FontAwesomeIcon icon={faBookmark} className="icon"/>
      <FontAwesomeIcon icon={faBell} className="icon"/>
      <div className="profile"></div>
    </div>
  )
}

export default HeadMenu;