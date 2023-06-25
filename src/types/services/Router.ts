interface RouteProp {
    path: string,
    exact: boolean,
    component: React.ComponentType<any>,
}

interface RouteHandlerProps {
    routes: RouteProp[],
}

export type {
    RouteProp,
    RouteHandlerProps,
};