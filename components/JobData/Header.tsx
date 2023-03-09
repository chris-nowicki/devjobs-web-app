import Image from 'next/image'
import Link from 'next/link'
// components
import ThemeSwitcher from '../FilterData/Header/ThemeSwitcher'

// icons
import { BGHeaderDesktop, BGHeaderTablet, BGHeaderMobile, Logo } from '../Icons'

export default function Header({ data }: { data: any }) {
    return (
        <div className="relative flex h-[326px] w-full flex-col items-center md:h-[261px]">
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
                    <ThemeSwitcher />
                </div>
            </div>
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
                        <span className="text-gray-300">{data.website}</span>
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
    )
}
