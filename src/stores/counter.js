import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

const base_url = "http://localhost:3000";

export const usePostStore = defineStore("posts", {
  state: () => ({
    posts: [],
  }),
  actions: {
    async renderPost() {
      try {
        const { data } = await axios.get(`${base_url}/cusPost`);
        this.posts = data.post;
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
});

export const usePostPignationStore = defineStore("postsPig", {
  state: () => ({
    postsPig: [],
    totalPage: 0,
    category: "",
  }),
  actions: {
    async renderPignation(page = 1, categoryId = "") {
      try {
        const data = await axios.get(
          `${base_url}/readPagination?page=${page}&limit=${4}&category=${categoryId}`
        );
        this.postsPig = data.data.renderPost.rows;
        this.totalPage = data.data.totalPage;
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
});

export const usePostDetailStore = defineStore("detailPost", {
  state: () => ({
    detailPost: [],
    statusDetail: false,
    selectedid: 0,
    detailQr: "",
  }),
  actions: {
    async renderDetail(id) {
      try {
        const dataDetail = await axios.get(`${base_url}/cusPost/${id}`);
        this.detailPost = dataDetail.data.Post;
        this.statusDetail = true;
        this.selectedid = id;
      } catch (err) {
        console.log(err);
      }
    },
    hideDetail() {
      this.statusDetail = false;
    },
    async renderDetail2(id) {
      try {
        const dataDetail = await axios.get(`${base_url}/cusPost/${id}`);
        this.detailPost = dataDetail.data.Post;
        this.detailQr = dataDetail.data.qr;
        router.push("/detail");
      } catch (err) {
        console.log(err);
      }
    },
    backtoHome() {
      router.push("/");
    },
  },
  getters: {},
});

export const usePostCarousellStore = defineStore("postCarousel", {
  state: () => ({
    postCaros: [],
    totalPage: 0,
  }),
  actions: {
    async renderPignation(page = 3, limit = 4) {
      try {
        const data = await axios.get(
          `${base_url}/readPagination?page=${page}&limit=${limit}`
        );
        this.postCaros = data.data.renderPost.rows;
        this.totalPage = data.data.totalPage;
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
});

export const useAddFavoriteStore = defineStore("addFav", {
  state: () => ({
    statusLoved: false,
    statusLovedId: 0,
  }),
  actions: {
    async addFavorite(id) {
      try {
        const headers = {
          "Content-Type": "application/x-www-form-urlencoded",
          access_token: localStorage.getItem("access_token"),
        };
        const data = await axios.post(`${base_url}/addFavPost/${id}`, null, {
          headers,
        });
        this.statusLoved = true;
        this.statusLovedId = id;
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
});

export const useDeleteFavoriteStore = defineStore("deleteFav", {
  state: () => ({
    changestatus: true,
  }),
  actions: {
    async deleteFav(id) {
      try {
        const headers = {
          "Content-Type": "application/x-www-form-urlencoded",
          access_token: localStorage.getItem("access_token"),
        };
        const data = await axios.delete(`${base_url}/removeFav/${id}`, null, {
          headers,
        });
        this.changestatus = false;
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
});

export const useRenderCatStore = defineStore("cats", {
  state: () => ({
    dataCat: [],
  }),
  actions: {
    async renderCat() {
      try {
        const data = await axios.get(`${base_url}/renderAllCat`);
        this.dataCat = data.data.categories;
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
});

export const useRenderFavAstore = defineStore("renderFav", {
  state: () => ({
    postsPig: [],
    statusPagelove: false,
  }),
  actions: {
    async renderFav() {
      try {
        const headers = {
          "Content-Type": "application/x-www-form-urlencoded",
          access_token: localStorage.getItem("access_token"),
        };
        const data = await axios.get(`${base_url}/renderFavPost`, { headers });
        const data1 = data.data.response.map((el) => el.Post);
        this.postsPig = data1;
        this.statusPagelove = true;
      } catch (err) {
        console.log(err);
      }
    },
    loveButton() {
      this.statusPagelove = false;
    },
  },
});
