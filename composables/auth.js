export const useIsAuthModalOpen = () => {
    return useState('isAuthModalOpen', () => false)
}

export const useIsSMSCodeSended = () => {
    return useState('isSMSSended', () => false)
}

export const useAuthModalName = () => {
    return useState('authModalName', () => '')
}
