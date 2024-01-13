import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

const base_url = "http://localhost:3000";
export const useMainStore = defineStore("main", {
  state: () => ({}),
  actions: {},
});

export const useLoginStore = defineStore("login", {
  state: () => ({
    loginData: {},
    isLoggedin: false,
  }),
  actions: {
    async submitLogin(data) {
      try {
        const headers = {
          "Content-Type": "application/x-www-form-urlencoded",
        };
        const response = await axios.post(`${base_url}/customerLogin`, data, {
          headers,
        });
        this.loginData = response.data;
        localStorage.setItem("access_token", response.data.accessToken);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("role", response.data.role);
        this.isLoggedin = true;
        Swal.fire({
          icon: "success",
          title: `start your journey`,
          text: `login success`,
        });
        router.push("/");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `${err.response.data.error}`,
          text: `Please Handle`,
        });
      }
    },
    checkStatusLog() {
      if (localStorage.getItem("access_token")) {
        this.isLoggedin = true;
      }
    },
    logoutHelp() {
      this.isLoggedin = false;
      localStorage.clear();
      this.isLoggedin = false;
    },
    async callback(response) {
      try {
        const headers = {
          "Content-Type": "application/x-www-form-urlencoded",
        };
        const data = await axios.post(
          `${base_url}/cusGoogleLog`,
          { token_google: response.credential },
          { headers }
        );
        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("email", data.data.email);
        localStorage.setItem("role", data.data.role);
        this.isLoggedin = true;
        Swal.fire({
          icon: "success",
          title: `start your journey`,
          text: `login success`,
        });
        router.push("/");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `${err.response.data.error}`,
          text: `Please Handle`,
        });
      }
    },
  },
  getters: {},
});

export const useRegisStore = defineStore("regis", {
  state: () => ({
    RegisData: {},
  }),
  actions: {
    async submitregis(data) {
      try {
        const headers = {
          "Content-Type": "application/x-www-form-urlencoded",
        };
        const response = await axios.post(`${base_url}/customerPost`, data, {
          headers,
        });
        Swal.fire({
          icon: "success",
          title: `Please Login Now`,
          text: `Register success`,
        });
        router.push("/loginPage");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `${err.response.data.error}`,
          text: `Please Handle`,
        });
      }
    },
  },
  getters: {},
});
