'use client'
import { useState } from 'react'
import { Switch } from '@headlessui/react'

// Load Default Data
import DATA from '../../json/data.json'
const defaultData = DATA

// icons
import {
    BGHeaderDesktop,
    BGHeaderTablet,
    BGHeaderMobile,
    Logo,
    Sun,
    Moon,
    Search,
    Location,
    Check,
    Filter,
} from '../Icons'

export default function Header() {
    const [enabled, setEnabled] = useState<boolean>(false)
    const [mobileMenu, setMobileMenu] = useState<boolean>(false)

    const handleMobileMenu = (e: any) => {
        e.preventDefault()
        setMobileMenu(mobileMenu === false ? true : false)
    }

    return (
        <div className="relative flex h-[202px] w-full max-w-[375px] flex-col items-center md:max-w-[768px] lg:max-w-[1440px]">
            {mobileMenu && (
                <div className="absolute top-0 z-20 flex h-screen w-full items-center justify-center bg-[#000000]/40">
                    <div className="h-[217px] w-[327px] rounded-md bg-white">
                        <form className="flex w-full flex-col">
                            <div className="flex h-[72px] w-full items-center border-b border-[#6E8098] border-opacity-20 py-6 pl-6">
                                <Location />
                                <input
                                    type="text"
                                    placeholder="Filter by location..."
                                    className="border-none focus:ring-0"
                                    size={16}
                                />
                            </div>
                            <div className="flex items-center py-6 pl-6">
                                {/* filter for full time jobs only */}
                                <div className="items-center md:flex">
                                    <input type="checkbox" id="checkbox" />
                                    <label htmlFor="checkbox">
                                        <div className="checkbox md:ml-5 lg:ml-8">
                                            <Check />
                                        </div>
                                        <span>Full Time Only</span>
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
            <div className="-z-10">
                <div className="absolute top-0 left-0 hidden lg:block">
                    <BGHeaderDesktop />
                </div>
                <div className="absolute left-0 top-0 hidden md:block lg:hidden">
                    <BGHeaderTablet />
                </div>
                <div className="absolute top-0 left-0 md:hidden">
                    <BGHeaderMobile />
                </div>
            </div>
            <div className="flex w-full max-w-[327px] flex-col items-center md:max-w-[689px] lg:max-w-[1110px]">
                <div className="mt-[45px] flex w-full justify-between">
                    <Logo />
                    <div className="flex items-center gap-4">
                        <Sun />
                        <div>
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className="relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-white focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`${
                                        enabled
                                            ? 'translate-x-[26px]'
                                            : 'translate-x-[4px]'
                                    }
                                    pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-[#5964E0] shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                        </div>
                        <Moon />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 flex h-[80px] w-full max-w-[327px] items-center rounded-md bg-white md:max-w-[689px] md:pl-6 lg:max-w-[1110px] lg:pl-8">
                <form className="relative flex h-full w-full justify-between">
                    <div className="flex items-center">
                        {/* search by title, companies, expertise */}
                        <div className="flex h-full items-center border-[#6E8098] border-opacity-20 text-[#5964E0] md:w-[198px] md:border-r lg:w-[454px]">
                            <div className="hidden md:block">
                                <Search />
                            </div>
                            {/* desktop */}
                            <input
                                type="text"
                                placeholder="Filter by title, companies, expertise..."
                                className="hidden border-none focus:ring-0 lg:block"
                                size={29}
                            />
                            {/* tablet */}
                            <input
                                type="text"
                                placeholder="Filter by title..."
                                className="hidden border-none focus:ring-0 md:block lg:hidden"
                                size={14}
                            />
                            {/* mobile */}
                            <input
                                type="text"
                                placeholder="Filter by title..."
                                className="ml-4 border-none focus:ring-0 md:hidden "
                                size={18}
                            />
                        </div>

                        {/* search by location */}
                        <div className="hidden h-full items-center border-r border-[#6E8098] border-opacity-20 md:ml-6 md:flex md:w-[189px] lg:ml-0 lg:w-[277px] lg:pl-[23px]">
                            <Location />
                            <input
                                type="text"
                                placeholder="Filter by location..."
                                className="border-none focus:ring-0"
                                size={14}
                            />
                        </div>

                        {/* filter for full time jobs only */}
                        <div className="hidden items-center md:flex">
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">
                                <div className="checkbox md:ml-5 lg:ml-8">
                                    <Check />
                                </div>
                                <span className="hidden lg:block">
                                    Full Time Only
                                </span>
                                <span className="hidden md:block lg:hidden">
                                    Full Time
                                </span>
                            </label>
                        </div>
                        <button className="my-4 ml-[26px] hidden rounded-[5px] bg-[#5964E0] font-bold text-white hover:bg-[#939BF4] md:block md:px-[14px] md:py-4 lg:px-9 lg:pt-4 lg:pb-3">
                            Search
                        </button>
                    </div>
                    <div className="flex items-center gap-6 pr-4 md:hidden">
                        <button onClick={(e) => handleMobileMenu(e)}>
                            <Filter />
                        </button>
                        <button className="flex h-12 w-12 items-center justify-center rounded-[5px] bg-[#5964E0] text-white">
                            <Search />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
