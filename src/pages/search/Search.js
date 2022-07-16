import './Search.css';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from './../../components/RecipeList';

export default function Search() {

  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')
  
  const url = 'http://localhost:3000/recipes' + queryString;
  const {data, error, isPending} = useFetch(url);
  console.log(url);
  return (
    <div>
      <h1 className="page-title"> result including "{query}"</h1>
      {error && <p className="error">Could not fetch data</p>}
      {isPending && <p className="loading">is Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
