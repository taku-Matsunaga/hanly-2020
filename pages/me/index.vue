<template>
  <div>
    <PersonDetail
      :nickname="nickname"
      :latitude="latitude"
      :longitude="longitude"
      :datetime="getDateTime"
      :face-image-url="face_image_url"
    />
    <BaseButton is-txt @click="logout">ログアウト</BaseButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: 'my name',
      latitude: 0,
      longitude: 0,
      datetime: new Date(),
      face_image_url: '',
    }
  },
  computed: {
    getDateTime() {
      return this.$dayjs(this.datetime).format('YYYY/MM/DD HH:mm')
    },
  },
  methods: {
    logout() {
      console.log('logout')
    },
  },
}
</script>
