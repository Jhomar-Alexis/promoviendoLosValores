<template>
    <!-- <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
        class="overflow-hidden relative bg-gray-200" indicators> -->
    <div class="relative h-[100vh] w-full flex justify-center items-center">
        <img src="/images/4.jpg" class="h-full w-full mx-auto rounded-lg" draggable="false">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          text-black text-lg flex flex-col items-center justify-center ">
            <div class="text-center">
                <span class="lg:text-[90px] md:text-[60px] text-[36px]" style="font-weight: 900;">PROMOVIENDO</span>
            </div>
            <div class="text-center pt-6 pb-4">
                <span class="lg:text-[90px] md:text-[60px] text-[36px]" style="font-weight: 900;">LOS</span>
            </div>
            <div class="text-center mt-4">
                <span class="lg:text-[90px] md:text-[60px] text-[36px]" style="font-weight: 900;">VALORES</span>
            </div>
        </div>
    </div>
    <!-- </UCarousel> -->
</template>
<script setup>
const items = [
    '/images/4.jpg'
]

const carouselRef = ref()

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 3000)
})
</script>