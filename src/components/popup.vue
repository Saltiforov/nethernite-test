<template>
  <div v-if="popupInfo !== null" class="popup" :class="{'opened': popupOpened}">
    <div class="content">
      <v-btn @click.prevent="$emit('update:popup-opened', false)">X</v-btn>
      <div class="popup__name text-center">
        <h4 v-if="popupInfo.name !== undefined">{{ popupInfo.name }}</h4>
      </div>
      <ul class="content__list">
        <li v-if="popupInfo.version !== undefined">Version:{{ popupInfo.version }}</li>
        <li v-if="popupInfo.description !== undefined">Description:{{ popupInfo.description }}</li>
        <li v-if="popupInfo.author !== undefined">Author:{{ popupInfo.author.name }}</li>
        <li class="links" v-if="popupInfo.links.npm !== undefined">
          Links:<a
            :href="popupInfo.links.npm">{{ popupInfo.links.npm }}
        </a>
        </li>
        <li class="links" v-if="popupInfo.links.homepage !== undefined">
          Homepage:<a
            :href="popupInfo.links.homepage">{{ popupInfo.links.homepage }}
        </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props: {
    popupOpened: {
      type: Boolean,
      default: false
    },
    popupInfo: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  opacity: 0;
  z-index: -100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  &.opened {
    opacity: 1;
    z-index: 1000;
  }

  .content {
    width: 350px;
    height: 350px;
    background: white;
    border-radius: 50px;
    overflow: hidden;

    &__list {
      padding: 10px 20px 10px 20px;

      li {
        padding-top: 10px;

        a {
          color: black;
        }
      }
    }
  }

}

.links {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}


</style>
