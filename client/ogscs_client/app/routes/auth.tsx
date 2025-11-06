import Account from "~/auth/layout";
import type { Route } from "../+types/root";


export function Meta({}: Route.MetaArgs){
    return[
        {title: "OGSCS Auth"},
        {name: "Authentication", content: "Welcome to OGSCS authentication pag"}
    ]
}
export function Auth(){
    return <Account />
}