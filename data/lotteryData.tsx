
const LotteryData = [
  {
    url: "https://images.indianexpress.com/2020/12/New-Year-2021-feature-1.jpg",
    name: "10积分",
    id: 1
  },
  {
    url: "https://images.indianexpress.com/2020/12/New-Year-2021-feature-1.jpg",
    name: "666元现金",
    id: 2
  },
  {
    url: "https://images.indianexpress.com/2020/12/New-Year-2021-feature-1.jpg",
    name: "88元现金",
    id: 3
  },
  {
    url: "https://images.indianexpress.com/2020/12/New-Year-2021-feature-1.jpg",
    name: "10元优惠券",
    id: 4
  },
  {
    url: "data:image/png;base64,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",
  },
  {
    url: "https://images.indianexpress.com/2020/12/New-Year-2021-feature-1.jpg",
    name: "谢谢参与",
    id: 5
  },
  {
    url: "https://images.indianexpress.com/2020/12/New-Year-2021-feature-1.jpg",
    name: "100积分",
    id: 6
  },
  {
    url: "https://images.indianexpress.com/2020/12/New-Year-2021-feature-1.jpg",
    name: "168优惠券",
    id: 7
  },
  {
    url: "https://images.indianexpress.com/2020/12/New-Year-2021-feature-1.jpg",
    name: "50积分",
    id: 8
  },
];

export default LotteryData;