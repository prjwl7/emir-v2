import React from 'react'
import './dashboard.css'
import logo from './logo-a.png'
import dashboard from './Vector.png'
import emi from './Vector (1).png'
import profile from './Vector (2).png'
import contact from './Vector (3).png'
import bookings from './Vector (4).png'
import leads from './Vector (5).png'
import schemes from './Vector (6).png'
import price from './Vector (7).png'
import team from './Vector (8).png'
import logout from './Vector (9).png'
import LineCharts from './charts-test'
import PieChart180 from "./Piechart180";
import BarGraph from './BarGraph'
import DoubleHistogram from '../DoubleHistogram'
import LineChartComponent from './LineGraph2'
import PieChartComponent from './PieChart2'
import PartFour from './part4-components/PartFour'
import DoubleHistogram2 from './dHistogram2/dHistogram2'
import Parrt6 from './part6/Parrt6'
import hero from '../components/part4-components/hero.png'
import royalEnfield from '../components/part4-components/royalEnfield.png'
import yamaha from '../components/part4-components/yamaha.png'
import tvs from '../components/part4-components/tvs.png'
import ktm from '../components/part4-components/ktm.png'
import honda from '../components/part4-components/honda.png'
import { Button } from 'semantic-ui-react'
import arrowRight from './Vector (11).png'

const Dashboard = () => {
    const number1  = 6000;
    const percentage1 = '10%';
    const TotalLeads = 18;
    const Bookings = 5;
  return (
    <div className="container">
        <div className="navbar">
            <div className="logo-image">
            <img className='logo-a' src= {logo} alt="logo" />
            </div>
            <div className="grp-button">
                <button className='navbar-buttons'> <img src={dashboard} alt="dashboard" className='dashboard-white' /> Dashboard</button>
                <button className='navbar-buttons'> <img src={emi} alt="dashboard" /> EMI Calculator</button>
                <button className='navbar-buttons'> <img src={profile} alt="dashboard" /> Profile</button>
                <button className='navbar-buttons'> <img src={contact} alt="dashboard" /> Contact</button>
                <button className='navbar-buttons'> <img src={bookings} alt="dashboard" /> Bookings</button>
                <button className='navbar-buttons'> <img src={leads} alt="dashboard" /> Leads</button>
                <button className='navbar-buttons'> <img src={schemes} alt="dashboard" /> Schemes</button>
                <button className='navbar-buttons'> <img src={price} alt="dashboard" /> Price-List</button>
                <button className='navbar-buttons'> <img src={team} alt="dashboard" /> Team</button>
                <button className='navbar-buttons'> <img src={logout} alt="dashboard" /> Log out</button>
            </div>
        </div>
        <div className="content">
            <div className="top">
                <div className="name-text">Hello Rajesh</div>
                <div className="buttonAndFilter">
                <div className="top-buttons">
                    <button className="top-buttons-button">Today</button>
                    <button className="top-buttons-button">This Week</button>
                    <button className="top-buttons-button">Last Week</button>
                    <button className="top-buttons-button">Last Month</button>
                </div>
                <div className="filter">
                <select className='filter-range'>
                        <option defaultValue="main" >Filter by Data Range</option>
                        <option value="Range" className='filter-range-options'>Data Range 1</option>
                        <option value="Range" className='filter-range-options'>Data Range 2</option>
                        <option value="Range" className='filter-range-options'>Data Range 3</option>
                        <option value="Range" className='filter-range-options'>Data Range 4</option>
                </select>
                </div>
                </div>
            </div>
            <div className="bottom">
                <div className="part1">
                    <div className="part1-leads">
                        <LineCharts name={'My Leads'} number={number1} percentage={percentage1}></LineCharts>
                    </div>
                    <div className="part1-bookings">
                        <LineCharts name={'My Bookings'} number={number1} percentage={'20%'}></LineCharts>
                    </div>
                    <div className="part1-follow-ups">
                    <LineCharts name={'My Follow Ups'} number={2000} percentage={'20%'}></LineCharts>
                    </div>
                    <div className="part1-lead-ranking">
                    <LineCharts name={'My Lead Ranking'} number={number1} percentage={'40%'}></LineCharts>
                    </div>
                    <div className="part1-booking-ranking">
                    <LineCharts name={'My Boking Ranking'} number={26} percentage={'20%'}></LineCharts>
                    </div>

                </div>
                <div className="part2">
                    <PieChart180></PieChart180>
                    <BarGraph></BarGraph>
                    <DoubleHistogram></DoubleHistogram>
                </div>
                <div className="part3">
                    <LineChartComponent></LineChartComponent>
                    <PieChartComponent></PieChartComponent>
                </div>
                <div className="part4">
                    <PartFour image={hero} TotalLeads={TotalLeads} Bookings={Bookings} ></PartFour>
                    <PartFour image={royalEnfield} TotalLeads={TotalLeads} Bookings={Bookings} ></PartFour>
                    <PartFour image={yamaha} TotalLeads={TotalLeads} Bookings={Bookings} ></PartFour>
                    <PartFour image={tvs} TotalLeads={TotalLeads} Bookings={Bookings} ></PartFour>
                    <PartFour image={ktm} TotalLeads={TotalLeads} Bookings={Bookings} ></PartFour>
                    <PartFour image={honda} TotalLeads={TotalLeads} Bookings={Bookings} ></PartFour>
                    <Button className='part4-button'><img src={arrowRight} alt="" /></Button>
                </div>
                <div className="part5">
                    <DoubleHistogram2></DoubleHistogram2>
                </div>
                <div className="part6">
                    <Parrt6></Parrt6>
                </div>
                <div className="part7"></div>
            </div>

        </div>
    </div>
  )
}

export default Dashboard