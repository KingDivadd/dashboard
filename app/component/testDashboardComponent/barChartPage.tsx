'use client'
import React, { useRef, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const ChartComponent: React.FC<{ title: string; data: number[]; backgroundColor: string; borderColor: string }> = ({ title, data, backgroundColor, borderColor }) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartDimensions, setChartDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const resizeHandler = () => {
            const parentWidth = (chartRef.current?.parentNode as HTMLElement)?.clientWidth || 0;
            const parentHeight = (chartRef.current?.parentNode as HTMLElement)?.clientHeight || 0;
            setChartDimensions({ width: parentWidth, height: parentHeight });
        };

        window.addEventListener("resize", resizeHandler);
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Bar
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            label: title,
                            data: data,
                            backgroundColor: backgroundColor,
                            borderColor: borderColor,
                            borderWidth: 1,
                        },
                    ],
                }}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function(tooltipItem) {
                                    return `${title}: ${tooltipItem.raw} kWh`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Months'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Energy Consumption (kWh)'
                            },
                            beginAtZero: true
                        }
                    }
                }}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

const EnergyEfficiencyCharts: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-start justify-start gap-[20px] px-[5px]">
            <span className="h-[50px] w-full rounded-[5px] px-[10px] flex flex-row items-center justify-start ">
                <h2 className="text-slate-700 font-semibold text-lg">Energy Efficiency Charts</h2>
            </span>
            <div className="w-full h-[300px]  rounded-[5px] p-[5px] border border-slate-500">
                <ChartComponent 
                    title="Lighting Energy Consumption" 
                    data={[300, 250, 320, 280, 290, 310]} 
                    backgroundColor="#white" 
                    borderColor="#00BFFF" 
                />
            </div>
            <div className="w-full h-[300px]  rounded-[5px] p-[5px] border border-slate-500">
                <ChartComponent 
                    title="HVAC Energy Consumption" 
                    data={[450, 470, 460, 440, 450, 480]} 
                    backgroundColor="rgb(74 222 128)" 
                    borderColor="rgb(34 197 94)" 
                />
            </div>
            <div className="w-full h-[300px]  rounded-[5px] p-[5px] border border-slate-500">
                <ChartComponent 
                    title="Hot Water Energy Consumption" 
                    data={[150, 160, 170, 155, 145, 165]} 
                    backgroundColor="#0390fc" 
                    borderColor="#007bff" 
                />
            </div>
        </div>
    );
};



export default EnergyEfficiencyCharts;

export const LightingLevelsChart: React.FC<{ title: string; data: number[]; backgroundColor: string; borderColor: string }> = ({ title, data, backgroundColor, borderColor }) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartDimensions, setChartDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const resizeHandler = () => {
            const parentWidth = (chartRef.current?.parentNode as HTMLElement)?.clientWidth || 0;
            const parentHeight = (chartRef.current?.parentNode as HTMLElement)?.clientHeight || 0;
            setChartDimensions({ width: parentWidth, height: parentHeight });
        };

        window.addEventListener("resize", resizeHandler);
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Bar
                data={{
                    labels: ["Morning", "Afternoon", "Evening", "Night"], // Example time periods
                    datasets: [
                        {
                            label: title,
                            data: data,
                            backgroundColor: backgroundColor,
                            borderColor: borderColor,
                            borderWidth: 1,
                        },
                    ],
                }}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function(tooltipItem) {
                                    return `${title}: ${tooltipItem.raw} lux`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Time of Day'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Lighting Levels (lux)'
                            },
                            beginAtZero: true
                        }
                    }
                }}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export const ParticulateMatterBarChart: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartDimensions, setChartDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const resizeHandler = () => {
            const parentWidth = (chartRef.current?.parentNode as HTMLElement)?.clientWidth || 0;
            const parentHeight = (chartRef.current?.parentNode as HTMLElement)?.clientHeight || 0;
            setChartDimensions({ width: parentWidth, height: parentHeight });
        };

        window.addEventListener("resize", resizeHandler);
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const dataPointsPM25 = [12, 15, 10, 14, 11, 13];
    const dataPointsPM10 = [20, 22, 19, 21, 20, 23];

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Bar
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'PM 2.5',
                            data: dataPointsPM25,
                            backgroundColor: "#e2e8f0",
                            borderColor: "#e2e8f0",
                            borderWidth: 0,
                        },
                        {
                            label: 'PM 10',
                            data: dataPointsPM10,
                            backgroundColor: "#94a3b8",
                            borderColor: "#94a3b8",
                            borderWidth: 0,
                        },
                    ],
                }}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return `PM: ${tooltipItem.raw} µg/m³`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            display: false,
                        },
                        y: {
                            display: false,
                            beginAtZero: true,
                        }
                    },
                }}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};
