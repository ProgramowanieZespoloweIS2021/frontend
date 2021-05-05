import {useEffect} from "react";
import {useHistory} from "react-router";
import {useSelector} from "react-redux";
import {isAuthorized} from "@state/_redux/user/selectors";
import paths from "@shared/paths";

export const useProtectedRoute = () => {
    const history = useHistory();
    const authorized = useSelector(isAuthorized);
    useEffect(() => {
        if (!authorized) {
            history.push(paths.home);
        }
    }, [authorized]);
};
