<template>
    <section class="advantage section">
        <div class="container">
            <div class="advantage__wrapper">
                <h1 class="advantage__title">
                    <span>Преимущества</span> использования сервиса
                </h1>
                <div class="advantage__grid">
                    <div class="advantage__item" v-for="item in advantage" :key="item.id">
                        <img alt="img" :src="item.imageSrc" >
                        <div class="advantage__heading">
                            {{ item.heading }}
                        </div>
                        <p class="advantage__text">
                            {{ item.text }}
                        </p>
                    </div>
                </div>
                <button class="advantage__btn" @click="toggleModal">Узнать подробнее</button>
            </div>
        </div>
    </section>
</template>
<script>
import a1 from './../../assets/icon/advantage1.svg';
import a2 from './../../assets/icon/advantage2.svg';
import a3 from './../../assets/icon/advantage3.svg';
import a4 from './../../assets/icon/advantage4.svg';
export default {
    name: 'AdvantageBlock',
    data() {
        return {
            advantage: [
                { id: 1, imageSrc: a1, heading: 'Комплексность', text: 'Система интегрируется с 1С для экспорта/импорта данных о рабочем времени и структуре компании.' },
                { id: 2, imageSrc: a2, heading: 'Оперативность', text: 'Сбор и хранение данных позволяет анализировать статистику и не тратить время на заполнение табеля.' },
                { id: 3, imageSrc: a3, heading: 'Безопасность', text: 'Привязка мобильного устройства к сотруднику и QR-кода к геолокации исключает возможность использования поддельной геолокации и гарантирует получение корректной информации.' },
                { id: 4, imageSrc: a4, heading: 'Бесперебойность', text: 'Мобильное приложение продолжает работу при отсутствии подключения к интернету, сохраняя всю информацию и передавая ее в общую базу данных при возобновлении подключения.' },
            ]
        }
    },
    
    props: {
        toggleModal: Function
    }
}
</script>
<style scoped lang="scss">
.advantage {
    &__title {
        color: #0A0A29;
        // font-size: 32px;
        font-weight: 700;
        line-height: 120%;
        margin-bottom: 60px;
        @media(max-width: 768px){
            margin-bottom: 40px;
        }

        span {
            display: block;
            color: #1475FF;
        }
    }

    &__grid {
        max-width: 1000px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 30px;
        column-gap: 30px;
        margin: 0 auto;
        @media(max-width: 768px){
            grid-template-columns: repeat(1, 1fr);
        }
        row-gap: 15px;
    }

    &__item {
        padding: 30px;
        border-radius: 12px;
        background: #FFF;
        box-shadow: 0px 10px 15px -5px rgba(0, 97, 255, 0.05), 0px 10px 20px 5px rgba(0, 97, 255, 0.05);
        img{
            @media(max-width: 550px){
                width: 30px;
            }
        }
        @media(max-width: 550px){
            padding: 20px 15px;
        }
    }

    &__heading {
        color: #0A0A29;
        font-size: 20px;
        font-weight: 600;
        line-height: 120%;
        margin-top: 20px;
        @media(max-width: 550px){
            font-size: 18px;
            margin-top: 10px;
        }
    }

    &__text {
        margin-top: 15px;
        color: #0A0A29;
        font-size: 16px;
        font-weight: 500;
        line-height: 130%;
        max-width: 420px;
        @media(max-width: 550px){
            font-size: 14px;
            margin-top: 10px;
        }
    }
    &__btn{
        display: block;
        margin: 35px auto 0;
        padding: 17px 50px;
    }
}
</style>