import Image from 'next/image';

const WineDescriptions = () => {
    return (
        <div className="">
            <div className="border-black border-t border-b px-5 pt-3 pb-5">
                <h1 className="text-5xl font-bold tracking-tight">Add Little. Gain Plenty.</h1>
            </div>

            <div className="md:grid grid-cols-4 md:border border-black">
                <div className="text-xl col-span-2 leading-5 font-ClearfaceStd-Regular text-deepBlueII p-5 space-y-4 md:text-3xl lg:text-4xl xl:text-5xl md:border-r border-black">
                    <h1>Prefer wines with a 
                    <span className="font-extrabold font-Founders-Grotesk-Mono-Bold-Regular text-deepBlue"> Lo-Fi, Natural, Minimal Additions</span> approach, where what the winemaker leaves 
                    <span className="font-ClearfaceStd-Italic font-thin text-deepBlue"> out</span> matters?</h1>

                    <h1>Browse the extensive collection of wines where the winemakers have a hands off approach, featuring 
                    <span className="font-extrabold font-Founders-Grotesk-Mono-Bold-Regular text-deepBlue"> Red</span>, White,
                    <span className="font-extrabold font-Founders-Grotesk-Mono-Bold-Regular text-deepBlue"> Skin</span> Contact and 
                    <span className="font-ClearfaceStd-Italic font-thin text-deepBlue"> Fizz</span> from both Australia and abroad.</h1>

                    <h1 className="font-ClearfaceStd-Regular leading-5 md:leading-none">Shop ➺ Lo-Fi & Natural Wine</h1>
                </div>

                <div className="border-r border-t border-b border-black pt-2 mt-10 pb-4 md:pb-0 md:mt-0 h-full flex flex-col">
                    <div className="pb-5 border-b border-black px-5">
                        <h1 className="md:text-xl xl:text-2xl">BIG ENERGY</h1>
                    </div>

                    <div className="px-5 pt-4 leading-4 flex flex-col group hover:bg-yellow-600 flex-1 cursor-pointer">
                        <div className="h-12">
                            <p className="text-sm font-bold">Scintilla Lou Glou Red Blend 2020</p>
                            <p className="text-sm font-bold">$31.00</p>
                            <p className="mb-5">
                                <span className="rounded-3xl border text-xxs font-bold text-center border-black px-2 md:px-3 md:text-xs group-hover:bg-black group-hover:text-brownish">Lo-fi / Natural</span>
                            </p>
                        </div>
                        <div className="pt-10 md:pt-36 lg:pt-10 relative">
                            <div className="pb-8 transform group-hover:scale-110 duration-500">
                                <Image 
                                    src="https://sometimes-always.imgix.net/2021/07/21-07-22-SA-Bottles-18.png?w=300&h=451&dpr=2.0000000298023224&crop=false&fit=max&auto=format"
                                    layout="responsive"
                                    width="235"
                                    height="357"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="h-12 mb-4 text-center flex justify-center items-center group-hover:bg-yellow-400 rounded-3xl cursor-pointer">
                            <p className="font-ClearfaceStd-Regular font-light border-b border-black group-hover:border-b-0">Add to cart</p>
                        </div>
                    </div>
                </div>

                <div className="border-b border-black pt-2 pb-4 md:pb-0 h-full flex flex-col">
                    <div className="pb-5 border-b border-black px-5">
                        <h1 className="md:text-xl xl:text-2xl">SAUVIGNON BLANC, BUT NOT AS YOU KNOW IT</h1>
                    </div>

                    <div className="px-5 pt-4 leading-4 flex flex-col group hover:bg-yellow-600 flex-1 cursor-pointer">
                        <div className="h-12">
                            <p className="text-sm font-bold">Sébastien Riffault Sancerre Auksinis Sauvignon Blanc 2017</p>
                            <p className="text-sm font-bold">$80.00</p>
                            <p className="mb-5">
                                <span className="rounded-3xl border text-xxs font-bold text-center border-black px-2 md:px-3 md:text-xs group-hover:bg-black group-hover:text-brownish">Lo-fi / Natural</span>
                            </p>
                        </div>
                        <div className="pt-10 md:pt-24 lg:pt-10 relative">
                            <div className="pb-8 transform group-hover:scale-110 duration-500">
                                <Image 
                                    src="https://sometimes-always.imgix.net/2021/07/21-07-14-SA-Bottles-2.png?w=300&h=450&dpr=2.0000000298023224&crop=false&fit=max&auto=format"
                                    layout="responsive"
                                    width="235"
                                    height="357"
                                    className="object-contain"
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

export default WineDescriptions
