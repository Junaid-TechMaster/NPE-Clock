export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export const heading3D = {
  hidden: { opacity: 0, rotateX: 20, y: 20 },
  visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export const card3D = {
  hidden: { opacity: 0, y: 40, rotateX: 16, scale: 0.96 },
  visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const flipInY = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: { opacity: 1, rotateY: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
