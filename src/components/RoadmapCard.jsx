import { motion } from "framer-motion";

function RoadmapCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-md-4 mb-4"
    >
      <div className="card card-dark p-4 h-100">
        <h4>{title}</h4>
        <p className="text-secondary">{desc}</p>
      </div>
    </motion.div>
  );
}

export default RoadmapCard;
