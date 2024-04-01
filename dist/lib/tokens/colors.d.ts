export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export interface ColorShade {
    [key: string]: RGBA;
}
export interface ColorsProps {
    [key: string]: ColorShade;
}
export declare const colors: ColorsProps;
