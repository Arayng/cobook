import MainboradItem from "./MainboradItem";


function New({title}){

  return(
    <article className="mainBoard">
      <div className="title" role="link">
        <h3>{title}</h3>
      </div>
      <div className="boardItem">
        <ul>
          <MainboradItem />
          <MainboradItem />
          <MainboradItem />
          <MainboradItem />
          <MainboradItem />
          <MainboradItem />
          <MainboradItem />
          <MainboradItem />
        </ul>
      </div>
    </article>
  )
}

export default New