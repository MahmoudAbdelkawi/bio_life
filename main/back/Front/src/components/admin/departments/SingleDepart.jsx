import "./singleDepart.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { deleteDepartment } from "../../../services/departmentsServices";

function SingleDepart(props) {
  return (
    <>
      <div className="singleDepartment">
        <p className="singleDepartment-Title">{props.name}</p>
        <ul>
          <li>
            <div className="delete-container">
              <p className="edit-text">للمسح اضغط : </p>
              <button
                className="btn-delete"
                onClick={() => {
                  deleteDepartment(props.id);
                  window.location = "/dashboard/departments";
                }}
              >
                <DeleteOutlineIcon />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SingleDepart;
