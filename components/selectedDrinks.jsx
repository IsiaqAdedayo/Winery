import Image from 'next/image'

const SelectedDrinks = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:border-t md:border-b border-black">
            <div className="px-5 pt-4 leading-4 flex flex-col border-r border-t border-black pb-5 group hover:bg-yellow-600 flex-1 cursor-pointer">
                <div className="h-12">
                    <p className="tracking-tight text-sm font-bold">Unico Zelo Esoterico Skin Contact White Blend 2020</p>
                    <p className="text-sm font-bold">$24.00</p>
                    <p className="mb-5">
                        <span className="rounded-3xl border text-xxs font-bold text-center border-black px-2">Progressive</span>
                    </p>
                </div>
                <div className="pt-20 relative">
                    <div className="pb-8 transform group-hover:scale-110 duration-500">
                        <Image 
                            src="https://sometimes-always.imgix.net/2021/04/21-04-29-Bottles-1.png?w=200&h=301&dpr=2.0000000298023224&crop=false&fit=max&auto=format"
                            layout="responsive"
                            width="192"
                            height="247"
                            className="object-contain"
                            alt="Unico-Zelo"
                        />
                    </div>
                </div>
                <div className="h-12 text-center flex justify-center items-center group-hover:bg-yellow-400 rounded-3xl cursor-pointer">
                    <p className="font-ClearfaceStd-Regular font-light border-b border-black group-hover:border-b-0">Add to cart</p>
                </div>
            </div>

            <div className="px-5 pt-4 leading-4 flex flex-col border-t border-black pb-5 md:border-r md:border-b group hover:bg-yellow-600 flex-1 cursor-pointer">
                <div className="h-12">
                    <p className="tracking-tight text-sm font-bold">Pacina La Cerretina  2018</p>
                    <p className="text-sm font-bold">$60.00</p>
                    <p className="mb-5">
                        <span className="rounded-3xl border text-xxs font-bold text-center border-black px-2">Lo-fi / Natural</span>
                    </p>
                </div>
                <div className="pt-20 relative">
                    <div className="pb-8 transform group-hover:scale-110 duration-500">
                        <Image 
                            src="https://sometimes-always.imgix.net/2021/04/21-04-22-SA-Bottles-2.png?w=200&h=300&dpr=2.0000000298023224&crop=false&fit=max&auto=format"
                            layout="responsive"
                            width="192"
                            height="247"
                            className="object-contain"
                            alt="Pacina-La-Cerretina"
                        />
                    </div>
                </div>
                <div className="h-12 text-center flex justify-center items-center group-hover:bg-yellow-400 rounded-3xl cursor-pointer">
                    <p className="font-ClearfaceStd-Regular font-light border-b border-black group-hover:border-b-0">Add to cart</p>
                </div>
            </div>
            
            <div className="px-5 pt-4 leading-4 flex flex-col border-r border-t border-b border-black pb-5 group hover:bg-yellow-600 flex-1 cursor-pointer">
                <div className="h-12">
                    <p className="tracking-tight text-sm font-bold">Monastero Suore Cistercensi Ruscum Trebbiano / Malvasia / Verdicchio 2019</p>
                    <p className="text-sm font-bold">$52.00</p>
                    <p className="mb-5">
                        <span className="rounded-3xl border text-xxs font-bold text-center border-black px-2">Lo-fi / Natural</span>
                    </p>
                </div>
                <div className="pt-20 relative">
                    <div className="pb-8 transform group-hover:scale-110 duration-500">
                        <Image 
                            src="https://sometimes-always.imgix.net/2021/07/21-07-23-SA-Bottles-1.png?w=200&h=301&dpr=2.0000000298023224&crop=false&fit=max&auto=format"
                            layout="responsive"
                            width="192"
                            height="247"
                            className="object-contain"
                            alt="Monastero"
                        />
                    </div>
                </div>
                <div className="h-12 text-center flex justify-center items-center group-hover:bg-yellow-400 rounded-3xl cursor-pointer">
                    <p className="font-ClearfaceStd-Regular font-light border-b border-black group-hover:border-b-0">Add to cart</p>
                </div>
            </div>

            <div className="px-5 pt-4 leading-4 flex flex-col border-t border-b border-black pb-5 md:border-r group hover:bg-yellow-600 flex-1 cursor-pointer">
                <div className="h-12">
                    <p className="tracking-tight text-sm font-bold">Dormilona Orenji Semillon / Sauvignon Blanc 2021</p>
                    <p className="text-sm font-bold">$28.00</p>
                    <p className="mb-5">
                        <span className="rounded-3xl border text-xxs font-bold text-center border-black px-2">Lo-fi / Natural</span>
                    </p>
                </div>
                <div className="pt-20 relative">
                    <div className="pb-8 transform group-hover:scale-110 duration-500">
                        <Image 
                            src="https://sometimes-always.imgix.net/2021/08/21-08-10-SA-Bottles-292.png?w=200&h=300&dpr=2.0000000298023224&crop=false&fit=max&auto=format"
                            layout="responsive"
                            width="192"
                            height="247"
                            className="object-contain"
                            alt="Dormilona"
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

export default SelectedDrinks
