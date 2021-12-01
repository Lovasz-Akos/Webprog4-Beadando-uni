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
}