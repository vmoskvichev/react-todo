import React, {useState} from 'react';

const Form = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <form onSubmit={onAddTodo} className="form">
            <div className="input-wrap">
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text"/>
                <button className="add-btn" onClick={(e) => {
                    e.preventDefault();
                    onAddTodo(inputValue);
                    setInputValue('');
                }}>
                    Add
                </button>
            </div>
        </form>
    )
}

export default Form;