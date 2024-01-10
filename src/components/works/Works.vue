<template>
    <div class="works section">
        <div class="container">
            <div class="works__wrapper">
                <h1 class="works__title">Как работает <span>Time Tracker?</span></h1>
                <div class="works__main">
                    <div class="works__inner">
                        <div class="works__item" v-for="work in works" :key="work.id" :style="responsiveStyle(work)">
                            <div class="works__circle" :class="circleClass(work.id)">
                                <img alt="img" :src="work.imageSrc"  />
                            </div>
                            <div class="works__content">
                                <h1 class="works__heading">
                                    {{ work.title }}
                                </h1>
                                <p class="works__text">
                                    {{ work.text }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import image1 from './../../assets/icon/circle1.svg'
import image2 from './../../assets/icon/circle2.svg'
import image3 from './../../assets/icon/circle3.svg'
import image4 from './../../assets/icon/circle4.svg'
export default {
    name: 'Works',
    data() {
        return {
            windowWidth: window.innerWidth,
            works: [
                { id: 1, title: 'Регистрация сотрудников', imageSrc: image1, text: 'Внесите сотрудников в личный кабинет вручную, импортируя excel документ или интегрируя приложение с 1C. При необходимости назначьте сотрудникам задачи.' },
                { id: 2, title: 'Выдача QR-кода', imageSrc: image2, text: 'Укажите адрес филиала, а система автоматически сгенерирует QR-код, привязанный к геолокации точки контроля.' },
                { id: 3, title: 'Авторизация сотрудников', imageSrc: image3, text: 'Сотрудник скачивает мобильное приложение и сканирует QR-код, фиксируя своё время посещения на точку контроля.' },
                { id: 4, title: 'Работа с данными', imageSrc: image4, text: 'Анализируйте своевременное выполнения работы и уровень компетенции Ваших сотрудников, получая статистические данные.' },
            ]
        }
    },
    methods: {
        responsiveStyle(work) {
            if (this.windowWidth <= 550) {
                return { marginLeft: 0 };
            }
            else if (this.windowWidth <= 768) {
                return { marginLeft: `${(work.id - 1) * 50}px` }
            }
            else if (this.windowWidth <= 1023) {
                return { marginLeft: `${work.id * 50}px` };
            }
            else {
                return { marginLeft: `${work.id * 100}px` };
            }
        },
        circleClass(id) {
            return `circle${id}`;
        },
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth;
        });
    },
}
</script>
<style scoped lang="scss">
.works {
    background: #0A0A29;
    padding: 120px 0;
    overflow: hidden;
    position: relative;

    @media(max-width: 1023px) {
        padding: 100px 0;
    }

    @media(max-width: 768px) {
        padding: 70px 0;
    }

    @media(max-width: 550px) {
        padding: 50px 0;
    }

    &::before {
        content: '';
        position: absolute;
        top: -400px;
        // right: -400px;
        right: -30%;
        background-image: url('./../../assets/icon/lies.svg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;

        @media(max-width: 768px) {
            width: 85%;
            top: -370px;
        }

        @media(max-width: 550px) {
            top: -300px;
        }

        @media(max-width: 475px) {
            width: 85%;
            top: -350px;
        }
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background-image: url('./../../assets/icon/line.svg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        width: 645px;
        height: 640px;
        display: flex;
        align-items: flex-end;

        @media(max-width: 1023px) {
            width: 405px;
            height: 400px;
        }

        @media(max-width: 768px) {
            width: 305px;
            height: 300px;
        }

        @media(max-width: 550px) {
            width: 205px;
            height: 200px;
            bottom: -100px;
        }
    }

    &__title {
        margin-bottom: 60px;

        span {
            color: #1475FF;
        }
    }

    &__item {
        display: flex;
        align-items: flex-start;
        column-gap: 25px;

        h1 {

            @media(max-width: 375px) {
                font-size: 18px;
            }
        }

        @media(max-width: 550px) {
            column-gap: 15px;
        }
    }

    &__inner {
        display: flex;
        flex-direction: column;
        gap: 50px;

        @media(max-width: 550px) {
            gap: 30px;
        }
    }

    &__main {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    &__title {

        @media(max-width: 768px) {
            margin-bottom: 40px;
        }
    }

    &__text {
        max-width: 530px;
        margin-top: 15px;

        @media(max-width: 550px) {
            margin-top: 10px;
        }
    }

    &__circle {
        @media(max-width: 550px) {
            display: flex;
            justify-content: flex-end;
            width: 50px;
            min-width: 50px;
        }

        &.circle1,
        &.circle2 {
            img {
                @media(max-width: 1023px) {
                    width: 30px;
                }

                @media(max-width: 550px) {
                    width: 25px;
                }
            }
        }

        &.circle3,
        &.circle4 {
            img {
                @media(max-width: 1023px) {
                    width: 50px;
                }

                @media(max-width: 550px) {
                    width: 45px;
                }
            }
        }
    }

}</style>