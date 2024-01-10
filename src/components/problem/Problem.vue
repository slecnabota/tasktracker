<template>
    <section class="section problem">
        <!-- <div class="container"> -->
        <!-- <div class="problem__wrapper"> -->
        <div class="problem__card">
            Знакомы ли<br> Вам эти<br> проблемы?
        </div>
        <div class="problem__slider">
            <swiper :loop="true" :slides-per-view="1" :autoplay="{ delay: 3000, disableOnInteraction: false }" :speed="800"
                :space-between="spaceBetween" :pagination="{
                    hideOnClick: true
                }" :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }" :breakpoints="{
    320: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    1023: { slidesPerView: 1.5 },
    1250: { slidesPerView: 2.2 },
    1900: { slidesPerView: 3 }
}" @swiperprogress="onProgress" @swiperslidechange="onSlideChange">
                <swiper-slide v-for="item in problem" :key="item.id">
                    <div class="slide-content"> <!-- Добавить этот контейнер -->
                        <div class="problem__slide">
                            <img alt="img" :src="item.imageSrc" />
                            <p>{{ item.heading }}</p>
                        </div>
                    </div>
                </swiper-slide>

            </swiper>
            <div class="problem__arrow">
                <div class="swiper-button-prev">
                    <img alt="img" src="./../../assets/icon/left-arrow.svg" >
                </div>
                <div class="swiper-button-next">
                    <img alt="img" src="./../../assets/icon/right-arrow.svg" >
                </div>
            </div>
        </div>
        <!-- </div> -->
        <!-- </div> -->
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { register } from 'swiper/element/bundle';
register();

import a1 from './../../assets/icon/swiper1.svg';
import a2 from './../../assets/icon/swiper2.svg';
import a3 from './../../assets/icon/swiper3.svg';
import a4 from './../../assets/icon/swiper4.svg';
import a5 from './../../assets/icon/swiper5.svg';
export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            problem: [
                { id: 1, imageSrc: a1, heading: 'Отсутствует контроль за сроками выполнения задач.Нет понимания о количестве отработанных сотрудниками часов.', },
                { id: 2, imageSrc: a2, heading: 'Ответственное лицо не успевает вести учёт вручную или тратит на это много времени.' },
                { id: 3, imageSrc: a3, heading: 'Сложность в выявлении вовлечённых в работу сотрудников для повышения их мотивации.' },
                { id: 4, imageSrc: a4, heading: 'Нет возможностиустановить дорогостоящее оборудование по учёту времени, проведённому на рабочем месте.' },
                { id: 5, imageSrc: a5, heading: 'Журнал учёта прихода/ухода/обхода не отображает корректную информацию.' },
            ]
        }
    },
    setup() {
        const spaceBetween = 15;
        const onProgress = (e) => {
            const [swiper, progress] = e.detail;
        };

        const onSlideChange = (e) => {
            // console.log('slide changed')
        }

        return {
            spaceBetween,
            onProgress,
            onSlideChange,
        };
    }
}
</script>
<style scoped lang="scss">
$wrapper-padding-inline: 10px;
$wrapper-max-width: 1290px;

.problem {
    // width: 100%;
    overflow: hidden;

    @media(max-width: 1023px) {
        padding: 0 10px;
    }

    .container {
        // flex-shrink: 0;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .swiper {
        height: 400px;
        @media(max-width: 1023px){
            height: 350px;
        }
        @media(max-width: 768px) {
            height: 300px;
        }

        @media(max-width: 550px) {
            height: 250px;
        }
    }

    .swiper-wrapper {
        transition-timing-function: ease-in-out;
        transition-duration: 1s;
    }

    .slide-content {
        height: 75%;
        border-radius: 24px;
        background: #141433;
        padding: 95px 30px 30px;
        position: relative;

        @media(max-width: 1023px){
            height: 80%;
        }
        @media(max-width: 768px) {
            padding: 70px 30px;
        }

        @media(max-width: 550px) {
            height: 80%;
        }
    }

    &__card {
        // float: left;
        position: relative;
        width: 450px;
        white-space: nowrap;
        padding: 120px 50px;
        color: #FFF;
        font-size: 50px;
        font-weight: 700;
        line-height: 120%;
        border-radius: 24px;
        background: #1475FF;
        height: 100%;
        display: flex;
        align-items: center;

        @media(max-width: 1300px) {
            width: 400px;
        }

        @media(max-width: 1200px) {
            padding: 100px 30px;
            font-size: 48px;
        }

        @media(max-width: 1023px) {
            width: 100%;
            font-size: 30px;
            white-space: unset;
            margin-bottom: 30px;
            color:#141433;
            background: transparent;
            padding: 0;
            br {
                display: none;
            }
        }
        @media(max-width: 768px){
            font-size: 28px;
        }
        @media(max-width: 550px){
            font-size: 24px;
        }
        @media(max-width: 375px){
            font-size: 22px;
        }
    }

    &__slide {
        img {
            position: absolute;
            left: 30px;
            top: -25px;
            z-index: 1;

            @media(max-width: 600px) {
                width: 50px;
            }
        }

        p {
            color: #FFF;
            font-size: 22px;
            font-weight: 500;
            line-height: 130%;

            @media(max-width: 1023px) {
                font-size: 20px;
            }

            @media(max-width: 768px) {
                font-size: 16px;
            }
        }
    }

    &__slider {
        position: relative;

    }

    &__arrow {
        display: flex;
        align-items: center;
        width: fit-content;
        margin: 0 auto;
        column-gap: 40px;
        padding-right: 10%;

        @media(max-width: 1023px) {
            padding-right: 0;
        }
    }

    .swiper-button-prev,
    .swiper-button-next {
        position: static;
        width: auto;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
        display: none;
    }
}

@media(min-width: 1023px) {
    .problem {
        display: grid;
        align-items: center;
        grid-template-columns:
            minmax($wrapper-padding-inline, 1fr) 450px // minmax(0, calc($wrapper-max-width / 2))
            minmax(0, calc($wrapper-max-width - 450px)) minmax($wrapper-padding-inline, 1fr);

        @media(max-width: 1300px) {
            grid-template-columns:
                minmax($wrapper-padding-inline, 1fr) 400px // minmax(0, calc($wrapper-max-width / 2))
                minmax(0, calc($wrapper-max-width - 400px)) minmax($wrapper-padding-inline, 1fr);
        }
    }

    .problem__card {
        @media(min-width: 1023px) {
            grid-column: 2/3;
        }
    }

    // .problem > .problem__card{
    .problem__slider {
        @media(min-width: 1023px) {
            grid-column: 3 / 5;
            padding-left: 15px;
        }
    }

    // .problem .problem__slider{
    .problem__slider {
        width: 100%;
        // display: grid;
        // align-content: center;
        // justify-items: start;
    }
}</style>