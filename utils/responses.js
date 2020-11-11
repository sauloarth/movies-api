exports.sucess = function (res, msg) {
    const payload = {
        status: 1,
        message: msg
    };
    return res.status(200).json(payload);
};

exports.sucessWithData = function (res, msg, data) {
    const payload = {
        status: 1,
        message: msg,
        data: data
    }
    return res.status(200).json(payload)
};

exports.error = function (res, msg) {
    const payload = {
        status: 0,
        message: msg
    }
    return res.status(500).json(payload);
};

exports.notFound = function (res, msg) {
    const payload = {
        status: 0,
        message: msg
    }
    return res.status(404).json(payload);
};

exports.validationError = function (res, msg, data) {
    const payload = {
        status: 0,
        message: msg,
        data: data
    }
    return res.status(400).json(payload)
};

exports.unauthorized = function (res, msg) {
    const payload = {
        status: 0,
        message: msg
    }
    return res.status(401).json(payload);
};