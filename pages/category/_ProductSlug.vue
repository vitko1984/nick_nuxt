<template>
  <div :class="$style.page">
    <div :class="$style.topBlock">
      <div :class="$style.topLeftBlock">
        <a :href="product.images.imgXL" target="_blank">
          <img
            v-lazy="product.images.imgL"
            :class="$style.image"
          />
        </a>
      </div>
      <div :class="$style.topRightBlock">
        <h1>{{ product.pName }}</h1>
        <p>Цена: {{ product.pPrice }}</p>
      </div>
    </div>
    <h2>Описание</h2>
    <p>{{ product.pDesc }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async asyncData ({ app, params, route, error }) {
    try {
      await app.store.dispatch('getCurrentProduct', { route })
    } catch (err) {
      console.log(err)
      return error({
        statusCode: 404,
        message: 'Товар не найдена или сервер не доступен'
      })
    }
  },
  computed: {
    ...mapState({
      product: 'currentProduct'
    })
  },
  head () {
    return {
      title: this.product.pTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.pMetaDescription
        }
      ]
    }
  }
}
</script>
<style lang="scss" module>
@import '~~/assets/scss/global-variables.scss';

.page {
  @include globalWrapper;
}
.image {
  width: 400px;
  height: auto;
}
.topBlock {
  padding-top: 2em;
  display: flex;
  .topLeftBlock {
    display: flex;
  }
  .topRightBlock {
    padding-left: 2em;
    display: flex;
    flex-direction: column;
  }
}
</style>