<script>
  export let placeholder = "Search";
</script>

<style>
  input {
    height: 40px;
    width: 80%;
    border: 1px solid #46274f;
    margin: 50px 10%;
    outline: none;
    padding-left: 20px;
    border-radius: 40px;
    font-size: 24px;
    color: #ab94c7;
    background-color: #fff;
  }
  @media screen and (min-width: 1000px) {
    input {
      height: 60px;
      font-size: 36px;
    }
  }
</style>

<div class="input">
  <input type="text" name="input" {placeholder} id="" />
</div>
