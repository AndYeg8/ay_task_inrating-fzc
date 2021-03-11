<template>
  <div>
   <h1>User list</h1>
   <hr>
   <button >
    <router-link class="nav-link active" aria-current="page" to="/create">Add user</router-link>
   </button>
   <table v-if="users.length">
    <thead>
      <tr>
        <th>name</th>
        <th>surname</th>
        <th>phone</th>
        <th>email</th>
        <!-- <th>delete</th>
        <th>edit</th> -->
      </tr>
    </thead>
    <tbody>
      <tr 
        v-for="user of users"
        :key="user.id"
      >
        <td>{{ user.name }}</td>
        <td>{{ user.surname }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.email}}</td>
        <td>
          <router-link tag="button" :to="'/User/' + user.id">
            Delete
          </router-link>
        </td>
        <td><router-link tag="button" :to="'/User/' + user.id">
            Edit
          </router-link></td>
      </tr>
    </tbody>
   </table>
   <p v-else>no users</p>
  </div>
</template>

<script>
export default {
  computed: {
    users(){
      return this.$store.getters.users
    }
  }
}
</script>
