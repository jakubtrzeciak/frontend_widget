<template>
  <div>
    <div class="playerPosition">
        <playlist @changeScreen="changePreset" v-if="playlist" :lockData="lockData"></playlist>
        <music @changeScreen="changePreset"
        @musicId="activateNextMusic"
        v-else></music>
    </div>
  </div>
</template>

<script>
import playlist from '../components/playlist.vue'
import music from '../components/music.vue'
export default {
  name: 'Player',
  data () {
    return {
      playlist: false,
      nextMusicId: null,
      lockData: false
    }
  },
  watch: {
    nextMusicId: function (oldId, newId) {
      this.changePreset(JSON.stringify([false, false]))
    }
  },
  methods: {
    changePreset (res) {
      const response = JSON.parse(res)
      this.lockData = response[1]
      if (response[0]) {
        this.playlist = false
      } else {
        this.playlist = true
      }
    },

    activateNextMusic (id) {
      this.nextMusicId = id
    }
  },
  components: {
    playlist,
    music
  }
}
</script>

<style lang="scss" scoped>
.playerPosition {
    width: 400px;
    height: 500px;
    margin: 0 auto;
    background-color: #ececec;
    border-radius: 35px;
   -webkit-box-shadow: 9px 25px 48px 29px rgba(44,44,44,0.8);
    box-shadow: 9px 25px 48px 29px rgba(44,44,44,0.8);

    @media all and (max-width: 500px) {
        width: 100vw;
        height: 70vh;
        border-radius: 0;
    }
}
</style>
