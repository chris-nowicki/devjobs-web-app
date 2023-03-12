'use client'
import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'

import { Sun, Moon } from '@/components/Icons'

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    const [enabled, setEnabled] = useState<boolean>(false)
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        const currentTheme = document.documentElement.classList

        setMounted(true)
        setEnabled(theme === 'dark' ? true : false)

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', ({ matches }) => {
                if (matches) {
                    if (!currentTheme.contains('dark')) {
                        setTheme('dark')
                        setEnabled(true)
                    }
                } else {
                    if (currentTheme.contains('dark')) {
                        setTheme('light')
                        setEnabled(false)
                    }
                }
            })
    }, [])

    const handleTheme = () => {
        setEnabled(enabled === false ? true : false)
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="flex items-center gap-4">
            <Sun />
            <div>
                {!mounted ? (
                    <Switch className="relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-white focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75">
                        <span className="sr-only">Use setting</span>
                        <span
                            aria-hidden="true"
                            className={`${'translate-x-[4px]'}
                                    pointer-events-none inline-block h-[14px] w-[14px]  rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                    </Switch>
                ) : (
                    <Switch
                        checked={enabled}
                        onChange={handleTheme}
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
                )}
            </div>
            <Moon />
        </div>
    )
}
