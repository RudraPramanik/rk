import { DetailedHTMLProps, HTMLAttributes } from "react"

export type ContainerProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function Container({className='', children, ...props}: ContainerProps) {
    return (
        <div {...props} className={`${className} 2xl:max-w-[80rem] xl:max-w-[70rem] lg:max-w-[60rem] md:max-w-[44rem] md:px-0 px-4 mx-auto w-full`}>
            {children}
        </div>
    )
}