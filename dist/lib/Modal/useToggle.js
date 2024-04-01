import { useState, useCallback } from 'react';
export var useToggle = function (initialState) {
    if (initialState === void 0) { initialState = false; }
    var _a = useState(initialState), state = _a[0], setState = _a[1];
    var toggle = useCallback(function () {
        setState(function (state) { return !state; });
    }, []);
    return [state, toggle];
};
