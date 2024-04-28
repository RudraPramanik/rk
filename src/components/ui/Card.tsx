import { DetailedHTMLProps, HTMLAttributes } from "react"

export type CardProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function Card({className, ...props}: CardProps) {
    return (
        <div {...props} className={`${className} rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.15)]`}>

        </div>
    )
}