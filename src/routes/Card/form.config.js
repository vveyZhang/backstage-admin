
const validatorNumer = (number, name) => (rule, value, callback) => {
    if (value === "") return callback(`请填写${name}`)
    if (value <= number) return callback(`${name}的值不能小于0`)
    callback()
}

const config = {
    name: {
        rules: [{ required: true, message: '请填写优惠券名称' }],
    },
    rangeTime: {
        rules: [{ required: true, message: '请选择有效时间！' }],
    },
    time_slot: {
        rules: [{
            required: true, message: '请选择有效时间段'
        }]
    },
    coupon: {
        rules: [{
            validator: validatorNumer(0, "优惠")
        }]
    },
    recevie_number: {
        rules: [{
            validator: validatorNumer(0, "限领次数")
        }]
    }
}




export default config