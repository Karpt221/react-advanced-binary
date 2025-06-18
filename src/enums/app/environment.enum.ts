const { VITE_API_URL } = import.meta.env;

const ENV = {
    TRAVEL_API_URL: VITE_API_URL as string,
};

export { ENV };
