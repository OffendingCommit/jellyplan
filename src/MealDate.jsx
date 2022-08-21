import { Box, Heading, Text } from 'grommet';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { PropTypes, forbidExtraProps } from 'prop-types';

export default function MealDate({
  date,
  direction,
  breakfast,
  lunch,
  dinner,
}) {
  return (
    <Box direction="column" gap="none">
      <Box direction="column" gap="large">
        <AnimatePresence>
          <Box>
            <Heading level={2} margin="none">
              <motion.div
                layout
                initial={{ x: 5 * direction, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -5 * direction, opacity: 0 }}
                key={date}
              >
                {date}
              </motion.div>
            </Heading>
          </Box>
        </AnimatePresence>
        <motion.div key={`meals-${date}`}>
          <Box>
            <motion.div
              layout
              initial={{ x: 5 * direction, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -5 * direction, opacity: 0 }}
              transition={{ type: 'spring', mass: 0.25 }}
              key={`breakfast-${date}`}
            >
              <Heading level={3} margin="small">
                Breakfast
              </Heading>
              <Text margin="medium">{breakfast}</Text>
            </motion.div>
          </Box>
          <Box>
            <motion.div
              layout
              initial={{ x: 5 * direction, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -5 * direction, opacity: 0 }}
              transition={{ type: 'spring', mass: 0.25 }}
              key={`lunch-${date}`}
            >
              <Heading level={3} margin="small">
                Lunch
              </Heading>
              <Text margin="medium">{lunch}</Text>
            </motion.div>
          </Box>
          <Box>
            <motion.div
              layout
              initial={{ x: 5 * direction, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -5 * direction, opacity: 0 }}
              transition={{ type: 'spring', mass: 0.25 }}
              key={`dinner-${date}`}
            >
              <Heading level={3} margin="small">
                Dinner
              </Heading>
              <Text margin="medium">{dinner}</Text>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

MealDate.propTypes = forbidExtraProps({
  date: PropTypes.string.isRequired,
  direction: PropTypes.number.isRequired,
  breakfast: PropTypes.string.isRequired,
  lunch: PropTypes.string.isRequired,
  dinner: PropTypes.string.isRequired,
});
