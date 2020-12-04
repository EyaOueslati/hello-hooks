import React, { useState } from 'react';


const CardFilter = (props) => {

    const [value, setValue] = useState("");
    const handlechChange = (e) => setValue(e.target.value);

    return (
        <React.Fragment>
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>
                <input value={value} onChange={handlechChange} />
                <button onClick={isNaN(value) ? () => {
                    props.handelFilter(value)
                    setValue("")
                } : () => {
                    props.handelFilterRate(value)
                    setValue("")
                }} >Search</button>
            </form>
        </React.Fragment>

    );
}
export default CardFilter;