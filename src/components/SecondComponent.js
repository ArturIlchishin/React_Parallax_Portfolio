import React from "react";
import underground from '../img/dungeon.jpg'

function SecondComponent() {
    return (
        <article className='main-article' style={{backgroundImage: `url(${underground})`}}>
            <div className="main-article__content">
                    <div className="first_container">
                        <h2 className='main-article__header'>Обо мне
                            <p>Всем привет! <br />
                                Кратко расскажу о себе. Сильнейшими своими сторонами считаю умение и желание постоянно изучать новое, развитые софт-скиллы, умение нести ответственность за принятые решения, а также системный подход к выполнению поставленных задач.
                                Из хобби могу выделить пауэрлифтинг, езду на велосипеде и фотографию</p>
                        </h2>
                    </div>
                <div className="second_container">
                    <h2 className='main-article__header'>Опыт работы
                        <h3 className='main_article__subheader'>TGLEAD.com (Сентябрь 2023 - настоящее время )</h3>
                        <p>В данный момент работаю над стартапом tglead.com ( он на начальной стадии разработки ).
                            Задачи - выбор библиотеки дизайна, дальнейшая работа с библиотекой ant design, работа с Redux Toolkit, таблицы, базовые задачи по верстке.</p>
                        <h3 className='main_article__subheader'>MarketVision.app (Январь 2021 - Апрель 2023 )</h3>
                        <p>Устроился в стартап джуниором. Основные задачи - написание разнообразных фильтров для таблиц (селект, мультиселект, рэнж и так далее), написание адаптера для библитеки с графиками, подгонка их под наш дизайн. Плюс стандартные бизнесовые задачи на верстку страниц, таких как тарифы, страницы с документацией о нашем api и так далее.</p>
                    </h2>
                </div>
            </div>
        </article>
    )
}

export default SecondComponent;