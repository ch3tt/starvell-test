import Image from "next/image";
import tg from '../images/socials/tg.svg'
import vk from '../images/socials/vk.svg'
import logo from '../images/logo.svg';
import youtube from '../images/socials/youtube.svg'
import discord from '../images/socials/discord.svg'
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__left">
            <div className="footer__left__block">
            <Image className="footer__logo"  src={logo} alt="" />
           <p>© 2024 STARVELL, лучший маркетплейс цифровых товаров и услуг</p>
          <p>Дизайн сделан в 0xHearts.com</p>
            </div>
            <div className="footer__left__block">
                <h6>Поддержка</h6>
                <ul>
                    <li>
                        <a>
                        Написать в поддержку</a></li>
                    <li>
                        
                        <a>
                        Политика конфиденциальности</a></li>
                    <li>
                        <a>
                        Пользовательское соглашение</a></li>
                </ul>
                </div>
          </div>
          <div className="footer__right">
            <ul className="footer__right__socials">
              <li>
                <a className="tg" href="" target="_blank" rel="noopener noreferrer">
        <Image alt=""   src={tg} />

                </a>
              </li>
              <li>
                <a className="dc" href="" target="_blank" rel="noopener noreferrer">
                <Image alt="" src={discord} />

                </a>
              </li>
              <li>
                <a className="vk" href="" target="_blank" rel="noopener noreferrer">
                <Image alt="" src={vk} />

                </a>
              </li>
              <li>
                <a className="yt" href="" target="_blank" rel="noopener noreferrer">
                <Image alt="" src={youtube} />

                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
