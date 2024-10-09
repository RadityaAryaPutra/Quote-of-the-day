const quotes = [
  "Terbentur, terbentur, terbentuk",
  "Semakin diam kamu, semakin banyak yang bisa kamu dengar",
  "Jika kamu orang terpintar di ruangan, maka kamu berada di ruangan yang salah",
  "Mengkhawatirkan apa yang dipikirkan orang lain akan membuatmu selalu menjadi tawanan mereka",
  "Berpikir itu sulit, makanya kebanyakan orang menghakimi",
  "Tidak ada kata terlambat untuk menjadi apa yang mungkin kamu inginkan",
  "Pena lebih kuat daripada pedang",
  "Banyak yang lebih lelah tapi tak seberisik dirimu",
  "Tuhanmu tidak meninggalkanmu dan tidak pula membencimu",
  "Kesuksesan adalah hasil dari ketekunan dan tekad yang tak pernah padam",
  "Jangan biarkan ketidakpastian menghalangi langkahmu menuju impian",
  "Setiap langkah kecilmu membawamu lebih dekat kepada impian besarmu",
  "Jangan takut gagal. Kegagalan adalah bagian dari pertumbuhan dan pembelajaran",
  "Jadikan setiap hari sebagai peluang untuk belajar, tumbuh, dan menciptakan kebahagiaan",
  "Hidup adalah perjalanan, bukan tujuan",
  "Masa depanmu diciptakan oleh apa yang kamu lakukan hari ini, bukan besok",
  "Kamu hanya hidup sekali, tapi jika kamu melakukannya dengan benar, sekali saja sudah cukup",
  "Hidup bukan tentang menunggu badai berlalu, tapi tentang belajar menari di tengah hujan",
  "Jangan takut kehidupan akan berakhir takutlah kalau kehidupan tidak pernah dimulai",
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote(quote) {
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quote;
}

document.addEventListener("DOMContentLoaded", function () {
  const initialQuote = getRandomQuote();
  displayQuote(initialQuote);
});

document.getElementById("new-quote").addEventListener("click", function () {
  const newQuote = getRandomQuote();
  displayQuote(newQuote);
});
