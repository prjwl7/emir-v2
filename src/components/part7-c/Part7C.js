import React from 'react';
import './part7c.css';
import { IoIosArrowForward } from 'react-icons/io';
import PieChartComponent from './PiechartComponent';

const Part7C = () => {
  return (
    <div className="part7c-total">
      <div style={{ fontSize: 24 }}>Quick Tools</div>
      <div style={{ fontSize: 16, width: 200 }}>
        Information and reports completed task
      </div>
      <div className="button-group">
        <button className="button-item">
        <div className="pie-chart">
            <PieChartComponent value={60} color="#18A0FB" />
          </div>
          <div className="button-text">
            Sales Report
            <br />
            1 Month
          </div>
          <div className="button-icon">
            <IoIosArrowForward />
          </div>
          
        </button>
        <button className="button-item">
        <div className="pie-chart">
            <PieChartComponent value={70} color="#03CBB3" />
          </div>
          <div className="button-text">
            Models Report
            <br />
            1 Month
          </div>
          <div className="button-icon">
            <IoIosArrowForward />
          </div>
          
        </button>
        <button className="button-item">
        <div className="pie-chart">
            <PieChartComponent value={43} color="#CB03C3" />
          </div>
          <div className="button-text">
            Top Performers
            <br />
            1 Month
          </div>
          <div className="button-icon">
            <IoIosArrowForward />
          </div>
          
        </button>
        <button className="button-item">
        <div className="pie-chart">
            <PieChartComponent value={10} color="#18A0FB" />
          </div>
          <div className="button-text">
            Top Performers
            <br />
            1 Month
          </div>
          <div className="button-icon">
            <IoIosArrowForward />
          </div>
          
        </button>
        <button className="button-item">
        <div className="pie-chart">
            <PieChartComponent value={10} color="#18A0FB" />
          </div>
          <div className="button-text">
            Top Performers
            <br />
            1 Month
          </div>
          <div className="button-icon">
            <IoIosArrowForward />
          </div>
          
        </button>
        <button className="button-item">
        <div className="pie-chart">
            <PieChartComponent value={10} color="#18A0FB" />
          </div>
          <div className="button-text">
            Top Performers
            <br />
            1 Month
          </div>
          <div className="button-icon">
            <IoIosArrowForward />
          </div>
          
        </button>
      </div>
    </div>
  );
};

export default Part7C;
