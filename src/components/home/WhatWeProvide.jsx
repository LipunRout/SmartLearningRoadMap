function WhatWeProvide() {
  return (
    <section className="container py-5">
      <h2 className="text-white">What We Provide</h2>

      <div className="row mt-4">
        {[
          "Structured Roadmaps",
          "Beginner Friendly Steps",
          "Free Learning Resources",
          "Career-Oriented Guidance",
        ].map((item, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card card-dark p-3 text-center text-white">
              <p className="mb-0">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatWeProvide;
