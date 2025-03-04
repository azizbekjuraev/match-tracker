import { ReactNode } from "react";

interface Props {
    classNames?: string;
    children: ReactNode;
    size?: "sm" | "md" | "lg";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button ({classNames, children, size, onClick}: Props){

    let sizeClasses: Record<string, string> = {
        md: "px-[34px] py-[6px] text-[12px]",
        lg: "py-[17px] px-[40px] text-[18px]"
    }

    return (
        <button onClick={onClick} className={`${classNames} ${sizeClasses[size!] ?? sizeClasses.md} bg-[#43AD28] text-white rounded-[4px]`}>{children}</button>
    )
}