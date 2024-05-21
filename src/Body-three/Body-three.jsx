import s from './Body-three.module.css'
import map from '../assets/img/map.jpg'
import dinner from '../assets/img/dinner.jpg'
import timer from '../assets/img/timer.jpg'
import car from '../assets/img/car.jpg'

export const BodyThree =()=>{
    return (
        <div className={s.bodyThree}>
            <h2 className={s.whyWe}>Почему нас выбирают</h2>
            <div className={s.bodyThree__navigator}>
                <div className={s.navigator}>
                    <img className={s.navigator__img} src={map} alt={map}/>
                    <h4 className={s.navigator__1}>Удобное расположение</h4>
                    <span className={s.navigator__info}>Мы находимся недалеко от автостанции «Восточный» чтобы вам было удобно добираться</span>
                </div>
                <div className={s.navigator}>
                    <img className={s.navigator__img} src={dinner} alt={dinner}/>
                    <h4 className={s.navigator__1}>Обеденная зона </h4>
                    <span className={s.navigator__info}>Имеется столовая, чтобы Вы могли  перекусить и немного отдохнуть. Бесплатно чай, кофе, печенки.</span>
                </div>
                <div className={s.navigator}>
                    <img className={s.navigator__img} src={timer} alt={timer}/>
                    <h4 className={s.navigator__1}>Профессиональные тренера</h4>
                    <span className={s.navigator__info}>Наши преподаватели имеют награды в конном спорте, и отличные отзывы среди наших учеников</span>
                </div>
                <div className={s.navigator}>
                    <img className={s.navigator__img} src={car} alt={car}/>
                    <h4 className={s.navigator__1}>Бесплатная парковка</h4>
                    <span className={s.navigator__info}>У нас имеется просторная парковка, чтобы вы могли без проблем припарковать свой автомобиль</span>
                </div>
            </div>
        </div>
    )
}