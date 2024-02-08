document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('invitation').addEventListener('click', function() {
        this.classList.add('hidden');
        document.getElementById('insideCard').classList.remove('hidden');
    });

    const noBtnTexts = [
        'Sure ka?', 
        'Di mo ba ako miss?', 
        'You are hurting me fr',
        'Luh, Hindi mo na ako love :<', 
        'SERYOSOOO KA BAAA',
        ':(', 
        'Ganito nalang pala hays'// The last message
    ];
    let noBtnCounter = 0;
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    let scale = 1; // Initial scale for the "Yes" button

    noBtn.addEventListener('click', function() {
        this.textContent = noBtnTexts[noBtnCounter]; // Change the text of the "No" button

        // Increase the scale for the "Yes" button
        scale *= 1.5;
        yesBtn.style.transform = `scale(${scale})`;

        // Randomly reposition the "No" button within the page
        let overlap = false;
        do {
            const maxX = window.innerWidth - this.offsetWidth;
            const maxY = window.innerHeight - this.offsetHeight;
            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;

            this.style.position = 'fixed'; // Use 'fixed' to position relative to the viewport
            this.style.left = `${randomX}px`;
            this.style.top = `${randomY}px`;

            const noBtnRect = this.getBoundingClientRect();
            const yesBtnRect = yesBtn.getBoundingClientRect();

            overlap = !(noBtnRect.right < yesBtnRect.left || noBtnRect.left > yesBtnRect.right || 
                        noBtnRect.bottom < yesBtnRect.top || noBtnRect.top > yesBtnRect.bottom);
        } while (overlap);

        // Increment the counter after repositioning and overlap check
        noBtnCounter++;

        // Check if the last message has been shown, then hide the "No" button
        if (noBtnCounter >= noBtnTexts.length) {
            this.style.display = 'none';
        }
    });

    yesBtn.addEventListener('click', function() {
        document.getElementById('insideCard').classList.add('hidden');
        document.getElementById('happyPage').classList.remove('hidden');
    });
});
