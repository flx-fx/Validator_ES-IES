import './root.css';
import {Tab, Tabs, TabsList} from "@mui/base";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Root() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('elastischer-stoss');
    }, [navigate]);

    return (
        <>
            <Tabs defaultValue={0}>
                <TabsList className='TabsList'>
                    <Tab className="Tab first" to="elastischer-stoss" slots={{root: Link}}>Elastischer Stoß</Tab>
                    <Tab className="Tab last" to="inelastischer-stoss" slots={{root: Link}}>Inelastischer Stoß</Tab>
                </TabsList>
                <Outlet/>
            </Tabs>
        </>
    );
}
