import React, { useEffect, useState } from "react";
import "./departments.css";
import SingleDepart from "../admin/departments/SingleDepart";
import { getDepartments } from "../../services/departmentsServices";

import { Link } from "react-router-dom";

const DepartmentsDashboard = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    async function get() {
      const departmentResult = await getDepartments();
      setDepartments(departmentResult.data);
    }
    get();
  }, []);
  const departMapping = departments.map((depart) => {
    return <SingleDepart key={depart?._id} name={depart?.name} id={depart?._id} />;
  });
  return (
    <div>
      <div className="department-title">
        <h3>Departments</h3>
      </div>
      <div className="dpartments-container">{departMapping}</div>
      <div className="adding-offers">
        <Link className="link" to="/dashboard/AddDepartments">
          <button className="container">
            <p className="add-icon">+</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DepartmentsDashboard;
