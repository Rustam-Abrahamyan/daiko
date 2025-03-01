import { useMemo } from "react";

export const useAuth = () => {
    const isAuthenticated = true;

    return useMemo(
        () => ({
            isAuthenticated,
        }),
        [isAuthenticated]
    );
};
