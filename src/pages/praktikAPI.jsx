import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function PraktikAPI() {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const [provinsi, setProvinsi] = useState([]);
    const [kabupaten, setKabupaten] = useState([]);
    const [kecamatan, setKecamatan] = useState([]);

    const [selectedProv, setSelectedProv] = useState("");
    const [selectedKab, setSelectedKab] = useState("");
    const [selectedKec, setSelectedKec] = useState("");

    const [loading, setLoading] = useState(false);
    const [respon, setRespon] = useState("");

    // Ambil daftar provinsi
    useEffect(() => {
        const fetchProvinsi = async () => {
            setLoading(true);
            try {
                const res = await axios.get(
                    `https://api.binderbyte.com/wilayah/provinsi?api_key=${API_KEY}`
                );
                setProvinsi(res.data.value);
            } catch (err) {
                console.error("Gagal ambil data provinsi:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProvinsi();
    }, [API_KEY]);

    // Ambil daftar kabupaten berdasarkan provinsi
    const handleProvChange = async (e) => {
        const idProv = e.target.value;
        setSelectedProv(idProv);
        setSelectedKab("");
        setSelectedKec("");
        setKabupaten([]);
        setKecamatan([]);
        setRespon("");

        if (!idProv) return;

        try {
            const res = await axios.get(
                `https://api.binderbyte.com/wilayah/kabupaten?api_key=${API_KEY}&id_provinsi=${idProv}`
            );
            setKabupaten(res.data.value);
        } catch (err) {
            console.error("Gagal ambil kabupaten:", err);
        }
    };

    // Ambil daftar kecamatan berdasarkan kabupaten
    const handleKabChange = async (e) => {
        const idKab = e.target.value;
        setSelectedKab(idKab);
        setSelectedKec("");
        setKecamatan([]);
        setRespon("");

        if (!idKab) return;

        try {
            const res = await axios.get(
                `https://api.binderbyte.com/wilayah/kecamatan?api_key=${API_KEY}&id_kabupaten=${idKab}`
            );
            setKecamatan(res.data.value);
        } catch (err) {
            console.error("Gagal ambil kecamatan:", err);
        }
    };

    // Pilihan kecamatan 
    const handleKecChange = (e) => {
        setSelectedKec(e.target.value);
        setRespon("");
    };

    // Tombol konfirmasi
    const handleConfirm = () => {
        const prov = provinsi.find((p) => p.id === selectedProv)?.name || "";
        const kab = kabupaten.find((k) => k.id === selectedKab)?.name || "";
        const kec = kecamatan.find((k) => k.id === selectedKec)?.name || "";

        setRespon(`Anda telah memilih lokasi: ${prov} / ${kab} / ${kec}`);
    };

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4 text-primary">
            </h2>

            {loading && <p className="text-center text-muted">Memuat data...</p>}

            <div className="card shadow-sm p-4">
                <div className="mb-3">
                    <label className="form-label fw-semibold">Pilih Provinsi:</label>
                    <select
                        className="form-select"
                        value={selectedProv}
                        onChange={handleProvChange}
                    >
                        <option value="">-- Pilih Provinsi --</option>
                        {provinsi.map((p) => (
                            <option key={p.id} value={p.id}>
                                {p.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label fw-semibold">Pilih Kabupaten/Kota:</label>
                    <select
                        className="form-select"
                        value={selectedKab}
                        onChange={handleKabChange}
                        disabled={!selectedProv}
                    >
                        <option value="">-- Pilih Kabupaten/Kota --</option>
                        {kabupaten.map((k) => (
                            <option key={k.id} value={k.id}>
                                {k.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label fw-semibold">Pilih Kecamatan:</label>
                    <select
                        className="form-select"
                        value={selectedKec}
                        onChange={handleKecChange}
                        disabled={!selectedKab}
                    >
                        <option value="">-- Pilih Kecamatan --</option>
                        {kecamatan.map((kec) => (
                            <option key={kec.id} value={kec.id}>
                                {kec.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    className="btn btn-primary w-100"
                    onClick={handleConfirm}
                    disabled={!selectedProv || !selectedKab || !selectedKec}
                >
                    Konfirmasi Lokasi
                </button>

                {respon && (
                    <div className="alert alert-success mt-3" role="alert">
                        {respon}
                    </div>
                )}
            </div>
        </div>
    );
} 

export default PraktikAPI;