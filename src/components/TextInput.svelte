<script>
  import Button from './Button.svelte'
  export let placeholder = "Find your favorite console";
  export let handleInput;
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
    border: solid .5px #898989;
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
  button {
    display: inherit;
    margin: 10px auto;
    height: 100%;
    padding: 5px 15px;
    color: var(--lightpurple-text);
    font-size: 18px;
    border: none;
    cursor: pointer;
    border-radius: 12px;
    background-color: #643173;
  }
  button:hover {
    background-color: #7d5ba6;
    color: #643173;
  }
</style>

<div class="container-input">
    <form on:submit|preventDefault={handleInput}>
      <input type="text" name="input" {placeholder} id="" />
      <button type="submit"> Search </button>
    </form>
</div>
