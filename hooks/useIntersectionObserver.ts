import { useEffect, useState } from 'react';

export function useIntersectionObserver(reference: any) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleIntersect(entries: any, observer: any) {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entries[0].target);
                observer.disconnect();
            }
        }

        const observer = new IntersectionObserver(handleIntersect);

        if (reference) observer.observe(reference.current);

        // If unmounting, then disconnect
        return () => observer.disconnect();
    }, [reference]);

    return isVisible;
}
