import React, { useContext, useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { AttendanceContext } from "./AttendanceContext";

const Charts = () => {
  const { day, data, verified } = useContext(AttendanceContext)
  const [uData, setUData] = useState([]);
  
  useEffect(() => {
    const days = [0, 1, 2]
    const verifiedCounts = days.map(day =>
      verified.filter(v => v.day === day && v.isPresent === true).length
    );

    setUData(verifiedCounts);

  }, [data, verified])

  // const uData = [verifiedCounts, verifiedCounts, verifiedCounts];
  const pData = [data.length, data.length, data.length];
  const xLabels = ["Day 1", "Day 2", "Day 3"];
  return (
    <BarChart
      width={700}
      height={400}
      series={[
        { data: pData, label: "Registered", id: "pvId" },
        { data: uData, label: "CheckedIn", id: "uvId" },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
};

export default Charts;
