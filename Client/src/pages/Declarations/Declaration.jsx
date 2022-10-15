import React, { useEffect, useState } from "react";
import "./Declaration.css";
import 'animate.css'
import WOW from 'wowjs';

import num1 from "../../images/1.svg";
import num2 from "../../images/2.svg";
import num3 from "../../images/3.svg";
import num4 from "../../images/4.svg";

export const Declaration = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <>
      <div className="containerDeclaration">
        <div className="titleDeclaration">
          <h1>Як укласти декларацію з сімейним лікарем</h1>
          <p>
            Пацієнт має право обрати лікаря, який надає первинну медичну
            допомогу, за умови, що кількість пацієнтів, які вже обрали такого
            лікаря, не перевищує оптимальний обсяг практики первинної медичної
            допомоги. Це можна зробити за рекомендацією рідних, знайомих або
            інших осіб, які вже уклали декларації з сімейним лікарем та отримали
            позитивний досвід надання відповідної медичної допомоги, або
            звернутися безпосередньо до закладу первинної медичної допомоги і
            одержати детальну інформацію про кваліфікацію, стаж роботи та решту
            необхідних даних про лікаря, з яким можна підписати декларацію.
          </p>
        </div>
        <div className="aboutDeclaration">
          <div data-wow-duration="2s" className="titleList" class="titleList wow animate__animated animate__fadeInRight">
            <h2>Порядок укладання декларації</h2>
          </div>
          <div className="list">
            <div data-wow-duration="2s" className="listCard" class="listCard wow animate__animated animate__fadeInRightBig">
              <img src={num1} />
              <p>
                Візьміть із собою паспорт, ідентифікаційний код та мобільний
                телефон. Якщо потрібно підписати декларацію для дитини до 14
                років — візьміть також свідоцтво про народження дитини.
              </p>
            </div>
            <div data-wow-duration="2s" className="listCard" class="listCard wow animate__animated animate__fadeInRightBig">
              <img src={num2} />
              <p>
                Працівник медзакладу введе ваші дані в електронну систему. На
                мобільний надійде СМС з кодом. Повідомте цей код працівнику
                закладу.
              </p>
            </div>
            <div data-wow-duration="2s" className="listCard" class="listCard wow animate__animated animate__fadeInRightBig">
              <img src={num3} />
              <p>
                З електронної системи роздрукують декларацію з вашими даними.
                Уважно перевірте, чи всі дані правильні. Підпишіть два
                екземпляри роздрукованої декларації. Один ви забираєте з собою,
                інший залишається у закладі.
              </p>
            </div>
            <div data-wow-duration="2s" className="listCard" class="listCard wow animate__animated animate__fadeInRightBig">
              <img src={num4} />
              <p>
                Потім працівник підтвердить вашу декларацію своїм електронним
                підписом та відправить в електронну систему.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
