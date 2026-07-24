import "./Testimonials.css";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        name: "Ramesh Kumar",
        location: "Dhanbad",
        review:
            "The doctors and staff were extremely caring. The treatment was excellent and the billing process was completely transparent. Highly recommended.",
    },
    {
        name: "Sunita Devi",
        location: "Jharkhand",
        review:
            "Very clean hospital with affordable treatment. Dr. N. K. Modi patiently explained everything before starting the treatment.",
    },
    {
        name: "Amit Singh",
        location: "Dhanbad",
        review:
            "I appreciate the honest advice and compassionate care. The staff made us feel comfortable throughout our stay.",
    },
];

function Testimonials() {
    return (
        <section className="testimonial-section" id="testimonials">
            <div className="container">

                <motion.div
                    className="testimonial-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-tag">PATIENT TESTIMONIALS</span>

                    <h2>What Our Patients Say</h2>

                    <p>
                        The trust of thousands of families inspires us to continue
                        delivering compassionate, ethical and affordable healthcare.
                    </p>
                </motion.div>

                <div className="testimonial-grid">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .5, delay: index * .15 }}
                            viewport={{ once: true }}
                        >
                            <FaQuoteLeft className="quote" />

                            <p>{item.review}</p>

                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <h4>{item.name}</h4>

                            <span>{item.location}</span>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;