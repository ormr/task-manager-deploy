"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardController = void 0;
const uuid_1 = require("uuid");
const models_1 = require("../models");
exports.boardController = {
    getAll: (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const boards = yield models_1.Board.find();
            const newBoards = boards.map(({ boardId, title }) => {
                return {
                    boardId,
                    title,
                };
            });
            return res.json(newBoards);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: 'Server error' });
        }
    }),
    getBoard: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        const { board_id: boardId } = req.params;
        try {
            const board = yield models_1.Board.findOne({ boardId });
            if (!board) {
                return res.status(404).json({ msg: 'Board is not found' });
            }
            return res.json(board);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: 'Server error' });
        }
    }),
    addBoard: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title } = req.body;
            const newBoard = {
                boardId: uuid_1.v4(),
                title,
                lists: []
            };
            yield models_1.Board.create(newBoard, (err) => {
                if (err)
                    return next(err);
                return res.json(newBoard);
            });
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: 'Server error' });
        }
    }),
    addList: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { board_id: boardId } = req.params;
            const { name } = req.body;
            const board = yield models_1.Board.findOne({ boardId });
            if (!board) {
                console.log(boardId, name, board);
                return res.status(404).json({ msg: 'Board is not found' });
            }
            const newList = {
                listId: uuid_1.v4(),
                name,
                cards: []
            };
            board.lists.push(newList);
            yield board.save();
            return res.json(board);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: 'Server error' });
        }
    }),
    addCard: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { board_id: boardId, list_id: listId } = req.params;
            const { text } = req.body;
            const board = yield models_1.Board.findOne({ boardId });
            if (!board) {
                return res.status(404).json({ msg: 'Board is not found' });
            }
            const list = board.lists.find((list) => list.listId === listId);
            if (!list) {
                return res.status(404).json({ msg: 'List is not found' });
            }
            const newCard = {
                cardId: uuid_1.v4(),
                text
            };
            list.cards.push(newCard);
            yield board.save();
            return res.json(board);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: 'Server error' });
        }
    }),
    updateBoard: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { board_id: boardId } = req.params;
            const { title } = req.body;
            const board = yield models_1.Board.findOne({ boardId });
            if (!board) {
                return res.status(404).json({ msg: 'Board is not found' });
            }
            board.title = title;
            board.save();
            return res.json(board);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: 'Server error' });
        }
    }),
    updateList: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { board_id: boardId, list_id: listId } = req.params;
            const { name } = req.body;
            const board = yield models_1.Board.findOne({ boardId });
            if (!board) {
                return res.status(404).json({ msg: 'Board is not found' });
            }
            const listIndex = board.lists.findIndex((list) => list.listId === listId);
            const list = board.lists[listIndex];
            if (!list) {
                return res.status(404).json({ msg: 'List is not found' });
            }
            list.name = name;
            board.save();
            return res.json(board);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: 'Server error' });
        }
    }),
    updateCard: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { board_id: boardId, list_id: listId, card_id: cardId } = req.params;
            const { text } = req.body;
            const board = yield models_1.Board.findOne({ boardId });
            if (!board) {
                return res.status(404).json({ msg: 'Board is not found' });
            }
            const listIndex = board.lists.findIndex((list) => list.listId === listId);
            const list = board.lists[listIndex];
            if (!list) {
                return res.status(404).json({ msg: 'List is not found' });
            }
            const cardIndex = list.cards.findIndex((card) => card.cardId === cardId);
            const card = list.cards[cardIndex];
            card.text = text;
            board.save();
            return res.json(board);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: 'Server error' });
        }
    }),
    drag: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { board_id: boardId } = req.params;
            const { droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, type } = req.body;
            const board = yield models_1.Board.findOne({ boardId });
            if (!board) {
                return res.status(404).json({ msg: 'Board is not found' });
            }
            if (type === 'list') {
                const pulledOutlist = board.lists.splice(droppableIndexStart, 1);
                board.lists.splice(droppableIndexEnd, 0, ...pulledOutlist);
            }
            if (type === 'DEFAULT') {
                if (droppableIdStart === droppableIdEnd) {
                    const list = board.lists.find((list) => droppableIdStart === list.listId);
                    if (!list) {
                        return res.status(404).json({ msg: 'List is not found' });
                    }
                    const cards = list.cards.splice(droppableIndexStart, 1);
                    list.cards.splice(droppableIndexEnd, 0, ...cards);
                }
                if (droppableIdStart !== droppableIdEnd) {
                    const listStart = board.lists.find((list) => droppableIdStart === list.listId);
                    if (!listStart) {
                        return res.status(404).json({ msg: 'List is not found' });
                    }
                    const card = listStart.cards.splice(droppableIndexStart, 1);
                    const list = board.lists.find((list) => droppableIdEnd === list.listId);
                    if (!list) {
                        return res.status(404).json({ msg: 'List is not found' });
                    }
                    list.cards.splice(droppableIndexEnd, 0, ...card);
                }
            }
            board.save();
            return res.json(board);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: 'Server error' });
        }
    }),
    deleteBoard: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const boardId = req.params.board_id;
            const board = yield models_1.Board.findOne({ boardId });
            if (!board) {
                return res.status(404).json({ msg: 'Board is not found' });
            }
            board.remove();
            return res.json(board);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: 'Server error' });
        }
    }),
    deleteList: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { board_id: boardId, list_id: listId } = req.params;
            const board = yield models_1.Board.findOne({ boardId });
            if (!board) {
                return res.status(404).json({ msg: 'Board is not found' });
            }
            board.lists = board.lists.filter((list) => list.listId !== listId);
            yield board.save();
            return res.json(board.lists);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: 'Server error' });
        }
    }),
    deleteCard: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { board_id: boardId, list_id: listId, card_id: cardId } = req.params;
            const board = yield models_1.Board.findOne({ boardId });
            if (!board) {
                return res.status(404).json({ msg: 'Board is not found' });
            }
            const listRemoveIndex = board.lists.findIndex((list) => list.listId === listId);
            const list = board.lists[listRemoveIndex];
            if (!list) {
                return res.status(404).json({ msg: 'List is not found' });
            }
            const newCards = list.cards.filter((card) => card.cardId !== cardId);
            list.cards = newCards;
            yield board.save();
            return res.json(list.cards);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: 'Server error' });
        }
    })
};
