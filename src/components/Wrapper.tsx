import { ReactNode } from "react"

const Wrapper =({children}:{children:ReactNode})=>{
    return <section className="w-full max-w-7xl container mx-auto">{children}</section>
}

export default Wrapper