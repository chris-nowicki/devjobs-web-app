import { createContext, useState, useMemo } from 'react'

// Types
interface DataContextTypes {
    data: any
    setData: (data: any) => void
    mounted: any
    setMounted: (data: any) => void
}

// Create Context
export const DataContext = createContext<DataContextTypes>({
    data: null,
    setData: () => null,
    mounted: null,
    setMounted: () => null,
})

// Load Default Data
import DATA from '../json/data.json'
const defaultData = DATA

export function DataProvider({ children }: { children: JSX.Element }) {
    const [data, setData] = useState<any>(defaultData)
    const [mounted, setMounted] = useState<boolean>(false)

    const value: DataContextTypes = useMemo(
        () => ({
            data,
            setData,
            mounted,
            setMounted,
        }),
        [data, mounted]
    )

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
