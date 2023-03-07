// Load Default Data
import DATA from '../json/data.json'
const defaultData = DATA

import { Scoot } from '@/components/Icons'

export default function Home() {
    return (
        <div className="mt-20 flex w-full max-w-[1110px] flex-wrap gap-[30px]">
            {defaultData.map((job: any, index: number) => (
                <div
                    key={index}
                    className="relative flex h-[253px] w-[350px] flex-col"
                >
                    <div className="z-10 ml-8 flex h-[50px] w-[50px] items-center justify-center rounded-[15px] bg-[#E99210]">
                        <Scoot />
                    </div>
                    <div className="absolute bottom-0 left-0 flex h-[228px] w-[350px] flex-col rounded-md bg-white px-8 pt-[49px] text-gray-300">
                        <div className="flex items-center">
                            {job.postedAt}
                            <span className="mx-3 h-1 w-1 rounded-full bg-gray-300" />
                            {job.contract}
                        </div>
                        <h3 className="mt-3 text-blue-100">{job.position}</h3>
                        <span className="mt-3">{job.company}</span>
                        <h4 className="mt-9 text-[#5964E0]">{job.location}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}
