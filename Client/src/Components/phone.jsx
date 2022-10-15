import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import life from "../images/life.jpeg";
import kyiv from "../images/kyiv.png";

export default function SidePhonePanel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="icons">
        <div>
          <a href="#" onClick={handleShow} className="phoneIcon1">
            <img
              src={require("../images/call.svg").default}
              height={30}
              width={30}
            />
          </a>
          <Offcanvas show={show} onHide={handleClose} className="leftPanel">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="phoneTitle">
                Зв'язатися з нами
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="somePhones">
                <div className="phoneKyiv">
                  <img src={kyiv} height={20} width={20} />{" "}
                  <a className="phoneLink" href="tel:12345678">
                    098 119 45 89
                  </a>
                </div>
                <div className="phoneLife">
                  <img src={life} height={20} width={20} />{" "}
                  <a className="phoneLink" href="tel:12345678">
                    098 119 45 89
                  </a>
                </div>
              </div>
              <div className="titleWork">Графік роботи</div>
              <div className="workDays">
                <p>Пн-Пт: з 9:00 до 16:00</p>
                <p>Сб-Нд: Вихідний</p>
              </div>
              <div className="location">Ми знаходимося тут</div>
              <div className="address">
                <div className="addressIcon">
                  <ion-icon name="location-outline"></ion-icon>
                </div>
                м. Кременець, вул.107 Кременецької дивізії, 41
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
}
