<template>
    <header-block />
    <router-view />
    <footer-block />
</template>
  
<script>
import HeaderBlock from './../components/Header.vue'
import FooterBlock from './../components/Footer.vue'
export default {
    name: 'App',
    components: {
        HeaderBlock, FooterBlock
    }
}
</script>
  
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Wix Madefor Display', sans-serif;
    color: #CACACA;
}

.container {
    width: 100%;
    margin: 0 auto;
    padding: 0 10px;
    max-width: 1290px;
    // padding: 0 100px;
}

h1 {
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
    line-height: 120%;
    @media(max-width: 1023px){
        font-size: 30px;
    }
    @media(max-width: 768px){
        font-size: 28px;
    }
    @media(max-width: 550px){
        font-size: 24px;
    }
    @media(max-width: 375px){
        font-size: 22px;
    }
}

h2 {
    color: #FFF;
    font-size: 24px;
    font-weight: 700;
    line-height: 120%;
    @media(max-width: 1023px){
        font-size: 22px;
    }
    @media(max-width: 768px){
        font-size: 20px;
    }
    @media(max-width: 550px){
        font-size: 18px;
    }
    @media(max-width: 375px){
        font-size: 16px;
    }
}

p {
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 130%;
    @media(max-width: 550px){
        font-size: 16px !important;
    }
}

button {
    font-family: 'Wix Madefor Display', sans-serif;
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 130%;
    border-radius: 8px;
    background: #1475FF;
    border: none;
    cursor: pointer;
    @media(max-width: 1023px){
        font-size: 18px;
    }
    @media(max-width: 768px){
        font-size: 16px;
    }
    @media(max-width: 550px){
        font-size: 14px;
    }
}

.section {
    margin-top: 120px;
    @media(max-width: 1023px){
        margin-top: 100px;
    }
    @media(max-width: 768px){
        margin-top: 70px;
    }
    @media(max-width: 550px){
        margin-top: 50px;
    }
}
</style>
  