'use client'
import Header from './Header'

export default function JobData({ data }: { data: any }) {

    return (
        <>
            <Header data={data} />

            {/* Job Data  */}
            <div className="mt-8 flex w-full max-w-[327px] flex-wrap md:mt-20 md:max-w-[689px] md:gap-[11px] lg:max-w-[1110px] lg:gap-[30px]"></div>
        </>
    )
}
