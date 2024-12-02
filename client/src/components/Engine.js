export class Engine {
    stockfish; boardApi; bestMove; level; currentPlayer; isPlayWithBot; isStarted = false; setupPlayer = 'white'; iTrainingMode = false;
    engineName; constructor(boardApi, baseUrl = "", level = 1, currentPlayer = 'white', isPlayWithBot = true, setupPlayer = 'white', iTrainingMode = false) {
        this.boardApi = boardApi; const
            wasmSupported = typeof WebAssembly === 'object' && WebAssembly.validate(
                Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00)); this.stockfish =
                    new Worker(wasmSupported ? `${baseUrl}/stockfish.wasm.js` : `${baseUrl}/stockfish.js`);
        this.setupListeners(); this.stockfish.postMessage('uci');
        this.level = level;
        this.currentPlayer = currentPlayer;
        this.isPlayWithBot = isPlayWithBot;
        this.setupPlayer = setupPlayer;
        this.iTrainingMode = iTrainingMode
    }
    setupListeners() {
        this.stockfish.addEventListener('message', (data) => this.handleEngineStdout(data));
        this.stockfish.addEventListener('error', (err) => console.error(err));
        this.stockfish.addEventListener('messageerror', (err) => console.error(err));
    }
    startGame() {
        this.isStarted = true;
        if (this.isPlayWithBot && this.currentPlayer !== this.setupPlayer)
            this.boardApi.move({
                from: this.bestMove.slice(0, 2),
                to: this.bestMove.slice(2, 4),
            });
    }
    handleEngineStdout(data) {
        const uciStringSplitted = (data.data).split(' ');
        if (uciStringSplitted[0] === 'uciok') {
            this.setOption('UCI_AnalyseMode', 'true');
            this.setOption('Analysis Contempt', 'Off');
            this.stockfish.postMessage('ucinewgame');
            this.stockfish.postMessage('isready');
            return;
        }

        if (uciStringSplitted[0] === 'readyok') {
            this.stockfish.postMessage('go movetime' + 12 * this.level);
            return;
        }

        if (uciStringSplitted[0] === 'bestmove' && uciStringSplitted[1]) {
            if
                (uciStringSplitted[1] !== this.bestMove) {
                this.bestMove = uciStringSplitted[1];
                if (this.isStarted && this.isPlayWithBot && this.boardApi.getTurnColor() === (this.currentPlayer === 'white' ? 'black' : 'white')) {
                    this.boardApi.move({
                        from: this.bestMove.slice(0, 2),
                        to: this.bestMove.slice(2, 4),
                    });
                }
            }
        }
    }
    setOption(name, value) {
        this.stockfish.postMessage(`setoption name ${name} value ${value}`);
    }

    sendPosition(position) {
        this.stockfish.postMessage(`position startpos moves ${position}`);
        const moveLV = this.boardApi.getTurnColor() !== this.currentPlayer ? this.level : 1;
        this.stockfish.postMessage(`go dept ${moveLV}`);
    }
}
