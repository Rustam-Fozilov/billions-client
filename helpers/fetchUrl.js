import axios from "axios";

export function fetchUrl() {
    const data = ref(null);

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
                await axios
                    .post(url, params)
                    .then((response) => {
                        data.value = response.data;
                        // console.log('data in fetchUrl.js file: ', data.value);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                break;

            case "PUT":
                await axios
                    .put(url, params)
                    .then((response) => {
                        data.value = response.data;
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                break;
            case "DELETE":
                await del(url, params);
                break;
        }

    }

    return { data, load };
}