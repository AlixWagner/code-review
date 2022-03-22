
const SelectInput = (props) => {

    const handleChange = (event) => {
        props.setUserInput(event.target.value);
    }

    return (
        <div className="inputContainer">
            <label htmlFor={ props.id }>{ props.label }</label>
            <div className="selectContainer">
                <select onChange={handleChange} id={props.id} value={props.userInput}>
                    <option value="placeholder" disabled>Choose One:</option>
                    {props.options.map((option) => {
                        return (
                            <option key={option.index} value={option.index}>{option.name}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default SelectInput;