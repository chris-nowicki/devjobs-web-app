import { Location, Check } from '../Icons'

export default function MobileMenu({ mobileMenu }: { mobileMenu: boolean }) {
    return (
        <>
            {mobileMenu && (
                <div className="absolute top-0 z-20 flex h-screen w-full items-center justify-center bg-[#000000]/40">
                    <div className="h-[217px] w-[327px] rounded-md bg-white dark:bg-blue-100">
                        <form className="flex w-full flex-col">
                            <div className="flex h-[72px] w-full items-center border-b border-[#6E8098] border-opacity-20 py-6 pl-6">
                                <Location />
                                <input
                                    type="text"
                                    placeholder="Filter by location..."
                                    className="border-none focus:ring-0 dark:bg-blue-100"
                                    size={16}
                                />
                            </div>
                            <div className="flex items-center py-6 pl-6">
                                {/* filter for full time jobs only */}
                                <div className="items-center md:flex">
                                    <input
                                        type="checkbox"
                                        id="checkbox"
                                    />
                                    <label htmlFor="checkbox">
                                        <div className="checkbox md:ml-5 lg:ml-8 dark:bg-[#FFFFFF]">
                                            <Check />
                                        </div>
                                        <span className='dark:text-white'>Full Time Only</span>
                                    </label>
                                </div>
                            </div>
                            <button className="mx-6 rounded-[5px] bg-[#5964E0] pb-3 pt-4 font-bold text-white hover:bg-[#939BF4] md:block md:px-[14px] lg:px-9 lg:pt-4 lg:pb-3">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
