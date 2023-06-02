<template>
    <div class="container-fluid">

        <section class="row p-3 justify-content-end">
            <button class="col-3 btn btn-warning" data-bs-toggle="modal" data-bs-target="#create-car">Create House
                </button>
        </section>
        <section class="row">
            <div class="col-md-3 my-3" v-for="house in housesInAppState" :key="house.id">
                <CarCard :houseProp="house" />
            </div>
        </section>

    </div>
</template>

<script>
import { onMounted } from "vue"
import Pop from "../utils/Pop.js"
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"

export default {
  components: { HouseCard },
  setup() {
    
    async function getHouses() {
      try {
          logger.log('getting houses')
          await housesService.getHouses()
      } catch (error) {
        console.error(error)
        Pop.error(('[ERROR]'), error.message)
        logger.log(error)
      }
    }
      onMounted(() => {
        getHouses()
      })

    return {
      placeholderImg: 'http://thiscatdoesnotexist.com',
      housesInAppState: computed(() => AppState.houses)
    }
  }
}

</script>