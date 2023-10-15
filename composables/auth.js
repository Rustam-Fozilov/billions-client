export const useIsAuthModalOpen = () => {
    return useState('isAuthModalOpen', () => false)
}

export const useIsSMSCodeSent = () => {
    return useState('isSMSSent', () => false)
}

export const useAuthUser = async () => {
    return useState('authUser', () => {
        if (process.client) {
            return JSON.parse(localStorage.getItem('user'))
        }
    })
}

export const useAuthToken = async () => {
    return useState('authToken', () => {
        if (process.client) {
            return localStorage.getItem('token')
        }
    });
}

export const useSMSCode = () => {
    return useState('smsCode', () => {
        return {
            id: null,
            code: null,
        }
    })
}