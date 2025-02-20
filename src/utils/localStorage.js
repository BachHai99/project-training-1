

export const addUserToLocalStorage = (user) => {
    // const encryptedUser = { ...user }
    localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem("user");
    if (result) {
        const user = JSON.parse(result)
        return { ...user }
    }
    return null
    // const user = result ? JSON.parse(result) : null;
    // return user;
};
export const newUser = (newUser) => {
    localStorage.setItem("newUser", JSON.stringify(newUser));
}
export const getNewUser = () => {
    const newUser = localStorage.getItem("newUser");
    return JSON.parse(newUser)
}