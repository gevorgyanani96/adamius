import React, { forwardRef } from 'react';
import './About.scss';
import About1 from '../assets/images/About1.png';
import About2 from '../assets/images/About2.png';

const About = forwardRef((props, ref) => {
    return (
        <div className='about-container' ref={ref}>
            <div className='top-wrapper d-flex align-stretch'>
                <div className='left-aside'>
                    <h1>Мы рады приветствовать Вас на нашем сайте!</h1>
                    <p className='text-justify margin-bottom'>Адамиус - это торгово-дистрибуционная компания,
                        деятельность которой направлена на осуществление оптовой торговли и дистрибуции товаров по всей
                        территории стран ЕС. Наша цель- помочь вам сделать невозможное возможным, находя труднодоступные
                        товары и новые пути логистики.
                    </p>
                    <p className='text-justify'>
                        Быстрый рост компании во многом объясняется работой слаженной команды молодых специалистов,
                        профессионализм которых постоянно растет, а также благодаря четкой организации рабочего процесса.
                    </p>
                </div>
                <div className='right-aside'>
                    <img src={About1} alt="Adamius LLC"/>
                </div>
            </div>
            <div className='bottom-wrapper d-flex align-stretch'>
                <div className='left-aside'>
                    <img src={About2} alt="Adamius LLC"/>
                </div>
                <div className='right-aside'>
                    <div className='services-points d-flex justify-between'>
                        <p className='point text-capitalize font-face-bold'>Грузоперевозка</p>
                        <p className='point text-capitalize font-face-bold'>Дистрибуция</p>
                        <p className='point text-capitalize font-face-bold'>Оптовая продажа</p>
                    </div>

                    <p className='text-justify margin-bottom padding-l-r'>Компания "Адамиус" была неофициально образована в 2014 году и была
                        частью большого Холдинга. Но за короткий срок компания приобрела весомый авторитет среди
                        компаний, занимающихся оптовой торговлей в Армении. Начиная с 2022 года мы являемся отдельной
                        командой.
                    </p>

                    <p className='text-justify padding-l-r'>
                        На сегодняшний день мы являемся надежным партнером для множество компаний, предоставляя широкий
                        спектр логистических услуг и обеспечивая прибыльный торговый бизнес.
                    </p>

                </div>
            </div>
        </div>
    );
});

export default About;
