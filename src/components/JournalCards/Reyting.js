<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { ReytingItem } from "./ReytingItem";
import { ScrollerBtn } from "./ScrollerBtn";
import { GetElementServices } from "../../services/AxiosGenerator";

export const Reyting = () => {
  const [style, setStyle] = useState("silver");
  const [classId, setClassId] = useState("");
  const [room, setRoom] = useState();
  const [students, setStudents] = useState();

  const StudentVal =
    students?.students || students?.users || students
      ? students?.students || students?.users || students
      : students?.students;

  console.log(StudentVal);

  const point = 100;
  const gold = "gold";
  const bronze = "bronze";

  // get class
  useEffect(() => {
    GetElementServices("class/all", setRoom);
  }, []);

  // get students by class
  useEffect(() => {
    GetElementServices(`students/class?id=${classId}`, setStudents);
  }, [classId]);

  useEffect(() => {
    GetElementServices(`students`, setStudents);
  }, []);

  const Allstudents = () => {
    GetElementServices(`students`, setStudents);
  };

  // if (point > 75) {
  //   setStyle("silver");
  // }else if (point < 75 && point > 50) {
  //   setStyle("silver");
  // } else if (point < 50) {
  //   setStyle("bronze");
  // }

  return (
    <div className="reyting">
      <div className="reyting__links">
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
      </div>
      <div className="reyting__info info">
        <select
          className="info__title"
          onChange={(e) => {
            setClassId(e.target.value);
            if (e.target.value === "") {
              Allstudents();
            }
          }}
          defaultValue={""}
        >
          <option value={""}>All Students</option>
          {room?.classes?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name} sinfi
            </option>
          ))}
        </select>

        <ul className="info__list">
          {StudentVal?.map((e) => (
            <ReytingItem name={e.fullname} point={point} clas={gold} />
          ))}
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={point}
            clas={gold}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={gold}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={gold}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={point}
            clas={gold}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={style}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={style}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={point}
            clas={style}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={style}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={style}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={point}
            clas={bronze}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={bronze}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={bronze}
          />
        </ul>
        <div className="info__down down">
          <p className="down__text">
            Umumiy o’quvchilar soni {StudentVal?.length} ta
          </p>
          <div className="down__cover">
            <span className="down__color">Gold</span>
            <span className="down__color">Silver</span>
            <span className="down__color">Bronze</span>
          </div>
        </div>
      </div>
    </div>
  );
=======
import React, { useMemo, useState } from "react";
import { ReytingItem } from "./ReytingItem";
import { ScrollerBtn } from "./ScrollerBtn";
import axios from "axios";

export const Reyting = () => {
	const [classes, setClasses] = useState([]);
	const [classId, setClassId] = useState("");
	const [style] = useState("silver");
	const activeClass = useMemo(() => {
		return classes.find((classItem) => classItem.id === classId);
	}, [classId, classes]);
	console.log(activeClass);
	const point = 100;
	const gold = "gold";
	const bronze = "bronze";
	useState(() => {
		async function getClasses() {
			const classes = await axios.get(
				"https://milliard-kids-backend-production.up.railway.app/class/all",
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem(
							"token"
						)}`,
					},
				}
			);
			setClasses(classes.data.classes);
		}
		getClasses();
	}, []);
	// if (point > 75) {
	//   setStyle("silver");
	// }else if (point < 75 && point > 50) {
	//   setStyle("silver");
	// } else if (point < 50) {
	//   setStyle("bronze");
	// }

	return (
		<div className="reyting">
			<div className="reyting__links">
				<ScrollerBtn />
				<ScrollerBtn />
				<ScrollerBtn />
				<ScrollerBtn />
				<ScrollerBtn />
				<ScrollerBtn />
				<ScrollerBtn />
				<ScrollerBtn />
				<ScrollerBtn />
			</div>
			<div className="reyting__info info">
				<select
					style={{ marginBottom: "1rem" }}
					className=""
					onChange={(e) => {
						setClassId(e.target.value);
					}}
					defaultValue={classes?.[0]?.id}
				>
					<option value={""}>Sinfni tanlang</option>
					{classes?.map((item) => (
						<option key={item.id} value={item.id}>
							{item.name} sinfi
						</option>
					))}
				</select>
				{activeClass ? (
					<h2 className="info__title">{activeClass.name} sinfi</h2>
				) : null}
				<ul className="info__list">
					{activeClass?.students.map((student) => (
            <ReytingItem
              key={student.id}
							name={student.fullname}
							point={point}
							clas={gold}
						/>
					))}
				</ul>
				<div className="info__down down">
					<p className="down__text">Umumiy o’quvchilar soni 72ta</p>
					<div className="down__cover">
						<span className="down__color">Gold</span>
						<span className="down__color">Silver</span>
						<span className="down__color">Bronze</span>
					</div>
				</div>
			</div>
		</div>
	);
>>>>>>> b4ac3c5bfb8ab230b4b5968bb6e248a97c42e263
};
