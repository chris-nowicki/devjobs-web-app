import Image from 'next/image'
import Link from 'next/link'
// components
import ThemeSwitcher from '../FilterData/Header/ThemeSwitcher'

// icons
import { BGHeaderDesktop, BGHeaderTablet, BGHeaderMobile, Logo } from '../Icons'

export default function Header({ data }: { data: any }) {
    return (
        <div className="relative flex h-[202px] w-full flex-col items-center">
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
            <div className="absolute -bottom-[41px] flex h-[140px] w-full max-w-[327px] items-center rounded-bl-md rounded-br-md rounded-tr-md  bg-white dark:bg-blue-100 md:max-w-[689px]">
                <div
                    className="flex h-[140px] w-[140px] items-center justify-center rounded-bl-md"
                    style={{ backgroundColor: data.logoBackground }}
                >
                    <Image
                        width={81}
                        height={23}
                        src={data.logo}
                        alt={data.company}
                    />
                </div>
                <div className="flex w-[590px] items-center justify-between pl-10 pr-[43px]">
                    <div className="flex h-[56px] w-[78px] flex-col gap-[13px]">
                        <h2>{data.company}</h2>
                        <span>{data.website}</span>
                    </div>
                    <Link href={data.website} className="bg-[#5964E0] bg-opacity-10 hover:bg-opacity-[.35] rounded-[5px] px-5 py-4 text-[#5964E0] font-bold text-[16px]">
                        Company Site
                    </Link>
                </div>
            </div>
        </div>
    )
}
