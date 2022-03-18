import React from "react";
import "./student.css";

type item = any;

type cell = {
  label: string;
  key: string;
};

type TableProps = {
  data: item[];
  headCell: cell[];
};

const StudentList = ({ data, headCell }: TableProps) => {
  return (
    <div className="student-list">
      <table>
        <thead>
          <tr>
            {headCell &&
              headCell.map((cell, index) => <th key={index}>{cell.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {headCell.map((cell, index) => (
                <td>{item[cell.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
