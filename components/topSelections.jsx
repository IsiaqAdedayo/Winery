import Image from 'next/image';
import LowBudgetDrinks from './lowBudgetDrinks';
import SelectedDrinks from './selectedDrinks';
import WineDescriptions from './wineDescriptions';

const TopSelections = () => {
    return (
        <div>
            <div className="border-b border-black pt-2 pb-4 md:border-b-0">
                <div className="border-black px-4 pt-3 pb-5">
                    <h1 className="text-5xl font-bold">Top Selections $35 & Under</h1>
                </div>

                <LowBudgetDrinks />
            
                <div className="p-5 pt-10 pb-7 md:grid grid-cols-2 md:p-0 md:pt-0">
                    <div className="md:p-5">
                        <h1 className="md:hidden text-5xl font-FoundersGroteskRegular pb-5">Get the goods</h1>
                        <p className="md:hidden leading-4 text-sm">INFORMATION ON NEW RELEASES, LIMITED ALLOCATIONS, SPECIAL OFFERS AND ALL THE EXCLUSIVELY INCLUSIVE DRINKS YOU COULD EVER NEED.</p>
                        <div className="py-5 relative">
                            <Image 
                                src="https://sometimes-always.imgix.net/2020/04/SA-Sq-Phone.jpg?w=300&h=300&dpr=2.0000000298023224&crop=faces%2Cedges&fit=crop&auto=format"
                                layout="responsive"
                                width={100}
                                height={100}
                                className="rounded-3xl"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 font-ClearfaceStd-Regular font-bold md:p-5 md:border-l border-black md:pt-10">
                        <h1 className="hidden md:block text-6xl font-FoundersGroteskRegular pb-5">Get the goods</h1>
                        <p className="hidden md:block text-3xl">INFORMATION ON NEW RELEASES, LIMITED ALLOCATIONS, SPECIAL OFFERS AND ALL THE EXCLUSIVELY INCLUSIVE DRINKS YOU COULD EVER NEED.</p>
                        <input type="text" placeholder="Your email" className="py-4 p-2 pl-5 text-sm text-deepBlue bg-transparent border border-deepBlue placeholder-current outline-none placeholder-opacity-30 rounded-3xl" />
                        <input type="submit" value="Sign Me Up!"className="py-3 px-8 text-deepBlue bg-yellow-500 rounded-3xl" />
                    </div>
                </div>

                <WineDescriptions />


                <div className="p-4 relative border-b border-black w-full overflow-hidden">
                    <div className="pb relative w-full transition-all ease-in overflow-hidden h-0">
                        <img 
                            src="https://sometimes-always.imgix.net/2021/08/Sa-Soda-Club-2598.jpg?w=1500&h=475&dpr=1.25&crop=focalpoint&fit=crop&auto=format&fp-x=0.5125&fp-y=0.7095"
                            className="rounded-3xl object-cover w-full h-full absolute block"
                        ></img>
                    </div>
                    <div className="absolute wh top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all ease-in overflow-hidden">
                        <img
                            src="https://sometimesalways.com.au/content/uploads/2021/08/Homepage-SVG.svg"
                            className="object-cover w-full h-full "
                        ></img>
                    </div>
                </div>

                <div className="md:grid grid-cols-2">
                    <div className="p-4 relative border-b border-black text-sm space-y-5 md:border-r cursor-pointer">
                        <Image 
                            src="https://sometimes-always.imgix.net/2021/04/GP_Fino11.jpg?w=300&h=300&dpr=2.0000000298023224&crop=faces%2Cedges&fit=crop&auto=format"
                            layout="responsive"
                            width={100}
                            height={100}
                            className="rounded-3xl transform hover:scale-110 duration-500"
                        />
                        <div className="xl:text-base">
                            <h1 className="xl:text-2xl">RECIPE 03 ➺ DAVID SWAIN</h1>
                            <p>READ MORE</p>
                        </div>
                    </div>

                    <div className="p-4 relative border-b border-black text-sm space-y-5 cursor-pointer">
                        <Image 
                            src="https://sometimes-always.imgix.net/2021/08/Samantha-Payne-Sommelier-scaled.jpg?w=300&h=300&dpr=2.0000000298023224&crop=faces%2Cedges&fit=crop&auto=format"
                            layout="responsive"
                            width={100}
                            height={100}
                            className="rounded-3xl transform hover:scale-110 duration-500"
                        />
                        <div className="xl:text-base">
                            <h1 className="xl:text-2xl">GUEST SELECTOR ➺ SAMANTHA PAYNE</h1>
                            <p>READ MORE</p>
                        </div>
                    </div>
                </div>


                <div className="px-4 pt-3 pb-5">
                    <h1 className="text-5xl font-bold">Like Skin Contact?</h1>
                </div>

                <SelectedDrinks />

                <div className="md:p-4 md:text-3xl p-2">
                    <h1>WINERY FEATURES</h1>
                </div>

                <div className="grid md:grid-cols-2 md:border-t md:border-b border-black">
                    <div className="p-5 relative border-t border-b md:border-b-0 border-black text-sm space-y-5 md:border-r md:border-t-0 cursor-pointer">
                        <Image 
                            src="https://sometimes-always.imgix.net/2021/08/Artboard-12.png?w=300&h=300&dpr=2.0000000298023224&crop=faces%2Cedges&fit=crop&auto=format"
                            layout="responsive"
                            width={90}
                            height={90}
                            className="rounded-3xl transform hover:scale-110 duration-500 pb-4"
                        />
                        <div className="xl:text-base">
                            <h1 className="xl:text-2xl">THE CLUB</h1>
                            <p>READ MORE</p>
                        </div>
                    </div>

                    <div className="p-5 relative border- border-black text-sm space-y-5 cursor-pointer">
                        <Image 
                            src="https://sometimes-always.imgix.net/2020/10/Artboard-106.png?w=300&h=300&dpr=2.0000000298023224&crop=faces%2Cedges&fit=crop&auto=format"
                            layout="responsive"
                            width={90}
                            height={90}
                            className="rounded-3xl transform hover:scale-110 duration-500"
                        />
                        <div className="xl:text-base">
                            <h1 className="xl:text-2xl">ALWAYS LOYAL REWARDS</h1>
                            <p>READ MORE</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default TopSelections
