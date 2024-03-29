import ActionsController from "../management/actionsController.js";
import GroupClassesController from "../management/groupClassesController.js";
import RolesController from "../management/rolesController.js";
import SubjectsController from "../management/subjectsController.js";
import ClassRegistrationsController from "../management/classRegistrationsController.js";
import UsersController from "../management/usersController.js";

class AdminController {

    // Actions
    static actionsController = ActionsController

    // Roles
    static rolesController = RolesController

    // Classes
    static groupClassesController = GroupClassesController

    // Subjects
    static subjectsController = SubjectsController

    // Class Registrations
    static classRegistrationsController = ClassRegistrationsController

    // Users
    static usersController = UsersController

}

export default AdminController