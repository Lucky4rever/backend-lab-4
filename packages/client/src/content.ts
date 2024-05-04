import { getRoute, type Routes } from "./routes";

const renderContent = (route: keyof Routes) => app.innerHTML = getRoute(route).content;

const navigate = (e: any) => {
    const route = e.target.pathname;
    // this is responsible for adding the new path name to the history stack
    history.pushState({}, "", route);
    renderContent(route);
};