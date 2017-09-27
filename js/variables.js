'use strict';
const boardSize = 89;
const numObstacles = 10;
let squares = [];
let remainingSquares = squares;
let maxMoves = 3;
let newPos;
let playerActive;
let playerNotActive;
let playerActiveDiv;
let playerNotActiveDiv;
let player1Active = true;
let move = true;
let attacked = false;
let defended = false;
let player1Defended = false;
let player2Defended = false;
let hover = false;
const attackButton = $('.attack');
const defendButton = $('.defend');
const startButton = $('#start');
const playAgainButton = $('#play-again');
const boardGameDiv = $('#board-game');
const gameOverDiv = $('#game-over');
const startGameDiv = $('#start-game');
const playerContainerDiv = $('.player-container');
const body = $('body');
const messageDiv = $('.message');
const playerNameDiv = $('.player-name');
const winnerDiv = $('.winner');
const player1AvatarDiv = $('#player-1-avatar');
const player2AvatarDiv = $('#player-2-avatar');
let computerPlay = false;
const alertMove = 'That square is not a valid move. You can only move a max of 3 spaces vertical or horizontal You cant land on a tree or jump over it. Is it even your go?';
const alertPlayer = 'you cant land on a player or pass over a player';
const alertAttackDefend ='you must attack or defend';
const alertMustMove = 'you must move';