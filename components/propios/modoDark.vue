<template>
    <!-- alternar modo oscuro -->
    <div>
        <Button ref="btn" size="icon" variant="outline" class="rounded-full w-10 h-10 p-1" @click="toggleColorMode">
            <icon class="w-9 h-9" :name="iconName" />
        </Button>
    </div>
</template>

<script setup>
const colorMode = useColorMode()
import Button from '~/components/ui/button/Button.vue';
const btn = ref(null)
const iconName = ref('')

// const toggleColorMode = () => {
//     if (colorMode.value === 'light') {
//         colorMode.value = 'dark'
//     } else if (colorMode.value === 'dark') {
//         colorMode.value = 'light'
//     }
//     colorMode.preference = colorMode.value
//     localStorage.setItem('colorMode', colorMode.preference)
//     btn.value.$el.classList.add('animate-spin')
//     setTimeout(() => {
//         btn.value.$el.classList.remove('animate-spin')
//         colorMode.value === 'light' ? iconName.value = 'i-ph-moon' : iconName.value = 'i-ph-sun';
//         btn.value.$el.classList.remove('animate-spin')
//     }, 3000)
// }

// onMounted(() => {
//     colorMode.value === 'light' ? iconName.value = 'i-ph-moon' : iconName.value = 'i-ph-sun';
// })
</script>