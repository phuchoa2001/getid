import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { router } from '../../router';
function Main(props) {
    return (
        <Switch>
            {showRouter(router)}
        </Switch>
    );
    function showRouter(router) {
        var result = null;
        if (router.length > 0) {
            result = router.map((router, index) => {
                return (
                    <Route
                        key={index}
                        path={router.path}
                        exact={router.exact}
                        component={router.mani}
                    />
                )
            })
        }
        return result;
    }
}

export default Main;