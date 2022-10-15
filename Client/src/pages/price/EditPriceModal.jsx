import React, { useState } from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import "./EditPriceModal.css";

export const EditPriceModal = ({
  handleHideEditPriceForm,
  selectPrice,
  EditPrice,
}) => {
  const [PriceTitle, setPriceTitle] = useState(selectPrice.title);
  const [PoslugaPrice, setPoslugaPrice] = useState(selectPrice.price);

  const handlePriceTitleChange = (e) => {
    setPriceTitle(e.target.value);
  };

  const handlePoslugaPriceChange = (e) => {
    setPoslugaPrice(e.target.value);
  };

  const editPrice = () => {
    const price = {
      id: selectPrice._id,
      title: PriceTitle,
      price: PoslugaPrice,
    };
    EditPrice(price);
    console.log(selectPrice._id);
    handleHideEditPriceForm();
  };
  return (
    <>
      <form className="editVacForm">
        <h2>Редагувати інформацію</h2>
        <button
          onClick={handleHideEditPriceForm}
          className="hideBtn"
          type="button"
        >
          <HighlightOffOutlinedIcon />
        </button>
        <input
          className="EditFormInput"
          type="text"
          value={PriceTitle}
          onChange={handlePriceTitleChange}
        />
        <input
          className="EditFormInput"
          type="text"
          value={PoslugaPrice}
          onChange={handlePoslugaPriceChange}
        />
        <button onClick={editPrice} className="confirmEditVac" type="button">
          Зберегти
        </button>
      </form>
      <div onClick={handleHideEditPriceForm} className="modalEditVac"></div>
    </>
  );
};
