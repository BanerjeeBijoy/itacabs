// Function to toggle between Cab and Bus history
function showHistory(type) {
    const historyContainer = document.getElementById('historyContainer');
    historyContainer.innerHTML = '';

    const historyData = type === 'cab' ? getCabHistory() : getBusHistory();

    historyData.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';

        historyItem.innerHTML = `
            <div class="history-date">
                <span class="day">${item.day}</span>
                <span class="month">${item.month}</span>
            </div>
            <div class="history-info">
                <p>${item.description}</p>
                <span class="history-price">${item.price}</span>
            </div>
        `;
        historyContainer.appendChild(historyItem);
    });
}

// Sample Data
function getCabHistory() {
    return [
        { day: '4', month: 'Jan', description: 'City Center to Airport', price: '₹500' },
        { day: '10', month: 'Jan', description: 'Mall to Downtown', price: '₹300' }
    ];
}

function getBusHistory() {
    return [
        { day: '5', month: 'Jan', description: 'Town A to City B', price: '₹150' },
        { day: '12', month: 'Jan', description: 'City B to City C', price: '₹200' }
    ];
}

// Initial load - show Cab history by default
window.onload = function() {
    showHistory('cab');
};
