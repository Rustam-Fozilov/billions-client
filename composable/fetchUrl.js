import axios from "axios";

export function fetchUrl() {
    const data = ref([]);

    async function load(url, params = null) {
        await axios
            .get(url, params)
            .then((response) => {
                data.value = response.data;
                // console.log(data.value);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return { data, load };
}