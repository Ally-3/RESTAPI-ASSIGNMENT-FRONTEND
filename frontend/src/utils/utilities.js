export function writeCookie(key, value, days) {
//value is where we store the token
    let expiryDate = new Date();

    days = days || 7; //if user does not put in expiry, key will expire in 7 days

    expiryDate.setDate(expiryDate.getDate() + days);

    let displayCookie = document.cookie = key + "=" + value + ";" + "expires=" + expiryDate.toGMTString() + ";" + "path=/";
    console.log(displayCookie);
};

export function readCookie(key) {
    const re = new RegExp(`(?<=${key}=)[^;]*`) //key e.g. jwt token
    try {
        let cookie = document.cookie.match(re)[0];
        console.log(cookie);
        return cookie;
    } catch (error){
        return false;
    }
};

export function deleteCookie(key) {
    try {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        console.log(`${key} cookie deleted`);
    } catch (error) {
        console.log(`error deleting ${key} cookie`, error);
    }
};
