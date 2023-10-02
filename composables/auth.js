export const useIsAuthModalOpen = () => {
    return useState('isAuthModalOpen', () => false)
}

export const useIsSMSCodeSent = () => {
    return useState('isSMSSent', () => false)
}

export const useAuthUser = () => {
    return useState('authUser', () => null)
}

export const useAuthToken = () => {
    return useState('authToken', () => null)
}