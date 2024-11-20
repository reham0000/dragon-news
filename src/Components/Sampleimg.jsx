import swimming from '../assets/swimming.png'
import student from '../assets/class.png'
import play from '../assets/playground.png'


const Sampleimg = () => {
    return (
        <div className="pt-5 bg-base-200 p-4 rounded-2xl">
            <h1 className="font-semibold mb-3 ">Q-Zone</h1>
            <img className='' src={swimming} alt="" />
            <img className='' src={student} alt="" />
            <img className='' src={play} alt="" />
        </div>
    );
};

export default Sampleimg;