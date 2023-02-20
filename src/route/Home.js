import '../assets/main.scss';

import Mainboard from '../components/home/Mainboard'

function Home(){

  return(
    <main>
      <Mainboard title={"최신 글 목록"}/>
      <Mainboard title={"인기 글"}/>
      <div className='view'></div>
    </main>
  )
}

export default Home;
