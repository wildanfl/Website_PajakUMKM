// --- File: app.js ---

document.addEventListener('DOMContentLoaded', () => {
    
    // --- NAVIGASI AKTIF (Jika Anda ingin menambahkan indikator halaman aktif) ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const path = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        // Contoh sederhana: menandai link jika path sesuai
        if (link.href.includes(path) && path !== "") {
            link.classList.add('active-nav');
        }
    });

    // --- LOGIKA KALKULATOR PAJAK (Hitung dan Reset) ---
    
    const omzetInput = document.getElementById('omzet');
    const hitungButton = document.querySelector('.btn-calc');
    const resetButton = document.querySelector('.btn-reset');
    
    // Fungsi untuk memformat angka (agar terlihat seperti Rp 50.000.000)
    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID').format(number);
    };

    // Saat input berubah (Opsional: agar angka terlihat diformat)
    omzetInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\./g, '');
        e.target.value = formatRupiah(value);
    });

    // Logika Button Hitung Pajak
    hitungButton.addEventListener('click', () => {
        // Ambil nilai omzet, hapus format Rupiah (titik)
        const omzetValue = parseFloat(omzetInput.value.replace(/\./g, '')) || 0;
        
        // --- LOGIKA BACK-END PLACEHOLDER ---
        
        // Asumsi PPh Final 0.5% (Sesuai ketentuan yang tertulis di HTML)
        const tarifPPh = 0.005; 
        let pajakTerutang = 0;

        if (omzetValue > 5000000000) {
            // Placeholder: Jika omzet terlalu besar (misal: melebihi 5M)
            alert('Perhitungan Pajak UMKM melebihi batas sederhana. Silakan gunakan kalkulator profesional.');
            return;
        }

        if (omzetValue <= 500000000) {
            // Contoh sederhana: Omzet s.d 500 Juta tidak dikenakan PPh Final (mengacu pada aturan baru)
            pajakTerutang = 0;
            // Kirim data ke API Anda (Placeholder)
            // fetch('/api/hitung-pajak', { method: 'POST', body: JSON.stringify({ omzet: omzetValue }) })
            // ...
            
        } else {
             // Jika omzet > 500 Juta, hitung 0.5% dari selisihnya. (Logika ini sangat disederhanakan)
             // *Logika PPh Final 0.5% sering kali dihitung bulanan. Ini adalah contoh sederhana*
             pajakTerutang = omzetValue * tarifPPh; 
        }

        // Tampilkan hasil (di sinilah hasil dari API Back-End Anda seharusnya ditampilkan)
        alert(`Omzet Bruto: Rp ${formatRupiah(omzetValue)}\nPajak Terutang (Estimasi): Rp ${formatRupiah(pajakTerutang)}`);
        
        // *CATATAN PENTING:* Dalam aplikasi nyata, perhitungan ini harus dilakukan di sisi server (Back-End)
        // untuk menjamin keamanan dan keakuratan data.
    });
    
    // Logika Button Reset
    resetButton.addEventListener('click', () => {
        omzetInput.value = formatRupiah(0);
        alert('Data kalkulator telah direset.');
    });

    // --- FOOTER NEWSLETTER SUBMISSION ---
    
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]').value;
            
            if (emailInput) {
                // Kirim email ke API Back-End Anda (Placeholder)
                console.log(`Mencoba mendaftarkan email: ${emailInput}`);
                alert(`Terima kasih telah berlangganan dengan email: ${emailInput}.`);
                newsletterForm.querySelector('input[type="email"]').value = '';
            } else {
                alert('Mohon masukkan alamat email yang valid.');
            }
        });
    }

});
<script src="app.js"></script>