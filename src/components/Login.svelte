<script>
  import { onMount } from "svelte";
  import { currentUser } from "../stores/user";
  import { signOut, createLoginButton } from "../utils/firebase";

  onMount(() => {
    !$currentUser && createLoginButton();
  });
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

{#if $currentUser}
  <button
    on:click={() => {
      signOut();
    }}>
    Logout
  </button>
{:else}
  <div id="firebaseui-auth-container" />
{/if}
