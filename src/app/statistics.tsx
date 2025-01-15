import { StatisticsGrid } from "@/components/statistics-grid";
import getSuspensions from "@/queries/getSuspensions";

export default async function Statistics({ academicYear }: { academicYear: number }) {
  const data = await getSuspensions(academicYear);

  const statistics = [
    { category: "Secondary", yourRate: Math.round(Number(data.suspensionsRateSecondary.value ?? 0)), nationalRate: 21.2 },
    { category: "Primary", yourRate: Math.round(Number(data.suspensionsRatePrimary.value ?? 0)), nationalRate: 12.2 },
    { category: "Special", yourRate: 0, nationalRate: 22.2 },
    { category: "Boys", yourRate: Math.round(Number(data.suspensionsRateBoys.value ?? 0)), nationalRate: 21.2 },
    { category: "Girls", yourRate: Math.round(Number(data.suspensionsRateGirls.value ?? 0)), nationalRate: 21.2 },
    { category: "FSM", yourRate: Math.round(Number(data.suspensionsRateFSM.value ?? 0)), nationalRate: 19.2 },
    { category: "SEN Support", yourRate: Math.round(Number(data.suspensionsRateSENSupport.value ?? 0)), nationalRate: 21.2 },
    { category: "EHCP", yourRate: Math.round(Number(data.suspensionsRateEHCP.value ?? 0)), nationalRate: 21.2 }
  ]

  const counts = [
    { category: "Secondary", yourCount: Math.round(Number(data.suspensionsCountSecondary.value ?? 0)), nationalCount: 146 },
    { category: "Primary", yourCount: Math.round(Number(data.suspensionsCountPrimary.value ?? 0)), nationalCount: 146 },
    { category: "Special", yourCount: 0, nationalCount: 24 },
    { category: "Boys", yourCount: Math.round(Number(data.suspensionsCountBoys.value ?? 0)), nationalCount: 21.2 },
    { category: "Girls", yourCount: Math.round(Number(data.suspensionsCountGirls.value ?? 0)), nationalCount: 21.2 },
    { category: "FSM", yourCount: Math.round(Number(data.suspensionsCountFSM.value ?? 0)), nationalCount: 121 },
    { category: "SEN Support", yourCount: Math.round(Number(data.suspensionsCountSENSupport.value ?? 0)), nationalCount: 21.2 },
    { category: "EHCP", yourCount: Math.round(Number(data.suspensionsCountEHCP.value ?? 0)), nationalCount: 21.2 }
  ]

  return <StatisticsGrid statistics={statistics} counts={counts} />
}
