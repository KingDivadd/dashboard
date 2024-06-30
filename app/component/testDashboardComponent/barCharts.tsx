'use client';
import React, { useRef, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale, ChartOptions, ChartData } from "chart.js";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const BuildingPerformanceBarOne: React.FC = () => {
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

    const labels = Array.from({ length: 50 }, (_, i) => `Building ${String.fromCharCode(65 + i)}`);
    const dataPoints = Array.from({ length: 50 }, () => Math.floor(Math.random() * 200));

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
                            label: 'Energy Use Intensity (EUI)',
                            data: dataPoints,
                            backgroundColor: "#e2e8f0", // Corresponds to bg-slate-200
                            borderColor: "#e2e8f0", // Make border same color to blend
                            borderWidth: 0, // Remove border width
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
                                    return `EUI: ${tooltipItem.raw} kWh/ft²`;
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
                }}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export default BuildingPerformanceBarOne;

export const LightingEnergyConsumptionChart: React.FC = () => {
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
    const dataPoints = [300, 250, 320, 280, 290, 310];

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
                            label: 'Lighting Energy Consumption',
                            data: dataPoints,
                            backgroundColor: "#e2e8f0",
                            borderColor: "#e2e8f0",
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
                                    return `Energy: ${tooltipItem.raw} kWh`;
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


export const HVACEnergyConsumptionChart: React.FC = () => {
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
    const dataPoints = [450, 470, 460, 440, 450, 480];

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
                            label: 'HVAC Energy Consumption',
                            data: dataPoints,
                            backgroundColor: "#e2e8f0",
                            borderColor: "#e2e8f0",
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
                                    return `Energy: ${tooltipItem.raw} kWh`;
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


export const HotWaterEnergyConsumptionChart: React.FC = () => {
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

    const data: ChartData<'bar'> = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: 'Hot Water Energy Consumption',
                data: [150, 160, 170, 155, 145, 165],
                backgroundColor: "#e2e8f0",
                borderColor: "#e2e8f0",
                borderWidth: 0,
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Energy: ${tooltipItem.raw} kWh`;
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
    };

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Bar
                data={data}
                options={options}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export const LightingLevelsBarChart: React.FC = () => {
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

    const data: ChartData<'bar'> = {
        labels: ["Office", "Conference Room", "Hallway", "Lobby", "Break Room"],
        datasets: [
            {
                label: 'Lighting Levels (lux)',
                data: [300, 500, 150, 400, 600], // Example lighting levels data
                backgroundColor: "#e2e8f0",
                borderColor: "#e2e8f0",
                borderWidth: 0,
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Lighting: ${tooltipItem.raw} lux`;
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
    };

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Bar
                data={data}
                options={options}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};


export const WUIBarChart: React.FC = () => {
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

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // Example labels for months
    const dataPoints = [1200, 1000, 800, 950, 800, 700, 750, 700, 800, 740, 770, 800]; // Example water consumption data

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
                            label: 'Water Use Intensity (WUI)',
                            data: dataPoints,
                            backgroundColor: "#E2E8F0", // Corresponds to bg-slate-200
                            borderColor: "#E2E8F0", // Make border same color to blend
                            borderWidth: 0, // Remove border width
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
                                    return `WUI: ${tooltipItem.raw} gallons/ft²`;
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
                }}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export const PerceivedSafetySurveysChart: React.FC = () => {
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

    const data: ChartData<'bar'> = {
        labels: ["Entrance", "Office Area", "Meeting Rooms", "Restrooms"], // Example labels for areas
        datasets: [
            {
                label: 'Perceived Safety Ratings',
                data: [4.5, 4.8, 4.7, 4.6], // Example safety ratings (replace with actual data)
                backgroundColor: "#F1F5F9", // Light background color
                borderColor: "#1D6CE2", // Blue border color
                borderWidth: 1,
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
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
                grid: {
                    display: false, // Hide the x-axis grid lines
                },
                title: {
                    display: false,
                    text: 'Areas'
                }
            },
            y: {
                grid: {
                    display: false, // Hide the x-axis grid lines
                },
                title: {
                    display: false,
                    text: 'Rating'
                },
                beginAtZero: true,
            }
        },
    };

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Bar
                data={data}
                options={options}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};
