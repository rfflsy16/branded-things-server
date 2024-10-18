const handleError = ( err, req, res, next) => {
    console.log(err)
    let status = 500
    let message = 'Internal Server Error'

    if (err.name === 'LoginError') {
        status = 400
        message = 'Unable to login'
    }
    if (err.name == 'SequelizeValidationError') {
        status = 400
        message = err.errors[0].message
}
    if (err.name === 'NotAdmin') {
        status = 403
        message = 'you are not Admin'
    }
    if (err.name === 'ProductNotFound') {
        status = 404
        message = 'Product Not Found'
    }
    if (err.name === 'notAuthor') {
        status = 403
        message = 'You aren`t the author of this Product'
    }
    if (err.name == 'SequelizeUniqueConstraintError') {
        status = 400
        message = err.errors[0].message
    }
    if (err.name == 'SequelizeDatabaseError' || err.name == 'SequelizeForeignKeyConstraintError') {
        status = 400
        message = 'Invalid input'
    }
    if (err.name == 'InvalidLogin') {
        message = 'Please input email or password'
        status = 401
        message = 'Username/Password salah'
    }

    if (err.name == 'Unauthorized') {
    if (err.name == 'LoginError') {
        message = 'Invalid email or password'
        status = 401
        message = "Unauthorized"
    }
}
    if (err.name == 'JsonWebTokenError') {
    if (err.name == 'Unauthorized' || err.name == 'JsonWebTokenError') {
        message = 'Please login first'
        status = 401
        message = 'Unauthorized'
    }
}
    if (err.name == 'Forbidden') {
        message = 'You dont have any access'
        status = 403
        message = 'You have no access'
    }

    if (err.message === 'NotFound') {
        status = 404;
        message = `Data not found`;
    if (err.name == 'NotFound') {
        status = 404
        message = `Data not found`
    }
}
    res.status(status).json({ message })
    res.status(status).json({
        message
    })
    
}

module.exports = handleError