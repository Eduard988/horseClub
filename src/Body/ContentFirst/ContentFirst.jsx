import s from './ContentFirst.module.css'

export const ContentFirst = () => {
   return(
       <div className={s.backgraund1}>
           <div className={s.main}>
               <h className={s.main__p}>Окунитесь в мир лошадей вместе с нами</h>
               <div className={s.boxLesson}>
                   <div className={s.line}></div>
                   <span className={s.main__lesson}>Уроки верховой езды, фотосессии и мероприятия в частном конном клубе г. Санкт-Петербург</span>
               </div>
               <button className={s.mainP__sign}>записаться</button>
           </div>
       </div>
   )
}