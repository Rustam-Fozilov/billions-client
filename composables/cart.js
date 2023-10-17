export const useBooksInCart = async () => {
    return useState('booksInCart', () => {
        if (process.client) {
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
