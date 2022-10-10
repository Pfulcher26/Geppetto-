import sendRequest from "./send-request";

const BASE_URL = '/api/puppets'

export function getAll() {
    return sendRequest(BASE_URL);
}

export function createPuppet(puppet) {
    return sendRequest(`${BASE_URL}/create`, 'POST', puppet);
}

export function savePuppet(puppet) {
    return sendRequest(`${BASE_URL}/save`, 'POST', puppet);
}

