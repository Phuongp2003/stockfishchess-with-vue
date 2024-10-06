import 'vue3-chessboard/style.css';

import ChessBoard from '@/components/ChessBoard.vue';
import ChessBoardServerless from '@/components/ChessBoardServerless.vue';

const Chess = {
    install(Vue) {
        Vue.component(ChessBoard);
        Vue.component(ChessBoardServerless);
    }
}

export default Chess;
export { ChessBoard, ChessBoardServerless };
