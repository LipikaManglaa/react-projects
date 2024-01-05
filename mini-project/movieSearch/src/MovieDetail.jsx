import { useParams } from "react-router-dom"
import { MovieCartt } from "./MovieList"
import { useEffect, useState } from "react"

function MovieDetail(){

let data=useParams()
 
  let[datadata,setData]=useState([{}])
  let getmovieList = async () => {

    let  ApiURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
   
   
    let fetchData = await fetch(ApiURL)
   let finalData = await fetchData.json()

let filterData=finalData.results.filter((v,i)=>v.id==data.id)
setData(filterData)
  


  }
  let imgPath = 'https://image.tmdb.org/t/p/w1280';

  useEffect(()=>{
    getmovieList()
  },[data.id])

return(
     <>
       <div className="min-h-screen grid place-items-center font-mono bg-gray-900">
      {
      <div className="rounded-md bg-gray-800 shadow-lg">
        <div className="md:flex px-4 leading-none max-w-4xl">
          <div className="flex-none ">
           <img
            src={imgPath+datadata[0].poster_path}
            alt="pic"
            className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
          />           
          </div>

          <div className="flex-col text-gray-300">
   
            <p className="pt-4 text-2xl font-bold"></p>
            <hr className="hr-text" data-content=""/>
            <div className="text-md flex justify-between px-4 my-2 mt-[50px]">
              <span className="font-bold">{datadata[0].title}</span>
              <span className="font-bold"></span>
            </div>
            <p className="hidden md:block px-4 my-4 text-sm text-left">{datadata[0].overview} </p>
            
            <p className="flex text-md px-4 my-2">
            Popularity:{datadata[0].popularity
}

              <span className="font-bold px-2">|</span>
              Release_Date: {datadata[0].release_date}
            </p>
            
          

          
          </div>
        </div>
            
      </div>
}
    </div>
     </>   
    )
}
export default MovieDetail