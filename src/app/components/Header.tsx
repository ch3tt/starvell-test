import Image from "next/image";
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <div className="header__left">
            <Image
              onClick={() => {
                window.location.href = "/";
              }}
              className="header__logo"
              src={logo}
              alt=""
            />
            <div className="header__search">
              <Image src={search} alt="" />
              <input
                className="plain"
                placeholder="Поиск игр и приложений..."
                type="text"
              />
            </div>
          </div>
          <div className="header__right">
            <div className="header__right__buttons">
              <ul className="header__right__dropdowns">
                <Dropdown
                  title="Поддержка"
                  values={[
                    { title: "Поддержка" },
                    { title: "Поддержка" },
                    { title: "Поддержка" },
                  ]}
                />
                <Dropdown
                  title="Русский"
                  values={[
                    { title: "Русский" },
                    { title: "Английский" },
                    { title: "Испанский" },
                  ]}
                />
                <Dropdown
                  title="RUB"
                  values={[
                    { title: "USD" },
                    { title: "EUR" },
                    { title: "RUB" },
                  ]}
                />
              </ul>
              <button className="white-button button">Вход</button>
              <button className="primary-button button">Регистрация</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
