export declare const space: {
    sm: string;
    md: string;
    lg: string;
};
export type SpaceSize = keyof typeof space;
export interface SpaceProps {
    space: SpaceSize;
}
