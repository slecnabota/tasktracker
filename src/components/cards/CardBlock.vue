<template>
    <section class="section cards">
        <div class="container">
            <div class="cards__wrapper">
                <div class="cards__item" v-for="item in advantage" :key="item.id" :style="{ background: item.color }">
                    <div class="cards__content">
                        <img alt="img" :src="item.imageSrc" >
                        <h2 class="cards__heading">{{ item.heading }}</h2>
                        <p class="cards__text">{{ item.text }}</p>
                    </div>
                    <div class="cards__info">
                        <!-- <p>{{ item.info }}</p> -->
                        <p v-html="item.info"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import a1 from './../../assets/icon/card1.svg';
import a2 from './../../assets/icon/card2.svg';
import a3 from './../../assets/icon/card3.svg';
import a4 from './../../assets/icon/card4.svg';
export default {
    name: 'CardBlock',
    data() {
        return {
            advantage: [
                { id: 1, imageSrc: a1, heading: 'Дисциплина', text: 'Снижается количество опозданий, прогулов...', color: '#1475FF', info: 'Снижается количество опозданий, прогулов и ранних уходов с работы. Автоматизация учёта фактического времени прихода/ухода поможет повысить ответственность сотрудника.' },
                { id: 2, imageSrc: a2, heading: 'Честность', text: 'Снижается риск передачи устройства...', color: '#0A0A29', info: 'Снижается риск передачи устройства другому лицу, при помощи привязки устройства к сотруднику, выполнившему первую авторизацию.<br><br>Привязка QR-кода к геолокации с защитой от использования поддельной геолокации исключает возможность сканирования в другой локации.' },
                { id: 3, imageSrc: a3, heading: 'Удобство', text: 'Контроль уровня ответственности коман...', color: '#1475FF', info: 'Контроль уровня ответственности команды в online-режиме. Уведомления в мобильном приложении напоминают сотруднику об актуальных задачах. При отсутствии интернета, мобильное приложение запоминает все введенные данные и передаёт их в базу данных при появлении сети.' },
                { id: 4, imageSrc: a4, heading: 'Экономия', text: 'Автоматическое табелирование дает...', color: '#0A0A29', info: 'Автоматическое табелирование дает понимание об уровне компетенции и эффективности команды, что поможет скорректировать заработную плату сотрудников. Простая технология QR позволяет обойтись без дорогостоящего оборудования.' },
            ]
        }
    }
}
</script>
<style scoped lang="scss">
.cards {
    &__wrapper {
        display: flex;
        justify-content: center;
        row-gap: 25px;
        column-gap: 25px;
        flex-wrap: nowrap;

        @media(max-width: 1199px) {
            column-gap: 15px;
            flex-wrap: wrap;
        }

        @media(max-width: 1023px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        @media(max-width: 768px) {
            row-gap: 15px;
            grid-template-columns: repeat(1, 1fr);
        }
    }

    &__content {
        transition: opacity .5s;

        @media(max-width: 1023px) {
            display: none;
        }
    }

    &__item {
        position: relative;
        border-radius: 12px;
        padding: 35px;
        transition: width 0.6s ease-in;
        overflow: hidden;





        @media(min-width: 1024px) {
            width: 40%;

            &:hover {
                width: 40%;

                .cards__content {
                    opacity: 0;
                    transition-delay: 0.2s;
                }

                .cards__info {
                    opacity: 1;
                    visibility: visible;
                    transition-delay: 0.3s;

                    p {
                        width: 400px;
                    }
                }
            }
        }

        @media(min-width: 1199px) {
            width: 21.5%;

            &:hover {
                width: 35%;

                .cards__info {

                    p {
                        min-width: 250px;
                        max-width: 250px;
                    }
                }
            }
        }

        @media(min-width: 1300px) {
            width: 21.5%;

            &:hover {
                width: 30%;

                .cards__info {

                    p {
                        min-width: 300px;
                        max-width: 300px;
                    }
                }
            }
        }

        @media(max-width: 1023px) {
            padding: 30px;
        }

        @media(max-width: 768px) {
            padding: 50px 30px;
        }

        @media(max-width: 550px) {
            padding: 30px 15px;
        }
    }

    &__heading {
        margin: 75px 0 15px;
    }

    &__text {
        width: 200px;
        color: #FFF;


    }

    &__info {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        padding: 35px;
        transition: opacity .7s;

        p {
            color: #FFF;
            font-size: 16px;
            font-weight: 600;
            line-height: 130%;
            @media(max-width: 1300px){
                font-size: 14px;
            }
            @media(max-width: 1200px) {
                font-size: 16px;
            }
        }

        @media(max-width: 1023px) {
            opacity: 1;
            visibility: visible;
            position: static;
            padding: 0;
        }
    }

}</style>