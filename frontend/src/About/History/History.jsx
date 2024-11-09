import React from "react";
import "./History.css";
import { HistoryItem } from "./HistoryItem";
export const History = () => {
  return (
    <>
      <div className="history-top">
        <h3>Our History</h3>
        <h2>Biography of Raju Karemore </h2>
        <p>
          Raju Karemore is a visionary leader known for his groundbreaking
          innovations, unwavering perseverance, and impactful contributions to
          both industry and community.
        </p>
      </div>

      <HistoryItem />
    </>
  );
};
