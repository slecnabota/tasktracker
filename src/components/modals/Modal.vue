<template>
    <div v-if="showModal" class="modal" @click="toggleModal">
        <div class="modal-content" @click.stop>
            <div class="modal__inner">
                <span class="modal__close" @click="toggleModal">
                    <img alt="img" src="./../../assets/icon/close.svg">
                </span>
                <h2 class="modal__head">
                    Оставьте нам заявку, мы обязательно с вами свяжемся!
                </h2>
                <p class="modal__text">
                    Вы можете также позвонить нам по номеру
                    <a href="tel:+77010291299">+7 (701) 029 12 99</a>
                </p>
                <form class="modal__form" @submit.prevent="submitForm">
                    <input v-model="formData.input1" :class="{ 'active': isInputActive1 }" @focus="isInputActive1 = true"
                        @blur="isInputActive1 = false" class="modal__input" type="text" placeholder="Имя">
                    <input v-model="formData.input2" :class="{ 'active': isInputActive2 }" @focus="isInputActive2 = true"
                        @blur="isInputActive2 = false" class="modal__input" type="text" placeholder="Телефон">
                    <button class="btn modal__btn" type="submit">Отправить</button>
                </form>
                <router-link to="privacy-policy" class="modal__bottom">Политика конфиденциальности</router-link>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            showModal: false,
            formData: {
                input1: '',
                input2: ''
            },
            isInputActive1: false,
            isInputActive2: false
        };
    },
    methods: {
        async submitForm() {
            const apiUrl = window.location.hostname === 'localhost' ?
                'http://localhost/sendmail.php' : 
                '/.netlify/functions/sendmail';  

            try {
                const response = await axios.post(apiUrl, this.formData);
                console.log(response.data);
                this.showModal = false;
                // Дополнительно: обработка успешной отправки
            } catch (error) {
                console.error("Ошибка отправки: ", error);
                // Дополнительно: обработка ошибок
            }
        },

        toggleModal() {
            this.showModal = !this.showModal;
        },
    }
};
</script>
  
<style scoped lang="scss">
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 8;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    &__inner {
        max-width: 385px;
        margin: 0 auto;
    }

    &__head {
        color: #1475FF;
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
        margin-bottom: 15px;

        @media(max-width: 550px) {
            font-size: 20px;
        }
    }

    &__close {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }

    &__bottom {
        display: block;
        text-align: center;
        text-decoration: none;
        margin-top: 50px;
        color: #707070;
        font-size: 12px;
        font-weight: 500;
        line-height: 130%;
        margin-top: 40px;
    }

    &__input {
        width: 100%;
        border-radius: 8px;
        background: #F2F2F4;
        padding: 15px;
        outline: none;
        font-size: 18px;
        font-weight: 400;
        line-height: 130%;
        border: none;
        margin-bottom: 20px;
        font-family: 'Wix Madefor Display', sans-serif;
        border: 2px solid transparent;

        @media(max-width: 550px) {
            font-size: 16px;
        }

        &::placeholder {
            color: #CACACA;
        }

        &.active {
            border: 2px solid #1475FF;
        }
    }

    &__text {
        margin-bottom: 40px;
        color: #141433;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        line-height: 130%;

        a {
            width: fit-content;
            display: block;
            color: #141433;
            margin: 0 auto;
            text-decoration: none;
        }
    }

    &__btn {
        display: block;
        padding: 17px 85px;
        margin: 20px auto 0;
    }
}

.modal-content {
    position: relative;
    width: fit-content;
    border-radius: 33px;
    background: #FDFDFD;
    padding: 65px 75px 25px;

    @media(max-width: 768px) {
        margin: 10px;
    }

    @media(max-width: 550px) {
        padding: 50px 30px;
        padding-bottom: 30px;
        width: 100%;
    }

}

.close {
    /* Стили для кнопки закрыть */
}
</style>
  