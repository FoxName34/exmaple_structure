import { FC, useState } from 'react';
import PropTypes from 'prop-types';

import { IFormProps } from '../../types/ui/ui-types';

const Form: FC<IFormProps> = ({
        onSubmit,
        handleFieldChange,
        formFields,
        submitText,
        customClassName,
    }) => {
    const [formValues, setFormValues] = useState(formFields);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        onSubmit(formValues);
    };

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        const updatedFormValues = { ...formValues, [name]: value };
        setFormValues(updatedFormValues);
        handleFieldChange(name, value);
    };

    return (
        <form className={customClassName} onSubmit={handleSubmit}>
        {Object.keys(formFields).map((fieldName) => {
            const { label, type, name, value } = formFields[fieldName];
            return (
            <div key={fieldName}>
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleInputChange}
                />
            </div>
            );
        })}
        <button type="submit">{submitText}</button>
        </form>
    );
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleFieldChange: PropTypes.func.isRequired,
    formFields: PropTypes.object.isRequired,
    submitText: PropTypes.string.isRequired,
    customClassName: PropTypes.string,
};

Form.defaultProps = {
    customClassName: '',
};

export default Form;