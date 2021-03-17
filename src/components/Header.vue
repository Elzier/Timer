<template>
  <section class="header">
    <div class="theme">
      <span class="theme__title">{{
        t('theme', {}, { locale: getLang })
      }}</span>
      <div class="theme__colors">
        <div
          @click="changeTheme('')"
          class="theme__colors_white theme__item"
        ></div>
        <div
          @click="changeTheme('red')"
          class="theme__colors_red theme__item"
        ></div>
        <div
          @click="changeTheme('green')"
          class="theme__colors_green theme__item"
        ></div>
        <div
          @click="changeTheme('blue')"
          class="theme__colors_blue theme__item"
        ></div>
      </div>
    </div>
    <div class="lang">
      <div class="lang__title">
        {{ t('language', {}, { locale: getLang }) }}
      </div>
      <div class="lang__available">
        <div
          class="lang__item"
          :class="{ active: getLanguage === 'pl' }"
          @click="changeLang('pl')"
        >
          <span class="effect-underline ">PL</span>
        </div>
        <div
          class="lang__item"
          :class="{ active: getLanguage === 'en' }"
          @click="changeLang('en')"
        >
          <span class="effect-underline ">EN</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { mapGetters } from 'vuex'

export default {
  setup: () => {
    const { t, locale } = useI18n()
    return { t, locale }
  },
  name: 'Header',
  methods: {
    changeLang(lang) {
      this.$store.commit('changeLanguage', lang)
    },
    changeTheme(theme) {
      this.$store.commit('changeTheme', theme)
    },
  },
  computed: {
    getLanguage() {
      return this.$store.getters.getLang
    },
    ...mapGetters(['getLang']),
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';

.effect-underline:after {
  content: '';
  position: absolute;
  left: 0;
  color: darkmagenta;
  display: inline-block;
  height: 1em;
  width: 100%;
  border-bottom: 1px solid;
  margin-top: 6px;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
}

.effect-underline:hover:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

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
    width: 75px;
    &_red {
      background: $red-theme;
    }
    &_green {
      background: $green-theme;
    }
    &_blue {
      background: $blue-theme;
    }
    &_white {
      background: white;
    }
    &_red,
    &_green,
    &_white,
    &_blue {
      cursor: pointer;
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
    position: relative;
    color: $unactive;
    cursor: pointer;
  }
  .active {
    color: rgb(16, 88, 148);
  }
}
</style>
