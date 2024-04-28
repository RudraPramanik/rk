export type TextProps = {
    fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold'
    children?: React.ReactNode
    variant: 'headingXs' | 'headingSm' | 'headingMdLg' | 'headingMdS' | 'headingMd' | 'headingSemiLg' | 'headingLg' | 'headingXl' | 'heading2xl' | 'heading3xl' | 'heading4xl' | 'heading5xl' | 'heading6xl' | 'heading8xl' | 'bodyXxs' | 'bodyXs' | 'bodySm' | 'bodyMd' | 'bodyLg' | 'bodyXl'
    
    /**Defaults to `inheriting parent's color` */
    color?: 'black' | 'white' | 'primary' | 'secondary'

    alignment?: 'start' | 'center' | 'end'

    /**
     * Defaults to `normal`
     * 
     * - `none` - line-height: 1;
     * - `tight` - line-height: 1.25;
     * - `snug` - line-height: 1.375;
     * - `normal` - line-height: 1.5;
     * - `relaxed` - line-height: 1.625;
     * - `loose` - line-height: 2;
     */
    lineHeight?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'
    className?: string
}

const fontSizeClasses: Record<string, string> = {
    headingXxs:'text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px]',
    headingXs: 'text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]',
    headingSm: 'text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]',
    headingMdS: 'text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]',
    headingMd: 'text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]',
    headingMdLg: 'text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[28px]',
    headingSemiLg: 'text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]',
    headingLg: 'text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]',
    headingXl: 'text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]',
    heading2xl: 'text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]',
    heading3xl: 'text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px]',
    heading4xl: 'text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] 2xl:text-[52px]',
    heading5xl: 'text-[40px] md:text-[44px] lg:text-[48px] xl:text-[52px] 2xl:text-[56px]',
    heading6xl: 'text-[44px] md:text-[48px] lg:text-[52px] xl:text-[56px] 2xl:text-[60px]',
    heading8xl: 'text-[52px] md:text-[56px] lg:text-[60px] xl:text-[64px] 2xl:text-[68px]',

    bodyXxs:'text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px]',
    bodyXs: 'text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]',
    bodySm: 'text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]',
    bodyMd: 'text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]',
    bodyLg: 'text-[18px] md:text-[19px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px]',
    bodyXl: 'text-[20px] md:text-[21px] lg:text-[22px] xl:text-[23px] 2xl:text-[24px]'
};

const fontWeightClasses: Record<string, string> = {
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
};

const colorClasses = {
    black: 'text-black-1',
    white: 'text-white',
    primary: 'text-primary',
    secondary: 'text-secondary'
}

const alignmentClasses = {
    start: 'text-left text-start',
    center: 'text-center',
    end: 'text-right text-end'
}

const lineHeightClasses ={
    none: 'leading-none',
    tight: 'leading-tight',
    snug: 'leading-snug',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose'
}

export default function Text({children, fontWeight, className, variant, color, alignment, lineHeight='normal'}: TextProps) {
    const fontSizeClass = variant ? fontSizeClasses[variant] : '';
    const fontWeightClass = fontWeight ? fontWeightClasses[fontWeight] : '';
    const colorClass = (color ? colorClasses[color] : '') || 'text-inherit' // inherit
    const alignmentClass = alignment ? alignmentClasses[alignment] : ''
    const lineHeightClass = lineHeight ? lineHeightClasses[lineHeight] : ''

    return (
        <div className={`${className || ''} text-black-1 ${colorClass} ${lineHeightClass} ${alignmentClass} ${fontSizeClass} ${fontWeightClass}`}>
            {children}
        </div>
    )
}