import React from "react"

class Footer extends React.Component{

    render(){

        return(

            <>




<footer class="bg-black rounded-base shadow-xs border border-default mt-8 md:mt-20">
    <div class="w-full max-w-7xl mx-auto p-4 md:py-5">
        <div class="sm:flex sm:items-center sm:justify-between">
         
                
                <span class="text-heading self-center text-2xl font-normal mx-8 whitespace-nowrap text-white">Flowbite</span>
       
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0 text-white mx-8">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-default sm:mx-auto lg:my-8" />
        <span class="block text-sm text-body sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>



            
            </>
        )
    }
}

export default Footer;