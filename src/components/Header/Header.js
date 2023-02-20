import Nav from "./Nav";
import HeadMenu from "./HeadMenu";
import '../../assets/header.scss';
function Header(){
  
  return(
    <div className="headerBG">
      <header>
        <h1 className="logo">CoBook</h1>
        <Nav />
        {/* <div role="button" className="login" >
          로그인
        </div> */}
        <HeadMenu />
      </header>
    </div>
  )
}

export default Header;