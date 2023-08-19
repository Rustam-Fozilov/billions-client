import axios from "axios"

export default defineEventHandler((event) => {
    const { data } = $fetch('https://api.chucknorris.io/jokes/random')

    return data;
})

