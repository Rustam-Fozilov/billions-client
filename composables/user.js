export const useUserAddresses = () => {
    return useState('userAddresses', () => [])
}

export const useIsAddUserAddressModalOpen = () => {
    return useState('isAddUserAddressModalOpen', () => false)
}

export const useUserPhoneNumber = () => {
    return useState('userPhoneNumber', () => null)
}