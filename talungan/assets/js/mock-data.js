/* ============================================================
   MOCK DATA — Talungan.id
   Data dummy realistis untuk semua halaman demo
   ============================================================ */

const TALUNGAN_DATA = {

  currentUser: {
    role: 'petani', // 'petani' | 'admin' | 'konsumen'
    name: 'Joko Widiyanto',
    shortName: 'Pak Joko',
    avatar: '👨‍🌾',
    desa: 'Desa Sukamaju',
    kecamatan: 'Kec. Lembang',
    kabupaten: 'Kab. Bandung Barat',
    lahan: '2,5 Ha',
    noHp: '0812-3456-7890',
    noRek: '071-001-234567890',
    bank: 'BRI',
    joinDate: '12 Maret 2025',
  },

  // ─── PETANI STATS ─────────────────────────────────────────
  petaniStats: {
    totalStok: '2.840',
    totalStokUnit: 'Kg',
    pendapatan: '4.200.000',
    transaksiAktif: 12,
    transaksiSelesai: 87,
    profitMargin: '23',
    bep: '8.500.000',
  },

  // ─── SMART WARNINGS ───────────────────────────────────────
  warnings: [
    {
      type: 'danger',
      icon: '🔴',
      title: 'Stok Mendekati Kadaluarsa',
      text: 'Cabai Merah 15 kg — kadaluarsa dalam 2 hari (28 April 2026)',
      komoditas: 'Cabai Merah',
    },
    {
      type: 'warning',
      icon: '🟡',
      title: 'Stok Jagung Menipis',
      text: 'Jagung 120 kg tersisa — di bawah batas minimum 200 kg',
      komoditas: 'Jagung',
    },
  ],

  // ─── KOMODITAS LIST (PETANI) ───────────────────────────────
  stokList: [
    { id: 1, nama: 'Padi / Gabah',  icon: '🌾', jumlah: '850', unit: 'Kg', grade: 'A', status: 'aman',    harga: 5200,  kadaluarsa: '30 Jun 2026', lumbung: 'Lumbung Utama' },
    { id: 2, nama: 'Beras Premium', icon: '🍚', jumlah: '420', unit: 'Kg', grade: 'A', status: 'aman',    harga: 14200, kadaluarsa: '15 Mei 2026', lumbung: 'Lumbung Utama' },
    { id: 3, nama: 'Jagung Pipil',  icon: '🌽', jumlah: '120', unit: 'Kg', grade: 'B', status: 'waspada', harga: 4800,  kadaluarsa: '10 Mei 2026', lumbung: 'Lumbung Barat' },
    { id: 4, nama: 'Kedelai',       icon: '🫘', jumlah: '280', unit: 'Kg', grade: 'B', status: 'aman',    harga: 9600,  kadaluarsa: '20 Jun 2026', lumbung: 'Lumbung Utama' },
    { id: 5, nama: 'Cabai Merah',   icon: '🌶️', jumlah: '15',  unit: 'Kg', grade: 'C', status: 'kritis',  harga: 42000, kadaluarsa: '28 Apr 2026', lumbung: 'Lumbung Barat' },
    { id: 6, nama: 'Bawang Merah',  icon: '🧅', jumlah: '95',  unit: 'Kg', grade: 'A', status: 'aman',    harga: 28000, kadaluarsa: '5 Mei 2026',  lumbung: 'Lumbung Utama' },
    { id: 7, nama: 'Singkong',      icon: '🥔', jumlah: '310', unit: 'Kg', grade: 'B', status: 'aman',    harga: 2800,  kadaluarsa: '3 Mei 2026',  lumbung: 'Lumbung Timur' },
    { id: 8, nama: 'Ubi Jalar',     icon: '🍠', jumlah: '750', unit: 'Kg', grade: 'A', status: 'aman',    harga: 3500,  kadaluarsa: '12 Mei 2026', lumbung: 'Lumbung Timur' },
  ],

  // ─── HARGA BAPANAS REAL-TIME (SIMULASI) ───────────────────
  hargaBapanas: [
    { komoditas: 'Beras Medium',  harga: 13.500, satuan: 'Kg', trend: 'up' },
    { komoditas: 'Beras Premium', harga: 15.200, satuan: 'Kg', trend: 'up' },
    { komoditas: 'Jagung',        harga: 4.800,  satuan: 'Kg', trend: 'stable' },
    { komoditas: 'Kedelai',       harga: 9.500,  satuan: 'Kg', trend: 'down' },
    { komoditas: 'Cabai Merah',   harga: 38.000, satuan: 'Kg', trend: 'up' },
    { komoditas: 'Bawang Merah',  harga: 35.000, satuan: 'Kg', trend: 'up' },
    { komoditas: 'Bawang Putih',  harga: 41.000, satuan: 'Kg', trend: 'down' },
    { komoditas: 'Minyak Goreng', harga: 17.500, satuan: 'Ltr', trend: 'stable' },
  ],

  // ─── MARKETPLACE PRODUCTS ─────────────────────────────────
  products: [
    {
      id: 1,
      nama: 'Beras Premium Cianjur',
      icon: '🍚',
      lumbung: 'Lumbung Sukamaju',
      desa: 'Desa Sukamaju, Lembang',
      grade: 'A',
      stok: 680,
      unit: 'Kg',
      harga: 14200,
      minBeli: 5,
      status: 'aman',
      rating: 4.8,
      ulasan: 124,
      petani: 'Koperasi Lumbung Sukamaju',
    },
    {
      id: 2,
      nama: 'Jagung Pipil Kering',
      icon: '🌽',
      lumbung: 'Lumbung Cisarua',
      desa: 'Desa Cisarua, Kec. Cisarua',
      grade: 'B',
      stok: 240,
      unit: 'Kg',
      harga: 4800,
      minBeli: 10,
      status: 'aman',
      rating: 4.5,
      ulasan: 67,
      petani: 'KT Tunas Harapan',
    },
    {
      id: 3,
      nama: 'Cabai Merah Keriting',
      icon: '🌶️',
      lumbung: 'Lumbung Makmur',
      desa: 'Desa Makmur, Kec. Parongpong',
      grade: 'A',
      stok: 45,
      unit: 'Kg',
      harga: 38000,
      minBeli: 1,
      status: 'waspada',
      rating: 4.9,
      ulasan: 48,
      petani: 'BUMDes Makmur Jaya',
    },
    {
      id: 4,
      nama: 'Bawang Merah Brebes',
      icon: '🧅',
      lumbung: 'Lumbung Desa Harapan',
      desa: 'Desa Harapan, Kec. Ngamprah',
      grade: 'A',
      stok: 320,
      unit: 'Kg',
      harga: 28000,
      minBeli: 2,
      status: 'aman',
      rating: 4.7,
      ulasan: 92,
      petani: 'Poktan Sumber Berkah',
    },
    {
      id: 5,
      nama: 'Kedelai Lokal Segar',
      icon: '🫘',
      lumbung: 'Lumbung Sukamaju',
      desa: 'Desa Sukamaju, Lembang',
      grade: 'B',
      stok: 180,
      unit: 'Kg',
      harga: 9500,
      minBeli: 5,
      status: 'aman',
      rating: 4.4,
      ulasan: 33,
      petani: 'Koperasi Lumbung Sukamaju',
    },
    {
      id: 6,
      nama: 'Singkong Segar',
      icon: '🥔',
      lumbung: 'Lumbung Cijambe',
      desa: 'Desa Cijambe, Subang',
      grade: 'B',
      stok: 520,
      unit: 'Kg',
      harga: 2800,
      minBeli: 20,
      status: 'aman',
      rating: 4.3,
      ulasan: 21,
      petani: 'KT Muda Mandiri',
    },
  ],

  // ─── LUMBUNG LIST ──────────────────────────────────────────
  lumbungs: [
    { id: 1, nama: 'Lumbung Sukamaju',    desa: 'Desa Sukamaju',    totalStok: 1840, petani: 12, status: 'aktif' },
    { id: 2, nama: 'Lumbung Cisarua',     desa: 'Desa Cisarua',     totalStok: 960,  petani: 8,  status: 'aktif' },
    { id: 3, nama: 'Lumbung Makmur',      desa: 'Desa Makmur',      totalStok: 720,  petani: 7,  status: 'aktif' },
    { id: 4, nama: 'Lumbung Desa Harapan', desa: 'Desa Harapan',    totalStok: 1120, petani: 10, status: 'aktif' },
    { id: 5, nama: 'Lumbung Cijambe',     desa: 'Desa Cijambe',     totalStok: 580,  petani: 5,  status: 'aktif' },
  ],

  // ─── TRANSAKSI HISTORY ────────────────────────────────────
  transactions: [
    { id: 'TLG-2026-0043', tanggal: '26 Apr 2026', komoditas: 'Beras Premium', jumlah: 50, unit: 'Kg', harga: 14200, total: 710000, status: 'selesai',   pembeli: 'PT Pangan Nusantara' },
    { id: 'TLG-2026-0041', tanggal: '24 Apr 2026', komoditas: 'Jagung Pipil',  jumlah: 100, unit: 'Kg', harga: 4800, total: 480000, status: 'dikirim',   pembeli: 'Koperasi Mekar Jaya' },
    { id: 'TLG-2026-0038', tanggal: '22 Apr 2026', komoditas: 'Bawang Merah', jumlah: 25, unit: 'Kg', harga: 28000, total: 700000, status: 'selesai',   pembeli: 'Restoran Nusantara' },
    { id: 'TLG-2026-0035', tanggal: '19 Apr 2026', komoditas: 'Beras Premium', jumlah: 80, unit: 'Kg', harga: 13800, total: 1104000, status: 'selesai', pembeli: 'PT Pangan Nusantara' },
    { id: 'TLG-2026-0030', tanggal: '15 Apr 2026', komoditas: 'Jagung Pipil',  jumlah: 60, unit: 'Kg', harga: 4600,  total: 276000, status: 'selesai',  pembeli: 'Peternak Ayam Pak Haris' },
  ],

  // ─── TRACKING ORDER ──────────────────────────────────────
  trackingOrder: {
    id: 'TLG-2026-0041',
    komoditas: 'Jagung Pipil Kering',
    jumlah: 100,
    unit: 'Kg',
    lumbungAsal: 'Lumbung Cisarua',
    lokAsal: { lat: -6.823, lng: 107.584 },
    lokTujuan: { lat: -6.920, lng: 107.610 },
    alamatTujuan: 'Jl. Soekarno-Hatta No.123, Bandung',
    status: 'dikirim',
    estimasiTiba: 'Sabtu, 26 Apr 2026 pukul 14.00 WIB',
    operator: 'Andi Firmansyah',
    noHpOperator: '0813-9876-5432',
    timeline: [
      { label: 'Kontrak Dikonfirmasi', waktu: '24 Apr 2026, 09.00', done: true },
      { label: 'Barang Keluar Gudang', waktu: '25 Apr 2026, 07.30', done: true },
      { label: 'Dalam Perjalanan',     waktu: '26 Apr 2026, 08.00', done: false, active: true },
      { label: 'Tiba di Tujuan',       waktu: 'Est. 26 Apr 2026, 14.00', done: false },
    ],
  },

  // ─── ADMIN STATS ──────────────────────────────────────────
  adminStats: {
    petaniAktif: 48,
    transaksiHarian: 23,
    totalStokPlatform: '12.400',
    totalStokUnit: 'Kg',
    foodLoss: 2.1,
    pendapatanBulan: '184.600.000',
    lumbungAktif: 5,
  },

  // ─── ANTRIAN VERIFIKASI ───────────────────────────────────
  verifikasiAntrian: [
    { id: 'V001', nama: 'Budi Santoso',    desa: 'Desa Makmur Jaya',  tgl: '25 Apr 2026', lahan: '1.8 Ha' },
    { id: 'V002', nama: 'Siti Rahayu',     desa: 'Desa Sumberbening', tgl: '24 Apr 2026', lahan: '0.9 Ha' },
    { id: 'V003', nama: 'Ahmad Yusuf',     desa: 'Desa Cipeundeuy',   tgl: '23 Apr 2026', lahan: '3.2 Ha' },
  ],

  // ─── FORUM POSTS ──────────────────────────────────────────
  forumPosts: [
    { id: 1, author: 'Pak Slamet', avatar: '👨‍🌾', role: 'Petani', desa: 'Desa Cisarua', waktu: '2 jam lalu', title: 'Tips menjaga kualitas gabah agar tidak berjamur', content: 'Halo teman-teman petani, mau share pengalaman penyimpanan gabah biar tetap kering dan tidak berjamur meski musim hujan...', likes: 34, replies: 12, tags: ['Tips', 'Gabah'] },
    { id: 2, author: 'KT Sukamaju', avatar: '🛡️', role: 'Karang Taruna', desa: 'Desa Sukamaju', waktu: '5 jam lalu', title: 'Update: Harga beras naik, petani perlu tahu!', content: 'Berdasarkan data Bapanas hari ini, harga beras medium naik Rp 300/kg. Ini peluang bagus untuk yang punya stok...', likes: 67, replies: 28, tags: ['Harga', 'Update'] },
    { id: 3, author: 'Ibu Sari',   avatar: '👩‍🌾', role: 'Petani', desa: 'Desa Harapan',  waktu: '1 hari lalu', title: 'Cara input stok di platform, mudah banget!', content: 'Buat teman-teman yang baru bergabung, saya mau cerita pengalaman pertama kali input stok di Talungan...', likes: 89, replies: 45, tags: ['Tutorial', 'Stok'] },
  ],

  // ─── STATISTIK PENJUALAN (Grafik) ────────────────────────
  salesData: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
    beras:  [380000, 420000, 390000, 510000, 460000, 490000],
    jagung: [180000, 160000, 210000, 195000, 240000, 220000],
    cabai:  [90000,  110000, 85000,  130000, 95000,  120000],
  },

  forecastData: {
    bulanDepan: 'Mei 2026',
    prediksiPendapatan: '5.400.000',
    prediksiStokTerjual: '1.240',
    confidence: 78,
  },
};

// Helper: format rupiah
function formatRupiah(angka) {
  return 'Rp ' + Number(angka).toLocaleString('id-ID');
}

// Helper: format tanggal
function formatDate(date) {
  return new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

// Helper: greeting berdasarkan jam
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 10) return 'Selamat Pagi';
  if (hour < 15) return 'Selamat Siang';
  if (hour < 18) return 'Selamat Sore';
  return 'Selamat Malam';
}

// Helper: tampilkan toast
function showToast(message, type = 'success', duration = 3000) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const icons = { success: '✅', warning: '⚠️', error: '❌', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `<span>${icons[type]}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateY(-5px)';
    setTimeout(() => toast.remove(), 300); }, duration);
}

// Helper: simulate loading
function simulateLoad(callback, delay = 800) {
  setTimeout(callback, delay);
}

// Save & get role
function saveRole(role) { localStorage.setItem('tl_role', role); }
function getRole() { return localStorage.getItem('tl_role') || null; }

// Route guard — redirect jika belum login
function checkAuth() {
  const role = getRole();
  const path = window.location.pathname;
  if (!role && !path.includes('index') && !path.includes('login') && !path.includes('register')) {
    window.location.href = '/talungan/index.html';
  }
  return role;
}
