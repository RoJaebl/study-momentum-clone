const quotes = [
  {
    quote: "상상할 수 없는 꿈을 꾸고 있다면,  상상할 수 없는 노력을 해라",
    author: "오늘부터열정맨",
  },
  {
    quote:
      "아무리 가까운 길이라도 가지 않으면 도달하지 못하고 아무리 쉬운 일이라도 하지 않으면 이루지 못한다.",
    author: "채근담",
  },
  {
    quote:
      "남의 조그만 허물을 꾸짖지 말고, 비밀을 드러내지 말며, 지난날 잘못을 생각하지 마라. 이것은 덕을 기르며 해로움을 멀리할 것이다.",
    author: "채근담",
  },
  {
    quote:
      "타고난 천성이 좋지 않아도 열심히 노력하면 뛰어난 인물이 될 수 있다.",
    author: "채근담",
  },
  { quote: "인생 전반이 공부이고 구원이다.", author: "Heon Nam" },
  {
    quote: "이기적일 정도로 타인을 위해 일하라.",
    author: "Heon Nam",
  },
  {
    quote: "남자는 Look, Stairs, Money, Game이 충분해야 한다.",
    author: "Redpill",
  },
  { quote: "내 인생의 용과 마주할때 그 때가 죽일 기회이다.", author: "Heon Nam" },
  { quote: "혼자면 환기이고 둘이면 추억이다.", author: "Heon Nam" },
  {
    quote:
      "한번뿐인 인생 돌이켜 보면 매순간 소중한 추억이다. 기쁨도 슬픔도 화남도",
    author: "Heon Nam",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todayQuote.quote;
author.innerHTML = todayQuote.author;
