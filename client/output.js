import 'vue3-chessboard/style.css';

import ChessBoard from '@/components/ChessBoard.vue';
import TrainBoard from '@/components/TrainBoard.vue';
import ChessBoardServerless from '@/components/ChessBoardServerless.vue';
import PVPChessboard from '@/components/PVPBoard.vue';

const Chess = {
    install(Vue) {
        Vue.component(ChessBoard);
        Vue.component(TrainBoard);
        Vue.component(ChessBoardServerless);
        Vue.component(PVPChessboard);
    }
}

export default Chess;
export { ChessBoard, ChessBoardServerless, PVPChessboard, TrainBoard };
