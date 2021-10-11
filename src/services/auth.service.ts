import { ReducerAction } from "react";
import { state } from "../AppState";

export class AuthService {
    private readonly _dispatch: any;
    private _select: any;

    constructor(dispatch: any, select: any) {
        this._dispatch = dispatch;
        this._select = select;
    }

    getUser(): string {
        return this._select.email ?? null;
    }

    isLoggedIn() : boolean {
        this._dispatch({
          type: 'Is Logged In'
        });

        return this._select.loggedIn ?? false;
    }

    logIn(email: string): void {
        this._dispatch({
            type: "Log In",
            payload: {email}
        });
    }

    logOut(): void {
        this._dispatch({
            type: "Log Out"
        });
    }
}