let on = true
let i = 0
class Machine {
    constructor() {
        this.callbacks = []
        this.delta = 0.01
    }
    addCallback(callback) {
        if (typeof callback === 'function') {
            this.callbacks.push(callback)
        }
    }
    run() {
        machine.callbacks.forEach(func => func())
        if(on){
            requestAnimationFrame(machine.run)
        }
    }
}

const machine = new Machine()
export default machine