<template>
  <div class="wrap">
    <!-- <div class="txt">「{{ txt }}」</div> -->
    <div class="txt">
      <ol>
        <li v-for="item in txt" :key="item.id" class="li">
          <p>{{ item.title }}</p>
          <p>{{ item.release_date }}</p>
        </li>
      </ol>
    </div>
    <SimpleForm initial-value="ジブリ作品一覧" @submit="onSubmit" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SimpleForm from '~/components/SimpleForm'

export default {
  components: {
    SimpleForm,
  },
  computed: {
    ...mapGetters('film', ['txt']),
  },
  methods: {
    onSubmit(value) {
      this.$store.dispatch('film/fetchFilms')
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 40rem;
  margin: 0 auto;
}

.txt {
  margin: 10rem 0 2rem;
  text-align: center;
}

.li {
  padding: 10px;
}
</style>
