<template>
    <div
        class=" flex-col-reverse flex lg:flex-row justify-center gap-6 xl:gap-20 items-center w-full h-[100vh] sm:h-[93vh] bg-white">
        <!-- mi imagen -->
        <div class="text-white pt-1 sm:pt-0">
            <img src="~/public/images/portada.jpeg" alt="hero"
                class="w-[200px] lg:w-[400px] xl:w-[500px] rounded-lg border-8 border-cyan-700 shadow-[0_0_20px_0_] shadow-black">
        </div>
        <div>
            <!-- mi presentacion -->
            <div class="grid gap-y-4 xl:gap-y-6">
                <h1 v-for="presentationText in presentationTexts" :key="presentationText.text"
                    :class="presentationText.class" class="text-center lg:text-left text-black">
                    {{ presentationText.text }}
                </h1>
                <h1 class="text-2xl sm:text-3xl text-center lg:text-left xl:text-[40px] font-[900]">
                    <PropiosEscribirEffect />
                </h1>
            </div>

            <!-- Botones -->
            <div class="gap-4 pt-3 xl:pt-6 flex flex-col lg:flex-row justify-center items-center lg:justify-normal">
                <Button v-for="boton in botones" :key="boton.name" @click="router.push(boton.link)" variant="outline"
                    class="lg:h-8 xl:h-10 text-base sm:text-lg border-2 hover:text-white shadow-[0_4px_8px_0] 
                     border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:shadow-black">
                    <div class="hover:animate-fade-right">
                        <icon :name="boton.icon" class="xl:text-xl" />
                        {{ boton.name }}
                    </div>
                </Button>
            </div>
        </div>
    </div>

    <!-- pie de pagina -->
    <PropiosFooterPage />
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const botones = [
    {
        name: 'Acceder',
        icon: 'i-ph-arrow-right',
        link: '/tic',
    },
]

const presentationTexts = [
    {
        text: ' Nos Informamos sobre:',
        class: 'text-2xl sm:text-3xl xl:text-[40px] text-gray-500 font-[900]',
    },
    {
        text: 'El BUEN USO',
        class: 'text-4xl sm:text-5xl xl:text-7xl font-extrabold',
    },
    {
        text: 'DE LAS TIC',
        class: 'text-4xl sm:text-5xl xl:text-7xl font-extrabold',
    }
]
</script>
