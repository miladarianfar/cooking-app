import './Home.css';
import { useFetch } from '../../hooks/useFetch'

export default function Home() {

    const {data: recipes, error, isPending} = useFetch("http://localhost:3000/recipes")

    return (
        <div className="home">
            {error && <div className="error">{error.message}</div>}
            {isPending && <div className="loader">is Loading...</div>}
            {recipes && recipes.map(recipe => (
                <h2 key={recipe.id}>{recipe.title}</h2>
            ))}
        </div>
    )
}
