/* eslint-disable no-param-reassign */
import React, { useContext, useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import {
  Box,
  Button,
  Calendar,
  Grid,
  Grommet,
  PageHeader,
  ResponsiveContext,
  Text,
} from 'grommet';
import { animate } from 'framer-motion';
import { FormSchedule } from 'grommet-icons';
import { DataStore } from 'aws-amplify';

import { Date } from './models';
import MealDate from './MealDate/MealDate';

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
    breakpoints: {
      small: {
        value: 768,
        borderSize: {
          xsmall: '1px',
          small: '2px',
          medium: '4px',
          large: '6px',
          xlarge: '12px',
        },
        edgeSize: {
          none: '0px',
          hair: '1px',
          xxsmall: '2px',
          xsmall: '3px',
          small: '6px',
          medium: '12px',
          large: '24px',
          xlarge: '48px',
        },
        size: {
          xxsmall: '24px',
          xsmall: '48px',
          small: '96px',
          medium: '192px',
          large: '384px',
          xlarge: '768px',
          full: '100%',
        },
      },
      medium: { value: 1536 },
      large: {},
    },
  },
};

async function updateMeals({ id, breakfast, lunch, dinner }) {
  const original = await DataStore.query(Date, id);
  await DataStore.save(
    Date.copyOf(original, (updated) => {
      updated.breakfast = breakfast;
      updated.lunch = lunch;
      updated.dinner = dinner;
    })
  );
}

function App() {
  const size = React.useContext(ResponsiveContext);

  const [selectedDate, setSelectedDate] = useState(
    DateTime.now().startOf('day')
  );
  const [previousDate, setPreviousDate] = useState(
    DateTime.now().startOf('day')
  );
  const [direction, setDirection] = useState(1);
  const [headerDate, setHeaderDate] = useState(null);
  const [meal, setMeal] = useState({});

  const handleSelect = (date) => {
    setPreviousDate(selectedDate);
    setSelectedDate(DateTime.fromISO(date));
  };

  useEffect(() => {
    async function getDate(date) {
      let id = '';
      let breakfast = '';
      let lunch = '';
      let dinner = '';
      return DataStore.query(Date, (d) => d.date('eq', date.toISODate()))
        .then((response) => {
          if (response.length === 1) {
            id = response[0].id;
            breakfast = response[0].breakfast;
            lunch = response[0].lunch;
            dinner = response[0].dinner;
            console.debug('Meal Data Response', {
              response: response[0],
              id,
              breakfast,
              lunch,
              dinner,
            });
          } else {
            DataStore.save(
              new Date({
                date: date.toISODate(),
              })
            );
          }
        })
        .catch(console.error)
        .finally(() => {
          setMeal({ id, breakfast, lunch, dinner });
          console.debug({ breakfast, lunch, dinner });
        });
    }
    getDate(selectedDate, setMeal);
  }, [selectedDate, setMeal]);

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
    if (previousDate !== selectedDate)
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
          direction="row-responsive"
          align="center"
          justify="between"
          pad={{ horizontal: 'large', vertical: 'small' }}
        >
          <PageHeader title="MealCal" subtitle="A Meal Calendar Generator" />
        </Box>

        <Box
          gridArea="main"
          direction="row-responsive"
          align="center"
          justify="between"
          pad={{ horizontal: 'large', vertical: 'small' }}
          wrap
        >
          <ResponsiveContext.Consumer>
            {(s) => (
              <Box direction="column">
                <Calendar
                  pad="medium"
                  size={s === 'small' ? 'medium' : 'medium'}
                  date={selectedDate?.toISODate()}
                  onSelect={handleSelect}
                  daysOfWeek
                  bounds={[
                    DateTime.now().startOf('month').toISODate(),
                    DateTime.now().endOf('year').toISODate(),
                  ]}
                />
                <Box direction="row" gap="small" margin="small">
                  <Button
                    label={<Text color="neutral-3">-1</Text>}
                    icon={<FormSchedule color="neutral-3" />}
                    color="neutral-3"
                    onClick={() =>
                      setSelectedDate(
                        selectedDate.minus({ day: 1 }).startOf('day')
                      )
                    }
                  />
                  <Button
                    label={<Text color="neutral-3">Today</Text>}
                    icon={<FormSchedule color="neutral-3" />}
                    color="neutral-3"
                    onClick={() =>
                      setSelectedDate(DateTime.now().startOf('day'))
                    }
                    disabled={selectedDate.equals(
                      DateTime.now().startOf('day')
                    )}
                  />
                  <Button
                    label={<Text color="neutral-3">+1</Text>}
                    icon={<FormSchedule color="neutral-3" />}
                    color="neutral-3"
                    onClick={() =>
                      setSelectedDate(
                        selectedDate.plus({ day: 1 }).startOf('day')
                      )
                    }
                  />
                </Box>
              </Box>
            )}
          </ResponsiveContext.Consumer>
          {headerDate && (
            <MealDate
              id={meal?.id}
              date={headerDate}
              direction={direction}
              breakfast={meal?.breakfast}
              lunch={meal?.lunch}
              dinner={meal?.dinner}
              handleSave={updateMeals}
            />
          )}
        </Box>
      </Grid>
    </Grommet>
  );
}

export default App;
