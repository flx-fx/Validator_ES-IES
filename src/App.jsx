import './App.css';
import {Tab, TabPanel, Tabs, TabsList} from "@mui/base";
import ValidatorES from "./components/ValidatorES.jsx";
import ValidatorIES from "./components/ValidatorIES.jsx";

function App() {
    return (<>
            <Tabs defaultValue={0}>
                <TabsList className='TabsList'>
                    <Tab className='Tab' slotProps={{root: {className: 'first'}}}>Elastischer Stoß</Tab>
                    <Tab className='Tab' slotProps={{root: {className: 'last'}}}>Inelastischer Stoß</Tab>
                </TabsList>
                <TabPanel><ValidatorES/></TabPanel>
                <TabPanel><ValidatorIES/></TabPanel>
            </Tabs>
        </>)
}

export default App
