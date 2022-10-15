import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./modal.css";

const token = "5549357725:AAGhcc_cZhsP46IxdNxddJtYHLchOSiGwGQ";
const id = "-605034253";

function MyVerticallyCenteredModal(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");

  function Done() {
    alert("Ви успішно записалися на прийом");
  }


  const addToTgBot = (patiens) => {
    const entries = Object.entries(patiens);
    const values = entries.map((value) => `${value[0]}: ${value[1]}`);
    const message = values.join("%0A");

    fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&parse_mode=html&text=${message}`
    );
  };

  const addNewPatient = async (patient) => {
	try{
		const responce = await fetch('https://doctor-study-project.herokuapp.com/patients',{
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body: JSON.stringify(patient)
		})

	}catch(err){
		console.log(err)
	}
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const patiens = {
        name: name,
        date: date,
        time: time,
        phone: phone,
        reason: reason,
      };

      addNewPatient(patiens)
      addToTgBot(patiens)
      Done();
      props.onHide();

    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setName("");
    setDate("");
    setTime("");
    setPhone("");
    setReason("");
  };

  let dat = new Date();
  const minDay = dat.toISOString().split("T")[0];
  const lastDay0 = dat.setDate(dat.getDate() + 7);
  const lastDay = dat.toISOString().split("T")[0];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="titleModal">
          Записатися на прийом
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <input
            className="inputName"
            type="text"
            placeholder="Ваше ФІО"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="inputDate"
            type="date"
            id="start"
            name="trip-start"
            min={minDay}
            max={lastDay}
            placeholder="Виберіть дату"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <select
            className="inputTime"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Оберіть час</option>
            <option value="9:00">9:00</option>
            <option value="9:30">9:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
          </select>

          <br />

          <input
            className="inputPhone"
            type="phone"
            id="phone"
            name="phone"
            placeholder="Телефон"
            // pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <select
            className="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          >
            <option value="">Оберіть причину звертання</option>
            <option value="Вакцинація">Вакцинація</option>
            <option value="Огляд">Огляд</option>
            <option value="Захворювання">Захворювання</option>
          </select>

          <button type="submit" className="buttonConfirm">
            Записатися
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default function CenteredModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-info"
        size="lg"
        onClick={() => setModalShow(true)}
      >
        Записатися на прийом
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
