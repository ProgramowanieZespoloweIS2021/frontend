import { useEffect } from 'react';

type HandledEvents = ['mousedown', 'touchstart'];
type HandledEventsType = HandledEvents[number];
type PossibleEvent = {
    [Type in HandledEventsType]: HTMLElementEventMap[Type];
}[HandledEventsType];
type Handler = (event: PossibleEvent) => void;

export default (ref: React.RefObject<HTMLElement>, handler: Handler) => {
    useEffect(() => {
        const listener = (event: PossibleEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }

            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
};
