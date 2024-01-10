<template>
    <section class="service__section section">
        <div class="container">
            <div class="service__wrapper">
                <h1 class="service__title">
                    Кому необходим сервис?
                </h1>
                <div class="service__grid">
                    <div class="service__item" v-for="item in services" :key="item.id">
                        <div class="service__image">
                            <img alt="img" :src="item.imageSrc" :alt="item.heading">
                        </div>
                        <h2 class="service__heading">{{ item.heading }}</h2>
                    </div>
                </div>
                <button class="service__btn" @click="toggleModal">
                    Попробовать бесплатно
                </button>
            </div>
        </div>
    </section>
</template>
<script>
import s1 from './../../assets/icon/s1.svg';
import s2 from './../../assets/icon/s2.svg';
import s3 from './../../assets/icon/s3.svg';
import s4 from './../../assets/icon/s4.svg';
export default {
    name: 'ServiceSection',
    data() {
        return {
            services: [
                { id: 1, imageSrc: s1, heading: 'Управляющим компаниям' },
                { id: 2, imageSrc: s2, heading: 'Малому и среднему бизнесу' },
                { id: 3, imageSrc: s3, heading: 'Торгово-развлекательным центрам' },
                { id: 4, imageSrc: s4, heading: 'Производственным и строительным объектам' },
            ]
        };
    },
    
    props: {
        toggleModal: Function
    }
}
</script>
<style scoped lang="scss">
.service {
    &__section {
        // border-radius: 24px;
        background: #0A0A29;
        padding: 100px 0;
        @media(max-width: 768px){
            padding: 70px 0;
        }
        @media(max-width: 550px){
            padding: 50px 0;
        }
    }
    &__image{
        width: 250px;
        height: 190px;
        display: flex;
        align-items: flex-end;
        @media(max-width: 768px){
            width: 200px;
            height: 100%;
        }
        img{
            width: 100%;
        }
    }
    &__title {
        margin-bottom: 60px;
        @media(max-width: 768px){
            margin-bottom: 40px;
        }
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 25px;
        column-gap: 25px;
        @media(max-width: 768px){
            row-gap: 15px;
            grid-template-columns: repeat(1, 1fr);
        }
    }

    &__item {   
        border-radius: 12px;
        background:#141433;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
    &__heading{
        margin-top: 15px;
        text-align: center;
    }
    &__btn{
        display:block;
        margin: 35px auto 0;
        padding: 17px;
    }
}
</style>