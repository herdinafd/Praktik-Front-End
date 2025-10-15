// dashboard.jsx
import React from "react";
import "./css/dashboard.css";
import "./css/style.css";

function Dashboard() {
    return (
        <div className="dashboard-container">
            {/* Heading */}
            <h1>Welcome to My Website</h1>

            {/* Paragraph (Teks disesuaikan) */}
            <p className="intro-paragraph">
                Website Kesetaraan Gender hadir sebagai ruang edukatif dan inspiratif untuk 
                mendorong terciptanya masyarakat yang adil dan setara bagi semua gender.
                Kami berkomitmen untuk meningkatkan kesadaran, memperluas wawasan, serta
                membuka peluang kolaborasi dalam mewujudkan kesetaraan di berbagai aspek
                kehidupan - mulai dari pendidikan, pekerjaan, hingga sosial dan budaya.
            </p>

            {/* List */}
            <h2>Materi Praktik :</h2>
            <ul className="materi-list">
                <li>Heading dan Paragraph</li>
                <li>List, Link, dan Image</li>
                <li>Table dan Form</li>
                <li>CSS eksternal : warna, font, margin, padding</li>
                <li>Responsive Layout : Flexbox & Grid</li>
            </ul>

            {/* Link */}
            <p>
                Kunjungi {" "}
                <a href="https://react.dev" target="_blank" rel="noreferrer" className="react-link">
                    Dokumentasi React
                </a> {" "}
                untuk mempelajari lebih lanjut.
            </p>

            {/* Image (Asumsi gambar logo UNS disimpan di /assets/uns_logo.png) */}
            <div className="image-section">
                <img
                    // Ganti src ke lokasi logo UNS atau sesuaikan path
                    src="/assets/gender_equal.png" 
                    alt="Logo UNS"
                    className="dashboard-image"
                />
            </div>

            {/* Table */}
            <div className="table-section"> {/* Tambahkan class baru dan hapus class dashboard-container */}
                <h2>Jadwal Praktik</h2> {/* Sesuaikan Judul Tabel */}
                
                <table className="schedule-table">
                    <thead>
                        <tr>
                            <th>Hari</th>
                            <th>Materi</th>
                            <th>Waktu</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Senin</td>
                            <td>HTML & CSS</td> {/* Perbarui Data */}
                            <td>09:00 - 10:30</td>
                        </tr>
                        <tr>
                            <td>Rabu</td> {/* Perbarui Data */}
                            <td>JavaScript & React</td> {/* Perbarui Data */}
                            <td>09:00 - 10:30</td> {/* Perbarui Data */}
                        </tr>
                        {/* Hapus baris 'Selasa' */}
                    </tbody>
                </table>
            </div>

            {/* Form */}
            <h2>Form Pendaftaran</h2>
            <form className="form-section">
                <input type="text" placeholder="Nama Lengkap" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Pesan Anda" rows="4"></textarea> {/* Ubah placeholder kembali ke "Pesan Anda" */}
                <button type="submit" className="submit-button">Kirim</button>
            </form>

        </div>
    );
}

export default Dashboard;