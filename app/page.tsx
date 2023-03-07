import Header from '@/components/Header/Header'

// Load Default Data
import DATA from '../json/data.json'
const defaultData = DATA

export default function Home() {
    return (
        <div className="flex w-[375px] flex-col items-center md:w-[768px] lg:w-[1440px]">
            <Header />
            <div className="mt-8 flex w-full max-w-[327px] flex-wrap md:mt-20 md:max-w-[689px] md:gap-[11px] lg:max-w-[1110px] lg:gap-[30px]">
                {defaultData.map((job: any, index: number) => (
                    <div
                        key={index}
                        className="relative flex h-[253px] w-[327px] flex-col md:w-[339px] lg:w-[350px]"
                    >
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
                                    <h3 className="mt-3 text-blue-100 dark:text-white">
                                        {job.position}
                                    </h3>
                                    <span className="mt-3">{job.company}</span>
                                </div>
                                <h4 className=" text-[#5964E0]">
                                    {job.location}
                                </h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
