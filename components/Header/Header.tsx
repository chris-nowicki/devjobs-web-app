'use client'
import Link from 'next/link'

// components
import ThemeSwitcher from './ThemeSwitcher'

// icons
import { BGHeaderDesktop, BGHeaderTablet, BGHeaderMobile, Logo } from '../Icons'

export default function Header() {
    return (
        <>
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
        </>
    )
}
