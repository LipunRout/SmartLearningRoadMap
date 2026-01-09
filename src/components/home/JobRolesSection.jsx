import { motion } from "framer-motion";

function JobRolesSection() {
  const roles = [
    {
      title: "Frontend Developer",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Backend Developer",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      title: "MERN Stack Developer",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    },
    {
      title: "Data Analyst",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="mb-4">Career Opportunities</h2>

      <div className="row d-none d-md-flex g-3">
        {/* Desktop / Tablet Grid */}
        {roles.map((role, i) => (
          <div className="col-md-3" key={i}>
            <div className="card card-dark h-100">
              <img src={role.img} className="card-img-top" />
              <div className="card-body text-center">
                <h6>{role.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="mobile-slider d-flex d-md-none">
        {roles.map((role, i) => (
          <motion.div
            key={i}
            whileTap={{ scale: 0.95 }}
            className="mobile-slide-card"
          >
            <div className="card card-dark h-100">
              <img src={role.img} className="card-img-top" />
              <div className="card-body text-center">
                <h6>{role.title}</h6>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default JobRolesSection;
