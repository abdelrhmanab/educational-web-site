import type { CSSProperties, ReactNode } from 'react'



type Prop = {
    children: ReactNode
    className?: string
    style?: CSSProperties
}

const SectionContainar = ({ children, className = "", style = {} }: Prop) => {
    return (
        <section>
            <div className={`w-full flex flex-col items-center m-auto px-2 lg:px-20 py-2 lg:py-28  gap-12 ${className}`}
                style={style}
            >

                {children}
            </div>
        </section>
    )
}

export default SectionContainar