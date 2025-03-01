import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import AppRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <MantineProvider theme={theme}>
                <AppRoutes />
            </MantineProvider>
        </BrowserRouter>
    );
}

export default App;
