
export const persistStorage = (name, object) => {
    return localStorage.setItem(name, JSON.stringify(object));
}

export const getStorage = (name) => {
    return JSON.parse(localStorage.getItem(name));
}

export const deleteStorage = (name) => {
    return localStorage.removeItem(name);
}