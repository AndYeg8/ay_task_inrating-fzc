<template>
  <div>
   <h1>User Edit = {{user.name}}</h1>
   <form @submit.prevent="submitHendler">
      <div class="input-group mb-3">
        <span class="input-group-text" id="name">name</span>
        <input
          id="name"
					v-model="name"
          type="text"
          class="form-control"
          placeholder="Name"
          aria-label="Name"
          aria-describedby="name"
        >
			</div>
			<div class="input-group mb-3">
				<span class="input-group-text" id="surname">surname</span>
        <input
          id="surname"
					v-model="surname"
          type="text"
          class="form-control"
          placeholder="Surname"
          aria-label="Surname"
          aria-describedby="surname"
        >
      </div>
			<div class="input-group mb-3">
				<span class="input-group-text" id="phone">phone</span>
        <input
          id="phone"
          v-model="phone"
          type="tel"
          class="form-control"
          placeholder="Phone"
          aria-label="Phone"
          aria-describedby="phone"
        >
      </div>
			<div class="input-group mb-3">
				<span class="input-group-text" id="email">email</span>
        <input
          id="email"
          v-model="email"
          type="email"
          class="form-control"
          placeholder="email"
          aria-label="Email"
          aria-describedby="email"
        />
      </div>
			<button class="btn btn-success" type="submit" style="margin-right: 1rem">Edit user</button>
     
    </form>
     <button class="btn btn-danger" type="submit" v-on:click="deleteUser">Delete user</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    surname: '',
    phone:'',
    email:'',
    id:''
  }),
  computed: {
    user() {
      return this.$store.getters.userById(+this.$route.params.id)
    }
  },
  mounted() {
    this.name = this.user.name
    this.surname = this.user.surname
    this.phone = this.user.phone
    this.email = this.user.email
    this.id = this.user.id
  },
  methods: {
		submitHendler() {
      const user = {
        name: this.name,
        surname: this.surname,
        phone: this.phone,
        email: this.email,
        id: this.id
			}
      this.$store.dispatch('updateUser', user)
      this.$router.push('/')
		},
    deleteUser() {
      const user = {
        name: this.name,
        surname: this.surname,
        phone: this.phone,
        email: this.email,
        id: this.id
			}
      this.$store.dispatch('deleteUser', user)
      this.$router.push('/')
		}
  }  
}
</script>