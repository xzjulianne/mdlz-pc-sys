import { mock } from "mockjs";

export default [
  {
    url: "/test/getList",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        msg: "success",
        totalCount: 999,
        data: mock({
          "data|5": [
            {
              id: "@id",
            },
          ],
        }).data,
      };
    },
  },
];
