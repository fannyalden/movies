import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import Movies from './components/Movies';
import Button from './components/Button';

const page = [1,2,3,4,5]

function App() {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [key, setKey] = useState("");

  const getData = async (event) => {
    event.preventDefault();
    
    setIsLoading(true)
    let urls = page.map(num => 'https://api.themoviedb.org/3/movie/popular?api_key='+key+'&language=en-US&page='+num)
    let index = 0
    let moviesArray = []

    let responses = await Promise.all(
      urls.map(url => fetch(url, {
        method: 'GET',
        Headers: { 'Content-Type': 'application/json;charset=utf-8'}
      }))
      ).then (async (res) => {
        return Promise.all(
          res.map(async (data) => {
            if (data.ok) {
              return await data.json()
            } else {
              setError(true)
              console.log(data.status)
              setIsLoading(false)
              return Promise.reject(data)
            }
          })
        )
    })

    if(!error) {
      responses.map(page => {
        return page.results.map(movie => {
          moviesArray[index] = movie;
          index++
          return moviesArray
        })
      })

      moviesArray.sort(function(a,b) {
        return a.popularity < b.popularity ? 1: -1
      })

      setMovies(moviesArray);
      setIsLoading(false);
    }
  }

  return (
    <div className="container">
      <Header title='100 mest populära filmer just nu' />
      <form onSubmit={getData}>
        <label htmlFor="inputKey">Ange API key</label>
        <input 
              id="inputKey"
              required
              type="text" 
              placeholder="Ange API key"
              value={key}
              onChange={(e) => setKey(e.target.value)
              }
          />
        <Button type="submit" text={isLoading ? 'Laddar': 'Hämta filmer'}/>
      </form>
      {error ? <p>Oj något blev fel</p>: null}
      <Movies movies={movies} />
    </div>
  );
}

export default App;
