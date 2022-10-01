import "./singleAdmins.css";
import CloseIcon from "@mui/icons-material/Close";
import { deleteAdmin } from "../../../services/adminsServices";

function SingleAdmin(props) {
  return (
    <div className="singleAdmin">
      <p className="singleAdmin-name">{props.name}</p>
      <p className="singleAdmin-name">{props.role}</p>
      <ul>
        <li>
          <div className="delete-container">
            <p className="edit-text">للمسح اضغط : </p>

            <button
              className="btn-delete"
              onClick={() => {deleteAdmin(props.id);window.location='/dashboard/admins'}}
            >
              <CloseIcon />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SingleAdmin;
