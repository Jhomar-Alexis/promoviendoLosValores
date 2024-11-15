<template>
    <a v-for="link in links" :key="link" :href="link.link" target="_blank" :class="link.class"
        class="sm:w-11 sm:h-11 xl:w-14 xl:h-14 flex justify-center items-center animate-bounce hover:scale-110 
    hover:border-0 hover:shadow-md hover:text-white rounded-full border-2 hover:shadow-black bg-transparent">
        <icon class="w-8 h-8 sm:w-11 sm:h-11 xl:w-14 xl:h-14" :name="link.icon" />
    </a>
</template>

<script setup>
const links = [
    {
        icon: 'i-iconoir-facebook',
        link: 'https://www.facebook.com/jhomarsito.gonesito',
        class: 'hover:bg-[#1877f2] text-[#1877f2] border-[#1877f2] p-1 shadow-[0_4px_8px_0]'
    },
    {
        icon: 'i-iconoir-instagram',
        link: 'https://www.instagram.com/jhomar_sosa',
        class: 'hover:bg-[#e60073] text-[#e60073] border-[#e60073] p-1 shadow-[0_4px_8px_0]'
    },
    {
        icon: 'i-ph-whatsapp-logo',
        link: 'https://api.whatsapp.com/send?phone=971375528&text=Hola%20Alexis%2C%20me%20interesan%20tus%20servicios.%20Hablemos%20los%20detalles.',
        class: 'hover:bg-[#25d366] text-[#25d366] border-[#25d366] p-1 shadow-[0_4px_8px_0]'
    },
    {
        icon: 'i-iconoir-github',
        link: 'https://github.com/Jhomar-Alexis',
        class: 'hover:bg-[#8263ff] text-[#8263ff] border-[#8263ff] p-1 shadow-[0_4px_8px_0]'
    },
    {
        icon: 'i-iconoir-linkedin',
        link: 'https://www.linkedin.com/in/jhomar-alexis-chero-sosa-399201262',
        class: 'hover:bg-[#61c3ff] text-[#61c3ff] border-[#61c3ff] p-1 shadow-[0_4px_8px_0]'
    },
]
</script>