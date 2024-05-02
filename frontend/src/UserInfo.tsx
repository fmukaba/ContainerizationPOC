import { useParams } from "react-router-dom";
import ApiService from "./Axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const getUserData = async (id: number, setUserData: Dispatch<SetStateAction<string[]>>) => {
    ApiService.post(`/user/${id}`).then((res: string[]) => {
        setUserData(res);
    });
}

const UserInfo = () => {
const {id} = useParams();
const [userData, setUserData] = useState<string[]>([]);
console.log("why");
useEffect(() => {
    if(id) {
        getUserData(parseInt(id), setUserData);
    }
},[id])

return <> {userData} </>;
}

export default UserInfo;