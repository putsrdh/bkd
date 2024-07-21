// Data sepeda yang tersedia
const bikes = [
    { id: 1, name: 'Sepeda Elektrik', price: "30.000-," },
    { id: 2, name: 'Sepeda Tandem', price: "25.000-," },
    { id: 3, name: 'Sepeda Cruiser', price: "20.000-," },
    { id: 4, name: 'Sepeda BMX', price: "20.000-," },
    { id: 5, name: 'Sepeda Gunung', price: "15.000-," },
    { id: 6, name: 'Sepeda Lipat', price: "15,000-," },
    { id: 7, name: 'Sepeda Hibrida', price: "15.000-," },
    { id: 8, name: 'Sepeda Anak', price: "10.000-," }
];

// Menambahkan opsi sepeda ke dalam dropdown
const sepedaSelect = document.getElementById('sepeda');
bikes.forEach(bike => {
    const option = document.createElement('option');
    option.value = bike.id;
    option.textContent = `${bike.name} - Rp ${bike.price}/jam`;
    sepedaSelect.appendChild(option);
});

// Menangani submit form sewa
const form = document.getElementById('sewa-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const sepedaId = parseInt(document.getElementById('sepeda').value);
    const durasi = parseInt(document.getElementById('durasi').value);

    const selectedBike = bikes.find(bike => bike.id === sepedaId);
    if (selectedBike) {
        const totalBiaya = selectedBike.price * durasi;

        // Menambahkan riwayat penyewaan terakhir
        const riwayatSewa = document.getElementById('riwayat-sewa');
        const li = document.createElement('li');
        li.textContent = `${nama} menyewa ${selectedBike.name} selama ${durasi} hari. Total biaya: Rp ${totalBiaya}`;
        riwayatSewa.insertBefore(li, riwayatSewa.firstChild);

        // Mengosongkan form setelah disubmit
        form.reset();
    }
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
});

