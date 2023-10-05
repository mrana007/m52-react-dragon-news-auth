import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-gray-100 mt-7">
            <div className="p-4">
                <button className="btn btn-secondary capitalize w-28">Latest</button>
            </div>
            <div className="my-auto items-center">
                <Marquee pauseOnHover={true} speed={150}>
                <Link className="mr-12" to="/">I can be a React component, multiple React components....</Link>
                <Link className="mr-12" to="/">I can be a React component, multiple React components....</Link>
                <Link className="mr-12" to="/">I can be a React component, multiple React components....</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;