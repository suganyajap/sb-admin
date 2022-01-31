import React from "react";

import "./App.css";
import { PieChart, Pie, LineChart, Line, ResponsiveContainer } from "recharts";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
// -------------------------------------------------PIE  chart ----------------------------------------------------------

function App() {
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
  ];
// -------------------------------------------------linear chart data----------------------------------------------------------

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="App">
{/* // -------------------------------------------------sidebar and buttons---------------------------------- */}

      <div className="sidenavbar">
      <ButtonGroup vertical style={{ width: "100%" }}>
        <Button variant="primary" style={{ height: "60px" }}>
          Dashboard
        </Button>{" "}
        </ButtonGroup>
        <hr />
        <ButtonGroup vertical style={{ width: "100%" }}>

        <Button variant="primary" style={{  height: "60px"}}>
          Components {">"}
        </Button>{" "}
        <br/>
        <Button variant="primary" style={{ height: "60px"}}>
          Utilities {">"}
        </Button>{" "}
        </ButtonGroup>

        <hr />
      <ButtonGroup vertical style={{ width: "100%" }}>

        <Button variant="primary" style={{  height: "60px"}}>
          Pages {">"}
        </Button>{" "}
        <br/>

        <Button variant="primary" style={{ height: "60px" }}>
          Charts
        </Button>{" "}
        <br/>

        <Button variant="primary" style={{  height: "60px" }}>
          Tables
        </Button>{" "}
        </ButtonGroup>
        <hr />
      </div>
      <div className="maindiv">
{/* // -------------------------------------------------Dashboard--------------------------------- */}

        <h4>Dashboard</h4>

        <div className="dashboard">
          <Card className="card">
            <Card.Header>
              <h6>EARNINGS (MONTHLY)</h6>
            </Card.Header>
            <Card.Body>$40,000</Card.Body>
          </Card>

          <Card className="card">
            <Card.Header>
              <h6>EARNINGS (ANNUAL)</h6>
            </Card.Header>
            <Card.Body>$215,000</Card.Body>
          </Card>

          <Card className="card">
            <Card.Header>
              <h6>TASKS</h6>
            </Card.Header>
            <Card.Body>
              50% <ProgressBar now={60} />
            </Card.Body>
          </Card>

          <Card className="card">
            <Card.Header>
              <h6>PENDING REQUESTS</h6>
            </Card.Header>
            <Card.Body>18</Card.Body>
          </Card>
        </div>
        <div className="charts">
          <Card className="linechart">
            <Card.Header><h6>Earnings Overview</h6></Card.Header>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart width={300} height={100} data={data}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
{/* // ------------------------------------------------Graph--------------------------------- */}

          <Card className="piechart">
            <Card.Header><h6>Revenue Sources</h6></Card.Header>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={data02}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  fill="#82ca9d"
                  label
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
          </div>
          <br/>
{/* // ------------------------------------------------Progress bar--------------------------------- */}

          <div  className="progress-bar-container">
          <Card className="div3">
            <Card.Header><h6>Projects</h6></Card.Header>
            <Card.Body>
            <ProgressBar variant="success" now={40} />
            </Card.Body>
            <Card.Body>
            <ProgressBar variant="info" now={20} />
            </Card.Body>
            <Card.Body>
            <ProgressBar variant="warning" now={60} />
             </Card.Body>
            <Card.Body>
            <ProgressBar variant="danger" now={80} />
            </Card.Body>
            <Card.Body>
            <ProgressBar variant="primary" now={80} />
            </Card.Body>
            <Card.Body>
            <ProgressBar variant="secondary" now={80} />
            </Card.Body>
          </Card>
{/* // ------------------------------------------------ Color palette--------------------------------- */}

        <Card className="color-container">
          <Card bg="primary" className="colorpalette"></Card>
          <Card bg="secondary" className="colorpalette"></Card>
          <Card bg="success" className="colorpalette"></Card>
          <Card bg="danger" className="colorpalette"></Card>
          <Card bg="warning" className="colorpalette"></Card>
          <Card bg="info" className="colorpalette"></Card>
        </Card>
        </div>
      </div>
    </div>
  );
}

export default App;