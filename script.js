// すべてのチェックボックスを取得
const checkboxes = document.querySelectorAll('input[name="option"]');

// ボタンをクリックしたときに選択されたオプションを取得して新しいページに送信
document.getElementById("submit").addEventListener("click", () => {
  let selectedOptions = [];

  // チェックされたオプションをリストに追加
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedOptions.push(checkbox.value);
    }
  });

  // URLパラメータとしてオプションを次のページに渡す
  const queryString =
    selectedOptions.length > 0
      ? `?options=${encodeURIComponent(selectedOptions.join(","))}`
      : "";
  window.location.href = `results.html${queryString}`;
});
