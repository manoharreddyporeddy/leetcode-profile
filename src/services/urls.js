export const requests = {
    getContestRankingData: {
        url: "http://localhost:3001/user-profile",
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: {
            operationName: "getContestRankingData", //
            username: "{USER_NAME}", // "pgmreddy",
        },
    },
};
