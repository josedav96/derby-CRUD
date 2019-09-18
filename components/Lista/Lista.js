
const _ = require('lodash')
// Components can be defined as simple Classes. We'll cover methods later on.
// Right now, we're just going to keep it empty.
class Lista {

    init() {
        this.$root = this.model.root;
        this.$usersList = this.model.at('usersList');

        //React to changes in a definen model
        this.model.start('createdUsers', this.$usersList, (usersList) => {
            const result = _.mapValues(usersList, (user) => {
                return _.sortBy(user, 'name')
            })
            return result.users;
        })
    }

    create() {

        this.model.query('users', {}).subscribe((err) => {
            if (err) return alert(err)
            this.$usersList.ref('users', this.$root.at('users'))
        })
        
    }

    del(id) {
        this.$root.del(`users.${id}`);
    }

}

// `name` helps us reference the component in our template. With this name, we
// can do in our HTML:
//
// <view is="hello-world"/>
//
// And this component will show up!
Lista.prototype.name = 'lista'

// `view` tells Derby where the template for this component lives
Lista.prototype.view = __dirname

module.exports = Lista

// That ends `Hello World`! You are now ready for the next section of the
// tutorial.

// Next part: https://github.com/lever/derby-tutorial#racer-basics
