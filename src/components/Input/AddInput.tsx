import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import "./AddInput.scss";
type AddInputProps = {
    type: string;
    label: string;
    placeholder?: string;
    required: boolean;
    name: string;
    classNameInput?: string;
    classNameLabel?: string;
};

const AddInput: React.FC<AddInputProps> = ({ ...props }: AddInputProps) => {
    return (
        <>
            <Label
                htmlFor={props.name}
                className={`add-input-label mb-0 pl-1 block font-playfair font-bold  ${props.classNameLabel}`}
            >
                {props.label}
            </Label>
            <Input
                id={props.name}
                className={`add-input ${props.classNameInput}`}
                placeholder={props.placeholder}
                required={props.required}
                type={props.type}
                name={props.name}
            />
        </>
    );
};

export default AddInput;
