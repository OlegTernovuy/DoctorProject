import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <section className="Social">
        <div className="SocialName">
          <h>Приєднуйтеся до наших соціальних мереж:</h>
        </div>
        <div className="SocialLink">
          <a
            href="https://uk-ua.facebook.com/people/%D0%90%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D1%96%D0%B9-%D0%9E%D0%BF%D0%B0%D0%BB%D1%8C%D0%BA%D0%BE/100007643763363/"
            target="_blank"
          >
            <img
              className="SocialLinks"
              src={require("../images/facebook.svg").default}
              height={40}
              width={40}
            />
          </a>
          <a href="/" target="_blank">
            <img
              className="SocialLinks"
              src={require("../images/instagram.svg").default}
              height={40}
              width={40}
            />
          </a>
          <a href="/" target="_blank">
            <img
              className="SocialLinks"
              src={require("../images/twitter.svg").default}
              height={40}
              width={40}
            />
          </a>
        </div>
      </section>
      <div className="polosa"></div>
      <section>
        <div className="about">
          <div className="textAbout">
            <h3>
              {" "}
              <img
                src={require("../images/pulse.svg").default}
                height={30}
                width={30}
              />{" "}
              MyDoctor
            </h3>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="products">
            <h3>Наші послуги</h3>
            <p>Вакцинація</p>
            <p>Огляди</p>
            <p>Направлення</p>
          </div>
          <div className="links">
            <h3>Корисні посилання</h3>
            <a href="https://moz.gov.ua/" target="_blank">
              МОЗ
            </a>
            <a href="#" target="_blank">
              Грудне вигодовування
            </a>
            <a href="#" target="_blank">
              Доказова педіатрія
            </a>
          </div>
          <div className="contact">
            <h3>Контакти</h3>
            <p>
              <img
                className="footerIcons"
                src={require("../images/home.svg").default}
                height={20}
                width={20}
              />
              м. Кременець
            </p>
            <p>
              <img
                className="footerIcons"
                src={require("../images/mail.svg").default}
                height={20}
                width={20}
              />
              opalko@gmai.com
            </p>
            <p>
              <img
                className="footerIcons"
                src={require("../images/call2.svg").default}
                height={20}
                width={20}
              />
              098 119 56 45
            </p>
          </div>
        </div>
      </section>
      <div className="footFoot">
        © 2022 Copyright:
        <a href="https://instagram.com/olegternovuy" target="_blank">
          ternovyi
        </a>
      </div>
    </footer>
  );
}
