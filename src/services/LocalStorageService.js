class LocalStorage {
    static getItem = (key) => {
        return localStorage.getItem(key);
    };

    static setItem = (key, value) => {
        return localStorage.setItem(key, value);
    };

    static removeItem = (key, options) => {
        return localStorage.removeItem(key, options);
    };

    static clearItem = () => {
        return localStorage.clear();
    };
}

export default LocalStorage;
