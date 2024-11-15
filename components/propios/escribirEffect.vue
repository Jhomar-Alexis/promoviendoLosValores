<template>
    <div>
        <span class="text-gray-500"> • </span>
        <span ref="typingText" class="text-gray-500" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const texts = [
    'Usos',
    'Riesgos',
    'Prevención',
    'Prevención en niños',
];
let currentIndex = 0;
const typingText = ref(null);
const typingSpeed = 100;
const delayBetweenTexts = 3000;

const typeText = async () => {
    const currentText = texts[currentIndex];
    typingText.value.textContent = '';
    for (let i = 0; i < currentText.length; i++) {
        typingText.value.textContent += currentText[i];
        await new Promise(resolve => setTimeout(resolve, typingSpeed));
    }
    currentIndex = (currentIndex + 1) % texts.length;
    setTimeout(typeText, delayBetweenTexts);
};

onMounted(() => {
    typeText();
});
</script>