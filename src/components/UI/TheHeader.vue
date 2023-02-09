<template>
  <div class="left-0 top-0 w-full h-20 flex bg-gray-100">
    <div
      class="container flex items-center m-auto justify-between md:px-2 px-4"
    >
      <div class="flex items-center">
        <span class="material-symbols-outlined mr-2 text-5xl">
          local_convenience_store
        </span>
        <span class="text-lg font-medium">Online Shop</span>
      </div>

      <div class="md:flex hidden space-x-6 text-gray-600">
        <a class="nav-action" href="#">
          <span class="material-symbols-outlined"> inventory_2 </span>
          Product</a
        >
        <a class="nav-action" href="#">
          <span class="material-symbols-outlined">
            shopping_cart_checkout
          </span>
          Cart</a
        >
        <a class="nav-action" href="#">
          <span class="material-symbols-outlined"> credit_card </span>
          Payment</a
        >
        <a class="nav-action" href="#">
          <span class="material-symbols-outlined"> payments </span>
          Pricing</a
        >
      </div>

      <div class="md:flex hidden items-center space-x-4">
        <a
          class="px-4 py-2 text-gray-600 hover:bg-gray-800 cursor-pointer hover:text-gray-50 hover:rounded transition duration-300 hover:shadow"
          href="#"
          >Sign Up</a
        >
        <a
          class="px-4 py-2 bg-gray-700 text-gray-100 hover:bg-gray-800 hover:text-gray-50 cursor-pointer rounded transition duration-300 shadow"
          href="#"
          >Log In</a
        >
      </div>

      <div class="md:hidden flex items-center space-x-4">
        <button class="menu-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
