import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddImg from "../../assets/images/icons/add-imag.jpg";
import { GetElementServices } from "../../services/AxiosGenerator";

export const SettingTable = () => {
  const [meta, setMeta] = useState();
  console.log(meta);
  const token = localStorage.getItem("token");
  const dataOne = useRef();
  const dataTwo = useRef();
  const dataThree = useRef();
  const dataFour = useRef();
  const dataFive = useRef();
  const dataSix = useRef();
  const dataSeven = useRef();

  // image editing
  const studentImg = useRef();
  const teacerImg = useRef();
  const contact = useRef();

  useEffect(() => {
    GetElementServices("meta", setMeta);
  }, []);

  // get frist img
  const getFirstImg = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("image", studentImg?.current?.files[0]);

    axios
      .post("https://milliardapi.itlink.uz/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          localStorage.setItem("studentImg", data?.data.image);
          toast.success("Uploaded successfully!");
          setTimeout(() => {
            window.location.reload(false);
          }, "2600");
        }
      })
      .catch((err) => console.log(err));
  };

  // get frist img
  const getSecondImg = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("image", teacerImg?.current?.files[0]);

    axios
      .post("https://milliardapi.itlink.uz/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          localStorage.setItem("teacherImg", data?.data.image);
          toast.success("Uploaded successfully!");
          setTimeout(() => {
            window.location.reload(false);
          }, "2600");
        }
      })
      .catch((err) => console.log(err));
  };

  // edit main info
  const studentImages = localStorage.getItem("studentImg");
  const teacherImages = localStorage.getItem("teacherImg");
  const editMainSubmit = (evt) => {
    evt.preventDefault();
    axios
      .put(
        `https://milliardapi.itlink.uz/meta`,
        {
          contact: contact?.current?.value,
          studentImg: studentImages ? studentImages : "",
          teacherImg: teacherImages ? teacherImages : "",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((data) => {
        if (data.status === 200) {
          console.log(data);
          toast.success("Uploaded successfully!");
          setTimeout(() => {
            window.location.reload(false);
          }, "2600");
        }
      })
      .catch((err) => console.error(err));
  };

  // put data function
  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios
      .put(
        "https://milliardapi.itlink.uz/shedule",
        {
          days: [
            dataOne?.current?.value,
            dataTwo?.current?.value,
            dataThree?.current?.value,
            dataFour?.current?.value,
          ],
          times: [
            dataFive?.current?.value,
            dataSix?.current?.value,
            dataSeven?.current?.value,
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((data) => {
        if (data.status === 200) {
          console.log(data);
          toast.success("edited successfully!");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("error, try again!");
      });
  };

  return (
    <div className="settings">
      <div className="settings__inner">
        <div className="setting__left left">
          <form className="left__form form" onSubmit={handleSubmit}>
            <h3 className="form__title">Enter the days and time</h3>
            <div className="form__inneer inner">
              <div className="form__left">
                <h4 className="inner__title">Dates</h4>
                <input
                  ref={dataOne}
                  name="frist"
                  className="form__input"
                  type="text"
                  placeholder="04.04"
                />
                <input
                  ref={dataTwo}
                  name="second"
                  className="form__input"
                  type="text"
                  placeholder="04.04"
                />
                <input
                  ref={dataThree}
                  name="three"
                  className="form__input"
                  type="text"
                  placeholder="04.04"
                  maxLength={5}
                />
                <input
                  ref={dataFour}
                  name="four"
                  className="form__input"
                  type="text"
                  placeholder="04.04"
                />
              </div>

              <div className="form__right">
                <h4 className="inner__title">Times</h4>
                <input
                  ref={dataFive}
                  name="five"
                  className="form__input"
                  type="text"
                  placeholder="09.00"
                />
                <input
                  ref={dataSix}
                  name="six"
                  className="form__input"
                  type="text"
                  placeholder="11.00"
                />
                <input
                  ref={dataSeven}
                  name="seven"
                  className="form__input"
                  type="text"
                  placeholder="12.30"
                />
              </div>
            </div>
            <div className="form__wrap">
              <button type="submit" className="form__btn">
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="settings__right right">
          <div className="right__top">
            <form className="form__one one" onSubmit={getFirstImg}>
              <h3 className="one__title">For parent home page</h3>
              <label className="one__label">
                <input
                  ref={studentImg}
                  className="visually-hidden"
                  type="file"
                  name="img_parent"
                />
                <span className="one__span">
                  <img
                    src={
                      `https://milliardapi.itlink.uz/${studentImages}` || AddImg
                    }
                    alt="add img"
                  />
                </span>
              </label>
              <button className="one__btn" type="submit">
                choose
              </button>
            </form>

            <form className="form__one one" onSubmit={getSecondImg}>
              <h3 className="one__title">For teachers home page</h3>
              <label className="one__label">
                <input
                  ref={teacerImg}
                  className="visually-hidden"
                  type="file"
                  name="img_parent"
                />
                <span className="one__span">
                  <img
                    src={
                      `https://milliardapi.itlink.uz/${teacherImages}` || AddImg
                    }
                    alt="add img"
                  />
                </span>
              </label>
              <button className="one__btn">choose</button>
            </form>
          </div>

          <form className="right__end end " onSubmit={editMainSubmit}>
            <h3 className="end__title">Our number</h3>
            <input
              ref={contact}
              className="end__input"
              // defaultValue={+998}
              type="tel"
              name="phone"
              placeholder="993339977"
            />
            <div className="end__cover">
              <button className="one__btn">Send</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
