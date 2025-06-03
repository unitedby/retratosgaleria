document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('.item-main');
    const items = Array.from(grid.querySelectorAll('.item-container'));
    
    const rows = [];
    for (let i = 0; i < items.length; i += 6) {
        rows.push(items.slice(i, i + 6));
    }
    
    rows.forEach(row => {
        const random = Math.random();
        let emptyCount;
        
        if (random < 0.25) {
            emptyCount = 0; 
        } else if (random < 0.85) {
            emptyCount = 1; 
        } else {
            emptyCount = 2; 
        }
        
        if (emptyCount === 0) return;
        
        const availableIndices = [1, 2, 3, 4];
        
        const slotsToEmpty = [];
        const indicesCopy = [...availableIndices]; 
        
        for (let i = 0; i < emptyCount; i++) {
            const randomIndex = Math.floor(Math.random() * indicesCopy.length);
            slotsToEmpty.push(indicesCopy[randomIndex]);
            indicesCopy.splice(randomIndex, 1); 
        }
        
        slotsToEmpty.forEach(index => {
            row[index].style.visibility = 'hidden';
        });
    });
});