import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { DeleteIcon } from "../../assets/images/img/img";
import { AditionModal } from "../AdditionModal/AdditionModal";
import {
  GetElementServices,
  SearchServices,
} from "../../services/AxiosGenerator";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { NavLink, useNavigate } from "react-router-dom";
Modal.setAppElement("#root");

export const AdminTable = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [teachers, setTeachers] = useState(null);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [deleteId, setDeleteId] = useState("");
  const navigate = useNavigate();

  const StudentVal =
    teachers?.users || teachers ? teachers?.users || teachers : teachers?.users;

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
    GetElementServices(`search/admin?query=`, setTeachers);
  }, []);

  // seach
  const HandleChearch = (evt) => {
    const searchVal = evt.target.value;
    SearchServices(`/search/admin?query=${searchVal}`, setTeachers);
  };

  return (
    <div className="studenttable">
      <div className="studenttable__top">
        <button
          className="studenttable__select studenttable__select--second"
          onClick={() => openModal()}
        >
          Add admin
        </button>

        <label className="studenttable__label">
          <input
            onChange={HandleChearch}
            className="studenttable__search"
            type="search"
            name="search"
            placeholder="Search for admin"
          />
        </label>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <AditionModal role={"ADMIN"} Open={closeModal} />
      </Modal>

      <Modal
        isOpen={deleteModal}
        onRequestClose={() => setDeleteModal(false)}
        style={customStyles}
      >
        <DeleteModal edId={deleteId} isOpen={setDeleteModal} />
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
        <div className="table__list">
          <div className="table__top inside">
            <span className="top__text top__text--another">E-mail</span>
            <span className="top__text top__text--width">Full name</span>
            <span className="top__text">Username</span>
            <span className="top__text">Delete</span>
          </div>
          {StudentVal?.map((item) => (
            <div className="table__item" key={item.id}>
              <span className="table__span table__span--another">
                {item.email}
              </span>
              <span className="table__span table__span--two">
                {item.fullname}
              </span>
              <span className="table__span table__span--margin">
                {item.username}
              </span>
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
