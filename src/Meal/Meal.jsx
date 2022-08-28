import { Box, Heading, Text, TextInput } from 'grommet';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';

function Meal({
  direction,
  date,
  mealType,
  mealDetails,
  editMode,
  handleChange,
}) {
  const [value, setValue] = React.useState(mealDetails);
  useEffect(() => {
    setValue(mealDetails);
  }, [mealDetails]);
  return (
    <motion.div
      layout
      initial={{ x: 5 * direction, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -5 * direction, opacity: 0 }}
      transition={{ type: 'spring', mass: 0.25 }}
      key={`${mealType.toLowerCase()}-${date}`}
    >
      <Heading level={3}>{mealType}</Heading>
      {!editMode && mealDetails ? (
        <Text>{value || mealDetails}</Text>
      ) : (
        <TextInput
          placeholder={`What's for ${mealType}?`}
          value={value}
          onChange={(event) => {
            if (mealDetails !== event.target.value) {
              handleChange(event.target.value);
              setValue(event.target.value);
            }
          }}
        />
      )}
    </motion.div>
  );
}

Meal.defaultProps = {
  editMode: false,
  mealDetails: '',
};

Meal.propTypes = {
  direction: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  mealType: PropTypes.string.isRequired,
  mealDetails: PropTypes.string,
  editMode: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

export default Meal;
