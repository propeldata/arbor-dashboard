'use client'

import { cn } from "@/lib/utils"

interface StatBox {
  category: string
  yourRate: number
  nationalRate: number
}

interface CountBox {
  category: string
  yourCount: number
  nationalCount: number
}

interface StatisticsGridProps {
  statistics: StatBox[]
  counts: CountBox[]
}

export function StatisticsGrid({ statistics, counts }: StatisticsGridProps) {
  return (
    <div className="grid grid-cols-9 gap-2">
      <div></div>
      {statistics.map((stat) => {
        return (
          <span key={stat.category}>{stat.category}</span>
        )
      })}
      <div className="flex flex-col">
        <div className="rounded-md h-24 flex justify-center flex-col text-slate-700 border-slate-300 border">
          <div className="m-2 text-sm flex items-center h-full">Your Rate</div>
          <div className="h-[1px] bg-slate-300 w-full" />
          <div className="m-2 text-sm flex items-center h-full">National Rate</div>
        </div>
      </div>
      
      {statistics.map((stat) => (
        <div key={stat.category} className="flex flex-col">
          <div className={cn("h-24 flex flex-col justify-center items-center text-white rounded-md text-center", { "bg-emerald-600": stat.yourRate <= stat.nationalRate, "bg-yellow-600": stat.yourRate > stat.nationalRate })}>
            <div className="text-lg font-semibold m-2">{stat.yourRate}</div>
            <div className="h-1 bg-white w-[80%] rounded" />
            <div className="text-lg font-semibold m-2">{stat.nationalRate}</div>
          </div>
        </div>
      ))}

      <div className="flex flex-col">
        <div className="rounded-md h-24 flex justify-center flex-col text-slate-700 border-slate-300 border">
          <div className="m-2 text-sm flex items-center h-full">Your Count</div>
          <div className="h-[1px] bg-slate-300 w-full" />
          <div className="m-2 text-sm flex items-center h-full">National Count</div>
        </div>
      </div>
      {counts.map((count) => (
        <div key={count.category} className="flex flex-col">
          <div className={cn("h-24 flex flex-col justify-center items-center text-white rounded-md text-center", { "bg-emerald-600": count.yourCount <= count.nationalCount, "bg-yellow-600": count.yourCount > count.nationalCount })}>
            <div className="text-lg font-semibold m-2">{count.yourCount}</div>
            <div className="h-1 bg-white w-[80%] rounded" />
            <div className="text-lg font-semibold m-2">{count.nationalCount}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

