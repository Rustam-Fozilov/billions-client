import axios from "axios";

export function fetchUrl() {
    const data = ref([]);

    async function load(url) {
        await axios
            .get(url)
            .then((response) => {
                data.value = response.data;
                // console.log(data.value);
            })
    }

    return { data, load };
}