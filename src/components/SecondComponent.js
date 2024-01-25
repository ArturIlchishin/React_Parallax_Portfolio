import React from "react";
import underground from '../img/dungeon.jpg'

function SecondComponent() {
    return (
        <article className='main-article' style={{backgroundImage: `url(${underground})`}}>
            <div className={'main_article-wrapper'}>
                <div className={'main-article__grid'}>
                    <div className={'main_article__about'}>
                        <h2 className={'main-article__about-title'}>Обо мне</h2>
                        <p className={'main-article__about-desc'}>Всем привет!
                            Кратко расскажу о себе. Сильнейшими своими сторонами считаю умение и желание постоянно изучать новое, развитые софт-скиллы, умение нести ответственность за принятые решения, а также системный подход к выполнению поставленных задач. Из хобби могу выделить пауэрлифтинг, езду на велосипеде и фотографию.
                        </p>
                    </div>

                    <div className={'main__article-exp'}>
                        <div className={'main__article-expirience'}>
                            <h2 className={'main__article-exp-title'}>Опыт работы</h2>
                        </div>
                        <div className={'main__article-workplace'}>
                            <h3 className={'main__article__job'}>TGLEAD.com (Сентябрь 2023 - Сегодня )
                            </h3>
                            <p className={'main__article__tasks'}>Проект-генерация лидов для продажи из Телеграма. Развернул проект на ViteJS. Написал библиотеку компонентов с использованием emotion. Выполнял задачи по написанию бизнес-логики. Реализовал авторизацию ( Formik ).
                                Используемые технологии:
                                React, TypeScript, Redux (Toolkit), ViteJS, emotion, Git. </p>
                        </div>

                        <div className={'main__article-workplace'}>
                            <h3 className={'main__article__job'}>MarketVision.app (Январь 2021 - Апрель 2023 )
                            </h3>
                            <p className={'main__article__tasks'}>Основные задачи - написание компонентов UI (селект, мультиселект, инпуты, графики). Верстка страниц ( страницы документации, лэндинги ).
                                Используемые технологии:
                                React, TypeScript, Redux (saga), WebPack, CSS-modules, Git.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </article>
    )
}

// <p>В данный момент работаю над стартапом tglead.com ( он на начальной стадии разработки ).
//     Задачи - выбор библиотеки дизайна, дальнейшая работа с библиотекой ant design, работа с Redux Toolkit, таблицы, базовые задачи по верстке.
// </p>

// <p>Устроился в стартап джуниором. Основные задачи - написание разнообразных фильтров для таблиц (селект, мультиселект, рэнж и так далее), написание адаптера для библитеки с графиками, подгонка их под наш дизайн. Плюс стандартные бизнесовые задачи на верстку страниц, таких как тарифы, страницы с документацией о нашем api и так далее.
// </p>

// <div className="main-article__content">
//     <div className="first_container">
//         <h2 className='main-article__header'>Обо мне
//             <p>Всем привет! <br />
//                 Кратко расскажу о себе. Сильнейшими своими сторонами считаю умение и желание постоянно изучать новое, развитые софт-скиллы, умение нести ответственность за принятые решения, а также системный подход к выполнению поставленных задач.
//                 Из хобби могу выделить пауэрлифтинг, езду на велосипеде и фотографию</p>
//         </h2>
//     </div>
//     <div className="second_container">
//         <h2 className='main-article__header'>Опыт работы
//             <h3 className='main_article__subheader'>TGLEAD.com (Сентябрь 2023 - настоящее время )</h3>
//             <p>В данный момент работаю над стартапом tglead.com ( он на начальной стадии разработки ).
//                 Задачи - выбор библиотеки дизайна, дальнейшая работа с библиотекой ant design, работа с Redux Toolkit, таблицы, базовые задачи по верстке.</p>
//             <h3 className='main_article__subheader'>MarketVision.app (Январь 2021 - Апрель 2023 )</h3>
//             <p>Устроился в стартап джуниором. Основные задачи - написание разнообразных фильтров для таблиц (селект, мультиселект, рэнж и так далее), написание адаптера для библитеки с графиками, подгонка их под наш дизайн. Плюс стандартные бизнесовые задачи на верстку страниц, таких как тарифы, страницы с документацией о нашем api и так далее.
//             </p>
//         </h2>
//     </div>
// </div>

export default SecondComponent;