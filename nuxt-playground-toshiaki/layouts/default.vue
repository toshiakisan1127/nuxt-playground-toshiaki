<template>
  <div>
    <nav>
      <ul class="menu">
        <li>
          <NuxtLink to="/" class="buttonUnderline"> HOME </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/login" class="buttonUnderline"> Login </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/authenticated" class="buttonUnderline">
            Secret
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>

<style scoped>
/* aタグのリセットCSS */
a {
  color: inherit;
  text-decoration: none;
}

/* buttonタグのリセットCSS */
button {
  padding: 0;
  font-family: inherit;
  appearance: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

/* ボタンのスタイル */
.buttonUnderline {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  padding: 0 24px;
  overflow: hidden;
  font-size: 15px;
  color: #222;
  text-align: center;
  overflow-wrap: anywhere;
  background: transparent;
}

.buttonUnderline::after {
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  content: "";
  background-color: #6fa24a;
  transform: scaleX(0);
  transform-origin: right top;
}

@media (any-hover: hover) {
  .buttonUnderline::after {
    transition: transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .buttonUnderline:hover::after {
    transition: transform 0.4s cubic-bezier(0.9, 0, 0, 1);
    transform: scaleX(1);
    transform-origin: left top;
  }

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 16px;
    place-content: center;
    place-items: center;
    height: 100%;
    padding: 64px 16px;
    margin: 0;
    font-family: sans-serif;
    font-size: 16px;
    color: #222;
    background-color: #efefef;
  }

  body.dark {
    background-color: #222;
  }

  /* ul,liのリセットCSS */
  ul,
  li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  /* ボタンを横並びにするスタイル */
  .buttonList {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  /* メニューを横並びにするスタイル */
  .menu {
    display: flex;
    padding: 0 16px;
    background-color: #fff;
    box-shadow: 0 0 4px rgb(0 0 0 / 30%);
  }
}
</style>
