import logo from '../assets/img/icon-maksimus.svg';
import tel from '../assets/img/icon-tel.png';
import s from './header.module.css';

export const Header =(props)=> {
    return (
        <header className={s.header}>
            <div>
                <img className={s.iconMaximus} src={logo}  alt="iconmax" />
            </div>
            <div className={s.information}>
                <button className={s.aboutUs}>
                    <div>О НАС</div>
                    <div className={s.line}>_______</div>
                </button>
                <button className={s.price}>УСЛУГИ И ЦЕНЫ</button>
                <button className={s.album}>ФОТОАЛЬБОМ</button>
                <button className={s.contact}>КОНТАКТЫ</button>
            </div>
            <div className={s.telNumber}>
                <div className={s.info}>
                    <img className={s.tel} src={tel} alt="icontel"/>
                </div>
                <div>
                    <div className={s.tel_number}>+7 (000) 000-00-00</div>
                    <div className={s.workTime}>Ежедневно 9:00 – 22:00</div>
                </div>
            </div>
        </header> )
}


