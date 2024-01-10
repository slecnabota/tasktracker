<template>
    <div class="section stage">
        <div class="container">
            <div class="stage__wrapper">
                <div class="stage__content">
                    <div v-for="tab in tabs" :key="tab.id" @click="currentTab = tab.id"
                        :class="{ active: currentTab === tab.id }" class="stage__item">
                        <div class="stage__num">
                            {{ tab.id }}
                        </div>
                        <div class="stage__line"></div>
                        <div class="stage__heading">
                            {{ tab.title }}
                        </div>
                    </div>
                </div>
                <div class="stage__image">
                    <img alt="img" :src="currentImage" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import image1 from './../../assets/img/iPhone-13-Pro-1.png';
import image2 from './../../assets/img/iPhone-13-Pro-2.png';
import image3 from './../../assets/img/iPhone-13-Pro-3.png';
import image4 from './../../assets/img/iPhone-13-Pro-4.png';
export default {
    name: 'Stage',
    data() {
        return {
            tabs: [
                { id: 1, title: "Мобильное приложение работает при нестабильным интернет соединении.", image: image1 },
                { id: 2, title: "Руководитель, используя мобильное приложение, видит статистику по своим филиалам.", image: image2 },
                { id: 3, title: "Пользователи приложения получают напоминания о начале и об окончании рабочего дня, а также о задачах на текущий день.", image: image3 },
                { id: 4, title: "Сканирование QR-кода на точке контроля позволяет сотрудникам фиксировать своё посещение. Имеется возможность просматривать рабочий календарь и историю сканирований.", image: image4 }
            ],
            currentTab: 1,
            autoSwitchInterval: null,
            switchDelay: 4500,
        }
    },
    mounted() {
        this.startAutoSwitch();
    },
    beforeDestroy() {
        clearInterval(this.autoSwitchInterval);
    },
    methods: {
        startAutoSwitch() {
            this.autoSwitchInterval = setInterval(() => {
                let nextTab = this.currentTab < this.tabs.length ? this.currentTab + 1 : 1;
                this.currentTab = nextTab;
            }, this.switchDelay);
        }
    },
    computed: {
        currentImage() {
            const currentTabData = this.tabs.find(tab => tab.id === this.currentTab);
            return currentTabData ? currentTabData.image : '';
        }
    }
}
</script>

<style scoped lang="scss">
.stage {
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media(max-width: 768px){
            flex-direction: column;
            align-items: flex-start;
        }
    }

    &__content {
        max-width: 720px;
        @media(max-width: 1023px){
            max-width: 60%;
        }
        @media(max-width: 768px){
            max-width: 100%;
        }
        

    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 35px;
        
        @media(max-width: 768px){
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            // gap: 20px;

        }
    }

    &__item {
        color: #CACACA;
        display: flex;
        align-items: center;
        gap: 25px;
        cursor: pointer;
        @media(max-width: 1023px){
            gap: 15px;
        }
        @media(max-width: 550px){
            gap: 10px;
        }
    }

    &__line {
        width: 3px; 
        background-color: #CACACA;
        border-radius: 5px;
        align-self: stretch;
    }

    &__num {
        width: 45px;
        font-size: 64px;
        font-weight: 800;
        line-height: 120%;
        @media(max-width: 1100px){
            font-size: 58px;
        }
        @media(max-width: 1023px){
            font-size: 50px;
            min-width: 35px;
        }
        @media(max-width: 768px){
            min-width: 25px;
            width: 25px;
            font-size: 42px;
        }
        // @media(max-width: 550px){
        //     font-size: 28px;
        //     width: 15px;
        //     min-width: 15px;
        // }
    }

    &__heading {
        font-size: 24px;
        font-weight: 600;
        line-height: 130%;
        max-width: 550px;
        @media(max-width: 1100px){
            font-size: 20px;
        }
        @media(max-width: 1023px){
            font-size: 18px;
        }
        // @media(max-width: 768px){
        //     font-size: 16px;
        // }
    }

    &__image{
        width: 25%;
        margin-right: 100px;
        @media(max-width: 1100px){
            margin-right: 0px;
        }
        @media(max-width: 1023px){
            width: 25%;
        }
        @media(max-width: 768px){
            width: 30%;
            margin: 30px auto 0;
        }
        @media(max-width: 550px){
            width: 50%;
        }
        & img{
            width: 100%;
        }
    }

    .active {transition: color 0.5s ease;
        color: #0A0A29;
        .stage__line{
            background: #1475FF;
        }
        .stage__num{
            color: #1475FF;
        }
    }
}</style>