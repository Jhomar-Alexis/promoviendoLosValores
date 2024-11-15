<template>
    <div class="flex flex-col p-10">
        <h1 class="text-black text-2xl md:text-4xl font-[900] mb-10 text-center">
            Riesgos de las TIC
        </h1>
        <div v-for="(item, index) in items" :key="index"
            class="flex flex-col-reverse lg:flex-row-reverse items-center justify-center pb-4 lg:pb-0 lg:p-4 gap-4">
            <!-- Caja de texto -->
            <div class="w-full md:w-1/3 lg:w-1/2 xl:w-1/3 bg-cyan-700 p-4 rounded-lg shadow-[0_0_12px_0] shadow-black">
                <p class="text-white lg:text-2xl">{{ item.text }}</p>
            </div>
            <!-- Caja de imagen -->
            <div class="w-full md:w-1/3 lg:w-1/3 xl:w-1/6 h-1/4 rounded-lg shadow-[0_0_12px_0] shadow-black">
                <img :src="item.imageUrl" class="w-full h-auto object-cover rounded-lg border-4 border-cyan-700" />
            </div>
        </div>
    </div>
</template>

<script setup>

// Arreglo de objetos que contiene el texto e imagen para cada bloque
const items = [
    { text: "Estafas laborales.", imageUrl: "/images/10.jpeg" },
    { text: "Ciberbullying o ciber acoso por redes sociales.", imageUrl: "/images/12.jpeg" },
    { text: "Violencia en las redes sociales.", imageUrl: "/images/13.jpg" },
    { text: "Robó de identidad.", imageUrl: "/images/9.jpeg" },
    { text: "Grooming (conductas y acciones deliberadamente emprendidas por una persona adulta, a través de Internet, con el objetivo de ganarse la amistad de un o una menor de edad, creando una conexión emocional, con el fin de poder abusar sexualmente de él o ella)", imageUrl: "/images/11.jpg" }
]

</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>