export const useIsAuthModalOpen = () => {
    return useState('isAuthModalOpen', () => false)
}

export const useIsSMSCodeSended = () => {
    return useState('isSMSSended', () => false)
}

export const useAuthUser = () => {
    return useState('authUser', () => null)
}
