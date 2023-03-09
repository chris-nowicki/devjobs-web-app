import JobData from '@/components/JobData/JobData'
// Load Default Data
import DATA from '../../../json/data.json'
const defaultData = DATA

async function getJob(id: number) {
    const res = defaultData.filter((job) => job.id == id)
    return res[0]
}

export default async function Home({ params: { id } }: { params: any }) {
    const jobData = await getJob(id)

    return (
        <div className="flex w-[375px] flex-col items-center md:w-[768px] lg:w-[1440px] overflow-x-hidden">
            <JobData data={jobData} />
        </div>
    )
}
