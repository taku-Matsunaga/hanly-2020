<template>
  <PersonDetail
    :nickname="nickname"
    :latitude="latitude"
    :longitude="longitude"
    :datetime="getDateTime"
    :face-image-url="face_image_url"
  />
</template>

<script>
export default {
  data() {
    return {
      nickname: 'friend name',
      latitude: 30,
      longitude: 120,
      datetime: new Date(),
      face_image_url: '',
    }
  },
  computed: {
    getDateTime() {
      return this.$dayjs(this.datetime).format('YYYY/MM/DD HH:mm')
    },
  },
}
</script>
