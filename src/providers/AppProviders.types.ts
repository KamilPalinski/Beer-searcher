import { ReactNode } from 'react';
import { EmotionCache } from '@emotion/react/dist/emotion-react.cjs';

export type AppProvidersProps = {
  children: ReactNode;
  emotionCache: EmotionCache;
};
