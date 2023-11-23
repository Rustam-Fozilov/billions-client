export const useScreenSize = async () => {
    return useState('screenSize', () => {
        if (process.client) {
            return window.screen.width <= 1280
        }
    })
}