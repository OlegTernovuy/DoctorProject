import { useState } from "react";

export const Form = ({title, handleClick}) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="loginForm">
      <div>
        <input
          className="RegisterFormInput"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Логін"
          required
        />
      </div>
      <div>
        <input
          className="RegisterFormInput"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Пароль"
          required
        />
      </div>
      <div>
        <button className="BlackBtn" onClick={() => handleClick(email, pass)}>
          {title}
        </button>
      </div>
    </div>


  );
};
