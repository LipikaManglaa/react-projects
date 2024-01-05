
import { useEffect, useState } from 'react';
import './App.css';
import { MovieList } from './MovieList';
import { SearchMovie } from './SearchMovie';
import MovieDetail from './MovieDetail';




function App() {
  let [data, setData] = useState([]);
  let [title, updateTitle] = useState("")
  let ApiURL;
  let finalData;
  let getmovieList = async () => {
    if (title == "") {
      ApiURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
    }
    else {
      ApiURL = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${title}`;
    }
    let fetchData = await fetch(ApiURL)
    finalData = await fetchData.json()

    if (finalData.results != "" || finalData.results != "undefined" || finalData.results != "null") {
      setData(finalData.results)
    }


  }


  // let searchMovieList=(inputValue)=>{

  //     updateTitle(inputValue)
  // }
  let handelData = (e) => {
    updateTitle(e.target.value)
  }

  useEffect(() => {
    getmovieList()
  }, [])


  useEffect(() => {
    getmovieList()
  }, [title])

  return (
    <div className="App">
    <h2 className='mt-[40px] text-[24px] font-bold uppercase'>Movie Search App</h2>
      <input type="text" value={title} onChange={handelData} className="w-[50%] max-[auto] h-[50px] text-[20px] border-2 py-[10px] rounded border-gray-900 focus:border-gray-900 my-[30px] p-[10px]" placeholder="Search" />

      <MovieList movieData={data}  />
    
    </div>
  );
}

export default App;
