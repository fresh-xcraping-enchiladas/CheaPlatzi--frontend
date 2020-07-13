<script>
  export let text = "Click Me";
</script>

<style>
  button {
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

<button>{text}</button>
