/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from 'react';
import { getOverrideProps } from '@aws-amplify/ui-react/internal';
import { Badge, Flex } from '@aws-amplify/ui-react';
export default function MealBadges(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="13px"
      width="254px"
      height="50px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="6px 0px 6px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, 'MealBadges')}
    >
      <Badge
        display="flex"
        gap="10px"
        width="fit-content"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        height="30px"
        overflow="hidden"
        position="relative"
        borderRadius="32px"
        padding="8px 12px 8px 12px"
        backgroundColor="rgba(67,168,84,1)"
        color="rgba(239,240,240,1)"
        fontFamily="Inter"
        fontWeight="400"
        fontSize="14px"
        textAlign="left"
        lineHeight="14px"
        direction="column"
        size="default"
        variation="default"
        children="New"
        {...getOverrideProps(overrides, 'Badge34712900')}
      ></Badge>
      <Badge
        display="flex"
        gap="10px"
        width="fit-content"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        height="30px"
        overflow="hidden"
        position="relative"
        borderRadius="32px"
        padding="8px 12px 8px 12px"
        backgroundColor="rgba(64,170,191,1)"
        color="rgba(239,240,240,1)"
        fontFamily="Inter"
        fontWeight="400"
        fontSize="14px"
        textAlign="left"
        lineHeight="14px"
        direction="column"
        size="default"
        variation="default"
        children="Dining Out"
        {...getOverrideProps(overrides, 'Badge34712902')}
      ></Badge>
      <Badge
        display="flex"
        gap="10px"
        width="fit-content"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        height="30px"
        overflow="hidden"
        position="relative"
        borderRadius="32px"
        padding="8px 12px 8px 12px"
        backgroundColor="rgba(191,64,191,1)"
        color="rgba(239,240,240,1)"
        fontFamily="Inter"
        fontWeight="400"
        fontSize="14px"
        textAlign="left"
        lineHeight="14px"
        direction="column"
        size="default"
        variation="default"
        children="Open"
        {...getOverrideProps(overrides, 'Badge34712904')}
      ></Badge>
    </Flex>
  );
}
