export interface InputRowProps {
    size: "sm" | "md" | "lg"
    children: React.ReactNode
}

export interface InputBoxProps extends Omit<InputRowProps, "children">{
    onSubmit: (event: React.FormEvent<HTMLInputElement>) => void;
    disabled: boolean
}
export interface WholeBox extends InputBoxProps{
    onSubmit: (event: React.FormEvent<HTMLInputElement>) => void;
    disabled: boolean,
    children: React.ReactNode
}