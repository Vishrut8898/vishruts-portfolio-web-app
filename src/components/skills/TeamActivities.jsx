import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

const TeamActivities = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="skills__content"
    >
      <h3 className="skills__title">Team Activities</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Agile SDLC</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Sprint Planning</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">R&D</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Requirement Gathering</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamActivities;
