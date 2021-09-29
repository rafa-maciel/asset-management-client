import { deleteUser } from "../../../../adapters/user"

function useUserFormDeleteConfirmation() {
    const userDelete = (userId, callback) => {
        deleteUser(userId)
            .then(confirm => { callback(confirm) })
    }

    return [ userDelete ]
}

export { useUserFormDeleteConfirmation }