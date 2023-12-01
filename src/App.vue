<script setup>
import { ref } from 'vue'

const drawer = ref(true)
</script>

<template>
  <v-app id="app">
    <v-layout>
      <v-app-bar class="bg-primary elevation-1 border top-0" app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Kartu Bimbingan</v-toolbar-title>
        <v-btn class="bg-primary">Logout</v-btn>
      </v-app-bar>

      <v-navigation-drawer class="elevation-1" v-model="drawer" expand-on-hover clipped app>
        <v-list nav>
          <router-link class="text-decoration-none text-grey-darken-4" to="/input-kartu-bimbingan"><v-list-item
              prepend-icon="mdi-home-city" title="Input Kartu Bimbingan" value="InputKartuBimbingan"></v-list-item>
          </router-link>
          <router-link class="text-decoration-none text-grey-darken-4" to="/input-kartu-bimbingan">
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          </router-link>
          <router-link class="text-decoration-none text-grey-darken-4" to="/input-kartu-bimbingan">
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>
