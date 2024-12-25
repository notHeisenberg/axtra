import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letterVariants = {
  hidden: { 
    y: 20,
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  },
  hover: {
    y: [-2, 2, -2],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.3
    }
  }
};

export const TextAnimation = ({ text }) => {
  const letters = Array.from(text);

  return (
    <motion.div
      variants={textContainer}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="flex items-center justify-center"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

TextAnimation.propTypes = {
  text: PropTypes.string.isRequired,
}; 