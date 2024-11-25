document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.team-button');
    const frames = document.querySelectorAll('.frame');
    const header = document.getElementById('header');

    function hideAllFrames() {
        frames.forEach(frame => {
            frame.style.display = 'none';
        });
    }

    function showAllFrames() {
        frames.forEach(frame => {
            frame.style.display = 'block';
        });
    }

    function resetButtons() {
        buttons.forEach(button => {
            button.classList.remove('active');
            button.style.pointerEvents = 'auto';
            button.style.backgroundColor = '';
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const team = button.getAttribute('data-team');
            const teamColor = button.getAttribute('data-color');

            hideAllFrames(); // Hide all frames first

            // Show all frames belonging to the selected team
            const selectedFrames = document.querySelectorAll(`.frame[data-team="${team}"]`);
            selectedFrames.forEach(frame => {
                frame.style.display = 'block'; // Show each frame with matching team
            });

            resetButtons();
            button.classList.add('active');
            button.style.pointerEvents = 'none';
            button.style.backgroundColor = teamColor;
        });
    });

    header.addEventListener('click', function () {
        showAllFrames();
        resetButtons();
    });

    showAllFrames(); // Initially show all frames
});
