import { School, SchoolsTable } from "@/components/schools-table";
import getSuspensions from "@/queries/getSuspensions";

export default async function SchoolReport({ academicYear }: { academicYear: number }) {
  const data = await getSuspensions(academicYear ? Number(academicYear) : undefined)

  const schoolReport: School[] = data.yourSchoolsReportSuspensionRate.rows.map((row) => ({
    name: row[0],
    rate: Number(row[1]),
    count: Number(data.yourSchoolsReportSuspensionCount.rows.find(row => row[0] === row[0])?.[1] ?? 0),
    studentsWithAtLeast1: 0,
    onRoll: 0,
    attendanceRate: 0
  }))

  return (
    <SchoolsTable schools={schoolReport} />
  )
}