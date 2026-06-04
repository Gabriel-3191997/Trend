import React from "react"

class Nav extends React.Component{

    render(){

        return(

            <>
            

<nav class="bg-black  border-b border-default">
  <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
       
        <span class="self-center text-xl text-white capitalize text-heading font-semibold whitespace-nowrap">trend</span>
    </a>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" class="text-white bg-brand hover:bg-brand-strong box-border border-none border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">sign up</button>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-base md:hidden hover:bg-black hover:text-heading " aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
        </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-brand rounded-sm md:bg-transparent capitalize md:text-fg-brand md:p-0" aria-current="page">home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent text-white capitalize">afro</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent text-white capitalize">trapco</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent text-white capitalize">gospel</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent text-white capitalize">instrumental</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent text-white capitalize">news</a>
        </li>
         <li>
          <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent text-white capitalize">events</a>
        </li>
         <li>
          <a href="#" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent text-white capitalize">buy ticket</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

            </>
        )
    }
}


export default Nav;