import { Children, cloneElement, useState } from "react";
import PropTypes from "prop-types";

const AccordionGroup = ({ children }) => {
  const [index, setIndex] = useState(-1);

  return Children.map(children, (child, childIndex) => {
    return cloneElement(child, {
      open: childIndex === index,
      onChange: () => {
        if (childIndex === index) {
          setIndex(-1);
        } else {
          setIndex(childIndex);
        }
      },
    });
  });
};

AccordionGroup.defaultProps = {
  children: undefined,
};

AccordionGroup.propTypes = {
  children: PropTypes.node,
};

export default AccordionGroup;
