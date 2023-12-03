import axios from "axios";

export function fetchUrl() {
    const data = ref(null);
    const error = ref(false)

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
                        // console.log(error);
                        error.value = true;
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
                        // console.log(error);
                        error.value = true;
                    });

                break;

            case "PUT":
                await axios
                    .put(url, params)
                    .then((response) => {
                        data.value = response.data;
                    })
                    .catch((error) => {
                        // console.log(error);
                        error.value = true;
                    });

                break;
            case "DELETE":
                await axios
                    .delete(url, params)
                    .then((response) => {
                        data.value = response.data;
                        // console.log(data.value);
                    })
                    .catch((error) => {
                        // console.log(error);
                        error.value = true;
                    });
                break;
        }

    }

    return { data, load };
}