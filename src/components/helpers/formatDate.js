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

export const formatDate2 = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
    return formattedDate;
};

export const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours} : ${minutes}`;
    return formattedTime;
};

export const formatTimestamp = (timestamp) => {
    const today = new Date();
    const date = new Date(timestamp);

    // Check if the timestamp is yesterday
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) {
        return "Yesterday";
    }

    // Check if the timestamp is today
    if (date.toDateString() === today.toDateString()) {
        return formatTime(timestamp);
    }

    // If not yesterday or today, return formatted date
    return formatDate(timestamp);
};
