import {useEffect} from "react";

export const useLoader = (setter) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            setter(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);
}