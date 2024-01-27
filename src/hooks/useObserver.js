import {useEffect, useRef} from "react";

export const useObserver = (ref, setIsVisible) => {
    const observer = useRef()

    useEffect(() => {
        const cb = function (entries, observer) {
            if (entries[0].isIntersecting) {
                setIsVisible(true)
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, []);
}