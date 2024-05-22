import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const Companies = () => {
    return (
        <div className="text-white w-full mt-16 h-[90vh] overflow-y-scroll overflow-x-hidden p-8">
            <div className="h-96 xl:ml-20">
                <Bar
                    data={{
                        labels: [
                            "Google",
                            "GitHub",
                            "Microsoft",
                            "Facebook",
                            "Twitter",
                            "Samsung",
                            "Wipro",
                            "Linkedin",
                        ],
                        datasets: [
                            {
                                label: "Average Salary (LPA)",
                                data: [109, 34, 65, 56, 33, 66, 76, 67],backgroundColor: ["#a970ff"]
                            },
                        ],
                    }}
                />
            </div>
        </div>
    );
};

export default Companies;
