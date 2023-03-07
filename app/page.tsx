import FilterData from '@/components/FilterData/FilterData'

// Load Default Data
import DATA from '../json/data.json'
const defaultData = DATA

export default function Home() {
    return (
        <div className="flex w-[375px] flex-col items-center md:w-[768px] lg:w-[1440px]">
            <FilterData data={defaultData} />
        </div>
    )
}
