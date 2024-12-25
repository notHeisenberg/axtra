import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { NavigationMenuContent } from "@/components/ui/navigation-menu";

const MenuItem = ({ title, href }) => {
  return (
    <li>
      <motion.a
        href={href}
        className="block text-xs py-1 px-4 rounded-md text-white dark:text-black"
        whileHover={{
          scale: 1.05,
          x: 10,
          color: 'var(--foreground)',
          transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }
        }}
      >
        {title}
      </motion.a>
    </li>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const MenuGroup = ({ heading, items }) => {
  return (
    <li>
      <div className="menu-heading font-semibold text-sm mb-2 text-white dark:text-black">{heading}</div>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    </li>
  );
};

MenuGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const NavigationContent = ({ groups }) => {
  return (
    <NavigationMenuContent>
      <ul className="mega-menu-2 grid grid-cols-2 gap-6 p-6 w-[600px] bg-black dark:bg-white text-white rounded-none">
        {groups.map((group, index) => (
          <MenuGroup key={index} {...group} />
        ))}
      </ul>
    </NavigationMenuContent>
  );
};

NavigationContent.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
}; 