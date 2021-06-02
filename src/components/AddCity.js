import React from "react";
import {connect} from "react-redux";
import {getForecast} from "../actions";

const AddCity = ({dispatch}) => {
    let input;
    return (
        <div className="add-city">
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return;
                }

                dispatch(getForecast(input.value))
                input.value = ''
            }}>
                <input ref={node => input = node}/>
                <button type="submit">Add City</button>
            </form>
        </div>
    )
}

export default connect()(AddCity)