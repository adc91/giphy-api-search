import { useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const value = inputValue.trim();

        if (value.length <= 1) return;

        onAddCategory(value);
        setInputValue("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Dragon Ball Z"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

export default AddCategory;
