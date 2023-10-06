export const useBooksInCart = () => {
    return useState('booksInCart', () => [])
}

export const useTotalAmountOfCart = () => {
    return useState('totalAmountOfCart', () => 30000)
}
