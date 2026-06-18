import faq from "@/data/faq.json"
import Header from "./header"

const Faq = () => {
    return (
        <div className=" my-8">
            <div className="max-w-[49.25rem] mx-auto mb-6">
                <Header
                    title="FAQS"
                    description="Mental Bank. sound cool! what is it?"
                />

            </div>
            {/* <div className=" max-w-[81.25rem] mx-auto border-b border-border">
                {faq.map((item, index) => (
                    <div key={index} className="faq-item border-t border-border">
                        <details className=" py-7">
                            <summary>{item.question}</summary>
                            <p className="text-muted mt-2">{item.answer}</p>
                        </details>
                    </div>
                ))}
            </div> */}

            <div className="max-w-[81.25rem] mx-auto border-b-[0.0625rem] px-4 md:px-0 border-border">
                {faq.map((item, index) => (
                    <div key={index} className=" border-t-[0.0625rem] border-border last:border-b-0">
                        <details className="group py-4 sm:py-5 lg:py-7">
                            <summary className="flex items-center justify-between cursor-pointer list-none text-sm sm:text-base lg:text-lg text-gray-800 font-medium">
                                <span>{item.question}</span>
                                <span className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-sm transition-all duration-200 group-open:rotate-180">
                                    <svg
                                        className="w-4 h-3 font-bold text-secondary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-muted mt-2 text-sm sm:text-base leading-relaxed">{item.answer}</p>
                        </details>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq