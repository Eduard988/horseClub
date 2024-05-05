import react from 'react';

export const header =(props)=> {
    return (<div className="test">
        <header className="header">
            <div>
                <img src='../pictur/iconmaksimus.svg' alt='iconmaks'/>
            </div>
            <div>
                <button className="aboutUs">О НАС <br/> _____</button>
                <button className="price">УСЛУГИ И ЦЕНЫ</button>ККк
                <button className="album">ФОТОАЛЬБОМ</button>
                <button className="contact">КОНТАКТЫ</button>
            </div>
            <div className="telNumber">
                <div>
                    <img src="../pictur/icontel.png" alt="icontel"/>
                </div>
                <div>
                    <div>+7 (000) 000-00-00</div>
                    <div>Ежедневно 9:00 – 22:00</div>
                </div>
            </div>
        </header>
    </div>)
}


