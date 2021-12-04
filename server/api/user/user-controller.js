import User from "../../model/user-model";
import { requireLogin } from "../../services/auth-service";
import * as controller from "./user-controller";

export function index(req, res) {
    User.find({}, (error, users) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ users: users });
    }).populate("user");
}