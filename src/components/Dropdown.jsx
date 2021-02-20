import React from 'react'

const Dropdown = ({ options, selected, onSelectChange }) => {
    const renderOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null
        }

        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => onSelectChange(option)}
            >
                {option.label}
            </div>
        )
    })
    return (
        <div className="ui form" >
            <div className="field">
                <label className="label">Select a Color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">
                        {renderOptions}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;