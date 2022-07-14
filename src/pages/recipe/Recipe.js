import './Recipe.css';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch'

export default function Recipe() {

    const params = useParams();
    const url = "http://localhost:3000/recipes/" + params.id
    const {data, isPending, error} = useFetch(url)
    console.log(data);

    return (
        <div className="recipe">
            {isPending && <div className="loader">is Loading...</div>}
            {error && <div className="error">Could not fetch data</div>}
            {data && 
                <>
                    <h1 className="page-title">{data.title}</h1>
                    <p>{data.cookingTime} to cook.</p>
                    <ul>
                        {data.ingredients.map(ing => (
                            <li key={ing}>{ing}</li>
                        ))}
                    </ul>
                    <p className="method">{data.method}</p>
                </>
            }
        </div>
    )
}
