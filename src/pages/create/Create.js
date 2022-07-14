import './Create.css';
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

export default function Create() {

    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const { postData, error, data } = useFetch("http://localhost:3000/recipes", 'POST');

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({title, method, ingredients, cookingTime: cookingTime + ' minutes'});
    }

    const handleAdd = (e) => {
        e.preventDefault();
        const ing = newIngredient.trim();
        if(ing && !ingredients.includes(ing)) {
            setIngredients((prevIngredient) => [...prevIngredient, ing]);
            setNewIngredient('');
        } 
        setNewIngredient('');
    }

    return (
        <div className="create">
            <h1 className="page-title">Create New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe Name</span>
                    <input 
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                        onInvalid={e => e.target.setCustomValidity("name is required")}
                    />
                </label>
                <label>
                    <span>Ingredient</span>
                    <div className="ingredients">
                        <input 
                            type="text"
                            onChange={e => setNewIngredient(e.target.value)}
                            value={newIngredient}
                        />
                        <button className="btn" onClick={handleAdd}>Add</button>
                    </div>
                </label>
                <p>Current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
                <label>
                    <span>Recipe Method</span>
                    <textarea 
                        type="text"
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                        onInvalid={e => e.target.setCustomValidity("method is required")}
                    />
                </label>
                <label>
                    <span>Cooking Time</span>
                    <input 
                        type="text"
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                        onInvalid={e => e.target.setCustomValidity("cooking time is required")}
                    />
                </label>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}
