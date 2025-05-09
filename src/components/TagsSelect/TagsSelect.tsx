import React from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type AddInputProps = {
    className?: string;
    onchange: () => void;
};

const TagsSelect: React.FC<AddInputProps> = ({ ...props }: AddInputProps) => {
    return (
        <>
            <div className="flex flex-row">
                <Select onValueChange={props.onchange}>
                    <SelectTrigger className={props.className} id="tags">
                        <SelectValue placeholder="Tags" className="text-lg" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </>
    );
};

export default TagsSelect;
