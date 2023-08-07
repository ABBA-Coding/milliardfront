import React, { useEffect, useState } from "react";
import { GetElementServices } from "../../services/AxiosGenerator";
import Modal from "react-modal";
import { ClassModal } from "../ClassModal/ClassModal";
import { DeleteIcon } from "../../assets/images/img/img";
import { DeleteClass } from "../DeleteClass/DeleteClass";
Modal.setAppElement("#root");

export const ClassTable = () => {
  const [room, setRoom] = useState();
  const [editId, setEditId] = useState("");

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);

  console.log(room);

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

      <div className="studenttable__main ">
        <div className="table__top classing top">
          <span className="top__text top__text--classing">Name</span>
          <span className="top__text top__text--classing">Students</span>
          <span className="top__text top__text--classing">Delete</span>
        </div>
        <ul className="table__list ">
          {room?.classes?.map((item) => (
            <li className="table__item table__item--newitem">
              <span className="table__span">{item.name}</span>

              <span className="table__span">
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
