import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <>
            <div className="flex xl:hidden justify-between  border-b border-black text-deepBlue h-16 sticky top-0 z-40 bg-brownish">
                <h1 className="font-Anfisa-Grotesk hover:text-yellow-600 pl-5 text-5xl py-2 cursor-pointer opacity-90">Winery</h1>

                <div className="grid grid-cols-3 mr-2 w-44">
                    <div className="border-r border-l border-black grid place-items-center">
                        <FontAwesomeIcon icon={faSearch} className="w-12 h-5"/>
                    </div>
                    <div className="w-full">
                        <svg className="h-full w-full" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                            y="0px" viewBox="0 0 100 100" style={{enableBackground:"new 0 0 100 100", color:"#ee7623"}} xmlSpace="preserve">
                            <path className="fill-current bg-yellow-600 stroke-1 stroke-black" d="M50.042,1C49.958,28.067,28.067,49.958,1,49.958v0.085c27.067,0,48.958,21.891,48.958,48.958h0.085
                            c0-27.067,21.891-48.958,48.958-48.958v-0.085C71.933,49.958,50.042,28.067,50.042,1z" />
                        </svg>
                    </div>
                    <div className="border-l border-black font-bold grid place-items-center">
                        <h1 className="text-lg">Menu</h1>
                    </div>
                </div>
            </div>

            <div className="hidden xl:flex justify-between  border-b border-black text-deepBlue h-16 sticky top-0 z-40 bg-brownish">
                <h1 className="font-Anfisa-Grotesk hover:text-yellow-600 pl-5 text-5xl py-2 cursor-pointer opacity-90">Winery</h1>

                <div className="flex justify-between items-center tracking-wider space-x-2">
                    <h1 className="px-4 border rounded-3xl border-transparent hover:border-black cursor-pointer">New</h1>
                    <h1 className="px-4 border rounded-3xl border-transparent hover:border-black cursor-pointer">Red</h1>
                    <h1 className="px-4 border rounded-3xl border-transparent hover:border-black cursor-pointer">White</h1>
                    <h1 className="px-4 border rounded-3xl border-transparent hover:border-black cursor-pointer">Orange & Skinsy</h1>
                    <h1 className="px-4 border rounded-3xl border-transparent hover:border-black cursor-pointer">Rosé</h1>
                    <h1 className="px-4 border rounded-3xl border-transparent hover:border-black cursor-pointer">Sparkling</h1>
                    <h1 className="px-4 border rounded-3xl border-transparent hover:border-black cursor-pointer">Mixed Packs</h1>
                    <h1 className="px-4 border rounded-3xl border-transparent hover:border-black cursor-pointer">Non-Alc</h1>
                    <h1 className="px-4 border rounded-3xl border-transparent hover:border-black cursor-pointer">The Club</h1>
                    <h1 className="px-4 border rounded-3xl border-transparent hover:border-black cursor-pointer">Account</h1>
                </div>

                <div className="grid grid-cols-2 w-32">
                    <div className="border-r border-l border-black grid place-items-center hover:bg-green-700 hover:bg-opacity-40 cursor-pointer">
                        <FontAwesomeIcon icon={faSearch} className="w-12 h-5"/>
                    </div>
                    <div className="w-full group hover:bg-yellow-600 cursor-pointer">
                        <svg className="h-full w-full origin-center group-hover:transition group-hover:duration-700 duration-700 ease-in-out group-hover:rotate-360" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                            y="0px" viewBox="0 0 100 100" style={{enableBackground:"new 0 0 100 100", color:"#ee7623"}} xmlSpace="preserve">
                            <path className="fill-current stroke-1 group-hover:fill-brownish stroke-black" d="M50.042,1C49.958,28.067,28.067,49.958,1,49.958v0.085c27.067,0,48.958,21.891,48.958,48.958h0.085
                            c0-27.067,21.891-48.958,48.958-48.958v-0.085C71.933,49.958,50.042,28.067,50.042,1z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="border-b border-black text-deepBlue">
                <h1 className="text-center font-ClearfaceStd-Regular text-sm xl:text-base tracking-wider p-2 opacity-70">➺ Free Shipping On All Orders Australia-Wide ➺ </h1>
            </div>
        </>
    )
}

export default Header;
