import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-regular-svg-icons"

function MainboradItem(){
  return(
    <li role="link" className="">
      <span className="postTitle">
        게시글 제목
      </span>
      <span className="comment text__small text__gray">
        6
      </span>
      <span className="viewCount text__xsmall">
        <FontAwesomeIcon icon={faEye} className="text__xsmall" style={{marginRight
        :"3px"}}/>
        10
      </span>
    </li>
  )
}

export default MainboradItem;