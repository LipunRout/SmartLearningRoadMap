import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        
        {/* TEXT */}
        <div className="col-md-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Confused where to start your <span className="accent">career</span>?
          </motion.h1>

          <p className="text-secondary mt-3">
            SmartLearningRoadMap gives you clear, beginner-friendly guidance.
          </p>

          <button className="btn btn-outline-light mt-3">
            Start Your Journey
          </button>
        </div>

        {/* IMAGE */}
        <div className="col-md-6 text-center">
          <motion.img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="learning"
            className="img-fluid rounded"
            whileHover={{ scale: 1.05 }}
          />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
