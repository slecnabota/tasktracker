<template>
    <div class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__left">
                    <a href="tel:+77010291299" class="header__tel">
                        <img alt="img" :src="TelIcon" >
                        +7 (701) 029 12 99
                    </a>
                </div>
                <div class="header__logo">
                    <img alt="img" :src="HeaderLogo" >
                </div>
                <a href="https://cabinet.timetracker.kz/" class="header__right">
                    <button class="btn header__btn">Вход</button>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import TelIcon from './../assets/icon/tel.svg';
import HeaderLogo from './../assets/icon/logo.svg';
export default {
    name: 'HeaderBlock',
    data() {
        return {
            TelIcon: TelIcon,
            HeaderLogo: HeaderLogo,
        }
    }
}
</script>
<style scoped lang="scss">
.header {
    padding: 50px 0;

    @media(max-width: 1023px) {
        padding: 30px 0;
    }
    @media(max-width: 768px) {
        padding: 20px 0;
    }

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__logo {
        img {
            @media(max-width: 768px) {
                width: 120px;
            }
            @media(max-width: 550px) {
                width: 100px;
            }
            @media(max-width: 375px){
                width: 90px;
            }
        }
    }

    &__left,
    &__right {
        width: 30%;

        @media(max-width: 550px) {
            width: 40%;
        }
        @media(max-width: 375px) {
            width: auto;
        }
    }

    &__right {
        text-decoration: none;
        display: flex;
        justify-content: flex-end;
    }

    &__tel {
        display: flex;
        align-items: center;
        column-gap: 15px;

        color: #0A0A29;
        font-size: 20px;
        font-weight: 600;
        line-height: 130%;
        text-decoration: none;

        @media(max-width: 768px) {
            font-size: 14px;
            column-gap: 5px;
        }
        @media(max-width: 550px){
            font-size: 12px;
        }
        img{
            @media(max-width: 550px) {
                width: 15px;
            }
        }
    }

    &__btn {
        padding: 8px 32px;
        // @media(max-width: 550px){
        //     padding: 8px 20px;
        // }
    }
}</style>