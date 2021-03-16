<template>
  <section class="header">
    <div class="theme">
      <span class="theme__title">Theme</span>
      <div class="theme__colors">
        <div class="theme__colors_red theme__item"></div>
        <div class="theme__colors_green theme__item"></div>
        <div class="theme__colors_blue theme__item"></div>
      </div>
    </div>
    <div class="lang">
      <div class="lang__title">Lang</div>
      <div class="lang__available">
        <div class="lang__item">PL</div>
        <div class="lang__item">EN</div>
      </div>
    </div>
  </section>
</template>


<style lang="scss">
@import '@/assets/styles/global.scss';

  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .theme {
    padding: 15px;
    &__title {
      font-size: 12px;
    }
    &__item {
      width: 15px;
      height: 15px;
      border: 1px black solid;
    }
    &__colors {
      display: flex;
      justify-content: space-between;
      width: 65px;
      &_red {
        background: $red-theme;
      }
      &_green {
        background: $green-theme;
      }
      &_blue {
        background: $blue-theme;
      }
    }
  }
  .lang {
    padding: 15px;
    display: flex;
    flex-direction: column;
    width: 50px;
    &__title {
      display: flex;
      justify-content: flex-end;
      font-size: 12px;
    }
    &__available {
      display: flex;
      justify-content: space-between;
    }
    &__item {
      color: $unactive;
    }
  }
</style>