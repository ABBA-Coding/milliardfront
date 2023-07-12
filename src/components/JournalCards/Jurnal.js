import React, { useState } from "react";

const Jurnal = () => {
  const [ratings, setRatings] = useState([]);

  const handleRatingChange = (index, value) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = value;
    setRatings(updatedRatings);
  };

  return (
    <div className="points">
      <div className="points__inner">
        <div className="points__date">
          <table>
            <thead>
              <tr>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <input type="text" minLength="1" maxLength="8" />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input type="text" minLength="1" maxLength="8" />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input type="text" minLength="1" maxLength="8" />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input type="text" minLength="1" maxLength="8" />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input type="text" minLength="1" maxLength="8" />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input type="text" minLength="1" maxLength="8" />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input type="text" minLength="1" maxLength="8" />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input type="text" minLength="1" maxLength="8" />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input type="text" minLength="1" maxLength="8" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="points__section section">
          <p className="section__title">Muloqot qilish</p>
          <table>
            <thead>
              <tr>
                <th>Fikrlarini</th>
                <th>Aktiv</th>
                <th>Og'zaki</th>
                <th>Auditoriyani</th>
                <th>Jamoaviy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="points__section section">
          <p className="section__title">Tanqidiy fikrlash:</p>
          <table>
            <thead>
              <tr>
                <th>Fikrlarini</th>
                <th>Aktiv</th>
                <th>Og'zaki</th>
                <th>Auditoriyani</th>
                <th>Jamoaviy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="points__section section">
          <p className="section__title">Muammoni hal qilish:</p>
          <table>
            <thead>
              <tr>
                <th>Fikrlarini</th>
                <th>Aktiv</th>
                <th>Og'zaki</th>
                <th>Auditoriyani</th>
                <th>Jamoaviy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="points__section section">
          <p className="section__title section__title--bord">
            Yechimlarni qo'llash:
          </p>
          <table>
            <thead>
              <tr>
                <th>Fikrlarini</th>
                <th>Aktiv</th>
                <th>Og'zaki</th>
                <th>Auditoriyani</th>
                <th>Jamoaviy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
                <td>
                  <input type="text" min="1" max="5" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="points__send send">
        <button className="send__btn">Send</button>
      </div>

      {/* <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item 1</td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={ratings[0] || ""}
                  onChange={(e) => handleRatingChange(0, e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={ratings[1] || ""}
                  onChange={(e) => handleRatingChange(1, e.target.value)}
                />
              </td>
            </tr>
            Add more rows as needed
          </tbody>
        </table> */}
    </div>
  );
};

export default Jurnal;
