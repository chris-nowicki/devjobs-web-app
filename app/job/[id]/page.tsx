import Image from 'next/image'
import Link from 'next/link'

// components
import Header from '@/components/Header/Header'

// Load Default Data
import DATA from '../../../json/data.json'
const defaultData = DATA

async function getJob(id: number) {
    const res = defaultData.filter((job) => job.id == id)
    return res[0]
}

export default async function Home({ params: { id } }: { params: any }) {
    const data = await getJob(id)

    return (
        <div className="flex w-[375px] flex-col items-center overflow-x-hidden md:w-[768px] lg:w-[1440px]">
            <div className="relative flex h-[326px] w-full flex-col items-center md:h-[261px]">
                <Header />
                <div className="absolute bottom-0 flex h-full max-h-[205px] w-full max-w-[327px] flex-col items-center rounded-md bg-white dark:bg-blue-100 md:max-h-[140px] md:max-w-[689px] md:flex-row  md:rounded-bl-md md:rounded-br-md md:rounded-tr-md md:rounded-tl-none lg:max-w-[730px]">
                    <div
                        className="flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-[15px] md:h-[140px] md:w-[140px] md:-translate-y-0 md:-translate-x-0 md:rounded-bl-md md:rounded-tl-none md:rounded-tr-none md:rounded-br-none"
                        style={{ backgroundColor: data.logoBackground }}
                    >
                        <Image
                            width={81}
                            height={23}
                            src={data.logo}
                            alt={data.company}
                            className="hidden md:block"
                        />
                        <Image
                            width={40}
                            height={12}
                            src={data.logo}
                            alt={data.company}
                            className="block md:hidden"
                        />
                    </div>
                    <div className="flex w-[590px] flex-col items-center justify-between pl-10 pr-[43px] md:flex-row">
                        <div className="flex h-[56px] w-[78px] flex-col items-center gap-[13px] md:items-start">
                            <h2>{data.company}</h2>
                            <span className="text-gray-300">
                                {data.website}
                            </span>
                        </div>
                        <Link
                            href={data.website}
                            className="mt-6 flex h-12 w-[147px] items-center justify-center rounded-[5px] bg-[#5964E0] bg-opacity-10 text-[16px] font-bold text-[#5964E0] hover:bg-opacity-[.35] dark:bg-white dark:bg-opacity-10 dark:text-white dark:hover:bg-opacity-[.35] md:mt-0"
                            prefetch={false}
                        >
                            Company Site
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative mt-8 mb-36 flex w-full max-w-[327px] flex-col flex-wrap rounded-md bg-white py-10 px-6 dark:bg-blue-100 md:mb-44 md:max-w-[689px] md:gap-[11px] md:py-12 md:px-12 lg:max-w-[730px]">
                <div className="flex w-full flex-col items-center justify-between md:flex-row">
                    <div className="flex w-full flex-col">
                        <div className="flex items-center text-gray-300">
                            {data.postedAt}
                            <span className="mx-3 h-1 w-1 rounded-full bg-gray-300" />
                            {data.contract}
                        </div>
                        <h1 className="mt-2 hidden md:block">
                            {data.position}
                        </h1>
                        <h3 className="mt-2 block md:hidden">
                            {data.position}
                        </h3>

                        <h4 className=" mt-3 text-[#5964E0] md:mt-2">
                            {data.location}
                        </h4>
                    </div>
                    <Link
                        href={data.apply}
                        className="mt-[50px] flex h-12 w-full items-center justify-center rounded-[5px] bg-[#5964E0] text-white hover:bg-[#939BF4] md:mt-0 md:w-[141px]"
                        prefetch={false}
                    >
                        Apply Now
                    </Link>
                </div>
                <p className="mt-10 text-gray-300">{data.description}</p>

                {/* Requirements */}
                <h3 className="mt-10">Requirements</h3>
                <p className="mt-[23px] text-gray-300">
                    {data.requirements.content}
                </p>
                <ul className="ml-5 mt-6 flex list-outside list-disc flex-col gap-2 text-gray-300 marker:text-[#5964E0]">
                    {data.requirements.items.map(
                        (requirement: string, index: number) => (
                            <li key={index} className="pl-6">
                                {requirement}
                            </li>
                        )
                    )}
                </ul>

                {/* What Will You Do */}
                <h3 className="mt-10">What Will You Do</h3>
                <p className="mt-[23px] text-gray-300">{data.role.content}</p>
                <ol className="-ml-6 mt-6 flex flex-col gap-2 text-gray-300">
                    {data.role.items.map(
                        (requirement: string, index: number) => (
                            <li key={index} className="pl-6">
                                {requirement}
                            </li>
                        )
                    )}
                </ol>
            </div>

            {/* footer */}
            <div className="fixed bottom-0 left-0 flex h-[96px] w-screen justify-center  bg-white dark:bg-blue-100">
                <div className="flex w-[327px] items-center justify-between md:w-[689px] lg:w-[730px]">
                    <div className="hidden h-[51px] flex-col md:flex">
                        <h3>{data.position}</h3>
                        <span className="text-gray-300">{data.company}</span>
                    </div>
                    <Link
                        href={data.apply}
                        className="flex h-12 w-full items-center justify-center rounded-[5px] bg-[#5964E0] text-white hover:bg-[#939BF4] md:w-[141px]"
                        prefetch={false}
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </div>
    )
}
