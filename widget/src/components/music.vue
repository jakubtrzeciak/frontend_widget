<template>
<div id="heightPos">
    <div class="audioPlayer">
        <div class="audioPlayerTopbar">
            <div class="audioPlayerTopbar__icon"><fa icon="exchange-alt" /></div>
            <div class="audioPlayerTopbar__icon"><fa icon="random" /></div>
            <div class="audioPlayerTopbar__icon"><fa icon="redo-alt" /></div>
            <div class="audioPlayerTopbar__icon audioPlayerTopbar__icon--hamburger"
            @click="change()"><fa icon="bars" /></div>
        </div>
        <div class="audioPlayer__titleBar">
            <h1>{{ artist }}</h1>
            <h2>{{ title }}</h2>
        </div>
    </div>

    <input type="range" class="volume__input">

    <div class="musicNavigation">
        <div class="musicNavigation__icon musicNavigation__icon--posLeft">
            <fa icon="share-alt" />
        </div>
        <div class="musicNavigation__icon musicNavigation__icon--themeDarker" @click="prevMusic()">
            <fa icon="step-backward" />
        </div>

        <div class="musicNavigation__icon musicNavigation__icon--themeDarker musicNavigation__icon--iconBigger"
        v-if="playButton" @click="playButton = !playButton">
            <fa icon="play" />
        </div>
        <div class="musicNavigation__icon musicNavigation__icon--themeDarker musicNavigation__icon--iconBigger"
        v-else @click="playButton = !playButton">
            <fa icon="pause" />
        </div>

        <div class="musicNavigation__icon musicNavigation__icon--themeDarker"  @click="nextMusic()">
            <fa icon="step-forward" />
        </div>
        <div class="musicNavigation__icon musicNavigation__icon--posRight">
            <fa icon="heart" />
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'music',
  data () {
    return {
      playButton: true,
      title: localStorage.getItem('lsTitle'),
      artist: localStorage.getItem('lsArtist')
    }
  },
  methods: {
    nextMusic () {
      const length = localStorage.getItem('lsInfosLength')
      let id
      if (localStorage.getItem('lsId') != null) id = parseInt(localStorage.getItem('lsId'))
      else id = 0

      if (id + 1 >= length) id = 0
      else id = id + 1

      localStorage.setItem('lsId', id)

      this.$emit('musicId', id)
    },
    prevMusic () {
      const length = localStorage.getItem('lsInfosLength')
      let id
      if (localStorage.getItem('lsId') != null) id = parseInt(localStorage.getItem('lsId'))
      else id = 0

      if (id - 1 < 0) id = length - 1
      else id = id - 1

      localStorage.setItem('lsId', id)

      this.$emit('musicId', id)
    },
    change () {
      this.$emit('changeScreen', JSON.stringify([false, true])) // one flag to change screen, second to prevent changing when opening manually
    }
  }
}
</script>

<style lang="scss" scoped>

    #heightPos {
        height: 100%;
    }

    .audioPlayer {
        height: 65%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-image: url('../../public/images/icona-pop.jpeg');
        background-size: cover;
        border-radius: 25px 25px 0 0;

        @media all and (max-width: 500px) {
            border-radius: 0;
        }

        .audioPlayerTopbar {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            padding: 15px 0;
            background-color: rgba(0, 0, 0, 0.35);
            border-radius: 25px 25px 0 0;

            @media all and (max-width: 500px) {
                border-radius: 0;
            }

            &__icon {
                font-size: 0.9rem;
                padding: 5px 10px;
                color: #ffffff;

                &.audioPlayerTopbar__icon--hamburger {
                    position: absolute;
                    right: 15px;
                    top: 15px;
                    color: #a3a2a2;
                    cursor: pointer;
                }
            }
        }

        .audioPlayer__titleBar {
            width: 100%;
            padding: 5px 0 5px 0;
            background-color: rgba(0, 0, 0, 0.35);
            text-align: center;
            color: #ffffff;

            h1 {
                font-size: .9rem;
                margin: 0;
                padding: 5px 0 0 0;
            }

            h2 {
                font-size: 0.7rem;
                margin: 0;
                padding: 0 0 5px 0;
            }
        }
    }

    input[type=range] {
        -webkit-appearance: none;
        width: 100%;
        margin: 0;
        height: 0.95rem;
        background: #ffffff;
        outline: none;
        opacity: 1;
        -webkit-transition: .2s;
        transition: opacity .2s;

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 25px;
            height: 25px;
            border-radius: 50px;
            background-color: #ac0202;
            box-shadow: 1px 1.5px 2px #000000;
            cursor: pointer;
        }

         &::-moz-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 25px;
            height: 25px;
            border-radius: 50px;
            background-color: #ac0202;
            box-shadow: 1px 1.5px 2px #000000;
            cursor: pointer;
        }
    }

    .musicNavigation {
        width: 100%;
        height: 25%;
        margin: 2.5% auto;
        display: flex;
        justify-content: center;
        align-items: center;

        &__icon {
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
            margin: 0 10px;
            border-radius: 50px;
            cursor: pointer;

            &--themeDarker {
                background-color: #82699c;
                color: #ffffff;
            }

            &--iconBigger {
                width: 3rem;
                height: 3rem;
                margin: 0;
                border: 8px solid #ffffff;
            }

            &--posLeft {
                margin-right: 2rem;
                font-size: .7rem;
                color: #82699c;
            }

            &--posRight {
                margin-left: 2rem;
                font-size: .7rem;
                color: #ac0202;
            }
        }
    }

</style>
