<template name="login-form">
  <div class="login">
    <form action="#" class="form" @submit.prevent="onSubmit">
      <div class="fields">
        <div class="field">
          <label for="name" class="lab">Name</label>
          <input
            type="text"
            class="inp"
            id="name"
            v-model.trim="form.name"
            :class="[
              { invalid: submitted && $v.form.name.$error },
              { valid: $v.form.name.required },
              { focus: this.focused === true },
            ]"
            @focus="onFocus"
            @blur="onBlur"
          />
          <div
            v-if="submitted && !$v.form.name.required"
            class="invalid-feedback"
          >
            <span>Enter your name</span>
          </div>
        </div>
        <div class="field">
          <label for="pass" class="lab">Password</label>
          <input
            type="text"
            class="inp"
            id="pass"
            v-model="form.password"
            :class="[
              { invalid: submitted && $v.form.password.$error },
              { valid: $v.form.password.required },
              { focus: this.focused === true },
            ]"
            @focus="onFocus"
            @blur="onBlur"
          />
          <div
            v-if="submitted && $v.form.password.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.form.password.required">Password is required</span>
            <span v-if="!$v.form.password.minLength"
              >Password must be at least 6 characters</span
            >
          </div>
        </div>
        <div class="field">
          <button type="submit" class="btn inp">LOGIN</button>
        </div>
      </div>
    </form>
    <div class="forgot">
      <button type="submit" class="forgot-btn br">Forgot Password</button>
    </div>
    <div class="register">
      <button type="submit" class="register-btn br">Register now</button>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "login-form",
  data: () => {
    return {
      form: {
        name: "",
        password: "",
      },
      submitted: false,
      focused: false,
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      password: {
        required,
        minLength: minLength(5),
      },
    },
  },
  methods: {
    onSubmit() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$emit("onSubmit", this.form);
    },
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/main.scss";
@import "@/assets/style/login.scss";
</style>
