import './root.css';
import {Tab, Tabs, TabsList} from "@mui/base";
import {Link, Outlet, useLocation} from "react-router-dom";

export default function Root() {
    const { pathname } = useLocation();

    return (
        <>
            <Tabs value={pathname}>
                <TabsList className='TabsList'>
                    <Tab value="/elastischer-stoss" className="Tab first" to="elastischer-stoss" slots={{root: Link}}>Elastischer Stoß</Tab>
                    <Tab value="/inelastischer-stoss" className="Tab last" to="inelastischer-stoss" slots={{root: Link}}>Inelastischer Stoß</Tab>
                </TabsList>
                <Outlet/>
            </Tabs>
        </>
    );
}
