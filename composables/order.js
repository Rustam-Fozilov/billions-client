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