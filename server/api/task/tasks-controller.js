import User from "../../model/user-model";
import Task from "../../model/task-model";
import moment from "moment";
import * as auth from "../../services/auth-service";

export function index(req, res) {
    Task.find({}, (error, tasks) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ tasks: tasks });
    }).populate("author", "username", "user");
}