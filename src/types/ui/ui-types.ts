import { ChangeEvent, ChangeEventHandler, ReactNode } from "react"

interface IButtonProps {
    text: string, 
    onClick: () => void, 
    disabled: boolean, 
    className: string
}

interface IFormProps {
    onSubmit: ChangeEvent<Element>,
    handleFieldChange: ChangeEventHandler,
    formFields: ReactNode | void,
    submitText: string,
    customClassName: string,
}

interface IInputProps {
    customClass: string,
    label: string,
    name: string,
    onChange: ChangeEvent,
    placeholder: string,
    type: string,
    value: unknown | undefined,
}

export type {
    IButtonProps,
    IFormProps,
    IInputProps,
}