export const sizes = {
    xs: '4px',
    sm: '10px',
    md: '14px',
    lg: '18px',
    xl: '22px'
};

export interface sizeProps{
    size: keyof typeof sizes
}
