import axios from 'axios'

export const useBooksInCart = async () => {
    return useState('booksInCart', () => {
        const config = useRuntimeConfig()

        if (process.client) {
            const user = JSON.parse(localStorage.getItem('user'))
            const authToken = localStorage.getItem('token')

            if (user && authToken) {
                axios
                    .get(`${config.public.apiUrl}/cart`, {
                        headers: {
                            Authorization: `Bearer ${authToken}`
                        }
                    })
                    .then(res => {
                        let books = res.data.data.map((item) => {
                            return {
                                id: item.id,
                                book: {
                                    ...item.book,
                                    'prices': item.book.prices.map((price) => {
                                        return {
                                            ...price,
                                            'price': price.price * item.quantity
                                        }
                                    })
                                },
                                quantity: item.quantity,
                                originalPrice: item.book.prices[1].price
                            }
                        })

                        localStorage.setItem('booksInCart', JSON.stringify(books))
                    })
            }

            return JSON.parse(localStorage.getItem('booksInCart')) ?? []
        }
    })
}

export const useTotalAmountOfCart = async () => {
    return useState('totalAmountOfCart', () => {
        if (process.client) {
            return localStorage.getItem('totalAmountOfCart') ?? 0
        }
    })
}
