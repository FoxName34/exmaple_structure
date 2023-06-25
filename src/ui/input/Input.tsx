import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { IInputProps } from '../../types/ui/ui-types';

const Input: FC<IInputProps> = ({ customClass = '', label, name, onChange, placeholder = '', type = 'text', value }) => {
    const onInputChange = (e: { target: { name: any; value: any; }; }) => {
        onChange(e.target.name, e.target.value)
    };
    
    return (
        <div className={customClass}>
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onInputChange}
        />
        </div>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel']),
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    customClass: PropTypes.string,
};

export default Input;