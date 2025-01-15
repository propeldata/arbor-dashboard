'use client'

import { useCallback, useState } from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePathname, useRouter, useSearchParams } from "next/navigation"


export function AcademicYearFilter() {
  const searchParams = useSearchParams()

  const academicYear = searchParams.get("academicYear") ?? ''
  const pathname = usePathname()
  const router = useRouter()

  const [year, setYear] = useState(academicYear)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return (
    <Select value={year} onValueChange={(value) => {
      setYear(value)
      router.push(pathname + '?' + createQueryString('academicYear', value))
    }}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Academic year" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="2023">2023</SelectItem>
        <SelectItem value="2024">2024</SelectItem>
        <SelectItem value="2025">2025</SelectItem>
      </SelectContent>
    </Select>
  )
}