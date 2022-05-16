import { useEffect, useState } from 'react';
import handleViewport, { useInViewport } from 'react-in-viewport';

// import { useSelector } from 'react-redux';

// import { AppState } from '../../data/interfaces/redux/redux.interface';

import style from './FILE.module.scss';

export interface ShowOnViewProps {
    dontRemoveOnLeave: boolean;
}

/**
 * DESCRIPTION
 */
export function ShowOnView<T>(Component: (props: T) => JSX.Element) {
    const ComponentSOV = handleViewport(Component /** options: {}, config: {} **/);

    // const SOMETHING = useSelector((state: AppState) => state.session.SOMETHING);

    // const [STATE, SETSTATE] = useState();

    return ComponentSOV;
}
