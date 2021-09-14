import Image from 'next/image';

const Banner = () => {
    return (
        <div className="">
            <div className="p-4 relative border-b border-black w-full overflow-hidden">
                <div className="pb relative w-full transition-all ease-in overflow-hidden h-0">
                    <img 
                        src="https://sometimes-always.imgix.net/2021/08/Sa-Soda-Club-2408.jpg?w=1500&h=475&dpr=1.25&crop=focalpoint&fit=crop&auto=format&fp-x=0.43&fp-y=0.5332"
                        className="rounded-3xl object-cover w-full h-full absolute block"
                        alt="Soda-Club"
                    >
                    </img>
                </div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-Anfisa-Grotesk text-yellow-600 text-7xl xl:text-9xl">Winery</span>
            </div>

            <div className="md:grid grid-cols-4">
                <div className="px-5 py-4 pb-10 space-y-5 col-span-2 md:border-b md:border-r border-black">
                    <h1 className="text-xl leading-5 font-ClearfaceStd-Regular text-deepBlueII md:text-3xl lg:text-4xl xl:text-5xl xl:leading-snug">
                        <span className="font-extrabold font-Founders-Grotesk-Mono-Bold-Regular text-deepBlue">Winery</span> is a boutique
                        <span className=" font-ClearfaceStd-Italic font-thin text-deepBlue"> online</span> bottle shop for
                        <span className=" font-ClearfaceStd-Italic font-thin text-deepBlue"> interesting drinks</span> from all walks of life and
                        <span className="font-extrabold font-Founders-Grotesk-Mono-Bold-Regular text-deepBlue"> schools of thought</span>. We feature lo-fi 
                        <span className="font-ClearfaceStd-Italic font-thin text-deepBlue"> cult</span> producers alongside
                        <span className="font-extrabold font-Founders-Grotesk-Mono-Bold-Regular text-deepBlue"> proven classics</span> that no wine collection would be
                        <span className="font-ClearfaceStd-Italic font-thin text-deepBlue"> complete</span> without.
                    </h1>
                    <h1 className=" font-ClearfaceStd-Regular leading-5 text-lg md:text-4xl xl:text-5xl">
                        Free Express Shipping ➺ On All Orders Australia-wide
                    </h1>
                </div>

                <div className="border-r border-t border-b border-black pt-2 h-full flex flex-col">
                    <div className="pb-5 xl:pb-7 border-b border-black px-5">
                        <h1 className="xl:text-xl">THE SOMETIMES BOTTLE</h1>
                    </div>

                    <div className="px-5 py-4 leading-4 flex flex-col group hover:bg-yellow-600 flex-1 cursor-pointer">
                        <div className="h-12">
                            <p className="text-sm font-bold">By Farr Farrside Pinot Noir 2019</p>
                            <p className="text-sm font-bold">$95.00</p>
                            <p className="mb-5">
                                <span className="rounded-3xl border text-xxs font-bold text-center border-black px-2 md:px-3 md:text-xs group-hover:bg-black group-hover:text-brownish">Traditional</span>
                            </p>
                        </div>
                        <div className="pt-10 md:pt-24 lg:pt-10 relative">
                            <div className="pb-8 transform group-hover:scale-110 duration-500">
                                <Image 
                                    src="https://sometimes-always.imgix.net/2021/08/21-08-18-SA-Bottles-420-Edit_1.png?w=300&h=451&dpr=2.0000000298023224&crop=false&fit=max&auto=format"
                                    layout="responsive"
                                    width="192"
                                    height="247"
                                    className="object-contain"
                                    alt="Pinot-Noir"
                                />
                            </div>
                        </div>
                        <div className="h-12 mb-4 text-center flex justify-center items-center group-hover:bg-yellow-400 rounded-3xl cursor-pointer">
                            <p className="font-ClearfaceStd-Regular font-light border-b border-black group-hover:border-b-0">Add to cart</p>
                        </div>
                    </div>
                </div>
  
                <div className="border-b border-black pt-2 pb-2 md:pb-0 h-full flex flex-col">
                    <div className="pb-5 xl:pb-7 border-b border-black px-5">
                        <h1 className="xl:text-xl">The Always Go-To</h1>
                    </div>

                    <div className="px-5 pt-4 leading-4 flex flex-col group hover:bg-yellow-600 flex-1 cursor-pointer">
                        <div className="h-12">
                            <p className="text-sm font-bold">Claus Preisinger Puszta Libre! Zweigelt / St Laurent / Pinot Noir 2020</p>
                            <p className="text-sm font-bold">$33.00</p>
                            <p className="mb-5">
                                <span className="rounded-3xl border text-xxs font-bold text-center border-black px-2 md:px-3 md:text-xs group-hover:bg-black group-hover:text-brownish">Lo-fi / Natural</span>
                            </p>
                        </div>
                        <div className="pt-10 md:pt-28 lg:pt-10 relative">
                            <div className="pb-8 transform group-hover:scale-110 duration-500">
                                <Image 
                                    src="https://sometimes-always.imgix.net/2021/08/21-08-11-SA-Bottles-312.png?w=400&h=600&dpr=2.0000000298023224&crop=false&fit=max&auto=format"
                                    layout="responsive"
                                    width="192"
                                    height="247"
                                    className="object-contain"
                                    alt="Claus-Preisinger-Puszta-Libre"
                                />
                            </div>
                        </div>
                        <div className="h-12 mb-4 text-center flex justify-center items-center group-hover:bg-yellow-400 rounded-3xl cursor-pointer">
                            <p className="font-ClearfaceStd-Regular font-light border-b border-black group-hover:border-b-0">Add to cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
