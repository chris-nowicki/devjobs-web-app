'use client'
import { useState } from 'react'
import Link from 'next/link'

// components
import MobileMenu from './MobileMenu'
import ThemeSwitcher from './ThemeSwitcher'

// icons
import {
    BGHeaderDesktop,
    BGHeaderTablet,
    BGHeaderMobile,
    Logo,
    Search,
    Location,
    Check,
    Filter,
} from '../../Icons'

export default function Header({
    data,
    setFilteredData,
}: {
    data: any
    setFilteredData: any
}) {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false)
    const [params, setParams] = useState<{
        filter: string
        location: string
        fullTime: string
    }>({
        filter: '',
        location: '',
        fullTime: '',
    })

    const handleMobileMenu = (e: any) => {
        e.preventDefault()
        setMobileMenu(mobileMenu === false ? true : false)
    }

    const handleFilter = (e: any) => {
        e.preventDefault()
        const filter = [...data]
        const result = filter
            .filter(
                (job) =>
                    job.position
                        .toLowerCase()
                        .includes(params.filter.toLowerCase()) ||
                    job.company
                        .toLowerCase()
                        .includes(params.filter.toLowerCase())
            )
            .filter((job) =>
                job.location
                    .toLowerCase()
                    .includes(params.location.toLowerCase())
            )
            .filter((job) => job.contract.includes(params.fullTime))
        setFilteredData(result)
    }

    return (
        <div className="relative flex h-[202px] w-full flex-col items-center">
            <MobileMenu
                mobileMenu={mobileMenu}
                setMobileMenu={setMobileMenu}
                handleFilter={(e: any) => handleFilter(e)}
                params={params}
                setParams={setParams}
            />
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
                    <Link href="/">
                        <Logo />
                    </Link>
                    <ThemeSwitcher />
                </div>
            </div>
            <div className="absolute bottom-0 flex h-[80px] w-full max-w-[327px] items-center rounded-md bg-white dark:bg-blue-100 md:max-w-[689px] md:pl-6 lg:max-w-[1110px] lg:pl-8">
                <form
                    className="relative flex h-full w-full justify-between"
                    onSubmit={handleFilter}
                >
                    <div className="flex items-center">
                        {/* search by title, companies, expertise */}
                        <div className="flex h-full items-center border-[#6E8098] border-opacity-20 text-[#5964E0] dark:bg-blue-100 md:w-[198px] md:border-r lg:w-[454px] ">
                            <div className="hidden md:block">
                                <Search />
                            </div>
                            {/* desktop */}
                            <input
                                type="text"
                                placeholder="Filter by title, companies, expertise..."
                                className="hidden border-none focus:ring-0 dark:bg-blue-100 lg:block"
                                name="filter"
                                value={params.filter}
                                onChange={(e) =>
                                    setParams({
                                        ...params,
                                        filter: e.target.value,
                                    })
                                }
                                size={31}
                            />
                            {/* tablet */}
                            <input
                                type="text"
                                placeholder="Filter by title..."
                                className="hidden border-none focus:ring-0 dark:bg-blue-100 md:block lg:hidden"
                                value={params.filter}
                                onChange={(e) =>
                                    setParams({
                                        ...params,
                                        filter: e.target.value,
                                    })
                                }
                                size={14}
                            />
                            {/* mobile */}
                            <input
                                type="text"
                                placeholder="Filter by title..."
                                className="ml-4 border-none focus:ring-0 dark:bg-blue-100 md:hidden"
                                value={params.filter}
                                onChange={(e) =>
                                    setParams({
                                        ...params,
                                        filter: e.target.value,
                                    })
                                }
                                size={18}
                            />
                        </div>

                        {/* search by location */}
                        <div className="hidden h-full items-center border-r border-[#6E8098] border-opacity-20 md:ml-6 md:flex md:w-[189px] lg:ml-0 lg:w-[277px] lg:pl-[23px]">
                            <Location />
                            <input
                                type="text"
                                placeholder="Filter by location..."
                                className="border-none focus:ring-0 dark:bg-blue-100"
                                name="location"
                                value={params.location}
                                onChange={(e) =>
                                    setParams({
                                        ...params,
                                        location: e.target.value,
                                    })
                                }
                                size={16}
                            />
                        </div>

                        {/* filter for full time jobs only */}
                        <div className="hidden items-center md:flex">
                            <input
                                type="checkbox"
                                name="fullTime"
                                id="checkbox"
                                checked={
                                    params.fullTime === '' ? false : true
                                }
                                onChange={(e) => {
                                    const filter = e.target.checked
                                        ? 'Full Time'
                                        : ''
                                    setParams({ ...params, fullTime: filter })
                                }}
                            />
                            <label htmlFor="checkbox">
                                <div className="checkbox dark:bg-white md:ml-5 lg:ml-8">
                                    <Check />
                                </div>
                                <span className="hidden dark:text-white lg:block">
                                    Full Time Only
                                </span>
                                <span className="hidden dark:text-white md:block lg:hidden">
                                    Full Time
                                </span>
                            </label>
                        </div>
                        <button className="my-4 ml-[26px] hidden rounded-[5px] bg-[#5964E0] font-bold text-white hover:bg-[#939BF4] md:block md:px-[14px] md:py-4 lg:px-9 lg:pt-4 lg:pb-3">
                            Search
                        </button>
                    </div>
                    <div className="flex items-center gap-6 pr-4 md:hidden">
                        <button
                            type="button"
                            onClick={(e) => handleMobileMenu(e)}
                        >
                            <Filter />
                        </button>
                        <button
                            type="submit"
                            className="flex h-12 w-12 items-center justify-center rounded-[5px] bg-[#5964E0] text-white"
                        >
                            <Search />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
