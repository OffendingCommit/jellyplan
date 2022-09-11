/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from 'react';
import { getOverrideProps } from '@aws-amplify/ui-react/internal';
import { Flex, Text } from '@aws-amplify/ui-react';
export default function DateMeals(props) {
  const { frame421, date, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="661px"
      height="329px"
      justifyContent="center"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, 'DateMeals')}
    >
      <Flex
        gap="12px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, 'TitleBar')}
      >
        <Text
          fontFamily="Inter"
          fontSize="48px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="60px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="641px"
          height="53px"
          grow="1"
          basis="641px"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={date?.date}
          {...getOverrideProps(overrides, 'May 23, 2023')}
        ></Text>
      </Flex>
      <Flex
        gap="3px"
        direction="column"
        height="256px"
        grow="1"
        basis="256px"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="10px 10px 10px 10px"
        children={frame421}
        {...getOverrideProps(overrides, 'Meals')}
      ></Flex>
    </Flex>
  );
}
