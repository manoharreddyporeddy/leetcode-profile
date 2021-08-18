import { common } from "../__common";
// console.log("common", common.apiBaseUrl);

export const requests = {
    getContestRankingData: {
        url: common.apiBaseUrl + "contest-rating",
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
        url: common.apiBaseUrl + "user-profile",
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
        url: common.apiBaseUrl + "recent-posts",
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
        url: common.apiBaseUrl + "recent-submission",
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: {
            operationName: "getRecentSubmissionList", //
            username: "{USER_NAME}", // "pgmreddy",
        },
    },
};
