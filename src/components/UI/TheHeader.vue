<template>
  <header class="bg-teal-600 h-full flex justify-center items-center h-20">
    <nav>
      <h1>
        <a to="/" class="text-indigo-700 inline-block my-3 mx-6"
          >Find a Coach</a
        >
      </h1>
      <ul>
        <li><a to="/coaches" class="text-indigo-700">All Coaches</a></li>
        <li>
          <a to="/auth" class="text-indigo-700">Login</a>
        </li>
        <li>
          <a to="/requests" class="text-indigo-700">Request</a>
        </li>
        <li></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
