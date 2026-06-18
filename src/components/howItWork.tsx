import Image from "next/image"
import Header from "./header"


const HowItWork = () => {

    return (
        <div className="bg-[url('/how-it-work-bg.jpg')] bg-cover bg-center mt-8 pt-11 pb-[7.9625rem]">
            <div className="">
                <Header
                title="How it works"
            description="See How It Comes Together"
                />
            </div>
            <Image src="/how-it-work.png" width={1331} height={763} alt="" className="mx-auto mt-5 "/>
        </div>
    )
}

export default HowItWork