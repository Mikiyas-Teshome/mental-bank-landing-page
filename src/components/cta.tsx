import AppStore from "./Icons/AppStore"
import PlayStore from "./Icons/PlaySore"


const Cta = () => {

    return (
        <div className="bg-[url('/cta-bg.jpg')] bg-contain bg-center py-[4.875rem] px-[2.125rem] my-8">
            <div className="  bg-white/15 px-[2.125rem] py-[6.25rem] rounded-[2.5rem] shadow-[4px_4px_76px_0px_#6178C942,inset_2px_2px_16px_0px_#FFFFFF14] backdrop-blur-[84px]">
                <div className="flex flex-col gap-11 max-w-[51.375rem] mx-auto">
                    <div className=" flex flex-col gap-5 items-center">
                        <h1 className="font-semibold text-3xl md:text-4xl lg:text-[2.66rem] text-foreground">Start your first desposit</h1>
                        <p className=" text-md text-center md:text-xl mx-3 lg:text-2xl text-muted">Mental Bank helps you reprogram your subconscious with daily mental deposits based on proven success pyschology.</p>
                    </div>
                    <div className=" flex flex-wrap gap-6 max-w-[25.375rem] mx-auto   ">
                            <a href="https://play.google.com/store/apps/details?id=com.bekur.mentalbank&hl=en" target="_blank" rel="noopener noreferrer"><PlayStore className="w-36  md:w-44 -mb-4 sm:-mb-2 md:mb-0" /></a>
                            <div className="relative group">
                                <button type="button" aria-disabled="true" disabled className="w-36 md:w-44 opacity-50 cursor-not-allowed">
                                    <AppStore className="w-36 md:w-44" />
                                </button>
                                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/90 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Coming soon
                                </span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta