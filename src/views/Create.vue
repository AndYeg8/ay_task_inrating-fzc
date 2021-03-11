<template>
  <div>
    <h1>Create user</h1>
    <hr />
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
        />
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
        />
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
        />
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
			<button class="btn btn-success" type="submit" >Save user</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Create",
	methods: {
		submitHendler(){
			const user = {
				name: this.name,
				surname: this.surname,
				phone: this.phone,
				email: this.email,
        id: Date.now()
			}
    this.$store.dispatch('createUser', user)  
    this.$router.push('/')
		}
	}
}
</script>
