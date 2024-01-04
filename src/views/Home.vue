<template>
  <div class="home">
    <Header />

    <div class="content">
      <div class="content__image">
        <div class="wrap">
          <h1 class="title-top">
            Welcome to<br />
            Business Analytics Online
          </h1>
        </div>
      </div>
      <div class="wrap">
        <div class="content__block">
          <div class="content__block_text">
            <div class="subtitle">
              <p class="text">
                Business Analytics — a new, convenient tool for managing and
                forecasting your business performance, which will help analyze
                your own finances and cash flows, visualize your reporting,
                business processes, KPI's
              </p>
              <div class="subtitle__block">
                <div
                  class="subtitle__block_text"
                  v-for="(item, i) in groupText"
                  :key="i"
                >
                  <p class="check">
                    <img :src="item.img" alt="image" />
                  </p>
                  <div class="group-text">
                    <p class="title">{{ item.title }}</p>
                    <p class="text-g">{{ item.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content__block_form">
            <Login @onSubmit="onSubmitForm" />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Login from "@/components/Login";
import Footer from "@/components/Footer";

export default {
  name: "login-page",
  components: {
    Header,
    Login,
    Footer,
  },
  data: () => {
    return {
      groupText: [
        {
          img: require("@/assets/images/Vector.png"),
          title: "Interactive Reporting",
          text: `In just a few clicks, you can connect your data from 1C,
          CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA,
          Rozetka, ebay), Logistic (Nova Poshta), Google Analytics
          and many more systems that reflect different aspects of
          business activities.`,
        },
        {
          img: require("@/assets/images/Vector.png"),
          title: "Automated data updates",
          text: `The application automatically updates and structures the data in just 60 seconds,    saving you time and money.`,
        },
        {
          img: require("@/assets/images/Vector.png"),
          title: "Data Security",
          text: `The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.`,
        },
      ],
    };
  },
  methods: {
    onSubmitForm(data) {
      if (data.name === "Admin" && data.password === "12345") {
        localStorage.setItem("auth", JSON.stringify(data.name));
        this.$router.push({ name: "todo" });
      } else {
        alert("Invalid name or password");
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
@import "@/assets/style/login.scss";
</style>
