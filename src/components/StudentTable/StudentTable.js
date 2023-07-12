import React, { useEffect, useState } from "react";
import {
  GetElementServices,
  SearchServices,
} from "../../services/AxiosGenerator";
import Modal from "react-modal";
import { ClassModal } from "../ClassModal/ClassModal";
import Man from "../../assets/images/icons/man1.png";
import { DeleteIcon, EditIcon } from "../../assets/images/img/img";
import { StudentModal } from "../StudentModal/StudentModal";
import { EditModalComponent } from "../EditModal/EditModal";
import { DeleteModal } from "../DeleteModal/DeleteModal";
Modal.setAppElement("#root");

export const StudentTable = () => {
  const [room, setRoom] = useState();
  const [classId, setClassId] = useState("");
  const [Students, setStudents] = useState([]);
  const [btn, setBtn] = useState("Class");
  const [editId, setEditId] = useState("");
  const StudentVal =
    Students?.students || Students?.users || Students
      ? Students?.students || Students?.users || Students
      : Students?.students;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [addModal, setAddModal] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
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

  // get students by class
  useEffect(() => {
    GetElementServices(`students/class?id=${classId}`, setStudents);
  }, [classId]);

  // All Student
  const GetHandleStudent = () => {
    GetElementServices(`students`, setStudents);
    setBtn("Class");
  };

  useEffect(() => {
    GetElementServices(`students`, setStudents);
  }, []);

  // seach
  const HandleChearch = (evt) => {
    const searchVal = evt.target.value;
    SearchServices(`/search/user?query=${searchVal}`, setStudents);
  };

  // Table

  return (
    <div className="studenttable">
      <div className="studenttable__top">
        {btn === "Class" && (
          <button
            className="studenttable__select studenttable__select--second"
            onClick={() => setAddModal(true)}
          >
            Add Student
          </button>
        )}
        <button
          className="studenttable__select studenttable__select--first"
          onClick={GetHandleStudent}
        >
          All Studrnts
        </button>

        <label className="studenttable__label">
          <input
            onChange={HandleChearch}
            className="studenttable__search"
            type="search"
            name="search"
            placeholder="Search Preson"
          />
        </label>

        <select
          className="studenttable__select"
          onChange={(e) => {
            setClassId(e.target.value);
            setBtn("Password");
          }}
          defaultValue={""}
        >
          <option value={""}>All Classes</option>
          {room?.classes?.map((item) => (
            <option value={item.id}>{item.name} sinfi</option>
          ))}
        </select>

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

      <Modal
        isOpen={addModal}
        onRequestClose={() => setAddModal(false)}
        style={customStyles}
      >
        <StudentModal role={"USER"} />
      </Modal>

      {/* editmodal */}
      <Modal
        isOpen={editModal}
        onRequestClose={() => setEditModal(false)}
        style={customStyles}
      >
        <EditModalComponent edId={editId} />
      </Modal>

      {/* delete modal */}

      <Modal
        isOpen={deleteModal}
        onRequestClose={() => setDeleteModal(false)}
        style={customStyles}
      >
        <DeleteModal edId={editId} isOpen={setDeleteModal} />
      </Modal>

      <div className="studenttable__main ">
        <div className="table__top top">
          <span className="top__text">image</span>
          <span className="top__text">Email</span>
          <span className="top__text">FullName</span>
          <span className="top__text">{btn}</span>
          <span className="top__text">Edit</span>
          <span className="top__text">Delete</span>
        </div>
        <ul className="table__list">
          {StudentVal?.map((item) => (
            <li className="table__item">
              <img className="table__img" src={Man} alt="student" />
              <span className="table__span table__span--first">
                {item.email}
              </span>
              <span className="table__span table__span--two">
                {item.fullname}
              </span>
              <span className="table__span table__span--three">
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
            </li>
          ))}
        </ul>
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
