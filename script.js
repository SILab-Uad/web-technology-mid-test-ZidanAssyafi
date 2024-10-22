// TODO: Implement the password generation logic based on user input
const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+-/,.";

    // TODO: Buat variabel untuk kumpulan karakter berdasarkan opsi yang dipilih
    let availablechar = '';
    if (options.includeUppercase) availablechar += uppercase;
    if (options.includeLowercase) availablechar += lowercase;
    if (options.includeNumbers) availablechar += numbers;
    if (options.includeSpecialChars) availablechar += specialChars;

    if (availablechar === '') {
        return 'Pilih minimal satu jenis karakter!!';
    }

     // TODO: Hasilkan kata sandi berdasarkan kriteria yang dipilih
    let password = '';
    for (let i = 0; i < length; i++){
        const randomindex = Math.floor(Math.random() * availablechar.length);
        password += availablechar[randomindex];
    }

    return password;
};

// TODO: Tambahkan pendengar acara ke tombol untuk memanggil generatePassword dan menampilkan hasilnya

// BONUS: Terapkan fungsionalitas salin ke papan klip
