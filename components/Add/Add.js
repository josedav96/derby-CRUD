const _ = require('lodash')

class Add {

    init() {
        this.$root = this.model.root
    }
    
    create() {
        this.model.set('title', 'Agregar Usuario');
        this.model.set('realTime', false);
        this.$userData = this.model.at('userData');
        this.resetValues()
    }

    createUser(name, age, email, password, check) {

        const docId = this.$root.add('users', {
            name,
            age,
            email,
            password,
            check
        })
        console.log(docId);

        this.resetValues();

    }

    resetValues(){
        this.model.set('user.name', '');
        this.model.set('user.age', 0);
        this.model.set('user.email', '');
        this.model.set('user.password', '');
        this.model.set('user.check', false);
    }
}

Add.prototype.name = 'add'
Add.prototype.view = __dirname

module.exports = Add
