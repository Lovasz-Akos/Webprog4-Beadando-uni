import jwt from "jsonwebtoken";


export function generateJWT(user) {
    const tokenData = { username: user.username, id: user._id };
    return jwt.sign({ user: tokenData }, process.env.TOKEN_SECRET);
}

export function getUsername(req) {
    const token = decodeToken(req);
    if (!token) {
        return null;
    }
    return token.user.username;
}

export function getUserId(req) {
    const token = decodeToken(req);
    if (!token) {
        return null;
    }
    return token.user.id;
}