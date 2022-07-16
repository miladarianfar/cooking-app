import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Searchbar.css'

const Searchbar = () => {

    const [item, setItem] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push(`/search?q=${item}`);
    }

    return (
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search: </label>
                <input 
                     type="text"
                    id="search"
                    onChange={e => setItem(e.target.value)}
                    required
                />
            </form>
        </div>
    );
}

export default Searchbar;
