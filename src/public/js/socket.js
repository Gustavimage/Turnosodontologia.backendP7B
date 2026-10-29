const socket = io();

socket.on('updateBookings', (bookings) => {
    const tbody = document.getElementById('bookings-container');
    
    if (tbody) {
        tbody.innerHTML = '';
        
        if (bookings.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="4">No hay reservas registradas en el sistema.</td>
                </tr>
            `;
            return;
        }

        bookings.forEach(booking => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${booking._id || ''}</td>
                <td>${booking.serviceName || ''}</td>
                <td>${booking.date || ''}</td>
                <td>${booking.status || ''}</td>
            `;
            tbody.appendChild(tr);
        });
    }
});