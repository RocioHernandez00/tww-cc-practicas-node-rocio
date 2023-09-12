const { handleHttpError } = require("../utils/handleError")
/**
 * array con los roles permitidos 
 * @param {*} rol 
 * @returns 
 */
    const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        console.log({ user })
        const rolesByUser = user.role; //TODO USER
        //TODO ["admin"]
        const checkVauleRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle)) //TODO true, false

        if (!checkVauleRol) {
            handleHttpError(res, "USER_NOT_PREMISSIION", 403)
            return
        }
        next();
    } catch (e) {
        handleHttpError(res, "ERROR_PERMISSIONS", 403)
    }
};

module.exports = checkRol