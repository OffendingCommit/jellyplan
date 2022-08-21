import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { Box, Calendar, Grid, Grommet, PageHeader } from 'grommet';
import { animate } from 'framer-motion';
import MealDate from './MealDate';

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

  const handleSelect = (date) => {
    setPreviousDate(selectedDate);
    setSelectedDate(DateTime.fromISO(date));
  };

  useEffect(() => {
    const getTransitionDurationInSeconds = () => {
      const diffMonths = Math.abs(previousDate.diff(selectedDate).as('months'));
      if (diffMonths < 0.5) {
        return diffMonths;
      }
      return 0.5;
    };
    if (previousDate < selectedDate) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    if (previousDate !== selectedDate) {
      animate(previousDate.toMillis(), selectedDate.toMillis(), {
        duration: getTransitionDurationInSeconds(),
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
        fill
        rows={['auto', 'flex', 'auto']}
        columns={['flex', 'auto']}
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'main', start: [0, 1], end: [1, 1] },
          { name: 'sidebar', start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box
          gridArea="header"
          direction="row"
          align="center"
          justify="between"
          pad={{ horizontal: 'medium', vertical: 'small' }}
        >
          <PageHeader title="MealCal" subtitle="A Meal Calendar Generator" />
        </Box>

        <Box
          gridArea="main"
          direction="row"
          align="center"
          justify="between"
          pad={{ horizontal: 'medium', vertical: 'small' }}
        >
          {headerDate && (
            <MealDate
              date={headerDate}
              direction={direction}
              breakfast="Oatmeal"
              lunch="Smoothie/Sandwich"
              dinner="Steak"
            />
          )}
        </Box>
        <Box
          gridArea="sidebar"
          align="center"
          justify="between"
          pad={{ horizontal: 'small', vertical: 'small' }}
        >
          <Calendar
            size="medium"
            date={selectedDate?.toISODate()}
            onSelect={handleSelect}
          />
        </Box>
      </Grid>
    </Grommet>
  );
}

export default App;
