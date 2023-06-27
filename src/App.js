import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/main/Main';
import { getMovies } from './redux/Slices/movieSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MovieDetail from './pages/MovieDetail/MovieDetail';


const App=()=> {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getMovies(1))},[])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route path='moviedetail/:movieId' element={<MovieDetail/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
