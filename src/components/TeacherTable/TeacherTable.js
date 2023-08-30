import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { DeleteIcon, EditIcon } from "../../assets/images/img/img";
import { AditionModal } from "../AdditionModal/AdditionModal";
import {
  GetElementServices,
  SearchServices,
} from "../../services/AxiosGenerator";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { EditModalComponent } from "../EditModal/EditModal";
import { NavLink, useNavigate } from "react-router-dom";
Modal.setAppElement("#root");

export const TeacherTable = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [teachers, setTeachers] = useState(null);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [editId, setEditId] = useState("");
  const [editModal, setEditModal] = React.useState(false);

  const StudentVal =
    teachers?.users || teachers ? teachers?.users || teachers : teachers?.users;

  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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

  // All Teacher
  useEffect(() => {
    GetElementServices(`teachers`, setTeachers);
  }, []);

  // seach
  const HandleChearch = (evt) => {
    const searchVal = evt.target.value;
    SearchServices(`/search/teacher?query=${searchVal}`, setTeachers);
  };

  return (
    <div className="studenttable">
      <div className="studenttable__top">
        <button
          className="studenttable__select studenttable__select--second"
          onClick={() => openModal()}
        >
          Add teacher
        </button>

        <label className="studenttable__label">
          <input
            onChange={HandleChearch}
            className="studenttable__search"
            type="search"
            name="search"
            placeholder="Search for teacher"
          />
        </label>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <AditionModal role={"TEACHER"} Open={closeModal} />
      </Modal>

      <Modal
        isOpen={deleteModal}
        onRequestClose={() => setDeleteModal(false)}
        style={customStyles}
      >
        <DeleteModal edId={deleteId} isOpen={setDeleteModal} />
      </Modal>

      <Modal
        isOpen={editModal}
        onRequestClose={() => setEditModal(false)}
        style={customStyles}
      >
        <EditModalComponent edId={editId} Open={setEditModal} />
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

      <div className="studenttable__main">
        {/* <div className="table__top top">
          <span className="top__text top__text--teacher">E-mail</span>
          <span className="top__text ">Full name</span>
          <span className="top__text">Username</span>
          <span className="top__text top__text--admin">Class</span>
          <span className="top__text">Edit</span>
          <span className="top__text">Delete</span>
        </div> */}
        <div className="table__list">
          <div className="table__top top">
            <span className="top__text top__text--teacher">E-mail</span>
            <span className="top__text top__text--full">Full name</span>
            <span className="top__text">Username</span>
            <span className="top__text">Class</span>
            <span className="top__text">Edit</span>
            <span className="top__text">Delete</span>
          </div>
          {StudentVal?.map((item) => (
            <div className="table__item" key={item.id}>
              <span className="table__span table__span--first">
                {item.email}
              </span>
              <span className="table__span table__span--nam">
                {item.fullname}
              </span>
              <span className="table__span table__span--margin">
                {item.username}
              </span>
              <span className="table__span table__span--admin">
                {item?.class?.name}
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
                  setDeleteId(item.id);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
