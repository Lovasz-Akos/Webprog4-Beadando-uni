import { StringUtil } from "../../utilities/string-util";
import User from "../../model/user-model";

export function index(req, res) {
    const validation = validateIndex(req.body);

    if (!validation.isValid) {
        return res.status(400).json({ message: validation.message });
    }
}