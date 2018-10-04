<template>
      <li>
        <img :src="artist.image[2]['#text']" alt="">
        <h2>
          <a :href="artist.url" target="_blank">
            {{ artist.name }}
          </a>
        </h2>
      </li>
</template>

<script>
export default {
  name: "artist",
  props: ["artist"]
};
</script>

<style lang="scss" scope>
li {
  display: block;
  margin: 10px 0;
}
</style>
