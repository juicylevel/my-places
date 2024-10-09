type AsyncCallback = () => Promise<unknown>;

export const dialogAsyncCloseHandler =
    (callback: AsyncCallback) => async (result: boolean) => {
        if (result) {
            try {
                await callback();
            } finally {
                return Promise.resolve();
            }
        }
    };
