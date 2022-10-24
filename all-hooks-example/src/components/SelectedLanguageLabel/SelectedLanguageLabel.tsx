import React, { FC } from 'react';

interface NotSoSimpleCounterProps {
  lang: 'en' | 'ru';
}

export const SelectedLanguageLabel: FC<NotSoSimpleCounterProps> = function SelectedLanguageLabel({
  lang,
}: NotSoSimpleCounterProps) {
  if (lang == 'en') {
    return <h4>Language English</h4>;
  } else {
    return <h4>Язык Русский</h4>;
  }
};
