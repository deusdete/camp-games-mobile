/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}


export type Banner = {
  _id: string,
  name: string,
  image_host: string,
  image_name: string,
  tournament_id: string,
  user_id: string,
  created_at: string,
  updated_at: string,
}

export type Category = {
  _id: string
  name: string
  image_host: string
  image_name: string
  created_at: string
  updated_at: string
}

export type Tournament = {
  _id: string,
  name: string,
  category_id: string,
  image_host: string,
  image_name: string,
  description:string,
  date_and_time: string,
  code_access: string,
  prize: string,
  registration_fee: string | null,
  team: string,
  created_at: string,
  updated_at: string,
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined
  Modal: undefined
  NotFound: undefined
  TournamentDetail: undefined
}

export type RootStackScreenProps<
  Screen extends keyof RootStackParamList
> = NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabParamList = {
  Home: undefined
  Tickets: undefined
  NewTournament: undefined
  Wallet: undefined
  Profile: undefined
}

export type RootTabScreenProps<
  Screen extends keyof RootTabParamList
> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>
