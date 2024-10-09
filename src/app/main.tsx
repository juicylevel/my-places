import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import './i18n';

async function enableMocking() {
    // return Promise.resolve();
    if (import.meta.env.PROD) {
        return;
    }

    const { worker } = await import('shared/mocks/browser');

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start({
        serviceWorker: {
            // url: `${import.meta.env.BASE_URL}/mockServiceWorker.js`,
        },
    });
}

enableMocking().then(() => {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
});
