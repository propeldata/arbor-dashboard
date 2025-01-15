import { Sidebar } from "@/components/sidebar"
import { AcademicYearFilter } from "./academic-year-filter"
import Suspensions from "./suspensions"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import SchoolReport from "./school-report"
import Statistics from "./statistics"

export default async function DashboardPage({ searchParams }: { searchParams: { academicYear: string } }) {
  const academicYear = searchParams.academicYear

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mx-auto my-4">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-8">Your Group Headlines</h1>
            <div>
              <Suspense fallback={<Skeleton className="h-[30px] w-[180px]"></Skeleton>}>
                <AcademicYearFilter />
              </Suspense>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <Suspense fallback={
                <div className="grid grid-cols-9 gap-2">
                  <Skeleton className="h-[300px] w-full"></Skeleton>
                  <Skeleton className="h-[300px] w-full"></Skeleton>
                  <Skeleton className="h-[300px] w-full"></Skeleton>
                  <Skeleton className="h-[300px] w-full"></Skeleton>
                  <Skeleton className="h-[300px] w-full"></Skeleton>
                  <Skeleton className="h-[300px] w-full"></Skeleton>
                  <Skeleton className="h-[300px] w-full"></Skeleton>
                  <Skeleton className="h-[300px] w-full"></Skeleton>
                  <Skeleton className="h-[300px] w-full"></Skeleton>
                </div>
              }>
                <Statistics academicYear={Number(academicYear)} />
              </Suspense>
            </div>
            <Suspense fallback={<Skeleton className="h-[300px] w-full"></Skeleton>}>
              <SchoolReport academicYear={Number(searchParams.academicYear)} />
            </Suspense>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Suspense fallback={<>
              <Skeleton className="h-[300px] w-full"></Skeleton>
              <Skeleton className="h-[300px] w-full"></Skeleton>
            </>}>
            <Suspensions academicYear={Number(academicYear)} />
          </Suspense>
        </div>
      </main>
    </div>
  )
}

