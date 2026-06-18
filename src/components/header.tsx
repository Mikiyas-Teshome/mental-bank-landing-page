import Person from "./Icons/Person"


const Header = ({title, description}: {title: string, description: string}) => {

    return (
        <div className=" flex flex-col gap-4 items-center max-w-[36.1875rem] mx-auto">
            <div className=" flex items-center justify-center gap-1 bg-white rounded-2xl px-3 py-1 border border-border shadow-[0px_4px_8px_rgba(34,42,53,0.05)]">
                <Person />
                <p className="text-sm text-muted">{title}</p>
            </div>
            <h1 className=" text-foreground  font-semibold text-2xl md:text-3xl lg:text-[2.59rem]">{description}</h1>
        </div>
    )
}

export default Header