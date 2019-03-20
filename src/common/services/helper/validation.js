export class ValidationHelper {
    static isValidEmail(email = '') {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return reg.test(email)
    }
    
    static isEmptyString(string = '') {
        return string && string.trim().length > 0 ? false : true
    }
}