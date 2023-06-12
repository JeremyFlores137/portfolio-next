import { motion } from 'framer-motion';

interface Props {
  name: string;
  x: string;
  y: string;
  className: string;
}

export const SkillAnimation: React.FC<Props> = ({ name, x, y, className }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
    >
      {name}
    </motion.div>
  );
};
