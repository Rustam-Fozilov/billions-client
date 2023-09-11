export const useIsAuthModalOpen = () => {
    return useState('isAuthModalOpen', () => false)
}

export const useIsSMSCodeSended = () => {
    return useState('isSMSSended', () => false)
}