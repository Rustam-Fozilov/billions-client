import axios from "axios";

export function fetchUrl() {
    const data = ref([]);

    async function load(url, params = null, method = 'GET') {
        switch (method) {
            case "GET":
                await axios
                    .get(url, params)
                    .then((response) => {
                        data.value = response.data;
                        // console.log(data.value);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                break;

            case "POST":
                break;
            case "PUT":
                await put(url, params);
                break;
            case "DELETE":
                await del(url, params);
                break;
        }

    }

    return { data, load };
}