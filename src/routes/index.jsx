import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Index() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/elastischer-stoss');
    }, [navigate]);

    return (
        <>
            <div className="Card">
                <p>Redirecting...</p>
            </div>
        </>
    );
}