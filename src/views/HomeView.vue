<template>
  <main class="main">
    <modal ref="modalComponent" />
    <hero :toggle-modal="toggleModal" />
    <card-block />
    <service-section :toggle-modal="toggleModal" />
    <problem />
    <works />
    <stage />
    <advantage-block :toggle-modal="toggleModal" />
    <trial :toggle-modal="toggleModal" />
  </main>
</template>
<script>
import Hero from './../components/hero/Hero.vue'
import CardBlock from './../components/cards/CardBlock.vue'
import ServiceSection from './../components/service-section/ServiceSection.vue';
import Problem from './../components/problem/Problem.vue';
import Works from './../components/works/Works.vue';
import Stage from './../components/stage/Stage.vue';
import AdvantageBlock from './../components/advantages/AdvantageBlock.vue';
import Trial from './../components/trial/Trial.vue';
import Modal from './../components/modals/Modal.vue';
export default {
  name: 'HomeView',
  components: {
    ServiceSection, AdvantageBlock, CardBlock, Problem, Trial, Stage, Works, Hero, Modal
  },
  methods: {
    toggleModal() {
      this.$refs.modalComponent.toggleModal();
    }
  }
}
</script>
<style scoped lang="scss"></style>


