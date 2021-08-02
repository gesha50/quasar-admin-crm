<template>
  <q-drawer
    side="right"
    v-model="drawer"
    show-if-above
    :width="200"
    :breakpoint="599"
    bordered
    class="bg-grey-3 mobile_only"
  >
    <q-scroll-area class="fit">
      <q-list>

        <template v-for="(menuItem, index) in menuList">
          <q-item clickable :to="menuItem.href" exact v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
        </template>

      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
export default {
  name: "AsideMenu",
  props: ['drawer', 'menuList'],
}
</script>

<style scoped>

</style>
