import Image from 'next/image';

const LowBudgetDrinks = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:border-t md:border-b border-black">
            
            <div className="px-5 pt-4 leading-4 flex flex-col border-r border-t border-black pb-5 group hover:bg-yellow-600 flex-1 cursor-pointer">
                <div className="h-12">
                    <p className="tracking-tight md:tracking-normal text-sm font-bold">Lone Star Creek Vineyard Pinot Noir 2020</p>
                    <p className="text-sm font-bold">$27.00</p>
                    <p className="mb-5">
                        <span className="rounded-3xl border text-xxs font-bold text-center border-black px-2 md:px-3 md:text-xs group-hover:bg-black group-hover:text-brownish">Progressive</span>
                    </p>
                </div>
                <div className="pt-14 md:pt-10 relative">
                    <div className="pb-8 transform group-hover:scale-110 duration-500">
                        <Image 
                            src="https://sometimes-always.imgix.net/2021/07/21-07-16-SA-Bottles-7_1.png?w=400&h=560&dpr=1.25&crop=false&fit=max&auto=format"
                            layout="responsive"
                            width="192"
                            height="247"
                            className="object-contain"
                            alt="Lone-Star"
                        />
                    </div>
                </div>
                <div className="h-12 text-center flex justify-center items-center group-hover:bg-yellow-400 rounded-3xl cursor-pointer">
                    <p className="font-ClearfaceStd-Regular font-light border-b border-black group-hover:border-b-0">Add to cart</p>
                </div>
            </div>

            <div className="px-5 pt-4 leading-4 flex flex-col border-t border-black pb-5 md:border-r md:border-b group hover:bg-yellow-600 flex-1 cursor-pointer">
                <div className="h-12">
                    <p className="tracking-tight md:tracking-normal text-sm font-bold">Delinquente Pretty Boy Rosé 2021</p>
                    <p className="text-sm font-bold">$25.00</p>
                    <p className="mb-5">
                        <span className="rounded-3xl border text-xxs font-bold text-center border-black px-2 md:px-3 md:text-xs group-hover:bg-black group-hover:text-brownish">Lo-fi / Natural</span>
                    </p>
                </div>
                <div className="pt-14 md:pt-10 relative">
                    <div className="pb-8 transform group-hover:scale-110 duration-500">
                        <Image 
                            src="https://sometimes-always.imgix.net/2021/08/21-08-05-SA-Bottles-19_1.png?w=400&h=560&dpr=1.25&crop=false&fit=max&auto=format"
                            layout="responsive"
                            width="192"
                            height="247"
                            className="object-contain"
                            alt="Deliquent_Pretty_Boy_Rosé"
                        />
                    </div>
                </div>
                <div className="h-12 text-center flex justify-center items-center group-hover:bg-yellow-400 rounded-3xl cursor-pointer">
                    <p className="font-ClearfaceStd-Regular font-light border-b border-black group-hover:border-b-0">Add to cart</p>
                </div>
            </div>
            
            <div className="px-5 pt-4 leading-4 flex flex-col border-r border-t border-b border-black pb-5 group hover:bg-yellow-600 flex-1 cursor-pointer">
                <div className="h-12">
                    <p className="tracking-tight md:tracking-normal text-sm font-bold">Yangarra Estate Noir Red Blend 2019</p>
                    <p className="text-sm font-bold">$25.00</p>
                    <p className="mb-5">
                        <span className="rounded-3xl border text-xxs font-bold text-center border-black px-2 md:px-3 md:text-xs group-hover:bg-black group-hover:text-brownish">Progressive</span>
                    </p>
                </div>
                <div className="pt-14 md:pt-10 relative">
                    <div className="pb-8 transform group-hover:scale-110 duration-500">
                        <Image 
                            src="https://sometimes-always.imgix.net/2021/04/21-04-20-SA-Bottles-10.png?w=300&h=450&dpr=2.0000000298023224&crop=false&fit=max&auto=format"
                            layout="responsive"
                            width="192"
                            height="247"
                            className="object-contain"
                            alt="Yangarra_Estate_Noir"
                        />
                    </div>
                </div>
                <div className="h-12 text-center flex justify-center items-center group-hover:bg-yellow-400 rounded-3xl cursor-pointer">
                    <p className="font-ClearfaceStd-Regular font-light border-b border-black group-hover:border-b-0">Add to cart</p>
                </div>
            </div>

            <div className="px-5 pt-4 leading-4 flex flex-col border-t border-b border-black pb-5 md:border-r group hover:bg-yellow-600 flex-1 cursor-pointer">
                <div className="h-12">
                    <p className="tracking-tight md:tracking-normal text-sm font-bold">Express Winemakers Chenin Blanc 2020</p>
                    <p className="text-sm font-bold">$32.00</p>
                    <p className="mb-5">
                        <span className="rounded-3xl border text-xxs font-bold text-center border-black px-2 md:px-3 md:text-xs group-hover:bg-black group-hover:text-brownish">Lo-fi / Natural</span>
                    </p>
                </div>
                <div className="pt-14 md:pt-10 relative">
                    <div className="pb-8 transform group-hover:scale-110 duration-500">
                        <Image 
                            src="https://sometimes-always.imgix.net/2021/07/21-07-12-SA-Bottles-3.png?w=400&h=560&dpr=1.25&crop=false&fit=max&auto=format"
                            layout="responsive"
                            width="192"
                            height="247"
                            className="object-contain"
                            alt="Express_Winemakers_Chenin_Blanc"
                        />
                    </div>
                </div>
                <div className="h-12 text-center flex justify-center items-center group-hover:bg-yellow-400 rounded-3xl cursor-pointer">
                    <p className="font-ClearfaceStd-Regular font-light border-b border-black group-hover:border-b-0">Add to cart</p>
                </div>
            </div>
        </div>
    )
}

export default LowBudgetDrinks
