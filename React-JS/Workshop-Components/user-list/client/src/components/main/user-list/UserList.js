import { useState, useEffect } from "react";

import * as userService from '../../../services/userService';

import { UserDetails } from "./user-details/userDetails";
import { UserEdit } from "./user-edit/userEdit";
import { UserDelete } from "./user-delete/userDelete";
import { UserItem } from "./user-item/UserItem";

import { UserCreate } from "./user-create/userCreate";

export const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(users => setUsers(users))
    }, [])

    const UserActions = {
        Details: "details",
        Edit: "edit",
        Delete: "delete",
        Create: "create"
    }

    const [userAction, setUserAction] = useState({ user: null, action: null });

    const detailsClickHandler = (userId) => {
        userService.getOne(userId).then(user => {
            setUserAction({
                user,
                action: UserActions.Details
            });
        })
    };

    const deleteClickHandler = (userId) => {
        userService.getOne(userId).then(user => {
            setUserAction({
                user,
                action: UserActions.Delete
            });
        })
    };

    const closeHandler = () => {
        setUserAction({
            user: null,
            action: null
        });
    }

    const actionCreateHandler = () => {
        setUserAction({
            action: UserActions.Create
        })
    }

    const createHandler = (userData) => {
        userService.create(userData).then(user => {
            setUsers(oldUsers => [...oldUsers, user])
        });
        closeHandler();
    };

    const editHandler = (userData, userId) => {
        userService.edit(userData, userId).then(user => {
            setUsers(oldUsers => [...oldUsers, user])
        });
        closeHandler();
    };

    const editClickHandler = (userId) => {
        userService.getOne(userId).then(user => {
            setUserAction({
                user,
                action: UserActions.Edit
            });
        })
    };

    return (
        <>
            < div className="table-wrapper" >
                {userAction.action === UserActions.Details && <UserDetails user={userAction.user} onClose={closeHandler} />}
                {userAction.action === UserActions.Delete && <UserDelete user={userAction.user} onClose={closeHandler} />}
                {userAction.action === UserActions.Create && <UserCreate createHandler={createHandler} onClose={closeHandler} />}
                {userAction.action === UserActions.Edit && <UserEdit editHandler={editHandler} user={userAction.user} onClose={closeHandler} />}


                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                First name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="svg-inline--fa fa-arrow-down Table_icon__+HHgn icon" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => <tr key={user._id}>
                            <UserItem
                                user={user}
                                detailsClickHandler={detailsClickHandler}
                                editClickHandler={editClickHandler}
                                deleteClickHandler={deleteClickHandler}
                            />
                        </tr>)}
                    </tbody>
                </table>
            </div >
            <button className="btn-add btn" onClick={actionCreateHandler}>Add new user</button>
        </>
    )
}