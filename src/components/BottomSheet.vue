
<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet" hide-overlay>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="purple" v-bind="attrs" v-on="on">충전</v-btn>
      </template>
      <v-list>
        <v-subheader>충전</v-subheader>
        <v-list-item
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
        >
          <v-list-item-title>{{ tile.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
  export default {
    data: () => ({
      sheet: false,
      tiles: [
        { img: 'keep.png', title: '100만원' },
        { img: 'inbox.png', title: '50만원' },
        { img: 'hangouts.png', title: '30만원' },
        { img: 'messenger.png', title: '10만원' },
        { img: 'google.png', title: '최대 2,000,000원+' },
        { img: 'google.png', title: '직접입력' },
      ],
    }),
  }
</script>