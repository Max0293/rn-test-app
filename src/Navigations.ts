import { StackActions } from "@react-navigation/native";

export const loginPushAction = StackActions.push('LOGIN', { });
export const tabsReplaceAction =  StackActions.replace('TABS', { });
export const loginReplaceAction =  StackActions.replace('LOGIN', { });