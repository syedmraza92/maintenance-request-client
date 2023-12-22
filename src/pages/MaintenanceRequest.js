import {MaintenanceRequestTable} from "../components/MaintenanceRequestTable";
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";

export const MaintenanceRequest =() => {
    const navigate = useNavigate();

    function addEntry(){
        navigate("/add")
    }
    

    return(
        <>
            <Button variant="outlined" onClick={e => addEntry()}>Add Entry</Button>
            <MaintenanceRequestTable />
        </>
    )
}