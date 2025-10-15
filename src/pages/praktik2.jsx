import React, { useState } from "react";
import "./css/praktik2.css";

function Praktik2() {
    // State untuk counter 
    const [count, setCount ] = useState(0);

    // State untuk input teks
    const [text, setText] = useState("");

    // State untuk menampilkan hasil input setelah klik tombol
    const [result, setResult] = useState("");

    // State untuk menyimpan data user dari API
    const [user, setUser] = useState(null);

    /**
     * Fungsi Counter
     * menggunakan Let/const dan arrow function
     */
    const increment = () => setCount(count + 1);
    // BUG FIX: Tombol "Kurangi" harus memanggil decrement, bukan increment
    const decrement = () => setCount(count - 1); 

    /**
     * Fungsi untuk menangani input teks
     * Data disimpan di state text
     */
    const handleInput = (e) => setText(e.target.value);

    /**
     * Fungsi untuk menampilkan hasil input
     * saat tombol diklik
     */
    const handleClick = () => setResult(text);

    /**
     * Fungsi untuk mengambil data user acak
     * menggunakan async/await dan Promise API
     */
    const fetchUser = async () => {
        try {
            const res = await fetch("https://randomuser.me/api/");
            const data = await res.json();
            // BUG FIX: API randomuser.me menyimpan data di properti `results`, bukan `result`
            setUser(data.results[0]); 
        } catch (err) {
            console.error("Gagal fetch data:", err);
        }
    }

    return (
        <div className="praktik-container">
            <h1>Praktik React: DOM, Event, dan Async</h1>

            {/* Counter Section */}
            <div className="section">
                <h2>Counter: {count}</h2>
                <button className="btn" onClick={increment}>Tambah</button>
                {/* BUG FIX: Mengubah onClick={increment} menjadi onClick={decrement} */}
                <button className="btn danger" onClick={decrement}>Kurangi</button> 
            </div>

            {/* Input Section */}
            <div className="section">
                <h2>Input dan Hasil</h2>
                <input
                    type="text"
                    placeholder="Ketik sesuatu..."
                    value={text}
                    onChange={handleInput}
                    className="input-box"
                />
                <button className="btn" onClick={handleClick}>Tampilkan Hasil</button>
                {result && <p>Hasil input: {result}</p>}
            </div>
            
            {/* Fetch Data Section */}
            <div className="section">
                <h2>Async Data Fetching</h2>
                <button className="btn" onClick={fetchUser}>Ambil Data User Acak</button>
                {user && (
                    <div className="user-card">
                        <img src={user.picture.medium} alt="user" />
                        {/* FIX: Menggunakan sintaks template literal yang benar (tanpa quotes di sekitar ${...}) */}
                        <p><strong>Nama :</strong> {`${user.name.first} ${user.name.last}`}</p>
                        <p><strong>Email :</strong> {user.email}</p>
                    </div>    
                )}
            </div>
        </div>
    );
}
            
export default Praktik2;