<template>
    <div
        class="shadow-[0_0_10px_0] shadow-black pt-1 pb-1 sm:pt-0 sm:pb-0 flex flex-col items-center justify-center sm:h-[7vh] bg-gray-200">
        <p v-for="footerText in footerTexts" :key="footerText" class="text-center text-sm text-gray-900">
            {{ footerText }}
        </p>
    </div>
</template>

<script setup>
const colorMode = useColorMode()
const footerTexts = [
    '© Copyright 2024. Todos los derechos reservados.',
    'Desarrollado por: Erin Ariana Chero Sosa'
]
</script>
