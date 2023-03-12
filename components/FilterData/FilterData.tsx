'use client'
import { useMemo, useState } from 'react'
import Filter from './Filter'
import Link from 'next/link'

export default function FilterData({ data }: { data: any }) {
    const [viewCount, setViewCount] = useState(12)
    const [filteredData, setFilteredData] = useState(data)
    const [viewData, setViewData] = useState(
        filteredData.length > 12
            ? filteredData.slice(0, viewCount)
            : filteredData
    )

    useMemo(() => {
        setViewData(
            filteredData.length > 12
                ? filteredData.slice(0, viewCount)
                : filteredData
        )
    }, [filteredData])

    const handleViewCount = () => {
        let updatedViewCount = 0

        if (viewCount + 6 > filteredData.length) {
            updatedViewCount = filteredData.length - viewCount + viewCount
        } else {
            updatedViewCount = viewCount + 6
        }
        setViewCount(updatedViewCount)
        setViewData(filteredData.slice(0, updatedViewCount))
    }

    return (
        <>
            <Filter data={data} setFilteredData={setFilteredData} />

            {/* list of filtered/unfiltered jobs  */}
            <div className="job mt-8 mb-14 flex w-full max-w-[327px] flex-wrap gap-6 md:mt-20 md:max-w-[689px] md:gap-[11px] lg:max-w-[1110px] lg:gap-[30px]">
                {viewData.map((job: any, index: number) => (
                    <Link
                        key={index}
                        href={`/job/${job.id}`}
                        className="jobLink"
                    >
                        <div className="relative flex h-[253px] w-[327px] flex-col md:w-[339px] lg:w-[350px]">
                            <div
                                style={{ backgroundColor: job.logoBackground }}
                                className={`z-10 ml-8 flex h-[50px] w-[50px] items-center justify-center rounded-[15px]`}
                            >
                                <img src={job.logo} />
                            </div>
                            <div className="absolute bottom-0 left-0  h-[228px] w-[327px] rounded-md bg-white px-8 pt-[49px] pb-8 text-gray-300 dark:bg-blue-100 md:w-[339px] lg:w-[350px]">
                                <div className="flex h-[147px] w-[286px] flex-col justify-between lg:w-[266px]">
                                    <div className="flex flex-col">
                                        <div className="flex items-center text-gray-300">
                                            {job.postedAt}
                                            <span className="mx-3 h-1 w-1 rounded-full bg-gray-300" />
                                            {job.contract}
                                        </div>
                                        <h3 className="position mt-3 text-blue-100 hover:text-gray-300 dark:text-white">
                                            {job.position}
                                        </h3>
                                        <span className="mt-3">
                                            {job.company}
                                        </span>
                                    </div>
                                    <h4 className=" text-[#5964E0]">
                                        {job.location}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {filteredData.length > 12 && viewCount != filteredData.length && (
                <div>
                    <button
                        className="mb-[105px] flex h-12 w-[141px] items-center justify-center rounded-[5px] bg-[#5964E0] text-white hover:bg-[#939BF4]"
                        onClick={handleViewCount}
                    >
                        Load More
                    </button>
                </div>
            )}
        </>
    )
}
