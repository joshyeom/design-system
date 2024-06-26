import React from 'react';
import type { Preview } from '@storybook/react';
import "../src/reset.css"


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

//decorators에 적용하기
export const decorators = [
  (Story: any) => (
     <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Story/>
      </div>
  ),
];

export default preview;