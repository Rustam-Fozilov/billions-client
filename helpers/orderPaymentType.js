export function changePaymentType(type) {
    if (type === 'online') {
        document.getElementById('order-payment-cash').classList.remove('border-bronze')
        document.getElementById('order-payment-cash').classList.remove('border-opacity-100')
        document.getElementById('order-payment-cash').classList.add('border-black')
        document.getElementById('order-payment-cash').classList.add('border-opacity-20')


        document.getElementById('order-payment-cash-radio').classList.remove('border-bronze')
        document.getElementById('order-payment-cash-radio').classList.remove('border-4')
        document.getElementById('order-payment-cash-radio').classList.remove('border-opacity-100')
        document.getElementById('order-payment-cash-radio').classList.add('border-opacity-20')


        document.getElementById('order-payment-online').classList.add('border-bronze')
        document.getElementById('order-payment-online').classList.remove('border-opacity-20')
        document.getElementById('order-payment-online').classList.add('border-opacity-100')
        

        document.getElementById('order-payment-online-radio').classList.remove('border-opacity-20')
        document.getElementById('order-payment-online-radio').classList.add('border-bronze')
        document.getElementById('order-payment-online-radio').classList.add('border-4')
        document.getElementById('order-payment-online-radio').classList.add('border-opacity-100')

    } else if (type === 'cash') {
        document.getElementById('order-payment-online').classList.remove('border-bronze')
        document.getElementById('order-payment-online').classList.remove('border-opacity-100')
        document.getElementById('order-payment-online').classList.add('border-black')
        document.getElementById('order-payment-online').classList.add('border-opacity-20')


        document.getElementById('order-payment-online-radio').classList.remove('border-bronze')
        document.getElementById('order-payment-online-radio').classList.remove('border-4')
        document.getElementById('order-payment-online-radio').classList.remove('border-opacity-100')


        document.getElementById('order-payment-online-radio').classList.add('border-black')
        document.getElementById('order-payment-online-radio').classList.add('border-2')
        document.getElementById('order-payment-online-radio').classList.add('border-opacity-20')


        document.getElementById('order-payment-cash').classList.add('border-bronze')
        document.getElementById('order-payment-cash').classList.remove('border-opacity-20')
        document.getElementById('order-payment-cash').classList.add('border-opacity-100')


        document.getElementById('order-payment-cash-radio').classList.remove('border-opacity-20')
        document.getElementById('order-payment-cash-radio').classList.add('border-bronze')
        document.getElementById('order-payment-cash-radio').classList.add('border-4')
        document.getElementById('order-payment-cash-radio').classList.add('border-opacity-100')

    }
}