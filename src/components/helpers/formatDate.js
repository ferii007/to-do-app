// Fungsi untuk mengubah angka bulan menjadi string bulan
const getMonthName = (monthIndex) => {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return months[monthIndex];
};

// Fungsi untuk mengubah angka hari menjadi string hari
const getDayName = (dayIndex) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[dayIndex];
};

// Fungsi untuk memformat tanggal ke dalam format yang diinginkan
export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = getDayName(date.getDay());
    const month = getMonthName(date.getMonth());
    const formattedDate = `${day}, ${date.getDate()} ${month} ${date.getFullYear()}`;
    return formattedDate;
};

export const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours} : ${minutes}`;
    return formattedTime;
};
