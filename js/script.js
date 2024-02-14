//Show Nav
function showNav(navId, btnId) {
  // Menghapus class 'active' dari semua nav-content
  var navContents = document.querySelectorAll(".nav-content");
  navContents.forEach(function (navContent) {
    navContent.classList.remove("active");
  });
  var btnContents = document.querySelectorAll(".btn-nav");
  btnContents.forEach(function (btnContent) {
    btnContent.classList.remove("active");
  });

  // Menambah class 'active' hanya pada nav-content yang diinginkan
  var selectedNav = document.getElementById(navId);
  if (selectedNav) {
    selectedNav.classList.add("active");
  }
  var selectedBtn = document.getElementById(btnId);
  if (selectedBtn) {
    selectedBtn.classList.add("active");
  }
}
var previousResult = ""; // Menyimpan hasil konversi sebelumnya
var petunjukIndex = 0; // Indeks saat ini pada array petunjuk
var petunjukArray = [
    "Masukkan suhu derajat Celcius (°C) ke dalam kolom di bawah, lalu klik tombol konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (°F)",
    "Masukkan suhu derajat Fahrenheit (°F) ke dalam kolom di bawah, lalu klik tombol konversi untuk mendapatkan hasil konversi dalam bentuk Celcius (°C)",
];
var carakalkulasiIndex = 0; // Indeks saat ini pada array petunjuk
var carakalkulasiArray = [
  {
    judul: "Cara Konversi Celcius Dari Celcius (°C) ke Fahrenheit (°F)",
    isi: "Suhu <i><b>S</b></i> dalam derajat Fahrenheit (°F) sama dengan suhu <i><b>S</b></i> dalam derajat Celcius (°C) kali <b>9/5</b> tambah <b>32</b>",
    rumus1: "<i>S</i><sub>(°F)</sub>=(<i>S</i><sub>(°C)</sub> x 9/5) + 32",
    atau: "atau",
    rumus2: "<i>S</i><sub>(°F)</sub>=(<i>S</i><sub>(°C)</sub> x 1.8) + 32",
  },
  {
    judul: "Cara Konversi Fahrenheit Dari Fahrenheit (°F) ke Celcius (°C)",
    isi: "Suhu <i><b>S</b></i> dalam derajat Fahrenheit (°C) sama dengan suhu <i><b>S</b></i> dalam derajat Celcius (°F) kurang <b>32</b> kali <b>5/9</b>",
    rumus1: "<i>S</i><sub>(°C)</sub>=(<i>S</i><sub>(°F)</sub> - 32) x 5/9",
    atau: "atau",
    rumus2: "<i>S</i><sub>(°C)</sub>=(<i>S</i><sub>(°F)</sub> - 32) x 0,5555555555555556",
  },
];

function Konversi() {
  var celsiusInput = document.getElementById("inputCelsius");
  var fahrenheitInput = document.getElementById("inputFahrenheit");
  var resultInput = document.getElementById("inputKalkulasi");

  if (celsiusInput.value !== "") {
    // Konversi dari Celsius ke Fahrenheit
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheitResult = (celsius * 9) / 5 + 32;
    resultInput.value =
      "(" + celsius + "°C × 9/5) + 32" + " = " + fahrenheitResult + "°F";
    // Isi kembali nilai input
    fahrenheitInput.value = fahrenheitResult.toFixed(2);
    previousResult = resultInput.value; // Simpan hasil konversi
  } else if (fahrenheitInput.value !== "") {
    // Konversi dari Fahrenheit ke Celsius
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsiusResult = ((fahrenheit - 32) * 5) / 9;
    resultInput.value =
      "(" + fahrenheit + "°F − 32) x 5/9" + " = " + celsiusResult + "°C";
    // Isi kembali nilai input
    celsiusInput.value = celsiusResult.toFixed(2);
    previousResult = resultInput.value; // Simpan hasil konversi
  } else {
    resultInput.value = "Masukkan nilai suhu.";
    previousResult = ""; // Reset hasil konversi
  }
}

function Tukar() {
  var celsiusInput = document.getElementById("inputCelsius");
  var fahrenheitInput = document.getElementById("inputFahrenheit");

  // Tukar label
  var celsiusLabel = document.getElementById("labelCelsius");
  var fahrenheitLabel = document.getElementById("labelFahrenheit");
  var tempLabel = celsiusLabel.innerText;
  celsiusLabel.innerText = fahrenheitLabel.innerText;
  fahrenheitLabel.innerText = tempLabel;

  // Tukar Placeholder
  var celsiusPlaceholder = inputCelsius.placeholder;
  var fahrenheitPlaceholder = inputFahrenheit.placeholder;
  inputCelsius.placeholder = fahrenheitPlaceholder;
  inputFahrenheit.placeholder = celsiusPlaceholder;

  // Tukar nilai input
  var tempValue = celsiusInput.value;
  celsiusInput.value = fahrenheitInput.value;
  fahrenheitInput.value = tempValue;

  // Kosongkan nilai input
  celsiusInput.value = "";
  fahrenheitInput.value = "";

  // Ganti petunjuk teks
  var petunjukElement = document.getElementById("petunjuk");
  petunjukIndex = (petunjukIndex + 1) % petunjukArray.length; // Pindah ke petunjuk berikutnya
  petunjukElement.innerHTML = petunjukArray[petunjukIndex];

  // Ganti cara kalkulasi teks
  var carakalkulasiElement = document.getElementById("carakalkulasi");
  carakalkulasiIndex = (carakalkulasiIndex + 1) % carakalkulasiArray.length; // Pindah ke petunjuk berikutnya
  carakalkulasiElement.innerHTML = `
                <div id="judul">${carakalkulasiArray[carakalkulasiIndex].judul}</div>
                <div id="isi">${carakalkulasiArray[carakalkulasiIndex].isi}</div>
                <div id="rumus1">${carakalkulasiArray[carakalkulasiIndex].rumus1}</div>
                <div id="atau">${carakalkulasiArray[carakalkulasiIndex].atau}</div>
                <div id="rumus2">${carakalkulasiArray[carakalkulasiIndex].rumus2}</div>
            `;

  // Tukar id input
  var tempId = celsiusInput.id;
  celsiusInput.id = fahrenheitInput.id;
  fahrenheitInput.id = tempId;

  // Perubahan logika konversi
  var resultInput = document.getElementById("kalkulasi");
  resultInput.value = previousResult; // Kembalikan hasil konversi sebelumnya
}

function Reset() {
  var celsiusInput = document.getElementById("inputCelsius");
  var fahrenheitInput = document.getElementById("inputFahrenheit");
  var resultInput = document.getElementById("inputKalkulasi");

  // Reset nilai input dan hasil konversi
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  resultInput.value = "";
  previousResult = "";

  // Reset id input ke keadaan awal
  celsiusInput.id = "inputCelsius";
  fahrenheitInput.id = "inputFahrenheit";
}
