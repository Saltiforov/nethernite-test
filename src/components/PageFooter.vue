<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__name"><h4>Mykhailo Vinogradchii </h4></div>
      <div class="footer__git"><a href="https://github.com/Saltiforov?tab=repositories">https://github.com/Saltiforov?tab=repositories</a></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "PageFooter"
}
</script>

<style lang="scss" scoped>
.footer{
  min-height: 70px;
  width: 100%;
  background-color: silver;
  margin-top: 60px;
  &__inner{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 25px 10px 0 10px;
    a{
      color: black;
    }
  }
}
@media (max-width: 550px){
  .footer__inner{
    flex-direction: column;

  }
  .footer__git{
    padding-top: 15px;
    text-align: center;
    padding-bottom: 15px;
  }
}
</style>
