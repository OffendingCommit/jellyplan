/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from 'react';
import { Meal } from '../models';
import { EscapeHatchProps } from '@aws-amplify/ui-react/internal';
import { FlexProps } from '@aws-amplify/ui-react';
export declare type MealCardProps = React.PropsWithChildren<
  Partial<FlexProps> & {
    meal?: Meal;
  } & {
    overrides?: EscapeHatchProps | undefined | null;
  }
>;
export default function MealCard(props: MealCardProps): React.ReactElement;
