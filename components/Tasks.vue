<template>
  <div class="tasks">
    <h1 class="centered-text">CheckLists</h1>

  <v-data-table
    :headers="headers"
    :items="tasks"
    :sort-by="['Date', 'Developer', 'Client' , 'Status']"
    :sort-desc="[false, true]"
    multi-sort
    class="elevation-1"
  ></v-data-table>
  </div>
</template>

<script>
import PostsService from '@/client/src/PostsService'
export default {
  name: 'tasks',
  data () {
    return {
      headers: [
          {
            text: 'URL',
            align: 'left',
            sortable: false,
            value: 'URL',
          },
          { text: 'Date', value: 'Date' },
          { text: 'Client', value: 'Client' },
          { text: 'Developer', value: 'Developer' },
          { text: 'Status', value: 'Status' },
      ],
      tasks: [
        {
          URL: "https://pcnetbuild.wpengine.com/contact-us/",
          Date: "1/28/2020",
          Developer: "Marvin",
          Client: "PCNet",
          Status: "Finished"
        },
        {
          URL: "https://pcnetbuild.wpengine.com/about-us/",
          Date: "1/28/2020",
          Developer: "Marvin", 
          Client: "PCNet",
          Status: "Needs Review"
        },
      ]
    }
  }, 
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data
    }
  }
} 
</script>
<style type="text/css">
</style>