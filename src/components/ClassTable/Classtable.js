import React, { useEffect, useState } from "react";
import { GetElementServices } from "../../services/AxiosGenerator";
import Modal from "react-modal";
import { ClassModal } from "../ClassModal/ClassModal";
import { DeleteIcon } from "../../assets/images/img/img";
import { DeleteClass } from "../DeleteClass/DeleteClass";
import { NavLink, useNavigate } from "react-router-dom";
Modal.setAppElement("#root");

export const ClassTable = () => {
  const navigate = useNavigate();
  const [room, setRoom] = useState();
  const [editId, setEditId] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);

  // Modal
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

  // get class
  useEffect(() => {
    GetElementServices("class/all", setRoom);
  }, []);

  // Table

  return (
    <div className="studenttable">
      <div className="studenttable__top">
        <button className="studenttable__btn" onClick={() => openModal()}>
          Create new
        </button>
      </div>
      {/* modals */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ClassModal IsOpen={setIsOpen} />
      </Modal>

      {/* delete modal */}

      <Modal
        isOpen={deleteModal}
        onRequestClose={() => setDeleteModal(false)}
        style={customStyles}
      >
        <DeleteClass edId={editId} isOpen={setDeleteModal} />
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
        <div className="table__list ">
          <div className="table__top classing top">
            <span className="top__text top__text--classing">Name</span>
            <span className="top__text top__text--classing">Students</span>
            <span className="top__text top__text--classing">Delete</span>
          </div>
          {room?.classes?.map((item) => (
            <div key={item?.id} className="table__item table__item--newitem">
              <span className="table__span table__span--clone">
                {item.name}
              </span>

              <span className="table__span table__span--cltwo">
                <span>{item?.students?.length || 0}</span>
              </span>

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
      </div>
    </div>
  );
};
