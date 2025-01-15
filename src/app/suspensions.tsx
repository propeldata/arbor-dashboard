import { Chart } from "@/components/chart";
import getSuspensions from "@/queries/getSuspensions";

export default async function Suspensions({ academicYear }: { academicYear: number }) {
  const data = await getSuspensions(academicYear);

  return (
    <>
      <Chart
        options={{
          title: {
            text: "Suspensions by Month",
            textAlign: "left",
          },
          series: [{ type: "bar", xKey: "month", yKey: "value" }],
          data: data.suspensionsThisYear.labels.map((label, index) => ({
            month: label,
            value: Number(data.suspensionsThisYear.values[index]),
          })),
        }}
      />
      <Chart
        options={{
          title: {
            text: "Suspensions by Month",
            textAlign: "left",
          },
          series: [
            {
              type: "line",
              xKey: "month",
              yKey: "lastYear",
              yName: (academicYear - 1).toString(),
              interpolation: { type: "smooth" }
            },
            {
              type: "line",
              xKey: "month",
              yKey: "thisYear",
              yName: academicYear.toString(),
              interpolation: { type: "smooth" }
            },
          ],
          data: data.suspensionsThisYear.labels.map((label, index) => ({
            month: label.split("-").slice(1).join("-"),
            lastYear: Number(data.suspensionsLastYear.values[index]),
            thisYear: Number(data.suspensionsThisYear.values[index]),
          })),
        }}
      />
    </>
  );
}
