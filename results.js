// URLパラメータから選択されたオプションを取得
const urlParams = new URLSearchParams(window.location.search);
const shadow = urlParams.get("shadow");
const traffic = urlParams.get("traffic");

// 結果を表示する要素を取得
const result = document.getElementById("result");
const resultImage = document.getElementById("resultImage");

// 結果のパターンと画像を設定
const resultsMapping = {
  high_high: {
    text: "影が多く、人通りも多い場所です。",
    image: "high-high.jpg",
  },
  high_medium: {
    text: "影が多く、人通りは普通です。",
    image: "high-mid.jpg",
  },
  high_low: {
    text: "影が多く、人通りは少ないです。",
    image: "high-low.jpg",
  },
  medium_high: {
    text: "影が普通で、人通りは多いです。",
    image: "mid-high.jpg",
  },
  medium_medium: {
    text: "影も人通りも普通です。",
    image: "mid-mid.jpg",
  },
  medium_low: {
    text: "影が普通で、人通りは少ないです。",
    image: "mid-low.jpg",
  },
  low_high: {
    text: "影が少なく、人通りは多いです。",
    image: "low-high.jpg",
  },
  low_medium: {
    text: "影が少なく、人通りは普通です。",
    image: "low-mid.jpg",
  },
  low_low: {
    text: "影も人通りも少ないです。",
    image: "low-low.jpg",
  },
  // 他の組み合わせも追加できます
};

// 選択されたオプションの組み合わせに応じた結果と画像を表示
if (shadow && traffic) {
  const resultKey = `${shadow}_${traffic}`;
  const resultData = resultsMapping[resultKey];
  if (resultData) {
    result.textContent = resultData.text;
    resultImage.src = resultData.image;
    resultImage.style.display = "block";
  } else {
    result.textContent = "結果が見つかりません。";
    resultImage.style.display = "none";
  }
} else {
  result.textContent = "選択が不完全です。";
  resultImage.style.display = "none";
}
