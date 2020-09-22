mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		trim: true
	},
	lastName: {
		type: String,
		trim: true
	},
	mail: {
		type: String,
		required: true,
        trim: true,
        unique: true
    },
	pass: {
		type: String,
		required: true
	},
	wishlist: {
		type: Array,
		default: []
	},
	shippingAddress: {
		type: Object,
		required: true
	},
	billingAddress: {
		type: Object,
		required: true
	},
	phone: {
		type: String,
		required: true
	}
})

const User = mongoose.model('user', userSchema);
userSchema.plugin(uniqueValidator,{ message: '{PATH} alredy used'});
module.exports = User;
