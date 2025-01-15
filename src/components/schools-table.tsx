import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

export interface School {
  name: string
  onRoll: number
  attendanceRate: number
  rate: number
  count: number
  studentsWithAtLeast1: number
}

interface SchoolsTableProps {
  schools: School[]
}

export function SchoolsTable({ schools }: SchoolsTableProps) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Your Schools</h2>
      <Table className="border border-slate-200">
        <TableHeader>
          <TableRow>
            <TableHead className="border-r border-r-slate-200">School</TableHead>
            <TableHead className="text-right border-r border-r-slate-200">On Roll</TableHead>
            <TableHead className="text-right border-r border-r-slate-200">Attendance</TableHead>
            <TableHead className="text-right border-r border-r-slate-200">Rate</TableHead>
            <TableHead className="text-right border-r border-r-slate-200">Count</TableHead>
            <TableHead className="text-right border-r border-r-slate-200">Students with at least 1</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schools.map((school) => (
            <TableRow key={school.name}>
              <TableCell className="border-r border-r-slate-200">{school.name}</TableCell>
              <TableCell className="text-right border-r border-r-slate-200">{school.onRoll}</TableCell>
              <TableCell className="text-right border-r border-r-slate-200">{school.attendanceRate}%</TableCell>
              <TableCell className={cn("text-right border-r border-r-slate-200", {
                "bg-red-100": school.rate < 21,
                "bg-red-400": school.rate >= 21 && school.rate < 41,
                "bg-red-500 text-white": school.rate >= 41 && school.rate < 61,
                "bg-red-600 text-white": school.rate >= 61 && school.rate < 81,
                "bg-red-700 text-white": school.rate >= 81 && school.rate < 101,
                "bg-red-800 text-white": school.rate >= 101
              })}>{school.rate}</TableCell>
              <TableCell className={cn("text-right border-r border-r-slate-200", {
                "bg-red-100": school.count < 21,
                "bg-red-400": school.count >= 21 && school.count < 41,
                "bg-red-500 text-white": school.count >= 41 && school.count < 61,
                "bg-red-600 text-white": school.count >= 61 && school.count < 81,
                "bg-red-700 text-white": school.count >= 81 && school.count < 101,
                "bg-red-800 text-white": school.count >= 101
              })}>{school.count}</TableCell>
              <TableCell className={cn("text-right border-r border-r-slate-200", {
                "bg-red-100": school.studentsWithAtLeast1 < 21,
                "bg-red-400": school.studentsWithAtLeast1 >= 21 && school.studentsWithAtLeast1 < 41,
                "bg-red-500 text-white": school.studentsWithAtLeast1 >= 41 && school.studentsWithAtLeast1 < 61,
                "bg-red-600 text-white": school.studentsWithAtLeast1 >= 61 && school.studentsWithAtLeast1 < 81,
                "bg-red-700 text-white": school.studentsWithAtLeast1 >= 81 && school.studentsWithAtLeast1 < 101,
                "bg-red-800 text-white": school.studentsWithAtLeast1 >= 101
              })}>{school.studentsWithAtLeast1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

