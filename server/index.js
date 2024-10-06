const express = require('express');
const { spawn } = require('child_process');
const { Chess } = require('chess.js');
const cors = require('cors');
const dotenv = require('dotenv')

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT;

const path = require('path');
/**
 * The large multi-threaded engine:
 * This is strongest version of the engine, but it is large (≈66MB) and will only run in browsers with the proper CORS headers applied. This engine is recommended if possible.
 ** Files: stockfish-16.1.js & stockfish-16.1.wasm
 *
 * The large single-threaded engine:
 * This is also large but will run in browsers without CORS headers; however it cannot use multiple threads via the UCI command setoption name Threads. This engine is recommended if CORS support is not possible.
 ** Files: stockfish-16.1-single.js & stockfish-16.1-single.wasm
 * 
 * The lite mult-threaded engine:
 * This is the same as the first multi-threaded but much smaller (≈6MB) and quite a bit weaker. This engine is recommended for mobile browsers when CORS is available.
 ** Files: stockfish-16.1-lite.js & stockfish-16.1-lite.wasm
 * The lite single-threaded engine:
 * Same as the first single-threaded engine but much smaller (≈6MB) and quite a bit weaker. This engine is recommended for mobile browsers that do not support CORS.
 ** Files: stockfish-16.1-lite-single.js & stockfish-16.1-lite-single.wasm
 * 
 * The ASM-JS engine:
 * Compiled to JavaScript, not WASM. Compatible with every browser that runs JavaScript. Very slow and weak. Larger than the lite WASM engines (≈9MB). This engine should only be used as a last resort.
 ** File: stockfish-16.1-asm.js
 *
 */
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
    const { move } = req.body;
    console.log("🚀 ~ app.post ~ move:", move)

    if (!move) {
        return res.status(400).json({ error: 'Move is required' });
    }

    try {
        // Cập nhật FEN từ thông tin nước đi
        currentFen = move.after; // Cập nhật từ FEN sau khi di chuyển
        engine.stdin.write(`position fen ${currentFen}\n`);
        engine.stdin.write('go dept 3\n');

        const onData = (data) => {
            const message = data.toString();
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
