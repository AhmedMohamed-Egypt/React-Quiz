import { createContext } from "react";

const AppContext = createContext({
    myNames :[],
    handleNames:()=>{}
})

export default AppContext;