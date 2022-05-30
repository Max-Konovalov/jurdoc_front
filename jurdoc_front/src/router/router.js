import Login from "../pages/Login";
import Profile from "../pages/Profile";
import FilesList from "../pages/FilesList";


export const privateRoutes = [
    {path: '/profile', component: <Profile/>, exact: true},
    {path: '/files', component: <FilesList/>, exact: true}
]

export const publicRoutes = [
    {path: '/login', component: <Login/>, exact: true},
    {path: '/profile', component: <Profile/>, exact: true},
    {path: '/files', component: <FilesList/>, exact: true}
]