import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ApiService from "./Axios";

const getHomeData = async (setData: Dispatch<SetStateAction<string[]>>) => {
    console.log("fetch");
    await ApiService.get("/").then( (res: string[]) => {
        setData(res);
    });
}

const Home = () => {
    const [data, setData] =  useState<string[]>([]);
    useEffect(() => {
        getHomeData(setData);
    },[])
   
    return <> {data} </>;
}

export default Home;