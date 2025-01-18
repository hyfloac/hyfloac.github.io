"use client";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function clamp(
  num: number, 
  min: number, 
  max: number
): number {
  return num <= min 
    ? min 
    : num >= max 
      ? max 
      : num
}

class Pid 
{
  public deltaTime: number;
  public maxChange: number;
  public minChange: number;
  public kP: number;
  public kI: number;
  public kD: number;
  public preError: number;
  public integral: number;
  public prevDelta: number;

  constructor(
    deltaTime: number,
    maxChange: number,
    minChange: number,
    kP: number = 0.0,
    kI: number = 0.0,
    kD: number = 0.0
  )
  {
    this.deltaTime = deltaTime;
    this.maxChange = maxChange;
    this.minChange = minChange;
    this.kP = kP;
    this.kI = kI;
    this.kD = kD;
    this.preError = 0.0;
    this.integral = 0.0;
    this.prevDelta = 0.0;
  }

  public calculate(
    setPoint: number,
    position: number
  ): number
  {
    // Calculate error
    const error: number = setPoint - position;

    // Calculate Proportional term
    const proportional: number = this.kP * error;
    
    // Calculate Integral term
    this.integral += error * this.deltaTime;
    const integral: number = this.kI * this.integral;

    // Calculate Derivative term
    const derivative: number = (error - this.preError) / this.deltaTime;
    const derivativeOut: number = this.kD * derivative;

    this.preError = error;

    return clamp(proportional + integral + derivativeOut, this.minChange, this.maxChange);
  }
}

export default function Home() {
  const [ kP, setKp ] = useState(0.0);
  const [ kI, setKi ] = useState(0.0);
  const [ kD, setKd ] = useState(0.0);
  const [ setPoint, setSetPoint ] = useState(5.0);
  const [ chartData, setChartData ] = useState({pidData: [ 0 ], accelerationData: [ 0 ], jerkData: [ 0 ], labels: [ "0" ], preError: 0.0, integral: 0.0, i: 0});

  useEffect(() => {
    const deltaTime = 250;
    const pid: Pid = new Pid(deltaTime / 1000.0, 25, -25, kP, kI, kD);
    const chart = ChartJS.getChart("pidChart");

    function update() 
    {
      pid.kP = kP;
      pid.kI = kI;
      pid.kD = kD;
      pid.preError = chartData.preError;
      pid.integral = chartData.integral;

      ++chartData.i;
      chartData.labels.push(chartData.i.toString());

      const lastPoint = chartData.pidData[chartData.pidData.length - 1];

      const delta = pid.calculate(setPoint, lastPoint);
      // console.log("delta: " + delta + " setPoint: " + setPoint);

      const newPoint = lastPoint + delta;

      chartData.pidData.push(newPoint);

      const prevAcceleration = chartData.accelerationData[chartData.accelerationData.length - 1];

      chartData.accelerationData.push(delta);
      chartData.jerkData.push(delta - prevAcceleration);

      if(chartData.labels.length > 50)
      {
        chartData.labels.shift();
        chartData.pidData.shift();
        chartData.accelerationData.shift();
        chartData.jerkData.shift();
      }

      chartData.preError = pid.preError;
      chartData.integral = pid.integral;

      setChartData(chartData);
      chart?.update("resize");
    }

    const interval = setInterval(update, deltaTime);

    return () => clearInterval(interval);
  }, [kP, kI, kD, setPoint]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-6/12">
        <form className="items-center">
          <div>
            <label htmlFor="kPInput" className="">Kp</label>
            <input type="range" id="kPInput" className="w-full" step="0.01" min="0" max="1" value={kP} onChange={(event) => setKp(Number.parseFloat(event.target.value))}></input>
            <span>{kP}</span>
          </div>
          <div>
            <label htmlFor="kIInput">Ki</label>
            <input type="range" id="kIInput" className="w-full" step="0.001" min="0" max="0.5" value={kI} onChange={(event) => setKi(Number.parseFloat(event.target.value))}></input>
            <span>{kI}</span>
          </div>
          <div>
            <label htmlFor="kDInput">Kd</label>
            <input type="range" id="kDInput" className="w-full" step="0.001" min="-0.5" max="0.5" value={kD} onChange={(event) => setKd(Number.parseFloat(event.target.value))}></input>
            <span>{kD}</span>
          </div>
          <div>
            <label htmlFor="setPointInput">Set Point</label>
            <input type="range" id="setPointInput" className="w-full" value={setPoint} min="-100" max="100" onChange={(event) => setSetPoint(Number.parseFloat(event.target.value))}></input>
            <span>{setPoint}</span>
          </div>
        </form>
        <Line
        options={{
          scales: {
            pidScale: {
              suggestedMax: 100,
              suggestedMin: -100
            },
            derivativeScale: {
              suggestedMax: 25,
              suggestedMin: -25
            }
          }
        }}
        data={{
          labels: chartData.labels,
          datasets: [
            {
              label: "PID",
              data: chartData.pidData,
              tension: 0.5,
              borderColor: "#000000",
              yAxisID: "pidScale"
            },
            {
              label: "Acceleration",
              data: chartData.accelerationData,
              tension: 0.5,
              borderColor: "#AF0000",
              yAxisID: "derivativeScale"
            },
            {
              label: "Jerk",
              data: chartData.jerkData,
              tension: 0.5,
              borderColor: "#AFAF00",
              yAxisID: "derivativeScale"
            }
          ]
        }}
        id="pidChart"
        />
      </main>
    </div>
  );
}
