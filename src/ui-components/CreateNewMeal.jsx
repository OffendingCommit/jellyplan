/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from 'react';
import {
  getOverrideProps,
  useDataStoreCreateAction,
} from '@aws-amplify/ui-react/internal';
import { Meal } from '../models';
import { schema } from '../models/schema';
import {
  Button,
  CheckboxField,
  Divider,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from '@aws-amplify/ui-react';
export default function CreateNewMeal(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useDataStoreCreateAction({
    fields: {},
    model: Meal,
    schema: schema,
  });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="420px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, 'CreateNewMeal')}
    >
      <Flex
        gap="10px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, 'Content')}
      >
        <Flex
          gap="16px"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, 'Edit Profile')}
        >
          <View
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, 'Icon')}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: 'M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z',
                  fill: 'rgba(13,26,38,1)',
                  fillRule: 'nonzero',
                },
              ]}
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, 'Vector')}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="New Meal"
            {...getOverrideProps(overrides, 'New Meal')}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, 'Divider34782792')}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, 'Forms')}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Title"
            placeholder="An Awesome Dish"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, 'Title')}
          ></TextField>
          <CheckboxField
            display="flex"
            gap="12px"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="New"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, 'NewCheckbox')}
          ></CheckboxField>
          <CheckboxField
            display="flex"
            gap="12px"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Makes Leftovers"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, 'HasLeftoversCheckbox')}
          ></CheckboxField>
          <CheckboxField
            display="flex"
            gap="12px"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Dining Out"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, 'DiningOutCheckbox')}
          ></CheckboxField>
          <CheckboxField
            display="flex"
            gap="12px"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Open / Freeform"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, 'IsOpenFreeformCheckbox')}
          ></CheckboxField>
          <CheckboxField
            display="flex"
            gap="12px"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Special Occasion / Holiday Meal"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, 'IsSpecialOccasionCheckbox')}
          ></CheckboxField>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, 'Divider34782801')}
        ></Divider>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, 'Button')}
        ></Button>
      </Flex>
    </Flex>
  );
}
