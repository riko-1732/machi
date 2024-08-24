// URLパラメータから選択されたオプションを取得
const urlParams = new URLSearchParams(window.location.search);
const options = urlParams.get("options");

// 結果を表示する要素を取得
const result = document.getElementById("result");
const resultImage = document.getElementById("resultImage");

// 結果のパターンと画像を設定
const resultsMapping = {
  "Option 1": {
    text: "You selected Option 1 only.",
    image: "only1.jpg",
  },
  "Option 2": {
    text: "You selected Option 2 only.",
    image: "only2.jpg",
  },
  "Option 3": {
    text: "You selected Option 3 only.",
    image: "only3.jpg",
  },
  "Option 1,Option 2": {
    text: "You selected Option 1 and Option 2.",
    image: "1and2.jpg",
  },
  "Option 1,Option 3": {
    text: "You selected Option 1 and Option 3.",
    image: "1and3.jpg",
  },
  "Option 2,Option 3": {
    text: "You selected Option 2 and Option 3.",
    image: "2and3.jpg",
  },
  "Option 1,Option 2,Option 3": {
    text: "You selected all options.",
    image: "all.jpg",
  },
  // 他の組み合わせも追加できます
};

// 選択されたオプションの組み合わせに応じた結果と画像を表示
if (options) {
  const selectedOptions = options.split(",").sort().join(",");
  const resultData = resultsMapping[selectedOptions];
  if (resultData) {
    result.textContent = resultData.text;
    resultImage.src = resultData.image;
    resultImage.style.display = "block";
  } else {
    result.textContent = "No valid combination selected";
    resultImage.style.display = "none";
  }
} else {
  result.textContent = "No options selected";
  resultImage.style.display = "none";
}
