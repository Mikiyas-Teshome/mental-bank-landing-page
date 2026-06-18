import Image from "next/image"
import AppStore from "./Icons/AppStore"
import Logo from "./Icons/logo"
import PlayStore from "./Icons/PlaySore"
import MainHeader from "./mainHeader"
import { bebasNeue } from "@/app/fonts"


const Hero = () => {

    return (
        <div className="flex flex-col gap-7 relative bg-[url('/bg.svg')] bg-cover bg-center overflow-x-hidden"   >
            <MainHeader />
            <div className=" flex flex-col items-center w-full max-w-[48.125rem] mx-auto mt-[3.1rem] space-y-[3.5rem]">
                <div className=" flex flex-col  gap-8 w-full">
                    {/* LOGO */}
                    <div className="mx-auto">
                        <Logo fill="#0F0D15" width="47" height="40" className="" />
                    </div>
                    <div className=" space-y-8">
                        <h1 className={`${bebasNeue.className} text-primary text-center text-3xl sm:text-5xl md:text-6xl lg:text-[4.375rem] mx-8 sm:mx-32 md:mx-20 lg:mx-[3.90625rem] items-center uppercase leading-none `}>Deposite Your Dreams. Withdraw A New Reality.</h1>
                        <p className=" text-xs text-center md:text-[1rem] text-muted mx-6 xl:mx-3 lg:max-w-full  ">The Mental Bank app helps you rewrite your subconcious, one daily journey entry at a time-turning goals into habits into results.</p>
                    </div>
                </div>

                {/* FOR DOWNLOAD */}
                <div className=" flex flex-wrap gap-6 max-w-[25.375rem] mx-auto  ">
                    <a href=""><PlayStore className="w-36  md:w-44 -mb-4 sm:-mb-2 md:mb-0" /></a>
                    <a href=""><AppStore className="w-36 md:w-44" /></a>
                </div>
            </div>
            <div className=" mx-auto">
                <Image src="/heroImage.png" alt="" width={1263} height={434} />
            </div>
            {/* Overlay */}
            {/* <div className="absolute bottom-0 left-0 w-full h-[60px] [mask-image:linear-gradient(to_top,white,transparent)] backdrop-blur-lg"></div> */}
            <div className="w-full absolute bottom-0 bg-gradient-to-b from-transparent to-background/80 backdrop-blur-[1px] h-32 "></div>
        </div>
    )
}


export default Hero