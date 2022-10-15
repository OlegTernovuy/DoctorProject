import React, { useEffect } from "react";
import "./home.css";
import "animate.css";
import WOW from "wowjs";

import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Opalko from "../../images/opalko.jpeg";
import CardDoc from "../../images/cardDoc.jpeg";

import bg from "../../images/bg.jpeg";
import likar from "../../images/vrach.svg";
import procedyru from "../../images/bezopasnye-procedury.svg";
import obladnanny from "../../images/oborudovanie.svg";
import metoduku from "../../images/innovacionnye-metodiki.svg";
import doctor from "../../images/doctor.svg";
import laboratory from "../../images/laboratory.svg";
import recipe from "../../images/recipe.svg";

import CenteredModal from "../modalAppo/modal.jsx";


export const Home = ({ isAuth, isLoggedIn }) => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);


  return (
    <div className="mainPage">
      <div className="titleName">
        <div className="nameOpalko">
          <div className="opalko">Клініка</div>
          <div className="opalko">MyDoctor</div>
        </div>
        <div className="appointment">
          <div className="someInfo">
            <p>
              Сучасний підхід до лікування вашої дитини. Ми пропонуємо нове
              бачення лікарні у вашому місті. Найкращі спеціалісти та найшвидше
              обслуговування. Ми цінуємо кожного пацієнта, який довірив нам своє
              здоров'я.
            </p>
          </div>
          <div className="buton">
            {isLoggedIn ? (
              <CenteredModal />
            ) : (
              <button className="appBut"
                onClick={() => {
                  alert("Увійдіть");
                }}
              >
                Записатися на прийом
              </button>
            )}
          </div>
        </div>
      </div>
      <Carousel fade>
        <Carousel.Item interval={5005}>
          <div className="about_img">
            <img
              className="img"
              src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2 className="slideText">Записуйтеся на прийом онлайн</h2>
            </Carousel.Caption>
            <div className="leftBlock"> </div>
            <div className="rightBlock"> </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5005}>
          <div className="about_img">
            <img
              className="img"
              src="https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h2 className="slideText">Не забувайте лікуватися</h2>
            </Carousel.Caption>
            <div className="leftBlock"> </div>
            <div className="rightBlock"> </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5005}>
          <div className="about_img">
            <img
              className="img"
              src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2 className="slideText">Ваш улюблений лікар</h2>
            </Carousel.Caption>
            <div className="leftBlock"> </div>
            <div className="rightBlock"> </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="myDoctors">
        <div className="headDoctor">
          <div
            data-wow-duration="1.5s"
            className="ourDoctors"
            class="ourDoctors wow animate__animated animate__fadeInLeftBig"
          >
            Наші спеціалісти
          </div>
        </div>
        <div
          data-wow-duration="1.5s"
          className="cards"
          class="cards wow animate__animated animate__fadeInRightBig"
        >
          <Card>
            <Card.Img variant="top" src={CardDoc} />
            <Card.Body>
              <Card.Title>Анатолій Опалько</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Педіатр, 5 років досвіду</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card>
            <Card.Img variant="top" src={CardDoc} />
            <Card.Body>
              <Card.Title>Галина Карпюк</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Педіатр, 15 років досвіду</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card>
            <Card.Img variant="top" src={CardDoc} />
            <Card.Body>
              <Card.Title>Олеся Крижемська</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Сімейний лікар, 4 роки досвіду</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>
      <div className="aboutClinic">
        <div className="bgPhoto">
          <img className="back" src={bg} />

          <div className="informClinic">
            <h2>Медичний центр</h2>
            <p>
              Ми віримо, що медицина повинна ставитися до людей з повагою.
              Професійні лікарі, новітнє обладнання та увага до кожного пацієнта
              – це і є повага. Створюючи медцентр «Мій лікар», ми хотіли
              відкрити в Україні лікувально-діагностичний центр нового формату.
            </p>
          </div>
          <div
            data-wow-duration="1.5s"
            className="tab"
            class="tab wow animate__animated animate__fadeInRightBig"
          >
            <div className="block square1">
              <div>
                Безпечні <br />
                процедури{" "}
              </div>
              <div>
                <img src={procedyru} />
              </div>
            </div>
            <div className="block square2">
              <div>
                Сучасне
                <br /> обладнання
              </div>
              <div>
                <img src={obladnanny} />
              </div>
            </div>
            <div className="block square3">
              <div>
                Спостерігання
                <br /> лікарем
              </div>
              <div>
                <img src={likar} />
              </div>
            </div>
            <div className="block square4">
              <div>
                Обслуговання
                <br /> без черг
              </div>
              <div>
                <img src={metoduku} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <h2>Наші послуги</h2>
        <div className="servicesCards">
          <Card className="poslugu">
            <Card.Img variant="top" src={doctor} height={100} width={100} />
            <Card.Body>
              <Card.Title>ПОСЛУГИ Педіатра</Card.Title>
              <Card.Text>
                Надаємо повний спектр амбулаторних послуг сімейної медицини та
                здійснюємо подальший супровід пацієнтів. Для осіб, що уклали
                декларацію – послуги сімейного лікаря – БЕЗКОШТОВНІ
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="poslugu">
            <Card.Img variant="top" src={laboratory} height={100} width={100} />
            <Card.Body>
              <Card.Title>ЛАБОРАТОРНІ ДОСЛІДЖЕННЯ</Card.Title>
              <Card.Text>
                Надаємо послуги лабораторних досліджень для дітей та дорослих за
                доступними цінами, включаючи експрес-діагностику коронавірусної
                інфекції СOVID-19 (виявлення антитіл та антигенів)
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="poslugu">
            <Card.Img variant="top" src={recipe} height={100} width={100} />
            <Card.Body>
              <Card.Title>ВИДАЄМО МЕДИЧНІ ДОКУМЕНТИ</Card.Title>
              <Card.Text>
                Видаємо увесь спектр медичних документів – лікарняні листи,
                медичні довідки, міжнародні свідоцтва про вакцинацію від
                СOVID-19. Також надаємо електронні рецепти за програмою
                “ДОСТУПНІ ЛІКИ”
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
