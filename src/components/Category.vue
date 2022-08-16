<script setup>
  import category1 from "../assets/images/category/category1-img.webp"
  import category2 from "../assets/images/category/category2-img.webp"
  import category3 from "../assets/images/category/category3-img.webp"

  const categories = [
    {
      title: 'Ghost Tour',
      image: category1,
      desc: 'Discover the local mysteries and haunted places by attending the ghost tour, Solve a mysterious murder and get an award for the fanciest dress.'
    },
    {
      title: 'Witch Dance Party',
      image: category2,
      desc: 'Show your spooky costumes and dancing skills in our events dance party, Get yourselves involved in Halloween with the festive crafts and scocery moves.'
    },
    {
      title: 'Jack-O’-Lantern pinata',
      image: category3,
      desc: 'Make this Halloween memorable for yourselves with Jack-O’-lantern pinata, Dress up and try to avoid an army of undead to win a special prize.'
    },
  ]
</script>

<template>
  <section id="category" class="flex flex-col items-center py-32">
    <h2 class="my-10 text-5xl md:text-6xl font-bold text-white">Category</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 place-items-center">
      <div v-for="category of categories" :key="category.title" class="text-white grid place-items-center gap-5 text-center">
        <div class="p-10">
          <img :src="category.image" class="w-full" alt="category1">
        </div>
        <h3 class="text-3xl font-bold">{{ category.title }}</h3>
        <p class="w-3/4">{{ category.desc}}</p>
      </div>
    </div>
  </section>
  <section class="grid grid-flow-col grid-cols-1 md:grid-cols-2 md:gap-10 items-center">
    <div class="md:p-10">
      <img src="../assets/images/category2-img.webp" alt="category2-img">
    </div>
    <div id="about" class="text-center flex flex-col items-center">
      <h2 class="text-5xl md:text-6xl font-bold text-white">What's that</h2>
      <div class="flex items-center gap-5">
        <h2 class="text-5xl md:text-6xl font-bold text-white">Halloween</h2>
        <img src="../assets/images/head2-img.png" class="w-9 md:w-12" alt="head2">
      </div>
      <p class="mt-8 md:mt-12 text-white text-lg md:text-xl w-full md:w-[80%]">Our storytellers will guide you through the darkness and take you on a bone-chilling journey through the past. With tales of ghosts, supernatural sightings and horrors from history, these events are not for the faint-hearted.</p>
      <p class="mt-1 md:mt-6 text-white text-lg md:text-xl w-full md:w-[80%]"> 
         <span class="text-secondary font-medium">Where:</span>
         <span class="font-medium"> 178 West 27th Street, Suite 527, New York NY 10012, Oct 31. 9:00 am - 11:00 pm.</span>
      </p>
     
    </div>
  </section>
</template>