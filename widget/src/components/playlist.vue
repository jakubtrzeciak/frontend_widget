<template>
<div class="heightPos">
    <div class="playList">
        <div class="playListTopBar">
            <div class="playListTopBar__icon" @click="$emit('changeScreen', JSON.stringify([true, true]))">
                <fa icon="reply" />
            </div>
            <h3>Playlist</h3>
        </div>
        <div class="musicList">
            <div class="musicListElement" v-for="info in infos" :key="info.id" :data-music="info.id" @click="getData(info.id)">
                <div class="musicListElementLeftSide">
                    <p class="musicListElementLeftSide__par">{{ info.time }}</p>
                    <p class="musicListElementLeftSide__par">{{ info.artist }}</p>
                    <h2 class="musicListElementLeftSide__par musicListElementLeftSide__par--textEmphasise">
                        {{ info.title }}
                    </h2>
                </div>
                <div class="musicListElementRightSide">
                    <fa icon="share-alt" class="shareIcon"/>
                    <fa icon="heart" class="heartIcon"/>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'playlist',
  data () {
    return {
      infos: [
        {
          id: 0,
          time: '3:16',
          artist: 'Icona Pop',
          title: 'Still Dont know'
        },
        {
          id: 1,
          time: '2:35',
          artist: 'Icona Pop',
          title: 'I love it'
        },
        {
          id: 2,
          time: '2:50',
          artist: 'Icona Pop',
          title: 'Girlfriend'
        },
        {
          id: 3,
          time: '3:07',
          artist: 'Icona Pop',
          title: 'We Got the World'
        },
        {
          id: 4,
          time: '3:24',
          artist: 'Icona Pop',
          title: 'Nights like this'
        }
      ]
    }
  },
  props: {
    lockData: Boolean
  },
  methods: {
    getData (id) {
      let title, artist, time, iD
      for (let i = 0; i < this.infos.length; i += 1) {
        if (this.infos[i].id === id) {
          title = this.infos[i].title
          artist = this.infos[i].artist
          time = this.infos[i].time
          iD = this.infos[i].id
        }
      }

      localStorage.setItem('lsTitle', title)
      localStorage.setItem('lsArtist', artist)
      localStorage.setItem('lsTime', time)
      localStorage.setItem('lsId', iD)
      localStorage.setItem('lsInfosLength', this.infos.length)

      this.$emit('changeScreen', JSON.stringify([true, true]))
    }
  },
  mounted () {
    if (this.lockData === false) this.getData(parseInt(localStorage.getItem('lsId')))
  }
}
</script>

<style lang="scss" scoped>

    .heightPos {
        height: 100%;

        .playList {
            height: 100%;
        }
    }

    .playListTopBar {
        width: 100%;
        text-align: center;
        position: relative;
        padding: 5px 0;
        color: #544069;

        &__icon {
            width: .9rem;
            height: .9rem;
            border-radius: 50px;
            background-color: #ffffff;
            padding: 8px;
            position: absolute;
            top: 27px;
            left: 27px;
            font-size: .75rem;
            cursor: pointer;
        }

        h3 {
            font-size: 1rem;
            padding: 5px 0;
        }
    }

    .musicList {
        width: calc(100% - 54px);
        margin: 0 auto 0 27px;
        height: 75%;
        overflow-y: scroll;
        padding-right: 10px;

        &::-webkit-scrollbar {
            width: 9px;
            background: none;
        }

        &::-webkit-scrollbar-thumb {
            background: rgb(206, 206, 206);
            border-radius: 10px;
        }

        .musicListElement {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            border-bottom: 1px solid #bdbdbd;
            cursor: pointer;

            &:hover {
                background-color: #e4e4e4;
            }

            .musicListElementLeftSide {
                font-size: .7rem;
                font-weight: 700;

                &__par {
                    display: inline;
                    margin-right: 10px;
                    color: #797979;

                    &--textEmphasise {
                        display: block;
                        margin: 0;
                        color: #544069;
                    }
                }
            }

            .musicListElementRightSide {
                font-size: .75rem;

                .shareIcon {
                    color: #544069;
                    margin-left: 10px;
                }

                .heartIcon {
                    color: #ac0202;
                    margin-left: 10px;
                }
            }
        }
    }
</style>
