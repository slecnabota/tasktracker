<template>
    <section class="hero">
        <div class="container">
            <div class="hero__wrapper">
                <div class="hero__content">
                    <div class="hero__title">
                        Учет и анализ рабочего времени сотрудников - <span>просто!</span>
                    </div>
                    <p class="hero__text">
                        Time Tracker поможет вашей компании усилить контроль над задачами сотрудников и автоматизировать
                        учёт рабочего времени вашей команды
                    </p>
                    <button class="btn hero__btn" @click="toggleModal">
                        Узнать подробнее
                    </button>
                </div>
                <img alt="img" src="./../../assets/img/Laptop.png" class="hero__laptop">
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Hero',
    props: {
        toggleModal: Function
    },
}
</script>
<style scoped lang="scss">
.hero {
    position: relative;
    margin-bottom: 380px;

    .container {
        padding: 0;
    }

    @media(max-width: 1250px) {
        margin-bottom: 25%;
    }

    @media(max-width: 1100px) {
        margin-bottom: 20%;
    }

    @media(max-width: 1023px) {
        margin-bottom: 15%;
    }

    @media(max-width: 970px) {
        margin-bottom: 20%;
    }

    @media(max-width: 850px) {
        margin-bottom: 15%;
    }

    @media(max-width: 768px) {
        margin-bottom: 0;
    }

    &__wrapper {
        border-radius: 24px;
        background: #0A0A29;
        position: relative;
        height: 900px;

        @media(max-width: 970px) {
            height: 800px;
        }

        @media(max-width: 768px) {
            height: 100%;
        }

        @media(max-width: 550px) {
            border-radius: 0;
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('./../../assets/img/hero.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            z-index: 0;
            border-radius: 24px;
        }
    }

    &__laptop {
        position: absolute;
        top: 45%;
        // bottom: -300px;
        left: 0;
        z-index: 1;
        width: 100%;

        @media(max-width: 1023px) {
            top: 50%;
        }

        @media(max-width: 850px) {
            top: 55%;
        }

        @media(max-width: 768px) {
            position: relative;
            z-index: 1;
            bottom: auto;
            top: auto;
        }
    }

    &__title {
        max-width: 650px;
        color: #FFF;
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        line-height: 120%;
        margin-bottom: 25px;

        @media(max-width: 1023px) {
            max-width: 100%;
        }

        @media(max-width: 768px) {
            font-size: 32px;
        }

        @media(max-width: 550px) {
            font-size: 28px;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 1;

        padding: 100px;

        @media(max-width: 970px) {
            padding: 100px 10px;
        }

        @media(max-width: 768px) {
            padding: 70px 10px;
        }

        @media(max-width: 550px) {
            padding: 70px 10px 30px;
        }
    }

    &__text {
        max-width: 450px;
        color: #CACACA;
        text-align: center;
        margin-bottom: 25px;
    }

    &__btn {
        padding: 17px 50px;
    }
}</style>