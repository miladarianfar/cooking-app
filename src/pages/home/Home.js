import './Home.css';
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList';

export default function Home() {

    const {data: recipes, error, isPending} = useFetch("http://localhost:3000/recipes")

    return (
        <div className="home">
            {error && <div className="error">{error.message}</div>}
            {isPending && <div className="loader">is Loading...</div>}
            {recipes && <RecipeList recipes={recipes} />}
        </div>
    )
}
