import Banner from "./Banner";
import FeaturesJobs from "./FeaturesJobs";
import JobCategory from "./JobCategory";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturesJobs></FeaturesJobs>
        </div>
    );
};

export default Home;