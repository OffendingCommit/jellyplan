/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from 'react';
import { getOverrideProps } from '@aws-amplify/ui-react/internal';
import { Flex, Text } from '@aws-amplify/ui-react';
export default function MealCard(props) {
  const { meal, overrides, ...rest } = props;
  return (
    <Flex
      gap="14px"
      direction="column"
      position="relative"
      padding="20px 20px 20px 20px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, 'MealCard')}
    >
      <Flex
        gap="410px"
        direction="column"
        width="621px"
        height="73px"
        justifyContent="space-between"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, 'Meal Title')}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="40px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={meal?.title}
          {...getOverrideProps(overrides, 'Biscuits & Gravy')}
        ></Text>
      </Flex>
    </Flex>
  );
}
