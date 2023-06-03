import {useState} from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    const onImputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setcategories( categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() )
        setInputValue('');
    }

    return(
        <form onSubmit={onSubmit}>
            <input
             type="text" 
             placeholder="Buscar gifs"
             value={inputValue}
             onChange={onImputChange}
             />

        </form>
    )

}