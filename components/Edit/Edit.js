const _ = require('lodash');
const path = require('path');

class Edit {

    init() {
        this.$root = this.model.root
        this.$userId = this.$root.get('$render.params.id')
        this.$user = this.model.ref('user', this.model.scope(`users.${this.$userId}`))
    }

    create(){
        this.model.set('title', 'Actualizar usuario');
    }

}

Edit.load = (model, params, queries, cb) => {
    $user = model.at(`users.${params.id}`)

    // Fetch the remote note document, and subscribe to any changes
    // - https://derbyjs.com/docs/derby-0.10/models/backends#loading-data-into-a-model
    $user.subscribe((err) => {
        return cb(err)
    })
}

Edit.prototype.name = 'edit'
Edit.prototype.view = path.join(__dirname, '..', 'add');

module.exports = Edit;
