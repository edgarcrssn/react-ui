export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // Added
  layout: 'fullscreen',
  backgrounds: {
    default: 'clear',
    values: [
      {
        name: 'clear',
        value: '#fafafa',
      },
      {
        name: 'dark',
        value: '#0A1824',
      },
    ],
  },
};
