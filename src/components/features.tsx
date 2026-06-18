
import featureData from "@/data/featureData.json"
import Image from "next/image"
import Header from "./header"


const Features = () => {


    return (
        <div >
            <div className="mt-[3.8125rem] space-y-9">
               <Header
               title="Features"
            description="Train your brain for success"
               />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-9 max-w-[81.375rem] justify-items-center mx-auto">
                    {
                        featureData.map((data) => (
                            <div
                                key={data.id}
                                className="flex flex-col justify-between gap-8 bg-primary-text rounded-2xl p-6 border border-border max-w-[24.6875rem] h-full  shadow-[0px_4px_8px_0px_rgba(36,36,36,0.05)]"
                            >
                                {/* Top content */}
                                <div>
                                    <div className="bg-gray-100 text-gray-600  font-medium px-2 py-1 rounded-md max-w-[32px] text-center mb-4">
                                        {data.id}
                                    </div>
                                    <div>
                                        <h1 className="text-primary mb-3 text-lg">{data.title}</h1>
                                        <p className="text-muted text-4">{data.description}</p>
                                    </div>
                                </div>

                                {/* Bottom image */}
                                {data.image && (
                                    <div className="mt-auto max-w-[21.6875rem]">
                                        <Image
                                            src={data.image}
                                            width={347}
                                            height={200}
                                            alt={data.title}
                                            className="object-contain w-full"
                                        />
                                    </div>
                                )}
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Features