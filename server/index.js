const express = require('express');
const { spawn } = require('child_process');
const { Chess } = require('chess.js');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const path = require('path');
const enginePath = path.join(__dirname, 'node_modules', 'stockfish', 'src', 'stockfish-nnue-16.js');
const engine = spawn('node', [enginePath], { stdio: ['pipe', 'pipe', 'pipe'] });

let currentFen;

// API để bắt đầu trò chơi
app.post('/start', (req, res) => {
    currentFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'; // Khởi tạo FEN
    res.json({ message: 'Game started', fen: currentFen });
});

// API để nhận nước đi
app.post('/move', (req, res) => {
    console.log('Request body:', req.body); // Kiểm tra nội dung nhận được

    const { move } = req.body;

    if (!move) {
        return res.status(400).json({ error: 'Move is required' });
    }

    try {
        // Cập nhật FEN từ thông tin nước đi
        currentFen = move.after; // Cập nhật từ FEN sau khi di chuyển
        engine.stdin.write(`position fen ${currentFen}\n`);
        engine.stdin.write('go movetime 5000\n');

        const onData = (data) => {
            const message = data.toString();
            console.log('Stockfish:', message);

            if (message.startsWith('bestmove')) {
                const bestMove = message.split(' ')[1];
                res.json({ bestMove });
                engine.stdout.off('data', onData); // Remove the event listener after sending the response
            }
        };

        engine.stdout.on('data', onData);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
