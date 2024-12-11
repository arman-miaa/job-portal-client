import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData();
    const {title, } = job;
    console.log(job);
    return (
        <div>
            job details...
            <h3>{title}</h3>
            <button className="btn btn-primary">Apply Now</button>
        </div>
    );
};

export default JobDetails;