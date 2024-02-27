      let lastScrollTop = 0;
 
 // Select navbar
 const navbar = document.querySelector(".navbar");

 // Tambahkan event listener untuk mendeteksi scroll
 window.addEventListener("scroll", function () {
   // Dapatkan posisi scroll saat ini
   let scrollTop =
     window.pageYOffset || document.documentElement.scrollTop;

   // Tentukan arah scroll
   if (scrollTop > lastScrollTop) {
     // Scroll ke bawah, sembunyikan navbar
     navbar.style.top = "-100px"; // Menggunakan nilai negatif untuk menyembunyikan navbar
   } else {
     // Scroll ke atas, tampilkan navbar kembali
     navbar.style.top = "0";
   }

   // Simpan posisi scroll saat ini untuk perbandingan di scroll selanjutnya
   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
 });