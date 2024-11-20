import FindUs from "../FindUs";
import Sampleimg from "../Sampleimg";
import SocialLogin from "../SocialLogin";


const RightNavbar = () => {
    return (
        <div className="space-y-5">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Sampleimg></Sampleimg>
        </div>
    );
};

export default RightNavbar;