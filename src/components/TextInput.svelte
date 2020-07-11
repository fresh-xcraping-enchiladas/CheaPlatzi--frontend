<script>
  export let placeholder = "Find your favorite console";
</script>

<style>
  .container-input {
    width: 500px;
    margin-top: 30px;
  }
  input {
    height: 40px;
    width: 100%;
    padding-left: 20px;
    border-radius: 50px;
    outline: none;
    border: 0.5px #eaeaea;
    font-size: 24px;
    color: #000;
    background-color: #fff;
  }
  @media screen and (max-width: 480px) {
    .container-input {
      width: 100%;
      margin-top: 10px;
    }
    input {
      height: 60px;
      max-width: 90%;
      font-size: 20px;
    }
  }
</style>

<div class="container-input">
  <input type="text" name="input" {placeholder} id="" />
</div>
