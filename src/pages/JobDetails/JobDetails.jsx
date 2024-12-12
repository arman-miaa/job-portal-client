import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData();
    const {_id,title,company } = job;
    // console.log(job);
    return (
      <div>
        job details...
            <h3>{title}</h3>
            <p>company: { company}</p>
        <Link to={`/jobApply/${_id}`}>
          <button className="btn btn-primary">Apply Now</button>
        </Link>
      </div>
    );
};

export default JobDetails;