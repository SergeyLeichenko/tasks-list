<template>
  <div class="footer">
    <div class="wrap">
      <div class="footer__block">
        <div class="footer__block_nav">
          <div class="footer__block_nav_logo">
            <img src="@/assets/images/Logo.png" alt="citi" title="citi" />
          </div>
          <nav class="navigation">
            <ul class="menu">
              <li class="menu__item" v-for="item in menuLink" :key="item.id">
                <router-link to="" tag="a" class="menu__item_link">{{
                  item.name
                }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__block_author">
          <p class="authot-text">
            Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
            Opportunity Lender.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-bottom",
  data: () => {
    return {
      menuLink: [
        { id: 1, name: "Terms & Conditions" },
        { id: 2, name: "Privacy" },
        { id: 3, name: "Notice at Collection" },
        { id: 4, name: "CA Privacy Hub" },
        { id: 5, name: "Contact Us" },
        { id: 6, name: "Sitemap" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
@import "@/assets/style/login.scss";
</style>
