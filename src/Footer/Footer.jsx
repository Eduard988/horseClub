import s from "./Footer.module.css"
import img_maximus_yellow from "../assets/img/icon-maximus-yellow.png"

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerBox}>
                <div className={s.footer_generalinfo}>
                    <div className={s.footer_generalinfo_img}>
                        <img src={img_maximus_yellow}/>
                    </div>
                    <div className={s.footer_generalinfo_aboutUs}>
                        <div>О нас</div>
                        <div>Услуги и цены</div>
                        <div>Фотоальбом</div>
                        <div>Контакты</div>
                        <div className={s.footer_generalinfo_call}>Заказать звонок</div>
                    </div>
                </div>
                <div className={s.footer_tnAtom}>
                    <div>Соглашение на обработку персональных данных</div>
                    <div>Политика конфенденциальности</div>
                </div>
            </div>

        </div>
    )
}