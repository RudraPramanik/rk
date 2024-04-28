import Link from "next/link"
import { SVGProps, useMemo } from "react"
import Text, { TextProps } from "./Text"

export type ButtonProps = {
    url?: string
    size: 'sm' | 'md' | 'lg'
    variant: 'primary' | 'secondary' | 'black' | 'white' | 'plain'

    /**If provided, Icon & title will be ignored */
    children?: React.ReactNode

    
    /**The button's title. Only work if `children` is not provided */
    title?: string

    /**The button's Icon. Only work if `children` is not provided */
    Icon?: (props: SVGProps<SVGSVGElement>) => React.JSX.Element

    fullWidth?: boolean
}

export default function Button({size, variant, children, url, fullWidth, Icon, title}: ButtonProps) {
    const isIcon = useMemo(() => Boolean(Icon && !title && !children), [Icon, title, children])

    const className = useMemo(() => {
        const arr: string[] = ['cursor-pointer min-h-0 min-w-0 flex items-center justify-center']

        if(fullWidth) arr.push('w-full flex-1')
        else arr.push('self-start, w-max')

        if(variant=='primary') arr.push('bg-primary text-white hover:bg-primary-hover active:bg-primary-active')
        else if(variant == 'secondary') arr.push('bg-secondary text-white')
        else if(variant == 'black') arr.push('bg-black-1 text-white hover:bg-black-1-hover active:bg-black-1-active')
        else if(variant == 'white') arr.push('bg-white text-black-1')
        else if(variant == 'plain') arr.push('text-black-1 hover:text-black-1-hover active:text-black-1-active')

        if(isIcon) {
            arr.push('aspect-square rounded')
            if(size == 'sm') arr.push('h-9 md:h-10 lg:h-11 ')
            else if(size == 'md') arr.push('h-10 md:h-11 lg:h-12')
            else if(size == 'lg') arr.push('h-11 md:h-12 lg:h-[3.25rem]')
        } else {
            if(size == 'sm') arr.push('rounded py-1.5 px-6 lg:py-2 lg:px-7')
            else if(size == 'md') arr.push('rounded lg:rounded-md py-3 px-6 lg:py-4 lg:px-7')
            else if(size == 'lg') arr.push('rounded lg:rounded-md py-3 px-6 lg:py-4 lg:px-7')
        }

        return arr.join(' ')
    }, [variant, size, isIcon, fullWidth])

    const childrenx = useMemo<React.ReactNode>(() => {
        const textVariant: TextProps['variant'] = size == 'sm' ? 'bodyXs' : size == 'md' ? 'bodySm' : 'bodyMd'
        if(children) return (
            <Text variant={textVariant}>
                {children}
            </Text>
        )
        if(Icon && title) {
            return (
                <div className='flex flex-nowrap'>
                    <Icon className='text-inherit h=[55%]' height={undefined} width={undefined} />
                    <Text variant={textVariant}>{title}</Text>
                </div>
            )
        } else if(title) {
            return <Text variant={textVariant}>{title}</Text>
        } else if(Icon) {
            return (
                <Icon className='text-inherit h-[55%]' height={undefined} width={undefined}/>
            )
        }
        return null
    }, [title, Icon, children, size])

    return (
        url ? (
            <Link {...{className, children: childrenx}} href={url}/>
        ) : (
            <button {...{className, children: childrenx}}/>
        )
    )
}