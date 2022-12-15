import { reactive } from "vue";

export const store = reactive({
    characterList: [],
    infoAPI: [],
    apiURL: "https://rickandmortyapi.com/api/character",
    title: "Rick e Morty API",
    valueSelected: ""
})