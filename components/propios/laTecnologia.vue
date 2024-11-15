<template>
    <div class="flex flex-col p-10">
        <h1 class="text-black text-2xl md:text-4xl font-[900] mb-10 text-center">
            Los Valores
        </h1>
        <div class="flex flex-col-reverse lg:flex-row-reverse items-center justify-center pb-4 lg:pb-0 lg:p-4 gap-4">
            <!-- Caja de texto e imagen -->
            <div
                class="flex flex-col-reverse lg:flex-row items-center bg-cyan-700 p-4 rounded-lg shadow-[0_0_12px_0] shadow-black w-full md:w-1/2 lg:w-1/2 xl:w-1/3 lg:p-8 xl:p-10">
                <!-- Caja de imagen -->
                <div class="w-full lg:w-2/5 xl:w-1/3 md:w-1/2 lg:ml-4">
                    <img src="~/public/images/2.jpg"
                        class="w-full h-auto object-cover rounded-lg border-4 border-cyan-700" />
                </div>
                <!-- Contenido -->
                <div class="w-full lg:w-3/5 xl:w-2/3 md:w-1/2">
                    <!-- Título -->
                    <h2 class="text-white text-2xl font-bold mb-2">Promoviendo los valores en mi entorno : </h2>
                    <!-- Contenido -->
                    <p class="text-white lg:text-2xl">Los valores son principios, cualidades o virtudes que forman parte
                        de
                        la conducta de una persona y los cuales nos permiten tener una buena convivencia y comunicación
                        con
                        las personas que nos rodean. Además nos permiten vivir correctamente.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>