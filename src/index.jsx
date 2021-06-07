import React from 'react';
import { ThemeProvider, StyleReset, Text } from 'atomize';
const theme = {
  colors: {
    primary: 'tomato',
    accent: 'yellow',
  },
};

const Index = () => {
    return (
        <ThemeProvider theme={theme}>
            <StyleReset />
        </ThemeProvider>
    );
};

export default Index;