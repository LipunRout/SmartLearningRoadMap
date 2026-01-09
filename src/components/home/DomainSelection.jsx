import { useNavigate } from "react-router-dom";

function DomainSelection() {
  const navigate = useNavigate();

  const domains = [
    {
      title: "IT Domain",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      path: "/it-domain",
    },
    {
      title: "Non-IT Domain",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      path: "/non-it-domain",
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="mb-4 text-center">Choose Your Domain</h2>

      {/* Desktop */}
      <div className="row d-none d-md-flex g-3">
        {domains.map((d, i) => (
          <div className="col-md-6" key={i}>
            <div className="card card-dark text-center h-100">
              <img src={d.img} className="card-img-top" />
              <div className="card-body">
                <h5>{d.title}</h5>
                <button
                  className="btn btn-outline-light w-100"
                  onClick={() => navigate(d.path)}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="mobile-slider d-flex d-md-none">
        {domains.map((d, i) => (
          <div className="mobile-slide-card" key={i}>
            <div className="card card-dark text-center h-100">
              <img src={d.img} className="card-img-top" />
              <div className="card-body">
                <h5>{d.title}</h5>
                <button
                  className="btn btn-outline-light w-100"
                  onClick={() => navigate(d.path)}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DomainSelection;
