import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {

    const { id } = useParams();
    const {user } = useAuth();
    // console.log(id,user);
  const submitJobApply = e => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedin, github, resume);
      
    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    }

    fetch("http://localhost:3000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return (
      
        
          <div className="card bg-base-100 w-full  shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Apply Job and Good Luck!</h1>
            <form onSubmit={submitJobApply} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Linedin URL</span>
                </label>
                <input
                  type="url"
                                placeholder="Linkedin URL"
                                name="linkedin"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">GitHub URL</span>
                </label>
                <input
                  type="url"
                                placeholder="GitHub URL"
                                name="github"
                  className="input input-bordered"
                  required
                />
             
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Resume URL</span>
                </label>
                <input
                  type="url"
                                placeholder="Resume URL"
                                name="resume"
                  className="input input-bordered"
                  required
                />
             
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
      
    );
};

export default JobApply;