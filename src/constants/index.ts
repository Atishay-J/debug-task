import { getCloudfareUrl } from "@/utils";

export const DEFAULT_POPUP_DATA = {
    STEPS: [
        {
            id: 1,
            title: "Win points for every capture",
            subtitle: "Player with maximum points wins",
        },
        {
            id: 2,
            title: "You get ONLY 6 moves",
            subtitle: "Goal is to score maximum points",
        },
        {
            id: 3,
            title: "30 seconds for every move",
            subtitle: "All the best!",
        },
    ],
    POINTS: [
        {
            id: 1,
            piece: "Checkmate",
            point: "Instant win",
        },
        {
            id: 2,
            piece: "Queen",
            point: "9 points",
        },
        {
            id: 3,
            piece: "Rook",
            point: "5 points",
        },
        {
            id: 4,
            piece: "Bishop",
            point: "3 points",
        },
        {
            id: 5,
            piece: "Knight",
            point: "3 points",
        },
        {
            id: 6,
            piece: "Pawn",
            point: "1 point",
        },
    ],
};

export const TOURNAMENT_POPUP_DATA = {
    STEPS: [
        {
            id: 1,
            title: "Rise as high as possible",
            subtitle: "Cross each level of increasing difficulty",
        },
        {
            id: 2,
            title: "Use your re-entries",
            subtitle: "If you lose, you can renter from a level below",
        },
        {
            id: 3,
            title: "Win cash prizes",
            subtitle: "Reach the highest levels to win cash prizes",
        },
    ],
    POINTS: [
        {
            id: 1,
            piece: "1st",
            point: "100",
        },
        {
            id: 2,
            piece: "2nd",
            point: "75",
        },
        {
            id: 3,
            piece: "3rd",
            point: "50",
        },
    ],
};

export const ROUTES = {
    room: ({ roomID }: { roomID: string }) => `/room/${roomID}`,
    singlePlayer: ({ roomID }: { roomID: string }) =>
        `/room/single-player/${roomID}`,

    home: () => "/",
    login: () => `/auth/login`,
    wallet: () => `/wallet`,
    transactionHistory: () => `/transaction-history`,
    termsAndConditions: () => `/terms-and-conditions`,
    404: () => `/404`,
    rules: () => `/rules`,
    battleMode: () => `/battle-mode`,
    tournamentHome: () => `/tournament`,
    tournament: ({ tournamentID }: { tournamentID: string }) =>
        `/tournament/${tournamentID}`,
    tournamentLeaderboard: ({ tournamentID }: { tournamentID: string }) =>
        `/tournament/${tournamentID}/leaderboard/`,
    tournamentProgress: ({ tournamentID }: { tournamentID: string }) =>
        `/tournament/${tournamentID}/progress/`,
    withdraw: () => `/withdraw`,
    onBoard: () => `/onboarding`,
};

export type PieceKey = "bishop" | "king" | "queen" | "knight" | "pawn" | "rook";

type ColorKey = "black" | "white";

type PieceImage = {
    [key in ColorKey]: string;
};

type PieceImages = {
    [key in PieceKey]: PieceImage;
};

export const CHESS_PIECE_ICONS: PieceImages = {
    bishop: {
        black: getCloudfareUrl("chess/black/bB", "svg"),
        white: getCloudfareUrl("chess/white/wB", "svg"),
    },
    king: {
        black: getCloudfareUrl("chess/black/bK", "svg"),
        white: getCloudfareUrl("chess/white/wK", "svg"),
    },
    queen: {
        black: getCloudfareUrl("chess/black/bQ", "svg"),
        white: getCloudfareUrl("chess/white/wQ", "svg"),
    },
    knight: {
        black: getCloudfareUrl("chess/black/bN", "svg"),
        white: getCloudfareUrl("chess/white/wN", "svg"),
    },
    pawn: {
        black: getCloudfareUrl("chess/black/bP", "svg"),
        white: getCloudfareUrl("chess/white/wP", "svg"),
    },
    rook: {
        black: getCloudfareUrl("chess/black/bR", "svg"),
        white: getCloudfareUrl("chess/white/wR", "svg"),
    },
};

type PiecesType = Record<string, string>;

export const CUSTOM_PIECES: PiecesType = {
    wP: "bg-wP",
    wN: "bg-wN",
    wB: "bg-wB",
    wR: "bg-wR",
    wQ: "bg-wQ",
    wK: "bg-wK",
    bP: "bg-bP",
    bN: "bg-bN",
    bB: "bg-bB",
    bR: "bg-bR",
    bQ: "bg-bQ",
    bK: "bg-bK",
};

export const SUPPORT_EMAIL = "hello@ziffichess.com";
