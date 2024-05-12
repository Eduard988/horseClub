import s from './ContentSecond.module.css'
import HorseJump from '../assets/img/horseJump.jpg'

export const ContentSecond = () => {
    return (
        <div className={s.second__list}>
            <h2 className={s.ourClub}>О нашем клубе</h2>
            <div className={s.club}>
                <img className={s.horseJump} src={HorseJump}/>
                <div className={s.info}>
                    <div className={s.info__box1}>
                        <div className={s.info__box}>
                            <span className={s.info__box_number}>1100+</span>
                            <span className={s.info__box__1}>Довольный посетителей за последний год</span>
                        </div>
                        <div className={s.info__box}>
                            <span className={s.info__box_number}>50+</span>
                            <span className={s.info__box__1}>Проведенных мероприяти за 6 месяцев</span>
                        </div>
                        <div className={s.info__box}>
                            <span className={s.info__box_number}>20+</span>
                            <span className={s.info__box__1}>Выпущенных профессиональных спортсменов за 1 год</span>
                        </div>
                        <div className={s.info__box}>
                            <span className={s.info__box_number}>15+</span>
                            <span className={s.info__box__1}>Регулярный занятий в неделю с профессиональными наставниками</span>
                        </div>
                    </div>
                    <span className={s.ourClib__information}>Занятия проводятся индивидуально и в группах,
                    стоимость также будет зависеть от ваших навыков и умений.
                    Более выгодные условия предусмотрены для егулярных занятий
                    при покупке абонементов. Для тех, кто хочет отточить своё мастерство,
                    разработаны программы по специализации (конкур, выездка и другие),
                    участие в соревнованиях и чемпионатах. Для самых маленьких любителей
                    лошадей действуют пони-клубы, где ребята учатся ухаживать за животными и ездить на милых и добрых пони.
                        </span>
                </div>
            </div>
        </div>
    )
}
