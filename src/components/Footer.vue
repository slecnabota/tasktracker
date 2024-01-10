<template>
    <footer class="section footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__left">
                    <img alt="img" src="./../assets/icon/logo.svg" >
                    <p>доступно в </p>
                    <div class="footer__flex">
                        <a href="https://apps.apple.com/kz/app/ttracker/id6444618610"><img
                                src="./../assets/icon/appstore.svg" ></a>
                        <a href="https://play.google.com/store/apps/details?id=com.mobile.time.tracker.app"><img
                                src="./../assets/icon/googleplay.svg" ></a>
                    </div>
                </div>
                <div class="footer__block">
                    <div class="footer__item">
                        <div class="footer__head">
                            <img alt="img" src="./../assets/icon/mail.svg" >
                            Email
                        </div>
                        <a href="mailto:support@timetracker.kz">support@timetracker.kz</a>
                    </div>
                    <div class="footer__item">
                        <div class="footer__head">
                            <img alt="img" src="./../assets/icon/tel.svg" >
                            Контакты
                        </div>
                        <a href="tel:+77010291299">+7 (701) 029 12 99</a>
                    </div>
                    <div class="footer__item">
                        <div class="footer__head">
                            <img alt="img" src="./../assets/icon/address.svg" >
                            Адрес
                        </div>
                        <a href="#">Самал-2, ул. Бектурова,
                            д. 104, 5 этаж, 502 офис</a>
                    </div>
                </div>
                <div class="footer__right">
                    <img alt="img" src="./../assets/icon/maint.svg" >
                </div>
            </div>
            <div class="footer__bottom">
                <router-link to="privacy-policy">Политика конфиденциальности</router-link>
                <p>Договор оферты</p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'FooterBlock',
}
</script>
<style scoped lang="scss">
.footer {
    position: relative;
    padding: 50px 0 25px;
    border-radius: 24px 24px 0px 0px;
    background: #FFF;
    box-shadow: 0px 10px 50px 0px rgba(0, 97, 255, 0.10);

    @media(max-width: 768px) {
        padding: 50px 0;
    }

    &__wrapper {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        column-gap: 20px;

        @media(max-width: 1023px) {
            flex-wrap: wrap;
            // flex-direction: column;
            row-gap: 35px;
        }
        @media(max-width: 768px){
            row-gap: 30px;
        }
    }

    &__left {
        @media(max-width: 1023px) {
            width: 100%;
        }

        img {
            @media(max-width: 768px) {
                width: 120px;
            }
        }

        p {
            color: #0A0A29;
            font-size: 16px;
            font-weight: 700;
            line-height: 130%;
            margin: 30px 0 15px;

            @media(max-width: 768px) {
                margin: 15px 0;
                font-size: 14px;
            }
        }
    }

    &__right {
        display: flex;
        align-items: flex-end;

        @media(max-width: 768px) {
            width: 100%;
        }
        @media(max-width: 550px){
            width: fit-content;
            position: absolute;
            bottom: 50px;
            right: 10px;
            img{
                width: 90px;
            }
        }
    }

    &__item {
        a {
            color: #0A0A29;
            font-size: 20px;
            font-weight: 500;
            line-height: 130%;
            text-decoration: none;

            @media(max-width: 768px) {
                font-size: 16px;
            }

            // @media(max-width: 550px) {
            //     font-size: 16px;
            // }
        }
    }

    &__head {
        display: flex;
        align-items: center;
        column-gap: 10px;
        margin-bottom: 15px;
        color: #0A0A29;
        font-size: 20px;
        font-weight: 600;
        line-height: 120%;

        @media(max-width: 1023px) {
            margin-bottom: 10px;
        }

        @media(max-width: 768px) {
            font-size: 16px;
        }

        // @media(max-width: 550px) {
        //     font-size: 16px;
        // }
    }

    &__flex {
        display: flex;
        align-items: center;
        column-gap: 10px;

        img {
            @media(max-width: 1023px) {
                width: 150px;
            }

            @media(max-width: 768px) {
                width: 130px;
            }

            @media(max-width: 550px) {
                width: 120px;
            }
        }
    }

    &__block {
        max-width: 465px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        @media(max-width: 1023px) {
            row-gap: 25px;
        }

        @media(max-width: 550px) {
            flex-direction: column;
        }

    }

    &__bottom {
        margin-top: 40px;
        display: flex;
        align-items: center;
        column-gap: 25px;

        @media(max-width: 550px) {
            margin-top: 30px;
        }

        @media(max-width: 768px) {
            position: absolute;
            bottom: 50px;
            right: 20px;
        }

        @media(max-width: 550px) {
            position: static;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 15px;
        }

        a,
        p {
            color: #707070;
            font-size: 14px;
            font-weight: 500;
            line-height: 130%;
            text-decoration: none;
            transition: all .3s;

            @media(max-width: 550px) {
                font-size: 14px !important;
            }

            &:hover {
                color: #1475FF;
            }
        }
    }
}</style>