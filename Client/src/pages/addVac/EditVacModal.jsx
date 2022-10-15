import React, { useState } from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import "./EditVacModal.css";

export const EditVacModal = ({ handleHideEditVacForm, selectVac, EditVac }) => {
  const [VacTitle, setVacTitle] = useState(selectVac.title);
  const [PoslugaVac, setPoslugaVac] = useState(selectVac.price);

  const handleVacTitleChange = (e) => {
    setVacTitle(e.target.value);
  };

  const handlePoslugaVacChange = (e) => {
    setPoslugaVac(e.target.value);
  };

  const editVac = () => {
    const vacs = {
      id: selectVac._id,
      title: VacTitle,
      price: PoslugaVac,
    };
    EditVac(vacs);
    handleHideEditVacForm();
  };
  return (
    <>
      <form className="editVacForm">
        <h2>Редагувати інформацію</h2>
        <button
          onClick={handleHideEditVacForm}
          className="hideBtn"
          type="button"
        >
          <HighlightOffOutlinedIcon />
        </button>
        <input
          className="EditFormInput"
          type="text"
          value={VacTitle}
          onChange={handleVacTitleChange}
        />
        <input
          className="EditFormInput"
          type="text"
          value={PoslugaVac}
          onChange={handlePoslugaVacChange}
        />
        <button onClick={editVac} className="confirmEditVac" type="button">
          Зберегти
        </button>
      </form>
      <div onClick={handleHideEditVacForm} className="modalEditVac"></div>
    </>
  );
};
