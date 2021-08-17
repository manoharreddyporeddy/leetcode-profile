export const requests = {
    getContestRankingData: {
        url: "http://localhost:3001/contest-rating",
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: {
            operationName: "getContestRankingData", //
            username: "{USER_NAME}", // "pgmreddy",
        },
    },

    getUserProfile: {
        url: "http://localhost:3001/user-profile",
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: {
            operationName: "getUserProfile", //
            username: "{USER_NAME}", // "pgmreddy",
        },
    },

    getRecentPosts: {
        url: "http://localhost:3001/recent-posts",
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: {
            operationName: "getRecentPosts", //
            username: "{USER_NAME}", // "pgmreddy",
        },
    },

    getRecentSubmissionList: {
        url: "http://localhost:3001/recent-submission",
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: {
            operationName: "getRecentSubmissionList", //
            username: "{USER_NAME}", // "pgmreddy",
        },
    }
};
