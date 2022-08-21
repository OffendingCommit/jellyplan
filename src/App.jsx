import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { Box, Grommet, PageHeader, Calendar, Grid, Heading } from 'grommet';
import { motion, AnimatePresence, animate } from 'framer-motion';

const theme = {
  global: {
    colors: {
      brand: '#228Be6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

function App() {
  const [selectedDate, setSelectedDate] = useState(
    DateTime.now().startOf('day')
  );

  const [previousDate, setPreviousDate] = useState(
    DateTime.now().startOf('day')
  );

  const [direction, setDirection] = useState(1);

  const [headerDate, setHeaderDate] = useState(null);

  useEffect(() => {
    if (previousDate < selectedDate) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    if (previousDate !== selectedDate) {
      animate(previousDate.toMillis(), selectedDate.toMillis(), {
        onUpdate: (latest) => {
          setHeaderDate(
            DateTime.fromMillis(latest)
              .startOf('day')
              .toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
          );
        },
      });
    }
  }, [previousDate, selectedDate]);

  return (
    <Grommet theme={theme}>
      <Grid
        rows={['xxsmall', 'medium', 'xsmall']}
        columns={['2/3', '1/3']}
        areas={[
          ['main', 'sidebar'],
          ['footer', 'footer'],
        ]}
        gap="medium"
      >
        <Box pad="large" gridArea="sidebar">
          <Calendar
            size="medium"
            date={selectedDate?.toISODate()}
            onSelect={(d) => {
              setPreviousDate(selectedDate);
              setSelectedDate(DateTime.fromISO(d));
            }}
          />
        </Box>

        <Box pad="large" gridArea="main">
          <PageHeader title="MealCal" subtitle="A Meal Calendar Generator" />
          <AnimatePresence>
            {headerDate ? (
              <Heading margin="none">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 30 * direction, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30 * direction, opacity: 0 }}
                  transition={{ type: 'spring' }}
                  key={headerDate}
                >
                  {headerDate}
                </motion.div>
              </Heading>
            ) : null}
          </AnimatePresence>
        </Box>
      </Grid>
    </Grommet>
  );
}

export default App;
