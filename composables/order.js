export const useReceiverInfo = () => {
    return useState('receiverInfo', () => {
        return {
            name: '',
            surname: '',
            phoneNumber: '',
            textToCourier: ''
        }
    })
}

export const useOrderPaymentType = () => {
    return useState('orderPaymentType', () => 'online')
}

export const useOrderAddressId = () => {
    return useState('orderAddressId', () => null)
}

export const useIsOrderCreated = () => {
    return useState('isOrderCreated', () => false)
}