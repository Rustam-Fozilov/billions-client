export const useScreenSize = async () => {
    return useState('screenSize', () => {
        if (process.client) {
            return true
        }
    })
}