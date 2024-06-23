const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let currentLetterIndex = 0;

const images = {
    'A': 'apple.jpeg',
    'B': 'ball.jpg',
    'C': 'cow.jpg',
    'D': 'dog.jpg',
    'E': 'elephant.jpg',
    'F': 'fish.jpg',
    'G': 'grapes.jpg',
    'H': 'house.jpg',
    'I': 'icecream.jpg',
    'J': 'joker.jpg',
    'K': 'kite.jpg',
    'L': 'lion.jpg',
    'M': 'monkey.jpg',
    'N': 'nest.jpg',
    'O': 'orange.jpg',
    'P': 'peacock.jpg',
    'Q': 'queen.jpg',
    'R': 'rose.jpg',
    'S': 'ship.jpg',
    'T': 'tiger.jpg',
    'U': 'umbrella.jpg',
    'V': 'vase.jpg',
    'W': 'watch.jpg',
    'X': 'xylophone.jpg',
    'Y': 'yak.jpg',
    'Z': 'zebra.jpg'
};

const captions = {
    'A': 'Apple',
    'B': 'Ball',
    'C': 'cow',
    'D': 'dog',
    'E': 'elephant',
    'F': 'fish',
    'G': 'grapes',
    'H': 'house',
    'I': 'icecream',
    'J': 'joker',
    'K': 'kite',
    'L': 'lion',
    'M': 'monkey',
    'N': 'nest',
    'O': 'orange',
    'P': 'peacock',
    'Q': 'queen',
    'R': 'rose',
    'S': 'ship',
    'T': 'tiger',
    'U': 'umbrella',
    'V': 'vase',
    'W': 'watch',
    'X': 'xylophone',
    'Y': 'yak',
    'Z': 'Zebra'
};
// Draw the initial letter
drawLetter();

// Event listeners for mouse movement
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDrawing);
canvas.addEventListener('mouseout', endDrawing);

// Function to start drawing
function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    ctx.strokeStyle = document.getElementById('colorPicker').value; // Set stroke color from color picker
    ctx.lineWidth = document.getElementById('strokeWidth').value; // Set stroke width from input field
}

// Function to draw
function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to end drawing
function endDrawing() {
    isDrawing = false;
}

// Function to reset canvas
function resetCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLetter();
}

// Function to speak the letter
function speakLetter() {
    const utterance = new SpeechSynthesisUtterance(letters[currentLetterIndex]);
    window.speechSynthesis.speak(utterance);
}

// Function to draw the current letter
function drawLetter() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setLineDash([5, 5]); // Set line dash pattern for dotted line
    ctx.font = '300px Arial';
    ctx.fillStyle = '#ffffff'; // Fill with white initially
    ctx.textAlign = 'center'; // Center the text horizontally
    ctx.textBaseline = 'middle'; // Center the text vertically
    ctx.fillText(letters[currentLetterIndex], canvas.width / 2, canvas.height / 2); // Position at the center
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 5; // Increase border width for better visibility (thicker line)
    ctx.strokeText(letters[currentLetterIndex], canvas.width / 2, canvas.height / 2); // Position at the center
    document.getElementById('letterTitle').innerText = `Write the Letter ${letters[currentLetterIndex]}:`;

    const currentAlphabet = letters[currentLetterIndex];
    document.getElementById('image').src = images[currentAlphabet] || 'default_image.jpeg';
    document.getElementById('imageCaption').innerText = (captions[currentAlphabet] || currentAlphabet).toUpperCase();
}

// Function to check the completeness of the drawing and update CSS class accordingly
function checkCompletion() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let filledPixels = 0;
    for (let i = 0; i < data.length; i += 4) {
        // Check if the pixel is not white (filled)
        if (data[i] !== 255 || data[i + 1] !== 255 || data[i + 2] !== 255) {
            filledPixels++;
        }
    }

    const totalPixels = canvas.width * canvas.height;
    const completenessPercentage = (filledPixels / totalPixels) * 100;

    let completionMessage = '';
    if (completenessPercentage >= 99) {
        completionMessage = "Hurrah! Perfect! 🎉"; // Add emoji here
        document.getElementById('completionMessage').classList.remove("partial", "try-again"); // Remove other classes
        document.getElementById('completionMessage').classList.add("perfect"); // Add perfect class
    } else if (completenessPercentage >= 93) {
        completionMessage = "Well done! 😊";
        document.getElementById('completionMessage').classList.remove("perfect", "try-again"); // Remove other classes
        document.getElementById('completionMessage').classList.add("partial"); // Add partial class
    } else {
        completionMessage = "Try again! 🥲";
        document.getElementById('completionMessage').classList.remove("perfect", "partial"); // Remove other classes
        document.getElementById('completionMessage').classList.add("try-again"); // Add try-again class
    }

    document.getElementById('completionMessage').innerText = completionMessage;
}

// Function to navigate to the previous letter
function previousLetter() {
    currentLetterIndex--;
    if (currentLetterIndex < 0) {
        currentLetterIndex = letters.length - 1;
    }
    drawLetter();
}

// Function to navigate to the next letter
function nextLetter() {
    currentLetterIndex++;
    if (currentLetterIndex >= letters.length) {
        currentLetterIndex = 0;
    }
    drawLetter();
}
