<template>
    <div class="section trial">
        <div class="container">
            <div class="trial__wrapper">
                <div class="trial__content">
                    <h1 class="trial__title">Попробуйте TimeTracker бесплатно в течении 7 дней</h1>
                    <p class="trial__text">
                        Убедитесь лично, контроль над рабочим временем сотрудников и исполнением должностых обязанностей -
                        просто!
                    </p>
                    <button class="trial__btn" @click="toggleModal">Попробовать</button>
                </div>
                <div class="trial__image">
                    <img src="./../../assets/icon/trial.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Trial',

    props: {
        toggleModal: Function
    }
}
</script>
<style scoped lang="scss">
.trial {
    .container{
        padding: 0;
    }
    &__wrapper {
        padding: 56px 56px 0;
        border-radius: 24px;
        background-image: url("./../../assets/img/background.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        display: flex;
        justify-content: space-between;
        align-items: stretch;

        @media(max-width: 1150px) {
            padding: 50px 30px 0;
        }

        @media(max-width: 1023px) {
            flex-direction: column;
            align-items: flex-start;
            row-gap: 30px;
            padding: 50px 10px 0;
        }
        @media(max-width: 768px){
            padding: 50px 10px 0;
        }
        @media(max-width: 550px){
            border-radius: 0;
        }
    }

    &__content {
        max-width: 450px;

        @media(max-width: 1023px) {
            max-width: 70%;
            margin: 0 auto;
            text-align: center;
        }
        @media(max-width: 600px) {
            max-width: 90%;
        }
        @media(max-width: 375px){
            max-width: 100%;
        }
        // @media(max-width: 1023px) {
        //     padding-bottom: 50px;
        //     max-width: 400px;
        // }

        p {
            max-width: 350px;
            margin: 15px 0 30px;

            @media(max-width: 1023px) {
                max-width: none;
                text-align: center;
            }
        }
    }

    &__image {
        display: flex;
        align-items: flex-end;

        @media(max-width: 1023px) {
            margin: 0 auto;
            width: 70%;
        }
        @media(max-width: 768px) {
            width: 100%;
        }

        img {
            width: 100%;
        }
    }

    &__btn {
        padding: 17px 72px;
    }
}</style>