import React, { useEffect, useState } from "react";
import {
  GetElementServices,
  SearchServices,
} from "../../services/AxiosGenerator";
import Modal from "react-modal";
import Man from "../../assets/images/icons/man1.png";
import { DeleteIcon, EditIcon } from "../../assets/images/img/img";
import { StudentModal } from "../StudentModal/StudentModal";
import { EditModalComponent } from "../EditModal/EditModal";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { NavLink, useNavigate } from "react-router-dom";
Modal.setAppElement("#root");

export const StudentTable = () => {
  const navigate = useNavigate();
  const [room, setRoom] = useState();
  const [classId, setClassId] = useState("all");
  const [Students, setStudents] = useState([]);
  const [btn, setBtn] = useState("Class");
  const [editId, setEditId] = useState("");
  const StudentVal =
    Students?.students || Students?.users || Students
      ? Students?.students || Students?.users || Students
      : Students?.students;

  const [addModal, setAddModal] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);

  const customStyles = {
    content: {
      width: "500px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  };

  // get class
  useEffect(() => {
    GetElementServices("class/all", setRoom);
  }, []);

  // All Student
  const GetHandleStudent = () => {
    GetElementServices(`students`, setStudents);
    setBtn("Class");
  };

  // seach
  const HandleChearch = (evt) => {
    const searchVal = evt.target.value;
    SearchServices(`/search/user?query=${searchVal}`, setStudents);
  };

  // Table

  useEffect(() => {
    if (classId === "all") {
      GetElementServices(`students`, setStudents);
      setBtn("Class");
    } else {
      GetElementServices(`students/class?id=${classId}`, setStudents);
    }
  }, [classId]);

  return (
    <div className="studenttable">
      <div className="studenttable__top">
        <button
          className="studenttable__select studenttable__select--second"
          onClick={() => setAddModal(true)}
        >
          Add student
        </button>

        <button
          className="studenttable__select studenttable__select--first"
          onClick={GetHandleStudent}
        >
          All studrnts
        </button>

        <label className="studenttable__label">
          <input
            onChange={HandleChearch}
            className="studenttable__search"
            type="search"
            name="search"
            placeholder="Search for student"
          />
        </label>

        <select
          className="studenttable__select studenttable__select--class"
          onChange={(e) => {
            setClassId(e.target.value);
            setBtn("Password");
          }}
          defaultValue={"all"}
        >
          <option value={"all"}>All Classes</option>
          {room?.classes?.map((item) => (
            <option value={item.id}>{item.name} sinfi</option>
          ))}
        </select>
      </div>
      {/* modals */}

      <Modal
        isOpen={addModal}
        onRequestClose={() => setAddModal(false)}
        style={customStyles}
      >
        <StudentModal role={"USER"} Open={setAddModal} />
      </Modal>

      {/* editmodal */}
      <Modal
        isOpen={editModal}
        onRequestClose={() => setEditModal(false)}
        style={customStyles}
      >
        <EditModalComponent edId={editId} Open={setEditModal} />
      </Modal>

      {/* delete modal */}

      <Modal
        isOpen={deleteModal}
        onRequestClose={() => setDeleteModal(false)}
        style={customStyles}
      >
        <DeleteModal edId={editId} isOpen={setDeleteModal} />
      </Modal>

      <div className="admin__nav">
        <div className="adminbar__list">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "adminbar__link"
            }
            to="/"
          >
            Admins
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "adminbar__link"
            }
            to="/class"
          >
            Teachers
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "adminbar__link"
            }
            to="/student"
          >
            Students
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "adminbar__link"
            }
            to="/classes"
          >
            Classes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "adminbar__link"
            }
            to="/settings"
          >
            Settings
          </NavLink>
          <button
            className={"adminbar__link adminbar__link--log"}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Log out
          </button>
        </div>
      </div>

      <div className="studenttable__main ">
        <div className="table__list">
          <div className="table__top top">
            <span className="top__text">Image</span>
            <span className="top__text top__text--stone">E-mail</span>
            <span className="top__text top__text--sttwo">Full name</span>
            <span className="top__text top__text--stthree">{btn}</span>
            <span className="top__text top__text--stfour">Edit</span>
            <span className="top__text top__text--stfive">Delete</span>
          </div>
          {StudentVal?.map((item) => (
            <div className="table__item">
              <img className="table__img" src={Man} alt="student" />
              <span className="table__span table__span--stone">
                {item.email}
              </span>
              <span className="table__span table__span--sttwo">
                {item.fullname}
              </span>
              <span className="table__span table__span--stthree">
                {item.class?.name || item.password
                  ? item.class?.name || item.password
                  : item.class?.name}
              </span>
              <button
                className="table__btn table__btn--margin"
                onClick={() => {
                  setEditModal(true);
                  setEditId(item.id);
                }}
              >
                <EditIcon />
              </button>
              <button
                className="table__btn"
                onClick={() => {
                  setDeleteModal(true);
                  setEditId(item.id);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          ))}
        </div>
        {/* {btn === "Class" && (
          <button
            className="studenttable__send"
            onClick={() => setAddModal(true)}
          >
            Add Student
          </button>
        )} */}
      </div>
    </div>
  );
};
