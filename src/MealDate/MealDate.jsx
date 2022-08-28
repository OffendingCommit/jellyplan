import { Box, Heading, Button, Text } from 'grommet';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { Edit, Save, Close } from 'grommet-icons';
import Meal from '../Meal/Meal';

function MealDate({
  date,
  direction,
  id,
  breakfast,
  lunch,
  dinner,
  handleSave,
}) {
  const [editMode, setEditMode] = useState(false);
  const [newBreakfast, setNewBreakfast] = useState(null);
  const [newLunch, setNewLunch] = useState(null);
  const [newDinner, setNewDinner] = useState(null);

  useEffect(() => {
    setNewBreakfast(null);
    setNewLunch(null);
    setNewDinner(null);
  }, [id]);

  const handleBreakfastChange = (value) => {
    setEditMode(true);
    setNewBreakfast(value);
  };
  const handleLunchChange = (value) => {
    setEditMode(true);
    setNewLunch(value);
  };
  const handleDinnerChange = (value) => {
    setEditMode(true);
    setNewDinner(value);
  };
  return (
    <Box direction="column" pad="large">
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
        <Meal
          direction={direction}
          date={date}
          mealType="Breakfast"
          mealDetails={breakfast}
          editMode={editMode}
          handleChange={handleBreakfastChange}
          key={`breakfast-${id}`}
        />
        <Meal
          direction={direction}
          date={date}
          mealType="Lunch"
          mealDetails={lunch}
          editMode={editMode}
          handleChange={handleLunchChange}
          key={`lunch-${id}`}
        />
        <Meal
          direction={direction}
          date={date}
          mealType="Dinner"
          mealDetails={dinner}
          editMode={editMode}
          handleChange={handleDinnerChange}
          key={`dinner-${id}`}
        />
        <Box direction="row" gap={editMode ? 'medium' : 'none'} margin="medium">
          <Button
            fill={!editMode && 'horizontal'}
            focusIndicator={editMode}
            label={
              !editMode ? (
                <Text color="brand">Edit</Text>
              ) : (
                <Text color="neutral-1">Save</Text>
              )
            }
            icon={
              !editMode ? <Edit color="brand" /> : <Save color="neutral-1" />
            }
            color={!editMode ? 'brand' : 'neutral-1'}
            active={editMode}
            onClick={() => {
              setEditMode(!editMode);
              if (editMode) {
                handleSave({
                  id: id,
                  breakfast: newBreakfast || breakfast,
                  lunch: newLunch || lunch,
                  dinner: newDinner || dinner,
                });
              }
            }}
          />
          {editMode ? (
            <Button
              label={<Text color="neutral-4">Cancel</Text>}
              icon={<Close color="neutral-4" />}
              color="neutral-4"
              active={editMode}
              onClick={() => {
                setEditMode(false);
              }}
            />
          ) : null}
        </Box>
      </motion.div>
    </Box>
  );
}

MealDate.defaultProps = {
  id: '',
  breakfast: '',
  lunch: '',
  dinner: '',
};

MealDate.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string.isRequired,
  direction: PropTypes.number.isRequired,
  breakfast: PropTypes.string,
  lunch: PropTypes.string,
  dinner: PropTypes.string,
  handleSave: PropTypes.func.isRequired,
};

export default MealDate;
