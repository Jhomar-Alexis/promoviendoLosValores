<template>
    <!-- barra de navegacion -->
    <div
        class="flex justify-center sm:justify-center z-50 items-center px-2 lg:px-4 h-16 w-[100vw] shadow-[0_0_20px_10px] bg-teal-800 text-black">
        <!-- logo -->
        <div class="flex items-center gap-1 pb-6">

            <!-- boton de hamburguesa -->
            <div class="sm:hidden">
                <Button size="icon" ref="btn" variant="outline" class="rounded-full w-10 h-10 p-1"
                    @click="toggleSidebar">
                    <Icon name="i-carbon-menu" class="w-9 h-9" />
                </Button>
            </div>
        </div>
    </div>

    <!-- barra lateral -->
    <div ref="sidebar"
        class="hidden sm:flex lg:items-center sm:-mt-[3.2rem] pt-2 sm:pt-0 sm:pl-6 md:pl-0 justify-center">
        <div class="grid sm:flex gap-4 lg:gap-8 border sm:border-none font-bold bg-teal-800
            sm:p-0 shadow-[0_0_20px_0] sm:shadow-none p-20 rounded-3xl text-center text-white"
            style="cursor: pointer;">
            <a v-for="link in links" :key="link" @click.prevent="scrollTo(link.target)">
                <Icon :name="link.icon" class=" text-2xl sm:text-xl" />
                <br /> {{ link.name }}
            </a>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const links = [
    {
        icon: 'i-ph-house',
        name: 'Inicio',
        target: 'inicio'
    },
    {
        icon: 'i-ph-list-dashes',
        name: 'Usos',
        target: 'usos'
    },
    {
        icon: 'i-mdi-alert',
        name: 'Riesgos',
        target: 'riesgos'
    },
    {
        icon: 'i-mdi-shield',
        name: 'Prevención',
        target: 'prevencion'
    },
    {
        icon: 'i-mdi-shield-half-full',
        name: 'Prevención/Niños',
        target: 'prevencionniños'
    },
]

const btn = ref(null)
const sidebar = ref(null)

const toggleSidebar = () => {
    // sidebar.value?.classList?.toggle('animate-fade-left');
    sidebar.value?.classList?.toggle('hidden');
    btn.value?.classList?.toggle('hidden');
}

const scrollTo = (target) => {
    const element = document.getElementById(target);
    element.scrollIntoView({ behavior: 'smooth' });
}
</script>