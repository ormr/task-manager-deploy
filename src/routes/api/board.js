"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
const boardRouter = express_1.default.Router();
exports.boardRouter = boardRouter;
// Get
boardRouter.get('/all', controllers_1.boardController.getAll);
boardRouter.get('/:board_id', controllers_1.boardController.getBoard);
// Add
boardRouter.post('/', controllers_1.boardController.addBoard);
boardRouter.put('/:board_id/list', controllers_1.boardController.addList);
boardRouter.put('/:board_id/list/:list_id/card', controllers_1.boardController.addCard);
// Delete
boardRouter.delete('/:board_id', controllers_1.boardController.deleteBoard);
boardRouter.delete('/:board_id/list/:list_id', controllers_1.boardController.deleteList);
boardRouter.delete('/:board_id/list/:list_id/card/:card_id', controllers_1.boardController.deleteCard);
// Update
boardRouter.put('/update/:board_id', controllers_1.boardController.updateBoard);
boardRouter.put('/update/:board_id/list/:list_id', controllers_1.boardController.updateList);
boardRouter.put('/update/:board_id/list/:list_id/card/:card_id', controllers_1.boardController.updateCard);
// Drag
boardRouter.put('/drag/:board_id', controllers_1.boardController.drag);
