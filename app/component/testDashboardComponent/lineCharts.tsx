'use client'
import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, ChartData, ChartOptions } from "chart.js";

ChartJS.register(LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement);

const EUILineChart: React.FC = () => {
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

    const data: ChartData<'line'> = {
        labels: [120, 100, 80, 95, 80, 70, 75, 70, 80,74, 77, 80,], // Example labels for months
        datasets: [
            {
                label: 'Energy Use Intensity (EUI)',
                data: [120, 100, 80, 95, 80, 70, 75, 70, 80,74, 77, 80,], // Example EUI data (replace with your actual data)
                backgroundColor: "#F1F5F9", // Light red background for better visibility
                borderColor: "#F1F5F9", // Green border color
                borderWidth: 2,
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `EUI: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                display: false, // Hide the x-axis
            },
            y: {
                display: false, // Hide the y-axis
                beginAtZero: true,
            }
        },
        elements: {
            point: {
                radius: 0 // Hide points
            }
        },
        animation: {
            duration: 0 // Disable animations for drawing lines
        }
    };

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Line
                data={data}
                options={options}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export default EUILineChart;

export const IAQLineChart: React.FC<{ title: string; labels: string[]; data: number[]; backgroundColor: string; borderColor: string }> = ({ title, labels, data, backgroundColor, borderColor }) => {
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
            <Line
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: title,
                            data: data,
                            backgroundColor: backgroundColor,
                            borderColor: borderColor,
                            borderWidth: 1,
                            fill: true,
                            tension: 2,
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
                                    return `${title}: ${tooltipItem.raw}`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Time'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: title
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

export const TemperatureLineChart: React.FC = () => {
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

    const data: ChartData<'line'> = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Example labels for months
        datasets: [
            {
                label: 'Temperature',
                data: [22, 21, 23, 24, 22, 21, 23], // Example Temperature data
                backgroundColor: "#F1F5F9",
                borderColor: "#F1F5F9",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Temperature: ${tooltipItem.raw} °C`;
                    }
                }
            }
        },
        scales: {
            x: {
                display: false, // Hide the x-axis
            },
            y: {
                display: false, // Hide the y-axis
                beginAtZero: true,
            }
        },
        elements: {
            point: {
                radius: 0 // Hide points
            }
        },
        animation: {
            duration: 0 // Disable animations for drawing lines
        }
    };

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Line
                data={data}
                options={options}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export const CO2LevelsLineChart: React.FC = () => {
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

    const data: ChartData<'line'> = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Example labels for months
        datasets: [
            {
                label: 'CO2 Levels',
                data: [400, 420, 430, 410, 405, 420, 410], // Example CO2 data
                backgroundColor: "#F1F5F9",
                borderColor: "#F1F5F9",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `CO2: ${tooltipItem.raw} ppm`;
                    }
                }
            }
        },
        scales: {
            x: {
                display: false, // Hide the x-axis
            },
            y: {
                display: false, // Hide the y-axis
                beginAtZero: true,
            }
        },
        elements: {
            point: {
                radius: 0 // Hide points
            }
        },
        animation: {
            duration: 0 // Disable animations for drawing lines
        }
    };

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Line
                data={data}
                options={options}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export const HumidityLineChart: React.FC = () => {
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

    const data: ChartData<'line'> = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Example labels for months
        datasets: [
            {
                label: 'Humidity',
                data: [40, 42, 45, 43, 41, 40, 42], // Example Humidity data
                backgroundColor: "#F1F5F9",
                borderColor: "#F1F5F9",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Humidity: ${tooltipItem.raw}%`;
                    }
                }
            }
        },
        scales: {
            x: {
                display: false, // Hide the x-axis
            },
            y: {
                display: false, // Hide the y-axis
                beginAtZero: true,
            }
        },
        elements: {
            point: {
                radius: 0 // Hide points
            }
        },
        animation: {
            duration: 0 // Disable animations for drawing lines
        }
    };

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Line
                data={data}
                options={options}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export const WasteManagementLineChart: React.FC = () => {
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

    const data: ChartData<'line'> = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Example labels for months
        datasets: [
            {
                label: 'Waste Diversion Rate',
                data: [30, 35, 33, 40, 45, 42, 38, 39, 43, 45, 47, 50], // Example waste diversion rate data
                backgroundColor: "#E2E8F0", // Light background for better visibility
                borderColor: "#E2E8F0", // Same color for border to blend
                borderWidth: 2,
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Waste Diversion Rate: ${tooltipItem.raw}%`;
                    }
                }
            }
        },
        scales: {
            x: {
                display: false, // Hide the x-axis
            },
            y: {
                display: false, // Hide the y-axis
                beginAtZero: true,
            }
        },
        elements: {
            point: {
                radius: 0 // Hide points
            }
        },
        animation: {
            duration: 0 // Disable animations for drawing lines
        }
    };

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Line
                data={data}
                options={options}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export const ReturnVisitRateLineChart: React.FC = () => {
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

    const data: ChartData<'line'> = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Example labels for months
        datasets: [
            {
                label: 'Return Visit Rate',
                data: [5, 10, 7, 15, 12, 20, 25, 30, 22, 18, 24, 28], // Example data, replace with actual data
                backgroundColor: "#F1F5F9", // Light red background for better visibility
                borderColor: "#F1F5F9", // Green border color
                borderWidth: 2,
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Return Visit Rate: ${tooltipItem.raw}%`;
                    }
                }
            }
        },
        scales: {
            x: {
                display: false, // Hide the x-axis
            },
            y: {
                display: false, // Hide the y-axis
                beginAtZero: true,
            }
        },
        elements: {
            point: {
                radius: 0 // Hide points
            }
        },
        animation: {
            duration: 0 // Disable animations for drawing lines
        }
    };

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Line
                data={data}
                options={options}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export const ActiveAreaRatioTable: React.FC = () => {
    const data = [
        { area: "Lobby", designedCapacity: 100, numberOfPeople: 80 },
        { area: "Work Areas", designedCapacity: 200, numberOfPeople: 150 },
        { area: "Break Rooms", designedCapacity: 50, numberOfPeople: 30 }
    ];

    return (
        <table className="w-full flex flex-col items-center justify-start text-white">
            <thead className="w-full ">
                <tr className="w-full flex items-center jusitify-between h-[50px] border-b border-slate-400">
                    <th className="w-1/4 px-4 flex items-center justify-start">Area</th>
                    <th className="w-1/4 px-4  flex items-center justify-start">Designed Capacity</th>
                    <th className="w-1/4 px-4 flex items-center justify-start">Number of People</th>
                    <th className="w-1/4 px-4 flex items-center justify-start">Active Area Ratio</th>
                </tr>
            </thead>

            <tbody className="flex-1 w-full flex flex-col items-center justif-start">
                {data.map((item, index) => (
                    <tr key={index} className="w-full flex items-center justify-between h-[50px] border-b-slate-100 hover:bg-slate-500">
                        <td className="w-1/4 px-4 ">{item.area}</td>
                        <td className="w-1/4 px-4 ">{item.designedCapacity}</td>
                        <td className="w-1/4 px-4 ">{item.numberOfPeople}</td>
                        <td className="w-1/4 px-4 ">{(item.numberOfPeople / item.designedCapacity).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export const WayfindingEfficiencyLineChart: React.FC = () => {
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

    const data: ChartData<'line'> = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Example labels for days
        datasets: [
            {
                label: 'Wayfinding Efficiency',
                data: [15, 14, 13, 12, 13, 14, 15], // Example data (replace with actual data)
                backgroundColor: "#e2e8f0", // Light background for better visibility
                borderColor: "#e2e8f0", // Blue border color
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0, // Hide points
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Time (mins): ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                display: false, // Hide x-axis labels
                grid: {
                    display: false, // Hide x-axis grid lines
                },
            },
            y: {
                display: false, // Hide y-axis labels
                beginAtZero: true,
                grid: {
                    display: false, // Hide y-axis grid lines
                }
            },
        },
        elements: {
            line: {
                tension: 0.4,
            },
        },
        animation: {
            duration: 0, // Disable animations for drawing lines
        },
    };

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Line
                data={data}
                options={options}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};


export const UseabilityActiveAreaRatioTable: React.FC = () => {
    const data = [
        {title: 'Temperature Control', value: '80%'},
        {title: 'Lighting Control', value: '85%'},
        {title: 'Privacy Settings', value: '75%'},
    ];

    return (
        <table className="w-full flex flex-col items-center justify-start text-white">
            <thead className="w-full ">
                <tr className="w-full flex items-center jusitify-between h-[50px] border-b border-slate-400">
                    <th className="w-1/2 px-4 flex items-center justify-start">Aspect</th>
                    <th className="w-1/2 px-4  flex items-center justify-start">Satisfaction Rate (%)</th>
                </tr>
            </thead>

            <tbody className="flex-1 w-full flex flex-col items-center justif-start">
                {data.map((item, index) => (
                    <tr key={index} className="w-full flex items-center justify-between h-[50px] border-b-slate-100 hover:bg-slate-500">
                        <td className="w-1/2 px-4 ">{item.title}</td>
                        <td className="w-1/2 px-4 ">{item.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export const UsabilityWayfindingEfficiencyLineChart: React.FC = () => {
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

    const data: ChartData<'line'> = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Example labels for days
        datasets: [
            {
                label: 'Wayfinding Efficiency',
                data: [15, 14, 13, 12, 13, 14, 15], // Example data (replace with actual data)
                backgroundColor: "#F1F5F9", // Light red background for better visibility
                borderColor: "#1D6CE2", // Blue border color
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0, // Hide points
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Time (mins): ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                display: false, // Hide x-axis
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Time (mins)',
                },
                grid: {
                    display: false,
                }
            },
        },
        elements: {
            line: {
                tension: 0.4,
            },
        },
        animation: {
            duration: 0, // Disable animations for drawing lines
        },
    };

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Line
                data={data}
                options={options}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export const PostOccupancySurveysChart: React.FC = () => {
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

    const data: ChartData<'line'> = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Example labels for months
        datasets: [
            {
                label: 'Post-Occupancy Survey Results',
                data: [4, 5, 4.5, 4.8, 4.6, 4.7, 4.9], // Example survey ratings (replace with actual data)
                backgroundColor: "#E2E8F0", // bg-slate-200
                borderColor: "#E2E8F0", // bg-slate-200
                borderWidth: 2,
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Rating: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                display: false, // Hide the x-axis
                grid: {
                    display: false, // Hide the x-axis grid lines
                },
            },
            y: {
                display: false, // Hide the y-axis
                grid: {
                    display: false, // Hide the y-axis grid lines
                },
                beginAtZero: true,
            }
        },
        elements: {
            point: {
                radius: 0 // Hide points
            }
        },
        animation: {
            duration: 0 // Disable animations for drawing lines
        }
    };

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Line
                data={data}
                options={options}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};


export const ReturnVisitRateChart: React.FC = () => {
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

    const data: ChartData<'line'> = {
        labels: ["Lobby", "Work Areas", "Break Rooms"],
        datasets: [
            {
                label: 'Return Visit Rate',
                data: [75, 85, 65], // Example data
                backgroundColor: "#F1F5F9",
                borderColor: "#F1F5F9",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Return Rate: ${tooltipItem.raw}%`;
                    }
                }
            }
        },
        scales: {
            x: {
                display: false,
                grid: {
                    display: false,
                },
            },
            y: {
                display: false,
                grid: {
                    display: false,
                },
                beginAtZero: true,
            }
        },
        elements: {
            point: {
                radius: 0,
            }
        },
        animation: {
            duration: 0,
        }
    };

    return (
        <div style={{ width: "100%", height: "100%" }} ref={chartRef}>
            <Line data={data} options={options} width={chartDimensions.width} height={chartDimensions.height} />
        </div>
    );
};
