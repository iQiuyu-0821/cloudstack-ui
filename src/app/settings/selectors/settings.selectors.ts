import { createSelector } from '@ngrx/store';

import { SettingsViewModel } from '../view-models';
import * as userTags from '../../root-store/server-data/user-tags/user-tags.selectors';

export const getSettingsViewModel = createSelector(
  userTags.getSessionTimeout,
  userTags.getIsSavePasswordForVMs,
  userTags.getInterfaceLanguage,
  userTags.getFirstDayOfWeek,
  userTags.getTimeFormat,
  userTags.getTheme,
  (
    sessionTimeout,
    isSavePasswordForVMs,
    interfaceLanguage,
    firstDayOfWeek,
    timeFormat,
    theme
  ): SettingsViewModel => {
    return {
      sessionTimeout,
      isSavePasswordForVMs,
      interfaceLanguage,
      firstDayOfWeek,
      timeFormat,
      theme
    }
  }
);
