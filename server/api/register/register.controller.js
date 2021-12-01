import { StringUtil } from "../../utilities/string-util";
import User from "../../model/user-model";

export function index(req, res) {
    const validation = validateIndex(req.body);

    if (!validation.isValid) {
        return res.status(400).json({ message: validation.message });
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        first: req.body.first,
        last: req.body.last,
    });

    user.save((error) => {
        if (error) {
            // Mongoose Error Code 11000 means that the username is taken (validation error)
            if (error.code === 11000) {
                return res.status(403).json({ message: "Username is already taken" });
            }
            return res.status(500).json();
        }
        return res.status(201).json();
    });
}